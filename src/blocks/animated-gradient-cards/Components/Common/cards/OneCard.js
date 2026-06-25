import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const OneCard = ({ attributes, RichTextControl, setAttributes }) => {
  const { cardsData = [], options = {} } = attributes;

  return (
    <section className="one-card-section-wrapper">
      <div className="container">
        <div className="wrapper">
          <ul className="card-list">
            {cardsData.map((card, index) => (
              <li key={card?.id || index}>
                <div className="card bordered">
                  <div className="state-layer"></div>
                  <div className="card-wrapper">
                    <div className="visual">
                      <img className="img" src={card.image?.url} alt="" />
                    </div>
                    <div className="content">
                      <div className="content-wrapper">
                        <div className="meta">
                          {options.isTitle && !RichTextControl && (
                            <h3 className="title">{card.title}</h3>
                          )}
                          {options?.isTitle && RichTextControl && (
                            <RichTextControl
                              className="title"
                              value={card.title}
                              onChange={(value) =>
                                setAttributes({
                                  cardsData: updateData(
                                    cardsData,

                                    value,
                                    index,
                                    "title",
                                  ),
                                })
                              }
                            />
                          )}
                          {options.isDescription && !RichTextControl && (
                            <p className="desc">{card.description}</p>
                          )}
                          {options?.isDescription && RichTextControl && (
                            <RichTextControl
                              className="desc"
                              value={card.description}
                              onChange={(value) =>
                                setAttributes({
                                  cardsData: updateData(
                                    cardsData,
                                    value,
                                    index,
                                    "description",
                                  ),
                                })
                              }
                            />
                          )}
                        </div>

                        {options.isButton && !RichTextControl && (
                          <a
                            href={card.linkUrl}
                            target={options.isOpenLink ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="link"
                          >
                            {card.linkText}
                            <span
                              dangerouslySetInnerHTML={{ __html: options.icon }}
                            ></span>
                          </a>
                        )}

                        {options.isButton && RichTextControl && (
                          <span className="oneCardEditorButton">
                            <RichTextControl
                              className="link"
                              value={card.linkText}
                              onChange={(value) =>
                                setAttributes({
                                  cardsData: updateData(
                                    cardsData,
                                    value,
                                    index,
                                    "linkText",
                                  ),
                                })
                              }
                            />
                            <span
                              className="link"
                              dangerouslySetInnerHTML={{ __html: options.icon }}
                            ></span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OneCard;
