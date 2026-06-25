import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const ThemeEightInfoProfile = ({
  infoProfile,
  index,
  attributes,
  setAttributes,
  isBackend,
  premiumProps
}) => {
    const { options, productsInfo } = attributes;

  const {
    name,
    title,
    company,
    status,
    bio,
    state,
    profileImg,
    social,
    button,
  } = infoProfile;

    return (
        <div className={`themeEightCard themeEightContain-card-${index}`}>
      <div className="themeEightCard-top">
        <div className="themeEightHeader">
          <img src={profileImg} className="themeEightProfile-img" />
          <div className="themeEightProfile-info">
            {isBackend ? (
              <BControlPro
                placeholder="type name..."
                tagName="h2"
                className="themeEightInfoProfileName"
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      index,
                      "name"
                    ),
                  })
                }
                value={name}
                 Component={RichText}
                               {...premiumProps}
              />
            ) : (
              <h2 className="themeEightInfoProfileName">{name}</h2>
            )}
            {isBackend ? (
              <BControlPro
               Component={RichText}
                               {...premiumProps}
                placeholder="type title ..."
                tagName="p"
                className="themeEightInfoProfileTitle"
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
                value={title}
              />
            ) : (
              <p className="themeEightInfoProfileTitle">{title}</p>
            )}
            {isBackend ? (
              <BControlPro
               Component={RichText}
                               {...premiumProps}
                placeholder="type company name..."
                tagName="p"
                className="themeEightInfoProfileCompany"
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      index,
                      "company"
                    ),
                  })
                }
                value={company}
              />
            ) : (
              <p className="themeEightInfoProfileCompany">{company}</p>
            )}
          </div>
          {options?.isStatusShow && (
            <div className="themeEightStatus">
              <div className="themeEightStatus-dot"></div>
              {isBackend ? (
                <BControlPro 
                 Component={RichText}
                               {...premiumProps}
                  placeholder="type status ..."
                  tagName="span"
                  className="themeEightStatus-text"
                  onChange={(value) =>
                    setAttributes({
                      productsInfo: updateData(
                        productsInfo,
                        value,
                        index,
                        "status"
                      ),
                    })
                  }
                  value={status}
                />
              ) : (
                <span className="themeEightStatus-text">{status}</span>
              )}
            </div>
          )}
        </div>

        {isBackend ? (
          <BControlPro
           Component={RichText}
                               {...premiumProps}
            placeholder="type bio ..."
            tagName="p"
            className="themeEightBio"
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  value,
                  index,
                  "bio"
                ),
              })
            }
            value={bio}
          />
        ) : (
          <p className="themeEightBio">{bio}</p>
        )}

        {options?.isStateShow && (
          <div className="themeEightStats">
            {state.map((stat, i) => {
              return (
                <div key={i} className="themeEightStat">
                  {isBackend ? (
                    <>
                      <BControlPro 
                       Component={RichText}
                               {...premiumProps}
                      placeholder="type..."
                        tagName="div"
                        className="themeEightStat-number"
                        value={String(stat?.quantity || "")}
                        onChange={(value)=>setAttributes({productsInfo:updateData(productsInfo,value,index,"state",i,"quantity")})}
                      />
                      <BControlPro  Component={RichText}
                               {...premiumProps}  onChange={(value)=>setAttributes({productsInfo:updateData(productsInfo,value,index,"state",i,"name")})} placeholder="type..." className="themeEightStat-label" value={stat?.name} />
                    </>
                  ) : (
                    <>
                      <div className="themeEightStat-number">{stat?.quantity}</div>
                      <div className="themeEightStat-label">{stat?.name}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="themeEightCard-bottom">
        {options?.isSocialMediaShow && (
          <div className="themeEightSocial-icons">
            {social.map((soci, i) => (
            soci?.show && <div key={i} className={`themeEightSocial-icon  themeEightSocial-icon${i}`}>
                <a
                  className={`${soci?.name} themeEightSocial-icon themeEightSocial-icon${i}`}
                  href={soci?.link}
                  target={options?.isOpenUrlNewTab ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  <span dangerouslySetInnerHTML={{ __html: soci?.icon }}></span>
                </a>
              </div>
            ))}
          </div>
        )}

        {options?.isButtonShow && (
        isBackend ? <button className="themeEightMessage-btn">
              <span dangerouslySetInnerHTML={{ __html: options?.messageButtonIcon }}></span>
              <BControlPro  Component={RichText}
                               {...premiumProps} tagName="span" onChange={(value)=>setAttributes({productsInfo:updateData(productsInfo,value,index,"button","text")})} value={button?.text}/>
            </button>  :<a
            href={button?.link}
            target={options?.isOpenUrlNewTab ? "_blank" : "_self"}
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <button className="themeEightMessage-btn">
              <span dangerouslySetInnerHTML={{ __html: button?.icon }}></span>
              {button?.text}
            </button>
          </a>
        )}
      </div>
    </div>
    );
};

export default ThemeEightInfoProfile;

