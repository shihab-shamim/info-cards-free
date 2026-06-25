import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  BoxControl,
  ColorControl,
  Device,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {}, sliderSettings = {} } = attributes || {};

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff8e1",
          borderLeft: "4px solid #ffc107",
          padding: "10px 15px",
          marginBottom: "20px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <span style={{ fontSize: "16px", marginTop: "-2px" }}>💡</span>
        <small
          style={{
            color: "#6d4c41",
            fontSize: "12px",
            lineHeight: "1.5",
            display: "block",
            margin: 0,
          }}
        >
          <strong>Note:</strong> You may face a hover issue on the slider in
          tablet and mobile view inside the editor, but it will work properly on
          the frontend.
        </small>
      </div>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles?.bg}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "bg") })
          }
        />

        <PanelRow>
          <Label>{__("Padding", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.padding[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "padding", device),
            })
          }
        />
        <PanelRow>
          <Label>{__("Margin", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.margin[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "margin", device),
            })
          }
        />

        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={styles?.radius}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "radius"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
        <PanelRow>
          <Label>{__("Inactive Width", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.width.inactive[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "width",
                "inactive",
                device,
              ),
            })
          }
        />
        <PanelRow>
          <Label>{__("Active Width", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.width.active[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "width",
                "active",
                device,
              ),
            })
          }
        />

        <PanelRow>
          <Label>{__("Inactive Height", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.height.inactive[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "height",
                "inactive",
                device,
              ),
            })
          }
        />

        <PanelRow>
          <Label>{__("Active Height", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.height.active[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "height",
                "active",
                device,
              ),
            })
          }
        />

        <BoxControl
          label={__("Content Padding", "info-cards")}
          className="mt10"
          values={styles?.card?.padding}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "padding"),
            })
          }
        />

        <BoxControl
          className="mt10"
          label={__("Margin", "info-cards")}
          values={styles?.card?.margin}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "margin"),
            })
          }
        />

        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={styles?.card?.radius}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "radius"),
            })
          }
        />

        <SelectControl
          className="mt10"
          label={__("Image Position", "info-cards")}
          value={styles?.card?.imagePosition}
          options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "Scale-down", value: "scale-down" },
            { label: "None", value: "none" },
            { label: "Center", value: "center" },
          ]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "imagePosition"),
            })
          }
        />

        <Background
          label={__("Overlay", "info-cards")}
          value={styles?.card?.overlay}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "overlay"),
            })
          }
        />

        <ShadowControl
          label={__("Active Shadow", "info-cards")}
          value={styles?.card?.activeShadow}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "activeShadow"),
            })
          }
        />
      </PanelBody>

      {sliderSettings?.headingShow && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Heading Text", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.headingText?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "headingText", "color"),
              })
            }
          />

          <BoxControl
            className="mt10"
            label={__("Padding", "info-cards")}
            values={styles?.card?.headingText?.padding}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "headingText",
                  "padding",
                ),
              })
            }
          />

          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.card?.headingText?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "headingText",
                  "margin",
                ),
              })
            }
          />

          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.headingText?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "headingText", "typo"),
              })
            }
          />
          <ColorControl
            label={__("Badge Color", "info-cards")}
            value={styles?.card?.headingText?.badge?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "headingText",
                  "badge",
                  "color",
                ),
              })
            }
          />
          <RangeControl
            className="mt10"
            label={__("Badge Width", "info-cards")}
            value={styles?.card?.headingText?.badge?.width}
            min={0}
            max={200}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "headingText",
                  "badge",
                  "width",
                ),
              })
            }
          />
        </PanelBody>
      )}

      {sliderSettings?.titleShow && (
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

          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.card?.title?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "margin"),
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

      {sliderSettings?.descriptionShow && (
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

          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.card?.description?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "description",
                  "margin",
                ),
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
      {sliderSettings?.dots && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Dots", "info-cards")}
          initialOpen={false}
        >
          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.dots?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "dots", "margin"),
              })
            }
          />
          <RangeControl
            className="mt10"
            label={__("Gap", "info-cards")}
            value={styles?.dots?.gap}
            min={0}
            step={1}
            max={100}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "dots", "gap"),
              })
            }
          />
          <RangeControl
            className="mt10"
            label={__("Size", "info-cards")}
            value={styles?.dots?.size}
            min={0}
            max={200}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "dots", "size"),
              })
            }
          />

          <ColorControl
            label={__("Active Color", "info-cards")}
            value={styles?.dots?.active?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "dots", "active", "color"),
              })
            }
          />

          <ColorControl
            label={__("Inactive Color", "info-cards")}
            value={styles?.dots?.inactive?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "dots", "inactive", "color"),
              })
            }
          />
        </PanelBody>
      )}

      {sliderSettings?.nav && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Navigation", "info-cards")}
          initialOpen={false}
        >
          <Background
            label={__("Background Color", "info-cards")}
            value={styles?.nav?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "nav", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.nav?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "nav", "color"),
              })
            }
          />
          <RangeControl
            className="mt10"
            label={__("Background Size", "info-cards")}
            value={styles?.nav?.size}
            min={0}
            max={200}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "nav", "size"),
              })
            }
          />
          <RangeControl
            className="mt10"
            label={__("Icon Size", "info-cards")}
            value={styles?.nav?.iconsize}
            min={0}
            max={200}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "nav", "iconsize"),
              })
            }
          />

          <BoxControl
            className="mt10"
            label={__("Radius", "info-cards")}
            values={styles?.nav?.radius}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "nav", "radius"),
              })
            }
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
