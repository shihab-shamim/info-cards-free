import {
  TextareaControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../utils/functions";
import {
  IconLibrary,
  InlineDetailMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";

const OneSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { cards } = attributes;
  const item = cards[index];
  console.log(item);
  
  return (
    <div>
      <InlineDetailMediaUpload
        placeholder="url..."
        label={__("Image", "info-cards")}
        value={{ url: item?.image }}
        onChange={(value) =>
          setAttributes({
            cards: updateData(cards, value.url, index, "image"),
          })
        }
      />

      <TextControl
        placeholder="title..."
        label={__("Title", "info-cards")}
        value={item?.title || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "title"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
