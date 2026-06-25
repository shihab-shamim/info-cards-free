import React from 'react';
import { Label } from '../../../../../../../bpl-tools/Components';
import { TextControl } from "@wordpress/components";
import { updateData } from '../../../../../../../bpl-tools/utils/functions';
import { BControlPro } from '../../../../../../../bpl-tools/ProControls';


const SevenInfoCardSetting = (props) => {
      const { attributes, setAttributes, index ,premiumProps} = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];
    return (
        <div>
      <span>Tag</span>
      <Label className="mt5">
        {" "}
        <BControlPro
          placeholder="name..."
          label="Name"
          value={item?.tag?.name}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "tag", "name"),
            })
          }
           Component={TextControl}
                                    {...premiumProps}
        />
        <BControlPro
          placeholder="value..."
          label="Value"
          value={item?.tag?.value}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "tag", "value"),
            })
          }
          Component={TextControl}
                                    {...premiumProps}
        />
      </Label>

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
        value={item?.content}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "content"),
          })
        }
        Component={TextControl}
                                    {...premiumProps}
      />

      <span>Button</span>
      <Label className="mt5">
        {" "}
        <BControlPro
          placeholder="name..."
          label="Name"
          value={item?.button?.text}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "button", "text"),
            })
          }
          Component={TextControl}
                                    {...premiumProps}v
        />
        <BControlPro
          placeholder="url..."
          label="URL"
          value={item?.button?.link}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "button", "link"),
            })
          }
          Component={TextControl}
                                    {...premiumProps}
        />
      </Label>
    </div>
    );
};

export default SevenInfoCardSetting;  