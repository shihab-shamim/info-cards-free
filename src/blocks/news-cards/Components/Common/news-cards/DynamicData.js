const DynamicData = ({ posts, totalPosts, attributes, blockId }) => {
  const { options = {} } = attributes || {};

  if (totalPosts <= 0) {
    return <div style={{ color: "red", textAlign: "center" }}>No posts found</div>;
  }

  const renderMenu = (commentCount,commenLink) => (
    // "icon": "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align: middle\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path></svg>",
    <ul className="icbnc-card-menu">
      {/* {infoArray &&
        infoArray.map((info, infoIndex) => ( */}
          <li>
            <a
              href={`${commenLink}#comment`}
              target={options?.newTabOpen ? "_blank" : "_self"}
              rel={options?.newTabOpen ? "noopener noreferrer" : ""}
            >
              <span className="icbnc-card-value">{commentCount}</span>
              <span
                className="icbnc-card-icon"
                dangerouslySetInnerHTML={{ __html: "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"vertical-align: middle\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path></svg>" }}
              />
            </a>
          </li>
        {/* ))} */}
    </ul>
  );

  return (
    <div className="icbnc-news-card-grid">
      {posts.map((item, index) => {
        // --- Data Extraction Logic ---
        // Splitting "Apr 16, 2026" into ["Apr", "16,", "2026"]
        const dateParts = item.date ? item.date.split(" ") : [];
        const month = dateParts[0] || "";
        const day = dateParts[1] ? dateParts[1].replace(",", "") : "";
        const year = dateParts[2] || "";
        
        // Accessing author name from the object
        const authorName = item.author?.name || "Admin";
        const postLink = item.link || "#";
        // -----------------------------

        return (
          <div
            key={item.id || index}
            className={`icbnc-news-card ${
              options?.lighStyleOn? "icbnc-style-light" : "icbnc-style-dark"
            }`}
          >
            <div
              className="icbnc-card-inner"
              style={{ backgroundImage: item.thumbnail?.url ? `url(${item.thumbnail.url})` : "" }}
            >
              {!item.lightStyle && (
                <div className="icbnc-card-header">
                  {options.isDateShow && (
                    <div className="icbnc-card-date">
                      <span className="icbnc-day">{day}</span>
                      <span className="icbnc-month">{month}</span>
                      <span className="icbnc-year">{year}</span>
                    </div>
                  )}
                  {options.isAdditionalInfoShow && renderMenu(item?.commentCount,item?.link)}
                </div>
              )}

              {item.lightStyle && options.isDateShow && (
                <div className="icbnc-card-date">
                  <span className="icbnc-day">{day}</span>
                  <span className="icbnc-month">{month}</span>
                  <span className="icbnc-year">{year}</span>
                </div>
              )}

              <div className="icbnc-card-details">
                <div className="icbnc-card-content">
                  <span
                    className="icbnc-card-author"
                    style={{
                      visibility: options?.isAuthorShow ? "visible" : "hidden",
                    }}
                  >
                    {authorName}
                  </span>

                  {options?.isTitleShow && (
                    <h1 className="icbnc-card-title">
                      <a
                        href={postLink}
                        target={options?.newTabOpen ? "_blank" : "_self"}
                        rel={options?.newTabOpen ? "noopener noreferrer" : ""}
                      >
                        {item.title}
                      </a>
                    </h1>
                  )}

                  <div className="icbnc-card-hover-content">
                    <div>
                      {options.isExcerptShow && (
                        <p className="icbnc-card-excerpt">{item.excerpt}</p>
                      )}

                      {options.isButtonShow && !options?.lighStyleOn&& (
                        <a
                          href={postLink}
                          target={options?.newTabOpen ? "_blank" : "_self"}
                          rel={options?.newTabOpen ? "noopener noreferrer" : ""}
                          className="icbnc-card-read-more"
                        >
                          {/* Fallback to "Read More" if item.button.text is missing */}
                          {options?.buttonText || "Read More"}
                        </a>
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
                    {options.isAdditionalInfoShow && renderMenu(item?.commentCount,item?.link)}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicData;