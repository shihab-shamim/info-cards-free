import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";


const ThemeTwelveHoverService = ({ attributes, isEditor, setAttributes ,premiumProps}) => {
  const { productsInfo } = attributes;
  

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const centerX = rect.width / 2;

    const rotateY = -((x - centerX) / centerX) * 10;

        card.querySelector(
          ".lqd-fb-content-wrap"
        ).style.transform = `rotateY(${rotateY}deg)`;
      };

    const handleMouseLeave = (e) => {
      e.currentTarget.querySelector(
        ".lqd-fb-content-wrap"
      ).style.transform = `rotateY(0deg)`;
    };


  return (
    <section className="lqd-section portfolio themeTwelveSection">
      <div className="container-fluid">
        <div className="themeTwelveRow">
          {productsInfo.map((service, index) => (
            isEditor?<div style={{cursor:"pointer"}} 
              key={index}
              className="col col-12 col-md-6 col-xl-3 p-0 module-content themeTwelveContentContainer"
            >
              <div
                className="lqd-fb relative lqd-fb-style-6 rounded-4 h-pt-125 text-white themeTwelveContentSection"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-wrap items-center lqd-overlay">
                  <div
                    className="lqd-fb-content-wrap lqd-overlay flex flex-col items-end backface-hidden will-change-transform"
                    style={{
                      transition: "transform 0.2s ease",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="lqd-fb-img lqd-overlay flex rounded-4 overflow-hidden backface-hidden  themeTwelveHover-section-img">
                      <figure className="w-full h-full m-0">
                        <img
                          className="w-full h-full objfit-cover objfit-center themeTwelveImage"
                          src={service?.img}
                          alt={service?.title}
                        />
                      </figure>
                      <div className="lqd-fb-bg lqd-overlay flex"></div>
                      <div
                        className="lqd-fb-hover-overlay lqd-overlay flex bg-transparent"
                        style={{ backgroundImage: service?.gradient }}
                      ></div>
                    </div>
                    <div className="lqd-fb-content flex flex-col justify-end lqd-overlay flex backface-hidden py-1/5em px-1/5em  hover-service-section-content">
                      <span className="lqd-fb-icon flex mb-0/85em">
                        <span
                          className={`lqd-icn-ess  themeTwelveHoverSectionIcon`}
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{ __html: service?.icon }}
                        ></span>
                      </span>
                      {isEditor ? (
                        <BControlPro
                          placeholder="Sub Title..."
                          className="themeTwelveContentSubTitle"
                          tagName="h6"
                          value={service?.subtitle}
                          onChange={(v) =>
                            setAttributes({
                              productsInfo: updateData(
                                productsInfo,
                                v,
                                index,
                                "subtitle"
                              ),
                            })
                          }
                           Component={RichText}
                            {...premiumProps}
                        ></BControlPro>
                      ) : (
                        <RichText.Content
                          tagName="h6"
                          className="themeTwelveContentSubTitle"
                          value={service?.subtitle}
                        ></RichText.Content>
                      )}

                      {isEditor ? (
                        <BControlPro
                        Component={RichText}
                            {...premiumProps}
                          placeholder="Title...."
                          value={service?.title}
                          onChange={(v) =>
                            setAttributes({
                              productsInfo: updateData(productsInfo, v, index, "title"),
                            })
                          }
                          tagName="h2"
                          className="themeTwelveContentTitle"
                        ></BControlPro>
                      ) : (
                        <RichText.Content
                          value={service?.title}
                          tagName="h2"
                          className="themeTwelveContentTitle"
                        ></RichText.Content>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>:<a style={{cursor:"pointer"}} href={service?.cardLink?.url} target={service?.cardLink?.openInNewTab?"_kjshfhs":"_self"}
              key={index}
              className="col col-12 col-md-6 col-xl-3 p-0 module-content themeTwelveContentContainer"
            >
              <div
                className="lqd-fb relative lqd-fb-style-6 rounded-4 h-pt-125 text-white themeTwelveContentSection"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-wrap items-center lqd-overlay">
                  <div
                    className="lqd-fb-content-wrap lqd-overlay flex flex-col items-end backface-hidden will-change-transform"
                    style={{
                      transition: "transform 0.2s ease",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="lqd-fb-img lqd-overlay flex rounded-4 overflow-hidden backface-hidden  themeTwelveHover-section-img">
                      <figure className="w-full h-full m-0">
                        <img
                          className="w-full h-full objfit-cover objfit-center themeTwelveImage"
                          src={service?.img}
                          alt={service?.title}
                        />
                      </figure>
                      <div className="lqd-fb-bg lqd-overlay flex"></div>
                      <div
                        className="lqd-fb-hover-overlay lqd-overlay flex bg-transparent"
                        style={{ backgroundImage: service?.gradient }}
                      ></div>
                    </div>
                    <div className="lqd-fb-content flex flex-col justify-end lqd-overlay flex backface-hidden py-1/5em px-1/5em  hover-service-section-content">
                      <span className="lqd-fb-icon flex mb-0/85em">
                        <span
                          className={`lqd-icn-ess  themeTwelveHoverSectionIcon`}
                          aria-hidden="true"
                          dangerouslySetInnerHTML={{ __html: service?.icon }}
                        ></span>
                      </span>
                      {isEditor ? (
                        <BControlPro
                          placeholder="Sub Title..."
                          className="themeTwelveContentSubTitle"
                          tagName="h6"
                          value={service?.subtitle}
                          onChange={(v) =>
                            setAttributes({
                              productsInfo: updateData(
                                productsInfo,
                                v,
                                index,
                                "subtitle"
                              ),
                            })
                          }
                           Component={RichText}
                            {...premiumProps}
                        ></BControlPro>
                      ) : (
                        <RichText.Content
                          tagName="h6"
                          className="themeTwelveContentSubTitle"
                          value={service?.subtitle}
                        ></RichText.Content>
                      )}

                      {isEditor ? (
                        <BControlPro
                        Component={RichText}
                            {...premiumProps}
                          placeholder="Title...."
                          value={service?.title}
                          onChange={(v) =>
                            setAttributes({
                              productsInfo: updateData(productsInfo, v, index, "title"),
                            })
                          }
                          tagName="h2"
                          className="themeTwelveContentTitle"
                        ></BControlPro>
                      ) : (
                        <RichText.Content
                          value={service?.title}
                          tagName="h2"
                          className="themeTwelveContentTitle"
                        ></RichText.Content>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeTwelveHoverService;