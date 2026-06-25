import { TextareaControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../utils/functions";
import { InlineDetailMediaUpload } from "../../../../../../../bpl-tools/Components";

const OneSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { cards } = attributes;
  const item = cards[index];

  return (
    <div>
      <InlineDetailMediaUpload
        label={__("Background Image", "info-cards")}
        value={{ url: item?.image }}
        onChange={(value) =>
          setAttributes({
            cards: updateData(cards, value.url, index, "image"),
          })
        }
      />

      <TextControl
        label={__("Title", "info-cards")}
        value={item?.title || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "title"),
          })
        }
      />

      <TextareaControl
        rows={7}
        className="mt10"
        label={__("Description", "info-cards")}
        value={item?.description || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "description"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
