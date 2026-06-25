import { TextareaControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../../utils/functions";
import {
  ColorControl,
  IconLibrary,
  InlineDetailMediaUpload,
} from "../../../../../../../bpl-tools/Components";
const OneSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { cards, options = {} } = attributes;
  const item = cards[index];

  return (
    <div>
      <InlineDetailMediaUpload
        label={__("Background Image", "info-cards")}
        // value={item.bgUrl}
        value={{ url: item?.bgUrl }}
        onChange={(value) =>
          setAttributes({
            cards: updateData(cards, value.url, index, "bgUrl"),
          })
        }
      />
      <TextControl
        label={__("Title", "info-cards")}
        value={item.title}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "title"),
          })
        }
      />
      {options?.titleLink && (
        <TextControl
          className="mt10"
          label={__("Title Link", "info-cards")}
          value={item.link}
          onChange={(val) =>
            setAttributes({
              cards: updateData(cards, val, index, "link"),
            })
          }
        />
      )}
      <TextControl
        className="mt10"
        label={__("Subtitle", "info-cards")}
        value={item.subtitle}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "subtitle"),
          })
        }
      />

      <IconLibrary
        className="mt10"
        label={__("Icon", "info-cards")}
        value={item.icon}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "icon"),
          })
        }
      />
      <ColorControl
        className="mt10"
        label={__("Icon Color", "info-cards")}
        value={item.iconColor}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "iconColor"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
