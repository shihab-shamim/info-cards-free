import React from "react";

const OneCard = ({ attributes, setAttributes, blockId, RichTextComponent }) => {
  const { cards: newsData = [], options = {} } = attributes || {};

  const renderMenu = (infoArray, cardIndex) => (
    <ul className="icbnc-card-menu">
      {infoArray &&
        infoArray.map((info, infoIndex) => (
          <li key={infoIndex}>
            <a
              href={info.link || ""}
              target={options?.newTabOpen ? "_blank" : "_self"}
              rel={options?.newTabOpen ? "noopener noreferrer" : ""}
            >
              {!RichTextComponent && info.value && (
                <span className="icbnc-card-value">{info.value}</span>
              )}
              {RichTextComponent && (
                <RichTextComponent
                  placeholder="0"
                  tagName="span"
                  className="icbnc-card-value"
                  val={info.value}
                  onChange={(val) =>
                    setAttributes({
                      ...attributes,
                      cards: attributes.cards.map((card, i) =>
                        i === cardIndex
                          ? {
                              ...card,
                              additionalInfo: card.additionalInfo.map(
                                (inf, j) =>
                                  j === infoIndex
                                    ? { ...inf, value: val }
                                    : inf,
                              ),
                            }
                          : card,
                      ),
                    })
                  }
                />
              )}
              <span
                className="icbnc-card-icon"
                dangerouslySetInnerHTML={{ __html: info.icon }}
              />
            </a>
          </li>
        ))}
    </ul>
  );

  return (
    <div className="icbnc-news-card-grid">
      {newsData.map((item, index) => (
        <div
          key={index}
          className={`icbnc-news-card ${
            item.lightStyle ? "icbnc-style-light" : "icbnc-style-dark"
          }`}
        >
          <div
            className="icbnc-card-inner"
            style={{ backgroundImage: item.image ? `url(${item.image})` : "" }}
          >
            {!item.lightStyle && (
              <div className="icbnc-card-header">
                {options.isDateShow && (
                  <div className="icbnc-card-date">
                    {!RichTextComponent && (
                      <span className="icbnc-day">{item.day}</span>
                    )}
                    {RichTextComponent && (
                      <RichTextComponent
                        placeholder="Day"
                        tagName="span"
                        className="icbnc-day"
                        val={item.day}
                        onChange={(val) =>
                          setAttributes({
                            ...attributes,
                            cards: attributes.cards.map((card, i) =>
                              i === index ? { ...card, day: val } : card,
                            ),
                          })
                        }
                      />
                    )}
                    {!RichTextComponent && (
                      <span className="icbnc-month">{item.month}</span>
                    )}
                    {RichTextComponent && (
                      <RichTextComponent
                        placeholder="Month"
                        tagName="span"
                        className="icbnc-month"
                        val={item.month}
                        onChange={(val) =>
                          setAttributes({
                            ...attributes,
                            cards: attributes.cards.map((card, i) =>
                              i === index ? { ...card, month: val } : card,
                            ),
                          })
                        }
                      />
                    )}
                    {!RichTextComponent && (
                      <span className="icbnc-year">{item.year}</span>
                    )}
                    {RichTextComponent && (
                      <RichTextComponent
                        placeholder="Year"
                        tagName="span"
                        className="icbnc-year"
                        val={item.year}
                        onChange={(val) =>
                          setAttributes({
                            ...attributes,
                            cards: attributes.cards.map((card, i) =>
                              i === index ? { ...card, year: val } : card,
                            ),
                          })
                        }
                      />
                    )}
                  </div>
                )}
                {options.isAdditionalInfoShow &&
                  renderMenu(item.additionalInfo, index)}
              </div>
            )}

            {item.lightStyle && options.isDateShow && (
              <div className="icbnc-card-date">
                {!RichTextComponent && (
                  <span className="icbnc-day">{item.day}</span>
                )}
                {RichTextComponent && (
                  <RichTextComponent
                    placeholder="Day"
                    tagName="span"
                    className="icbnc-day"
                    val={item.day}
                    onChange={(val) =>
                      setAttributes({
                        ...attributes,
                        cards: attributes.cards.map((card, i) =>
                          i === index ? { ...card, day: val } : card,
                        ),
                      })
                    }
                  />
                )}
                {!RichTextComponent && (
                  <span className="icbnc-month">{item.month}</span>
                )}
                {RichTextComponent && (
                  <RichTextComponent
                    placeholder="Month"
                    tagName="span"
                    className="icbnc-month"
                    val={item.month}
                    onChange={(val) =>
                      setAttributes({
                        ...attributes,
                        cards: attributes.cards.map((card, i) =>
                          i === index ? { ...card, month: val } : card,
                        ),
                      })
                    }
                  />
                )}
                {!RichTextComponent && (
                  <span className="icbnc-year">{item.year}</span>
                )}
                {RichTextComponent && (
                  <RichTextComponent
                    placeholder="Year"
                    tagName="span"
                    className="icbnc-year"
                    val={item.year}
                    onChange={(val) =>
                      setAttributes({
                        ...attributes,
                        cards: attributes.cards.map((card, i) =>
                          i === index ? { ...card, year: val } : card,
                        ),
                      })
                    }
                  />
                )}
              </div>
            )}

            <div className="icbnc-card-details">
              <div className="icbnc-card-content">
                {!RichTextComponent && (
                  <span
                    className="icbnc-card-author"
                    style={{
                      visibility: options?.isAuthorShow ? "visible" : "hidden",
                    }}
                  >
                    {item?.author || "\u00A0"}
                  </span>
                )}
                {RichTextComponent && (
                  <RichTextComponent
                    placeholder="Author..."
                    style={{
                      visibility: options?.isAuthorShow ? "visible" : "hidden",
                    }}
                    tagName="span"
                    className="icbnc-card-author"
                    val={options?.isAuthorShow ? item?.author : "\u00A0"}
                    onChange={(val) =>
                      setAttributes({
                        ...attributes,
                        cards: attributes.cards.map((card, i) =>
                          i === index ? { ...card, author: val } : card,
                        ),
                      })
                    }
                  />
                )}

                {options?.isTitleShow && !RichTextComponent && (
                  <h1 className="icbnc-card-title">
                    <a
                      href={item.button.link}
                      target={options?.newTabOpen ? "_blank" : "_self"}
                      rel={options?.newTabOpen ? "noopener noreferrer" : ""}
                    >
                      {item.title}
                    </a>
                  </h1>
                )}

                {options?.isTitleShow && RichTextComponent && (
                  <h1 className="icbnc-card-title">
                    <RichTextComponent
                      placeholder="Title..."
                      tagName="a"
                      className="icbnc-card-title"
                      val={item.title}
                      onChange={(val) =>
                        setAttributes({
                          ...attributes,
                          cards: attributes.cards.map((card, i) =>
                            i === index ? { ...card, title: val } : card,
                          ),
                        })
                      }
                    />
                  </h1>
                )}

                <div className="icbnc-card-hover-content">
                  <div>
                    {options.isExcerptShow && !RichTextComponent && (
                      <p className="icbnc-card-excerpt">{item.excerpt}</p>
                    )}
                    {options.isExcerptShow && RichTextComponent && (
                      <RichTextComponent
                        placeholder="Description..."
                        tagName="p"
                        className="icbnc-card-excerpt"
                        val={item.excerpt}
                        onChange={(val) =>
                          setAttributes({
                            ...attributes,
                            cards: attributes.cards.map((card, i) =>
                              i === index ? { ...card, excerpt: val } : card,
                            ),
                          })
                        }
                      />
                    )}

                    {item.button &&
                      !item?.lightStyle &&
                      options.isButtonShow &&
                      !RichTextComponent && (
                        <a
                          href={item.button.link}
                          target={options?.newTabOpen ? "_blank" : "_self"}
                          rel={options?.newTabOpen ? "noopener noreferrer" : ""}
                          className="icbnc-card-read-more"
                        >
                          {item.button.text}
                        </a>
                      )}
                    {item.button &&
                      !item?.lightStyle &&
                      options.isButtonShow &&
                      RichTextComponent && (
                        <RichTextComponent
                          placeholder="Read More..."
                          tagName="a"
                          className="icbnc-card-read-more"
                          val={item.button.text}
                          onChange={(val) =>
                            setAttributes({
                              ...attributes,
                              cards: attributes.cards.map((card, i) =>
                                i === index
                                  ? {
                                      ...card,
                                      button: { ...card.button, text: val },
                                    }
                                  : card,
                              ),
                            })
                          }
                        />
                      )}
                  </div>
                </div>

                {item.lightStyle && options.isAdditionalInfoShow && (
                  <label
                    htmlFor={`show-menu-${blockId}-${index}`}
                    className="icbnc-card-menu-btn"
                  >
                    <span></span>
                  </label>
                )}
              </div>

              {item.lightStyle && (
                <>
                  {options.isAdditionalInfoShow && (
                    <input
                      type="checkbox"
                      id={`show-menu-${blockId}-${index}`}
                      className="icbnc-menu-checkbox"
                    />
                  )}
                  {options.isAdditionalInfoShow &&
                    renderMenu(item.additionalInfo, index)}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneCard;
