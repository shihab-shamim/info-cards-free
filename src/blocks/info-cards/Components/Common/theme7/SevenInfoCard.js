import React, { useEffect, useRef } from "react";
import SevenCard from "./SevenCard";

const SevenInfoCard = ({
  attributes,
  setAttributes,
  setActiveIndex,
  activeIndex,
  isBackend,
  premiumProps
}) => {

    const cardsData = attributes?.productsInfo;

  const { styles } = attributes;

  const cardRefs = useRef([]);
  useEffect(() => {
    let maxHeight = styles?.card?.height?.desktop;
    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.height = "auto";
        const height = card.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      }
    });

    cardRefs.current.forEach((card) => {
      if (card) {
        card.style.height = `${maxHeight}px`;
      }
    });
  }, []);
    return (
        <div className="InfoContainerWrapper">
      <div className=" infoThreeDContainer">
        {cardsData.map((card, index) => (
          <SevenCard
          premiumProps={premiumProps}
            key={index}
            title={card.title}
            content={card.content}
            tag={card?.tag}
            button={card?.button}
            cardRef={(el) => (cardRefs.current[index] = el)}
            index={index + 1}
            attributes={attributes}
            setAttributes={setAttributes}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            isBackend={isBackend}
          />
        ))}
      </div>
    </div>
    );
};

export default SevenInfoCard;