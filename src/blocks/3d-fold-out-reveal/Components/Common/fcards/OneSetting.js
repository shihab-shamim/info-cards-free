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
      <TextControl
        placeholder="subtitle..."
        label={__("Sub Title", "info-cards")}
        value={item?.subtitle || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "subtitle"),
          })
        }
      />

      <TextareaControl
        rows={5}
        placeholder="description..."
        label={__("Description", "info-cards")}
        value={item?.description || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "description"),
          })
        }
      />

      <TextControl
        placeholder="button text..."
        label={__("Button Text", "info-cards")}
        value={item?.btn?.text || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "btn", "text"),
          })
        }
      />

      <TextControl
        placeholder="button link..."
        label={__("Button Link", "info-cards")}
        value={item?.btn?.link || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "btn", "link"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
