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

      <TextareaControl
        placeholder="description..."
        rows={5}
        className="mt10"
        label={__("Description", "info-cards")}
        value={item?.excerpt || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "excerpt"),
          })
        }
      />
      <TextControl
        placeholder="author..."
        label={__("Author", "info-cards")}
        value={item?.author || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "author"),
          })
        }
      />
      <TextControl
        placeholder="day..."
        label={__("Day", "info-cards")}
        value={item?.day || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "day"),
          })
        }
      />
      <TextControl
        placeholder="month..."
        label={__("Month", "info-cards")}
        value={item?.month || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "month"),
          })
        }
      />
      <TextControl
        placeholder="year..."
        label={__("Year", "info-cards")}
        value={item?.year || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "year"),
          })
        }
      />

      <div style={{ border: "1px solid black", padding: "10px" }}>
        <Label>{__("Stats Section", "info-cards")}</Label>
        {item?.additionalInfo.map((info, infoIndex) => (
          <div key={infoIndex}>
            <IconLibrary
              label={__("Icon", "info-cards")}
              value={info?.icon || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "additionalInfo",
                    infoIndex,
                    "icon",
                  ),
                })
              }
            />
            <TextControl
              placeholder="value..."
              label={__("Value", "info-cards")}
              value={info?.value || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "additionalInfo",
                    infoIndex,
                    "value",
                  ),
                })
              }
            />
            <TextControl
              placeholder="link..."
              label={__("Link", "info-cards")}
              value={info?.link || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "additionalInfo",
                    infoIndex,
                    "link",
                  ),
                })
              }
            />
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#d94f4f", // লাল রঙ (Destructive look)
                backgroundColor: "transparent",
                border: "1px solid #d94f4f",
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "12px",
                cursor: "pointer",
                marginBottom: "8px",
                transition: "all 0.2s ease",
                gap: "4px",
              }}
              // মাউস নিলে ব্যাকগ্রাউন্ড লাল হবে এমন ইফেক্ট চাইলে inline hover কাজ করবে না,
              // তবে সিম্পল রাখার জন্য এই স্টাইলটি যথেষ্ট।
              onClick={() => {
                const currentInfo = [...item.additionalInfo];
                currentInfo.splice(infoIndex, 1);
                setAttributes({
                  cards: updateData(
                    cards,
                    currentInfo,
                    index,
                    "additionalInfo",
                  ),
                });
              }}
            >
              <span style={{ fontSize: "14px" }}>×</span> {/* রিমুভ আইকন */}
              {__("Remove", "info-cards")}
            </button>
          </div>
        ))}
        <hr />

        <button
          className="components-button is-secondary"
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 15px",
            backgroundColor: "#007cba", // প্রফেশনাল ব্লু কালার
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            gap: "5px",
          }}
          onClick={() => {
            const newItem = { icon: "", value: "", link: "#" };
            const currentInfo = item?.additionalInfo || [];
            setAttributes({
              cards: updateData(
                cards,
                [...currentInfo, newItem],
                index,
                "additionalInfo",
              ),
            });
          }}
        >
          {/* প্লাস আইকন যোগ করলে দেখতে আরও ভালো লাগবে */}
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>+</span>
          {__("Add Stat", "info-cards")}
        </button>
      </div>

      <TextControl
        placeholder="button..."
        label={__("Button", "info-cards")}
        value={item?.button?.text || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "button", "text"),
          })
        }
      />
      <TextControl
        placeholder="link..."
        label={__("Link", "info-cards")}
        value={item?.button?.link || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "button", "link"),
          })
        }
      />

      <ToggleControl
        label={__("Light Style on", "info-cards")}
        checked={item?.lightStyle || false}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "lightStyle"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
