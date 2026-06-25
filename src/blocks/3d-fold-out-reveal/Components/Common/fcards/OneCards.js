import { useEffect, useRef } from "react";

const OneCards = ({ attributes }) => {
  const { cards = [], options = {} } = attributes || {};
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let zindex = 10;
    const cardsContainer = containerRef.current;
    const cards = cardsContainer.querySelectorAll(".dfor-card");

    const handleClick = function (e) {
      if (options?.showIcons) {
        // Only proceed if the toggle icon was clicked
        if (!e.target.closest(".dfor-toggle-info")) {
          return;
        }
      } else {
        // Allow default link behavior for the action buttons
        if (e.target.closest(".dfor-card-actions a")) {
          return;
        }
      }

      e.preventDefault();

      let isShowing = false;

      if (this.classList.contains("dfor-show")) {
        isShowing = true;
      }

      if (cardsContainer.classList.contains("dfor-showing")) {
        // a card is already in view
        const showingCard = cardsContainer.querySelector(
          ".dfor-card.dfor-show",
        );
        if (showingCard) {
          showingCard.classList.remove("dfor-show");
        }

        if (isShowing) {
          // this card was showing - reset the grid
          cardsContainer.classList.remove("dfor-showing");
        } else {
          // this card isn't showing - get in with it
          this.style.zIndex = zindex;
          this.classList.add("dfor-show");
        }

        zindex++;
      } else {
        // no cards in view
        cardsContainer.classList.add("dfor-showing");
        this.style.zIndex = zindex;
        this.classList.add("dfor-show");

        zindex++;
      }
    };

    cards.forEach((card) => {
      card.addEventListener("click", handleClick);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleClick);
      });
    };
  }, [cards, options?.showIcons]);

  return (
    <div className="dfor-cards" ref={containerRef}>
      {cards?.map((card, index) => {
        const { title, subtitle, image, description, btn } = card;
        return (
          <div key={index} className="dfor-card">
            <div className="dfor-card__image-holder">
              <img className="dfor-card__image" src={image} alt={title} />
            </div>
            <div className="dfor-card-title">
              {options?.showIcons && (
                <a href="#" className="dfor-toggle-info dfor-btn">
                  <span className="dfor-left"></span>
                  <span className="dfor-right"></span>
                </a>
              )}
              <h2>
                {options?.showTitle && <span className="dfor-title" >{title}</span>}
                {options?.showSubtitle && <small className="dfor-subtitle" >{subtitle}</small>}
              </h2>
            </div>
            <div className="dfor-card-flap dfor-flap1">
              {options?.showDescription && (
                <div className="dfor-card-description">{description}</div>
              )}
              <div className="dfor-card-flap dfor-flap2">
                {options?.showButton && (
                  <div className="dfor-card-actions" style={{ zIndex: 9999 }}>
                    <a
                      href={btn.link}
                      className="dfor-btn"
                      target={options?.linkOpenInNewTab ? "_blank" : "_self"}
                      rel={
                        options?.linkOpenInNewTab ? "noopener noreferrer" : ""
                      }
                    >
                      {btn.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneCards;
