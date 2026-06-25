import React, { useRef } from "react";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";
// import { updateData } from "../utils/functions";

const Card = ({ item, index, attributes, setAttributes, isBacked,premiumProps }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const img = imgRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const rect = card.getBoundingClientRect();
    const xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 15;
    const yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 15;

    card.style.transform = `rotateX(${-yAxis}deg) rotateY(${xAxis}deg)`;
    img.style.transform = `translateZ(120px) rotateX(${yAxis}deg)`;
    title.style.transform = `translateZ(90px) rotateX(${yAxis}deg)`;
    desc.style.transform = `translateZ(70px) rotateX(${yAxis}deg)`; 
  };

  const handleMouseEnter = () => {
    cardRef.current.style.transition = "none";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const img = imgRef.current;
    const title = titleRef.current;
    const desc = descRef.current;

    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.style.transform = "translateZ(0px) rotateX(0deg)";
    title.style.transform = "translateZ(0px) rotateX(0deg)";
    desc.style.transform = "translateZ(0px) rotateX(0deg)";
  };

  const handleProcessorClick = (e) => {
    const buttons = e.currentTarget.parentElement.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  const { image, title, description, button, variant } = item;
  const { options, productsInfo } = attributes;

 
  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imgbox">
        <img ref={imgRef} src={image} alt="Alienware Laptop" className="productImage" />
        { options?.isVisibleCircle && <div className="circle"></div>}
      </div>
      <div className="productDesc">
        {isBacked ? (
          <BControlPro
          className="productTitle"
            tagName="h1"
            ref={titleRef}
            value={title}
            placeholder="title..."
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(productsInfo, value, index, "title"),
              })
            }
            Component={RichText}
                 {...premiumProps}
          />
        ) : (
          <h1 ref={titleRef} className="productTitle" >{title}</h1>
        )}
        {isBacked ? (
          <BControlPro
          className="productDescription"
            tagName="h2"
            ref={descRef}
            value={description}
            placeholder="description..."
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
          <h2 ref={descRef} className="productDescription" >{description}</h2>
        )}
      </div>
      { options?.isVariantShow && <div className="processor" onClick={handleProcessorClick}>
        {/* <button>i3</button>
        <button>i5</button>
        <button className="active">i7</button>
        <button>i9</button> */}
        {variant.map((v, i) =>
          isBacked ? (
            <BControlPro
              tagName="button"
              // className={v === "i9" ? "active" : ""}
            className={`productInfoBtn`} 

              key={i}
              value={v}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    index,
                    "variant",
                    i
                  ),
                })
              }
              Component={RichText}
                 {...premiumProps}
            />
          ) : (
            <button 
            className={`productInfoBtn `} 
            // className="productInfoBtn"
            key={i}>
              {v}
            </button>
          )
        )}
      </div>}

      {isBacked ? (
        options?.isButtonShow&& <span className="buybox">
          <BControlPro
          className="productBuyBtn"
            tagName="button"
            value={button?.text}
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  value,
                  index,
                  "button",
                  "text"
                ),
              })
            }
            Component={RichText}
                 {...premiumProps}
          />
        </span>
      ) : (
      options?.isButtonShow&&   <a
          href={button?.link}
          target={options?.isOpenInNewTab ? "_blank" : "_self"}
          rel="noreferrer"
          className="buybox"
        >
          <button className="productBuyBtn" >{button?.text}</button>
        </a>
      )}
    </div>
  );
};

export default Card;

