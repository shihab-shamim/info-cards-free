import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";



const SevenCard = ({
  title,
  content,
  index,
  cardRef,
  tag,
  button,
  attributes,
  setAttributes,
  setActiveIndex,
  activeIndex,
  isBackend,
  premiumProps
}) => {

  const { options, productsInfo } = attributes;

    return (
        <div onClick={() => setActiveIndex(index - 1)} className={`infoParent`}>
      <div
        className={`threeDinfoCard threeDinfoCard${index - 1} ${
          activeIndex == index - 1 && "activeCards"
        }`}
        ref={cardRef}
      >
        <div className={`threeDinfoCardContentBox threeDinfoCardContentBox${index - 1} `}>
          {isBackend ? (
            <BControlPro
              placeholder="title.."
              className="threeDinfoCardTitle"
              tagName="h1"
              value={title}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(productsInfo, value, index - 1, "title"),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
          ) : (
            <h1 className="threeDinfoCardTitle">{title}</h1>
          )}
          {isBackend ? (
            <BControlPro
              placeholder="description..."
              className="threeDinfoCardDescription"
              tagName="p"
              value={content}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(productsInfo, value, index - 1, "content"),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
          ) : (
            <p className="threeDinfoCardDescription">{content}</p>
          )}
          {options?.isButtonShow && <>{isBackend ? (
            <BControlPro
              placeholder="button..."
              value={button?.text}
              className="threeDinfoSeeMore"
              tagName="div"
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    index - 1,
                    "button",
                    "text"
                  ),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
          ) : (
            <a
              href={button?.link}
              target={options?.isNewTabOpen ? "_blank" : "_self"}
              rel="noreferrer"
              className="threeDinfoSeeMore"
            >
              {button?.text}
            </a>
          )}</>}
        </div>
        {options?.isTagShow && <>{
          isBackend ? (
          <div className={`date-box date-box${index - 1}`}>
            {/* <span className="month">{tag?.name}</span> */}
            <BControlPro
              className="month"
              tagName="span"
              value={tag?.name}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    index - 1,
                    "tag",
                    "name"
                  ),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
            <BControlPro
              className="date"
              tagName="span"
              value={tag?.value}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    index - 1,
                    "tag",
                    "value"
                  ),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
            {/* <span className="date">{tag?.value}</span> */}
            
          </div>
        ) : (
          <div className={`date-box date-box${index - 1}`}>
            <span className="month">{tag?.name}</span>
            <span className="date">{tag?.value}</span>
          </div>
        )
        }</>}
      </div>
    

    </div>
    );
};

export default SevenCard;