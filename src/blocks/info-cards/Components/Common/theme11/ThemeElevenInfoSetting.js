import { ColorsControl, IconLibrary, Label } from "../../../../../../../bpl-tools/Components";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";
import { updateData } from "../../../utils/function";
import {
  ToggleControl,
  TextareaControl,
  TextControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";


const ThemeElevenInfoSetting = (props) => {
      const { attributes, setAttributes, index ,premiumProps} = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];
    return (
         <div>
      <BControlPro
        placeholder="title..."
        label="Title"
        value={item?.title}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "title"),
          })
        }
        Component={TextControl}
          {...premiumProps}
      />

      <BControlPro
        placeholder="description..."
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

      <BControlPro
        placeholder="button text..."
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
        placeholder="button link..."
        label="Button Link"
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

      <BControlPro
        label="Logo"
        value={item?.icon?.svgPath}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              value,
              index,
              "icon",
              "svgPath"
            ),
          })
        }
        Component={IconLibrary}
          {...premiumProps}
      />

      <Label>
        HighLight Service
        <BControlPro
          checked={item?.highlight}
          onChange={() =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                !item?.highlight,
                index,
                "highlight"
              ),
            })
          }
          Component={ToggleControl}
          {...premiumProps}
        />
      </Label>

      {item?.highlight && (
        <span>
          {" "}
          <Label>HighLight Text </Label>{" "}
          <BControlPro
            style={{ marginTop: "10px" }}
            value={item?.highlightLabel}
            onChange={(v) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  v,
                  index,
                  "highlightLabel"
                ),
              })
            }
            Component={TextControl}
          {...premiumProps}
          />{" "}
        </span>
      )}

      {/* <Label></Label> */}

      <BControlPro
        value={item?.icon}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "icon"),
          })
        }
        Component={ColorsControl}
          {...premiumProps}
      />

      <BControlPro
        label="Card TranslateY"
        value={item?.top}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "top"),
          })
        }

        Component={UnitControl}
          {...premiumProps}
      />
    </div>
    );
};

export default ThemeElevenInfoSetting;