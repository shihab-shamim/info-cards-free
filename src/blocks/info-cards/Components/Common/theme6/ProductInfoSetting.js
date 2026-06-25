import {
  InlineDetailMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import {  TextareaControl, TextControl } from "@wordpress/components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const ProductInfoSetting = (props) => {
  const { attributes, setAttributes, index ,premiumProps} = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];

  const handlaVariantDelete = (i) => {
    const newVariant = item?.variant.filter((v, id) => id !== i);
  
    setAttributes({
      productsInfo: updateData(productsInfo, newVariant, index, "variant"),
    });
  };

  const handleAddVariant = () => {
    const newVariant = [...item?.variant, "00"];
    setAttributes({
      productsInfo: updateData(productsInfo, newVariant, index, "variant"),
    });
  };

  return (
    <div>
      <BControlPro
        label="Image"
        value={{ url: item?.image }}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value.url, index, "image"),
          })
        }
        Component={InlineDetailMediaUpload}
                      {...premiumProps}
      />

      <BControlPro
        label="Title"
        value={item?.title}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "title"),
          })
        }
         Component={TextControl}
                      {...premiumProps}
        type="text"
      />
      <BControlPro
        label="Description"
        value={item?.description}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "description"),
          })
        }
         Component={TextareaControl}
                      {...premiumProps}
      />
      <Label> Variant </Label>

      {item?.variant.map((vari, i) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={i}
        >
          <BControlPro
           Component={TextControl}
                      {...premiumProps}
          onChange={(value)=>setAttributes({productsInfo:updateData(productsInfo,value,index,"variant",i)})}
           type="text" value={vari}></BControlPro>
          <svg
            onClick={() => handlaVariantDelete(i)}
            style={{ marginTop: "-12px", color: "red", cursor: "pointer" }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="3em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
          </svg>
        </div>
      ))}
      <button
        onClick={() => handleAddVariant()}
        style={{
          backgroundColor: "#4B2AAD",
          color: "white",
          padding: "5px",
          border: "none",
          fontWeight: 500,
          fontSize: "14px",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "194px",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>+</span>
        Add Variant
      </button>

       <div  style={{marginTop:"10px"}}>

       
      <BControlPro
     
        label="Button Text"
        value={item?.button?.text}
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
         Component={TextControl}
                      {...premiumProps}
      />
      <BControlPro
        label="Button URL"
        value={item?.button?.link}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "button",
              "link"
            ),
          })
        }
         Component={TextControl}
                      {...premiumProps}
      />
      <small>Link Disable on Editor </small>
      </div>
    </div>
  );
};

export default ProductInfoSetting;
