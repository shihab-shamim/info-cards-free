import {
  GradientPicker,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import {
  IconLibrary,
  InlineMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../utils/function";
import { BControlPro } from "../../../../../../../bpl-tools/ProControls";
// import { updateData } from "../../../utils/functions";
// import {
//   IconLibrary,
//   InlineMediaUpload,
//   Label,
// } from "../../../../../bpl-tools/Components";

const ThemeTwelveSettings = (props) => {
  const { attributes, setAttributes, index, premiumProps } = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];

  return (
    <div>
      <BControlPro
       Component={TextControl}
        {...premiumProps}
        label="Image"
        value={item?.cardLink?.url}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "cardLink", "url"),
          })
        }
      />

      <Label className="mt10 mb10" >Link Open In New Tab <BControlPro
       Component={ToggleControl}
        {...premiumProps}
        checked={item?.cardLink?.openInNewTab}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(
              productsInfo,
              !item?.cardLink?.openInNewTab,
              index,
              "cardLink",
              "openInNewTab"
            ),
          })
        }
      /></Label>
      <BControlPro
        label="Image"
        value={item?.img}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "img"),
          })
        }
        Component={InlineMediaUpload}
        {...premiumProps}
      />
      <BControlPro
        label="Title"
        placeholder="title..."
        value={item?.title}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "title"),
          })
        }
        Component={TextControl}
        {...premiumProps}
      />
      <BControlPro
        label="Sub Title"
        placeholder="sub title..."
        value={item?.subtitle}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "subtitle"),
          })
        }
        Component={TextControl}
        {...premiumProps}
      />
      <BControlPro
        label="Icon"
        value={item?.icon}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "icon"),
          })
        }
        Component={IconLibrary}
        {...premiumProps}
      />

      <Label className="mt10">Hover Overly</Label>

      <BControlPro
        value={item?.gradient}
        onChange={(v) =>
          setAttributes({
            productsInfo: updateData(productsInfo, v, index, "gradient"),
          })
        }
        Component={GradientPicker}
        {...premiumProps}
      />
    </div>
  );
};

export default ThemeTwelveSettings;
