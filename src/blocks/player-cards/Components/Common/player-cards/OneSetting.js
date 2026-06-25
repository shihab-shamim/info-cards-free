import {
  TextareaControl,
  TextControl,
  ToggleControl,
  SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
// import { updateData } from "../../../../utils/functions";
import {
  IconLibrary,
  InlineDetailMediaUpload,
  Label,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../utils/functions";
// import { IconLibrary, InlineDetailMediaUpload, Label } from "../../../../../bpl-tools/Components";

const OneSetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { cards } = attributes;
  const item = cards[index];

  return (
    <div>
      <InlineDetailMediaUpload
        placeholder="url..."
        label={__("Avatar Image", "info-cards")}
        value={{ url: item?.image }}
        onChange={(value) =>
          setAttributes({
            cards: updateData(cards, value.url, index, "image"),
          })
        }
      />

      <TextControl
        placeholder="Jane Doe..."
        label={__("Name", "info-cards")}
        value={item?.name || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "name"),
          })
        }
      />

      <TextControl
        placeholder="Position/Role..."
        label={__("Role", "info-cards")}
        value={item?.role || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "role"),
          })
        }
      />

      <TextControl
        placeholder="Team Alpha..."
        label={__("Group Name", "info-cards")}
        value={item?.groupName || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "groupName"),
          })
        }
      />

      <TextControl
        placeholder="City, Country..."
        label={__("City", "info-cards")}
        value={item?.city || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "city"),
          })
        }
      />

      <TextControl
        placeholder="January 2019..."
        label={__("Joined Date", "info-cards")}
        value={item?.joined || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "joined"),
          })
        }
      />

      <TextControl
        placeholder="Level 13..."
        label={__("Level", "info-cards")}
        value={item?.level || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "level"),
          })
        }
      />

      <TextControl
        placeholder="5,312 Points..."
        label={__("Points", "info-cards")}
        value={item?.points || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "points"),
          })
        }
      />

      <TextareaControl
        placeholder="description..."
        rows={5}
        className="mt10"
        label={__("Description", "info-cards")}
        value={item?.description || ""}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "description"),
          })
        }
      />

      <div style={{ border: "1px solid black", padding: "10px" }}>
        <Label>{__("Stats Array", "info-cards")}</Label>
        {item?.stats.map((stat, statIndex) => (
          <div key={statIndex}>
            <TextControl
              placeholder="Title..."
              label={__("Title", "info-cards")}
              value={stat?.title || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "stats",
                    statIndex,
                    "title",
                  ),
                })
              }
            />
            <IconLibrary
              label={__("Icon", "info-cards")}
              value={stat?.icon || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "stats",
                    statIndex,
                    "icon",
                  ),
                })
              }
            />
            <TextControl
              placeholder="Value..."
              label={__("Value", "info-cards")}
              value={stat?.value || ""}
              onChange={(val) =>
                setAttributes({
                  cards: updateData(
                    cards,
                    val,
                    index,
                    "stats",
                    statIndex,
                    "value",
                  ),
                })
              }
            />
        
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                color: "#d94f4f",
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
              onClick={() => {
                const currentStats = [...item.stats];
                currentStats.splice(statIndex, 1);
                setAttributes({
                  cards: updateData(cards, currentStats, index, "stats"),
                });
              }}
            >
              <span style={{ fontSize: "14px" }}>×</span>{" "}
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
            backgroundColor: "#007cba",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "500",
            gap: "5px",
          }}
          onClick={() => {
            const newStat = {
              title: "New Stat",
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor"><path d="M528 56H448V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40v16H48C21.5 56 0 77.5 0 104v80c0 48.2 36.5 87.9 83.3 94.7 19.3 35.6 52.8 62.4 92.7 73.1V400c0 17.7-14.3 32-32 32H128c-17.7 0-32 14.3-32 32v16c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-16c0-17.7-14.3-32-32-32h-16c-17.7 0-32-14.3-32-32v-48.2c39.9-10.7 73.4-37.5 92.7-73.1 46.8-6.8 83.3-46.5 83.3-94.7v-80c0-26.5-21.5-48-48-48zM128 184c0 18.5-12.7 34.1-30 38.6-8-12.8-10-29.3-10-38.6v-40h40v40zm384 0v40h40v-40c0 9.3-2 25.8-10 38.6-17.3-4.5-30-20.1-30-38.6v-40h40v40z" /></svg>',
              value: "1",
              isInfinity: false,
            };
            const currentStats = item?.stats || [];
            setAttributes({
              cards: updateData(
                cards,
                [...currentStats, newStat],
                index,
                "stats",
              ),
            });
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>+</span>
          {__("Add Stat", "info-cards")}
        </button>
      </div>

      <SelectControl
        className="mt10"
        label={__("Theme Class", "info-cards")}
        value={item?.themeClass || ""}
        options={[
          { label: "Default Red", value: "" },
          { label: "Theme Green", value: "pcb-theme-green" },
        ]}
        onChange={(val) =>
          setAttributes({
            cards: updateData(cards, val, index, "themeClass"),
          })
        }
      />
    </div>
  );
};

export default OneSetting;
