import {
  
  TextareaControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { InlineMediaUpload, Label } from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";

const ThemeNineTextOverlySetting = (props) => {
  const { attributes, setAttributes, index,premiumProps } = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];

  return (
    <div>
      <BControlPro
        label="Image"
        value={item?.imageUrl}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "imageUrl"),
          })
        }
        Component={InlineMediaUpload}
          {...premiumProps}
      />

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
        placeholder="button text ..."
        label="Button Text"
        value={item?.buttonText}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "buttonText"),
          })
        }
        Component={TextControl}
          {...premiumProps}
      />
      <BControlPro
        placeholder="button URL ..."
        label="Button URL"
        value={item?.buttonLink}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "buttonLink"),
          })
        }
        Component={TextControl}
          {...premiumProps}
      />

      <Label>
        Link Open in New Tab{" "}
        <BControlPro
          checked={item?.newTab}
          onChange={() =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                !item?.newTab,
                index,
                "newTab"
              ),
            })
          }
          Component={ToggleControl}
          {...premiumProps}
        />
      </Label>
    </div>
  );
};

export default ThemeNineTextOverlySetting;
