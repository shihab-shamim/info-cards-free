import React, { useEffect, useRef } from "react";

// ─── CarouselInner ────────────────────────────────────────────────────────────
// Owl Carousel loop:true হলে DOM-এ clone nodes যোগ করে।
// card add/remove হলে React সেই clones খুঁজে পায় না → removeChild error।
// Fix: আলাদা component + key={cards.length} দিলে কার্ড সংখ্যা পরিবর্তনে
// React পুরো component unmount → remount করে, clones সহ সব পরিষ্কার হয়।
const CarouselInner = ({ cards, initialOpenCardNumber, attributes }) => {
  const { sliderSettings = {} } = attributes || {};
  const carouselRef = useRef(null);

  useEffect(() => {
    let retryTimer;
    const el = carouselRef.current;

    const initCarousel = () => {
      const $ = window.jQuery;
      if (!$ || !$.fn.owlCarousel) {
        retryTimer = setTimeout(initCarousel, 100);
        return;
      }

      const $carousel = $(el);
      $carousel.owlCarousel({
        autoWidth: true,
        loop: sliderSettings?.loop,
        dots: !sliderSettings?.nav && sliderSettings?.dots,
        nav: !sliderSettings?.dots && sliderSettings?.nav,
        navText: [
          sliderSettings?.slideIcon?.left || "prev",
          sliderSettings?.slideIcon?.right || "next",
        ],
        autoplay: sliderSettings?.autoplay,
        autoplayTimeout: sliderSettings?.autoplayTimeout,
        // smartSpeed: 800,
        onInitialized: () => {
          setTimeout(() => {
            $carousel.trigger("refresh.owl.carousel");
          }, 300);
        },
      });

      // মাউস হুইল লজিক এখানে
      if (sliderSettings?.mousewheelon) {
        $carousel.on("wheel", ".owl-stage", function (e) {
          if (e.originalEvent.deltaY > 0) {
            $carousel.trigger("next.owl");
          } else {
            $carousel.trigger("prev.owl");
          }
          e.preventDefault();
        });
      }

      $carousel
        .off("click", ".eacl-card")
        .on("click", ".eacl-card", function () {
          $(el).find(".eacl-card").not($(this)).removeClass("active");
          $(this).toggleClass("active");
        });
    };

    initCarousel();

    return () => {
      clearTimeout(retryTimer);
      const $ = window.jQuery;
      if (!$ || !el) return;
      const $carousel = $(el);
      $carousel.off("wheel"); // ইভেন্ট রিমুভ করা ভালো প্র্যাকটিস
      if ($carousel.data("owl.carousel")) {
        $carousel.trigger("destroy.owl.carousel");
      }
    };
  }, []); // mount-এ একবার init, unmount-এ destroy — key দিয়ে পুরো remount হয়

  return (
    <div ref={carouselRef} className="owl-carousel eacl-carousel owl-theme">
      {cards.map((card, index) => {
        const isActive =
          initialOpenCardNumber >= 1 && index === initialOpenCardNumber - 1;
        return (
          <div
            key={index}
            className={`eacl-card${isActive ? " active" : ""}`}
            style={{
              backgroundImage: `url(${card.bgUrl || card.image || ""})`,
            }}
          >
            <div className="eacl-card-description">
              {sliderSettings?.titleShow && (
                <h3 className="eacl-card-title">{card.title}</h3>
              )}
              {sliderSettings?.descriptionShow && (
                <p className="eacl-card-des">{card.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── OneCard ──────────────────────────────────────────────────────────────────
const OneCard = ({ attributes, setAttributes, RichTextComponent }) => {
  const { cards = [], sliderSettings = {} } = attributes || {};
  const { initialOpenCardNumber = -1 } = sliderSettings;

  return (
    <section className="eacl-container">
      {sliderSettings?.headingShow && !RichTextComponent && (
        <h2 className="eacl-title">{sliderSettings?.headingText}</h2>
      )}

      {sliderSettings?.headingShow && RichTextComponent && <RichTextComponent
          val={sliderSettings?.headingText}
          placeholder="Enter Heading"
          onChange={(val) =>
            setAttributes({
              sliderSettings: { ...sliderSettings, headingText: val },
            })
          }
          tagName="h2"
          className="eacl-title"
        />}
      {/* key={cards.length} → card add/remove হলে CarouselInner পুরো remount হয় */}
      <CarouselInner
        RichTextComponent={RichTextComponent}
        attributes={attributes}
        setAttributes={setAttributes}
        key={`${cards.length}-${sliderSettings?.autoplay}-${sliderSettings?.autoplayTimeout}-${sliderSettings?.loop}-${sliderSettings?.dots}-${sliderSettings?.nav}-${sliderSettings?.slideIcon?.id}-${sliderSettings?.mousewheelon}`}
        cards={cards}
        initialOpenCardNumber={initialOpenCardNumber}
      />
    </section>
  );
};

export default OneCard;
