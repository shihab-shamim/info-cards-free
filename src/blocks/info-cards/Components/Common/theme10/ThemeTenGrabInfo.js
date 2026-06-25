import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const ThemeTenGrabInfo = ({
  attributes,
  setAttributes,
  isEditor,
  premiumProps,
}) => {
  const { grabCardInfo, options } = attributes;
  const cardRef = useRef(null);
  useEffect(() => {
    if (!cardRef.current) return;

    VanillaTilt.init(cardRef.current, {
      max: 25,
      speed: 400,
      scale: 1.1,
      glare: false,
      "max-glare": 0.3,
      reset: true,
    });

    return () => {
      if (cardRef?.current?.vanillaTilt) {
        cardRef?.current?.vanillaTilt?.destroy();
      }
    };
  }, []);

  // console.log(premiumProps);

  return (
    <div className="themeTenProductInfoCard" ref={cardRef} data-tilt>
      <div className="themeTenCardQuest">
        <img
          //  crossOrigin="anonymous"
          className="grabImg"
          src={grabCardInfo?.image}
          alt="Meta Quest 3"
          // draggable={false}
        />
      </div>
      {/* <div className="ashgsgdsljglkdfg"> */}
      <article className="themeTenCardText">
        {isEditor ? (
          <BControlPro
            tagName="h2"
            className="themeTenGrabTitle"
            placeholder="title..."
            value={grabCardInfo?.title}
            onChange={(value) =>
              setAttributes({
                grabCardInfo: updateData(grabCardInfo, value, "title"),
              })
            }
              Component={RichText}
                      {...premiumProps}
          />
        ) : (
          <h2 className="themeTenGrabTitle">{grabCardInfo?.title}</h2>
        )}

        {isEditor ? (
          <BControlPro
            tagName="p"
            className="themeTenGrabDescription"
            placeholder="description..."
            value={grabCardInfo?.description}
            onChange={(value) =>
              setAttributes({
                grabCardInfo: updateData(grabCardInfo, value, "description"),
              })
            }
             Component={RichText}
                      {...premiumProps}
          />
        ) : (
          <p className="themeTenGrabDescription">{grabCardInfo?.description}</p>
        )}
        {isEditor ? (
          <BControlPro
            tagName="span"
            className="themeTenGrabButton"
            placeholder="button text..."
            value={grabCardInfo?.button?.text}
            onChange={(value) =>
              setAttributes({
                grabCardInfo: updateData(grabCardInfo, value, "button", "text"),
              })
            }
             Component={RichText}
                      {...premiumProps}
          />
        ) : (
          <a
            className="themeTenGrabButton"
            href={grabCardInfo?.button?.link}
            target={options?.isOpenNewTab ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {grabCardInfo?.button?.text}
          </a>
        )}
      </article>
      {/* </div> */}
    </div>
  );
};

export default ThemeTenGrabInfo;
