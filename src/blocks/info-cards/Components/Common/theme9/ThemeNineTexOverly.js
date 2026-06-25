import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";
const ThemeNineTexOverly = ({ attributes, setAttributes, isBackend,premiumProps }) => {
  const { productsInfo } = attributes;
  return (
    <div className=" themeNineVoyageViewCardContainer">
     <div className="themeNineVoyage-page-content ">
       {productsInfo.map((view, index) => (
        <div
          key={index}
          className="themeNineVoyage-card"
          style={{
            backgroundImage: `url(${view?.imageUrl})`,
          }}
        >
          <div className="themeNinevoyage-content">
            {isBackend ? (
              <BControlPro
                placeholder="title..."
                className="voyage-title"
                tagName="h2"
                value={view?.title}
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      index,
                      "title"
                    ),
                  })
                }
                Component={RichText}
                      {...premiumProps}
              />
            ) : (
              <RichText.Content
                className="voyage-title"
                value={view?.title}
                tagName="h2"
              >
                {" "}
              </RichText.Content>
            )}
            {isBackend ? (
              <BControlPro
                placeholder="description..."
                className="voyage-copy"
                tagName="p"
                value={view?.description}
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      index,
                      "description"
                    ),
                  })
                }
                Component={RichText}
                      {...premiumProps}
              />
            ) : (
              <RichText.Content
                className="voyage-copy"
                tagName="p"
                value={view?.description}
              >
                {" "}
              </RichText.Content>
            )}
            {isBackend ? (
              <span className="voyageLink">
                <BControlPro
                  placeholder="button..."
                  className="voyage-btn"
                  tagName="a"
                  value={view?.buttonText}
                  onChange={(value) =>
                    setAttributes({
                      productsInfo: updateData(
                        productsInfo,
                        value,
                        index,
                        "buttonText"
                      ),
                    })
                  }
                  Component={RichText}
                      {...premiumProps}
                />
              </span>
            ) : (
              <a style={{outline:"none"}}
                className="voyageLink"
                href={view?.buttonLink}
                target={view?.newTab ? "_blank" : "_self"}
                rel="noreferrer"
              >
                {" "}
                <RichText.Content
                  tagName="button"
                  className="voyage-btn"
                  value={view?.buttonText}
                ></RichText.Content>
              </a>
            )}
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ThemeNineTexOverly;
