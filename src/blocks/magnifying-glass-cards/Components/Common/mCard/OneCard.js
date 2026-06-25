import React, { useEffect, useRef, memo } from "react";

const OneCard = ({ attributes }) => {
  const { cards = [], options = {}, styles = {} } = attributes;
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Caching global libraries
    const { jQuery: $, gsap, Splitting, ScrollTrigger } = window;

    if (!$ || !gsap || !Splitting) {
      console.error(
        "Required libraries (jQuery, GSAP, or Splitting) are not loaded.",
      );
      return;
    }

    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 2. Use gsap.context for React-safe scoping and easy automatic cleanup
    // This dramatically improves JS execution by ensuring animations only run
    // within this specific block instance, not across the entire page.
    let ctx = gsap.context(() => {
      const $cardGrid = $(containerRef.current);

      // Initialize Splitting.js scoped to this container
      const $splitTexts = $cardGrid.find(".mgcb-split-text");
      $splitTexts.removeClass("words splitted");
      Splitting({ target: $splitTexts.toArray(), whitespace: true });

      // 3. GSAP Animations with scoped selections
      $cardGrid.find(".mgcb-card").each(function () {
        const $this = $(this);

        gsap.set(
          $this.find(
            ".mgcb-split-text .char, img.mgcb-card-image, .mgcb-try-it",
          ),
          { clearProps: "all" },
        );

        const tlParams = {};
        if (window.ScrollTrigger) {
          // Scope ScrollTrigger to this specific block grid, not globally
          tlParams.scrollTrigger = containerRef.current;
        }

        const tl = gsap.timeline(tlParams);

        tl.from($this.find(".mgcb-split-text .char"), {
          x: 60,
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        })
          .to(
            $this.find("img.mgcb-card-image"),
            {
              filter: `brightness(${styles?.card?.image?.brightness ?? 1})`,
              clipPath: `circle(${
                styles?.card?.image?.clip?.radius ?? 400
              }px at ${styles?.card?.image?.clip?.focus ?? 82}% ${
                styles?.card?.image?.clip?.spotlight ?? 82
              }%)`,
              scale: styles?.card?.image?.scale ?? 1,
              duration: styles?.card?.image?.duration ?? 3,
              ease: "expo.inOut",
            },
            styles?.card?.image?.delay ?? 0.8,
          )
          .to(
            $this.find(".mgcb-try-it"),
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(4)",
            },
            1.5,
          )
          .to(
            $this.find(".mgcb-try-it"),
            {
              rotate: 15,
              transformOrigin: "bottom left",
              duration: 0.5,
              repeat: 5,
              yoyo: true,
              ease: "none",
            },
            "+=0",
          );
      });

      // 4. Magnifying Glass Logic (Optimized with requestAnimationFrame)
      $cardGrid.find(".mgcb-card").each(function () {
        const $card = $(this);
        const cardEl = $card[0];
        const $glass = $card.find(".mgcb-magnifying-glass");
        const glassEl = $glass[0];
        const $img = $card.find(".mgcb-card-image");
        const imgEl = $img[0];
        const img_src = $img.attr("src");

        let sub_width = 0;
        let sub_height = 0;
        let gw = 0,
          gh = 0;

        $glass.css({ background: `url('${img_src}') no-repeat` });

        // Preload image object exactly once instead of on every mouse move
        const image_object = new Image();
        image_object.src = img_src;
        image_object.onload = () => {
          sub_width = image_object.width;
          sub_height = image_object.height;
        };

        let rafId = null;

        $card.on("mousemove", function (e) {
          if (!sub_width || !sub_height) return; // Wait until loaded

          // Cache event positions to avoid losing them inside async rAF
          const pageX = e.pageX;
          const pageY = e.pageY;
          const clientX = e.clientX;
          const clientY = e.clientY;

          // Cancel the previous animation frame to throttle event firing (Layout Thrashing fix)
          if (rafId) cancelAnimationFrame(rafId);

          rafId = requestAnimationFrame(() => {
            // Batch DOM Reads
            const cardRect = cardEl.getBoundingClientRect();
            // Calculate document-relative offset manually to avoid jQuery's expensive .offset()
            const magnify_position_left = cardRect.left + window.scrollX;
            const magnify_position_top = cardRect.top + window.scrollY;

            const mx = pageX - magnify_position_left;
            const my = pageY - magnify_position_top;

            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;

            if (mx < cardWidth && my < cardHeight && mx > 0 && my > 0) {
              $glass.show();
            } else {
              $glass.hide();
              return; // Stop further calculations if hidden
            }

            if ($glass.is(":visible")) {
              // Cache glass dimensions as they never change
              if (gw === 0) gw = glassEl.offsetWidth;
              if (gh === 0) gh = glassEl.offsetHeight;

              const imgRect = imgEl.getBoundingClientRect();
              const cw = imgRect.width;
              const ch = imgRect.height;

              const s = Math.max(cw / sub_width, ch / sub_height);
              const sw = sub_width * s;
              const sh = sub_height * s;

              const offsetX = (cw - sw) / 2;
              const offsetY = (ch - sh) / 2;

              const ix = clientX - imgRect.left;
              const iy = clientY - imgRect.top;

              const sx = ix - offsetX;
              const sy = iy - offsetY;

              const zoom = 2; // Magic zoom level from previous code
              const bgSize = `${sw * zoom}px ${sh * zoom}px`;

              const bgPosX = gw / 2 - sx * zoom;
              const bgPosY = gh / 2 - sy * zoom;

              // Batch DOM Writes
              // Replaced top/left with CSS transform for GPU accelerated layout stability
              $glass.css({
                transform: `translate(${mx - gw / 2}px, ${my - gh / 2}px)`,
                left: 0,
                top: 0,
                backgroundSize: bgSize,
                backgroundPosition: `${bgPosX}px ${bgPosY}px`,
              });
            }
          });
        });

        // Ensure proper cleanup on mouse leaving
        $card.on("mouseleave", () => {
          if (rafId) cancelAnimationFrame(rafId);
          $glass.hide();
        });
      });
    }, containerRef); // Scoping to containerRef

    // Cleanup function
    return () => {
      ctx.revert(); // Automatically reverts all GSAP animations & ScrollTriggers created in context
      if (window.jQuery && containerRef.current) {
        window
          .jQuery(containerRef.current)
          .find(".mgcb-card")
          .off("mousemove mouseleave");
      }
    };
  }, [cards, options?.isMagnifyingIconShow, styles]); // Keeping dependencies to minimum

  return (
    <div className="mgcb-card-grid" ref={containerRef}>
      {cards.map((card, index) => (
        <div className="mgcb-card" key={index}>
          {/* Lazy load for better LCP */}
          <img
            className="mgcb-card-image"
            src={card.image}
            alt={card.title}
            loading="lazy"
            decoding="async"
          />
          <div className="mgcb-text">
            {options?.isTitleShow && (
              <h1 className="mgcb-split-text" data-splitting="">
                {card.title}
              </h1>
            )}
          </div>
          {options?.isMagnifyingIconShow && (
            <div className="mgcb-try-it">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </div>
          )}
          <div className="mgcb-magnifying-glass"></div>
        </div>
      ))}
    </div>
  );
};

// 5. Wrap with React.memo to prevent unnecessary re-renders
export default memo(OneCard);
