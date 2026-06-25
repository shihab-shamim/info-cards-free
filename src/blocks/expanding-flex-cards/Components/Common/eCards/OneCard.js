import { useState } from "react";
import { updateData } from "../../../utils/functions";

const OneCard = ({ attributes, setAttributes, RichTextComponent }) => {
  const { cards = [], options = {} } = attributes;
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="efc-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`efc-card ${activeCard === index ? "efc-active" : ""}`}
          onClick={() => setActiveCard(index)}
          style={{
            "--optionBackground": `url(${card.bgUrl})`,
            "--defaultBackground": card.color,
          }}
        >
          <div className="efc-card-shadow"></div>
          <div className="efc-card-label">
            {options?.isIconshow && (
              <div
                className={`efc-card-icon  efc-card-icon-${index}`}
                dangerouslySetInnerHTML={{ __html: card.icon }}
              ></div>
            )}
            <div className="efc-card-info">
              {options?.isTitleshow && !RichTextComponent && (
                <a
                  href={card.link}
                  target={options?.isOpenNewTab ? "_blank" : "_self"}
                  className="efc-card-title"
                  rel="noreferrer"
                >
                  {card.title}
                </a>
              )}
              {options?.isTitleshow && RichTextComponent && (
                <RichTextComponent
                  val={card.title}
                  onChange={(val) => {
                    setAttributes({
                      cards: updateData(cards, val, index, "title"),
                    });
                  }}
                  tagName="div"
                  className="efc-card-title"
                  placeholder="Title"
                />
              )}
              {options?.isSubtitleShow && !RichTextComponent && (
                <div className="efc-card-subtitle">{card.subtitle}</div>
              )}
              {options?.isSubtitleShow && RichTextComponent && (
                <RichTextComponent
                  val={card.subtitle}
                  onChange={(val) => {
                    setAttributes({
                      cards: updateData(cards, val, index, "subtitle"),
                    });
                  }}
                  tagName="div"
                  className="efc-card-subtitle"
                  placeholder="Subtitle"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneCard;
