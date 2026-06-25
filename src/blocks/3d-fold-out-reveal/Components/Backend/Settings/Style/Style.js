import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  Device,
  Label,
  BoxControl,
  ColorControl,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {}, options = {} } = attributes;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "info-cards")}
        initialOpen={false}
      >
        <Background
          value={styles.bg}
          onChange={(val) => setAttributes({ styles: { ...styles, bg: val } })}
        />

        <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>

        <BoxControl
          values={styles.padding[device] || {}}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "padding", device),
            })
          }
        />

        <PanelRow>
          <Label>Margin</Label>
          <Device />
        </PanelRow>

        <BoxControl
          values={styles.margin[device] || {}}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "margin", device) })
          }
        />

        <BoxControl
          className="mt15"
          label={"Border Radius"}
          values={styles.border || {}}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "border") })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles.card.bg}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "bg"),
            })
          }
        />

        <small
          className="mt10"
          style={{
            display: "block",
            padding: "8px 12px",
            backgroundColor: "#fff7ed", // Light orange background
            color: "#c2410c", // Dark orange text
            borderLeft: "4px solid #f97316", // Warning border
            borderRadius: "4px",
            fontSize: "0.85rem",
            lineHeight: "1.4",
          }}
        >
          <strong>Note:</strong> Each content section will have its own
          individual padding.
        </small>

        <BoxControl
          className="mt15"
          label={"Padding"}
          values={styles?.card?.padding || {}}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "padding"),
            })
          }
        />
        <UnitControl
          className="mt15"
          unit="px"
          label={"Image Height"}
          value={styles?.card?.image?.height}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "height"),
            })
          }
        />

        <SelectControl
          className="mt15"
          label={"Image Object Fit"}
          value={styles?.card?.image?.objectFit}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "objectFit"),
            })
          }
          options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "Scale Down", value: "scale-down" },
          ]}
        />
      </PanelBody>
      {options?.showTitle && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Title", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.title?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.title?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.showSubtitle && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Subtitle", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.subTitle?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "subTitle", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.subTitle?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "subTitle", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.showDescription && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Description", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.description?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "description", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.description?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "description", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.showButton && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Button", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.btn?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "btn", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.btn?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "btn", "typo"),
              })
            }
          />
          <BoxControl
            label={"Padding"}
            values={styles?.card?.btn?.padding || {}}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "btn", "padding"),
              })
            }
          />
          <BoxControl
            label={"Border Radius"}
            values={styles?.card?.btn?.border || {}}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "btn", "border"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.showIcons && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Icon", "info-cards")}
          initialOpen={false}
        >
          <Background
            label={__("Background", "info-cards")}
            value={styles?.card?.icon.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "icon", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.icon?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "icon", "color"),
              })
            }
          />
          <ColorControl
            label={__("Close Icon Background", "info-cards")}
            value={styles?.card?.icon?.closeBg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "icon", "closeBg"),
              })
            }
          />
          <ColorControl
            label={__("Close Icon Color", "info-cards")}
            value={styles?.card?.icon?.closeIconColor}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "icon",
                  "closeIconColor",
                ),
              })
            }
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
