import { updateData } from "../../../utils/functions";

const OneCard = ({ attributes, setAttributes, RichTextComponent }) => {
  console.log(attributes?.cards);
  const { cards = {}, options = {} } = attributes || {};

  const handleNavigateLink = (url) => {
    if (url) {
      window.open(url, options?.openInNewTab ? "_blank" : "_self");
    }
  };
  // Narcisse, Lycoris, এবং Tulipe
  return (
    <div className="nbhs-container">
      <div className="nbhs-row">
        {cards.map((card, index) => (
          <div
            onClick={() => {
              if (
                !options.isIcon &&
                !RichTextComponent &&
                options?.clickOnCard
              ) {
                handleNavigateLink(card.link);
              }
            }}
            className="nbhs-col"
            key={index}
          >
            <div className="nbhs-card nbhs-box-shadow">
              <img
                src={card.image}
                className="nbhs-card-img"
                alt={card.title}
              />
              <div className="nbhs-card-body">
                {options?.isTitle && !RichTextComponent && (
                  <h5
                    className="nbhs-card-title"
                    dangerouslySetInnerHTML={{ __html: card.title }}
                  />
                )}
                {options?.isTitle && RichTextComponent && (
                  <RichTextComponent
                    className="nbhs-card-title"
                    placeholder="Enter Title"
                    tagName="h5"
                    val={card.title}
                    onChange={(v) =>
                      setAttributes({
                        cards: updateData(cards, v, index, "title"),
                      })
                    }
                  />
                )}
                {options?.isDivider && <hr className="nbhs-card-divider" />}
                {options?.isDescription && !RichTextComponent && (
                  <p
                    className="nbhs-card-text"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                )}
                {options?.isDescription && RichTextComponent && (
                  <RichTextComponent
                    className="nbhs-card-text"
                    tagName="p"
                    placeholder="Enter description"
                    val={card.description}
                    onChange={(v) =>
                      setAttributes({
                        cards: updateData(cards, v, index, "description"),
                      })
                    }
                  />
                )}
              </div>
              <svg
                className="nbhs-card-wave-shape"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fillOpacity="1" d={options?.[card.wavePath]}></path>
              </svg>
              {options?.isIcon && (
                <a
                  target={options?.openInNewTab ? "_blank" : "_self"}
                  href={!RichTextComponent && card.link}
                  rel="noopener noreferrer"
                >
                  <span
                    className="nbhs-icon"
                    dangerouslySetInnerHTML={{ __html: options?.icon }}
                  ></span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneCard;
