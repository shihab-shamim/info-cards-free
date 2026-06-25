import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  TextControl,
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
  const { styles = {}, options = {} } = attributes || {};

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "b-blocks")}
        initialOpen={false}
      >
        <Background
          label={__("Background Color", "b-blocks")}
          value={styles?.bg}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "bg") })
          }
        />
        <PanelRow>
          <Label>{__("Margin", "b-blocks")}</Label>
          <Device />{" "}
        </PanelRow>
        <BoxControl
          values={styles?.margin[device]}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "margin", device) })
          }
        />
        <PanelRow>
          <Label>{__("Padding", "b-blocks")}</Label>
          <Device />{" "}
        </PanelRow>
        <BoxControl
          values={styles?.padding[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "padding", device),
            })
          }
        />
        <BoxControl
          label={__("Border Radius", "b-blocks")}
          values={styles?.radius}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "radius") })
          }
        />
      </PanelBody>

      <PanelBody
        title={__("Card", "b-blocks")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <ColorControl
          label={__("Background Color", "b-blocks")}
          value={styles?.card?.bg}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "card", "bg") })
          }
        />
        <UnitControl
          className="mt10"
          label={__("Min Height", "b-blocks")}
          value={styles?.card?.minHeight}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "minHeight"),
            })
          }
        />
        <ShadowControl
          label={__("Shadow", "b-blocks")}
          value={styles?.card?.shadow}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "card", "shadow") })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "b-blocks")}
          values={styles?.card?.radius}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "card", "radius") })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Padding", "b-blocks")}
          values={styles?.card?.padding}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "padding"),
            })
          }
        />
        <SelectControl
          className="mt10"
          label={__("Image Size", "b-blocks")}
          value={styles?.card?.imageFit}
          options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Auto", value: "auto" },
            { label: "Fill", value: "fill" },
          ]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "imageFit"),
            })
          }
        />
        <Background
          label={__("Content Background (Light Style)", "b-blocks")}
          value={styles?.card?.content?.bg}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "content", "bg"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Content Padding", "b-blocks")}
          values={styles?.card?.content?.padding}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "content", "padding"),
            })
          }
        />

        <Background
          label={__("Image Overlay", "b-blocks")}
          value={styles?.card?.overlay}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "overlay"),
            })
          }
        />
      </PanelBody>
      {options?.isDateShow && (
        <PanelBody
          title={__("Date ", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Background Color (Light Style)", "b-blocks")}
            value={styles?.card?.date?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "date", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Text Color", "b-blocks")}
            value={styles?.card?.date?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "date", "color"),
              })
            }
          />

          <BoxControl
            className="mt10"
            label={__("Padding", "b-blocks")}
            values={styles?.card?.date?.padding}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "date", "padding"),
              })
            }
          />
          <Typography
            label={__("Typography", "b-blocks")}
            value={styles?.card?.date?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "date", "typo"),
              })
            }
          />
          <RangeControl
            label={__("Gap", "b-blocks")}
            value={styles?.card?.date?.gap}
            min={0}
            step={1}
            max={20}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "date", "gap"),
              })
            }
          />
        </PanelBody>
      )}
      {options?.isAdditionalInfoShow && !options?.lighStyleOn && (
        <PanelBody
          title={__("Stats", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Background Color (Light Sttyle)", "b-blocks")}
            value={styles?.card?.stat?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Color", "b-blocks")}
            value={styles?.card?.stat?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "color"),
              })
            }
          />
          <RangeControl
            label={__("Gap (Dark Style)", "b-blocks")}
            value={styles?.card?.stat?.gap}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "gap"),
              })
            }
          />
          <RangeControl
            label={__("Size", "b-blocks")}
            value={styles?.card?.stat?.size}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "size"),
              })
            }
          />

          <ColorControl
            label={__("Dot Color 1 (Light Style)", "b-blocks")}
            value={styles?.card?.stat?.dot?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "dot", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Dot Color 2 (Light Style)", "b-blocks")}
            value={styles?.card?.stat?.dot?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "dot", "color"),
              })
            }
          />

          <Typography
            label={__("Value Typography", "b-blocks")}
            value={styles?.card?.stat?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "typo"),
              })
            }
          />
          <RangeControl
            label={__("Value Gap", "b-blocks")}
            value={styles?.card?.stat?.valueGap}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "valueGap"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isAuthorShow && (
        <PanelBody
          title={__("Author Name", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Color (Dark Style)", "b-blocks")}
            value={styles?.card?.author?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "author", "color"),
              })
            }
          />
          <ColorControl
            label={__("Color (Light Style)", "b-blocks")}
            value={styles?.card?.author?.light?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "author",
                  "light",
                  "color",
                ),
              })
            }
          />
          <Typography
            label={__("Typography", "b-blocks")}
            value={styles?.card?.author?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "author", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isTitleShow && (
        <PanelBody
          title={__("Title", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Color (Dark Style)", "b-blocks")}
            value={styles?.card?.title?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "color"),
              })
            }
          />
          <ColorControl
            label={__("Color (Light Style)", "b-blocks")}
            value={styles?.card?.title?.light?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "title",
                  "light",
                  "color",
                ),
              })
            }
          />
          <Typography
            label={__("Typography", "b-blocks")}
            value={styles?.card?.title?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "typo"),
              })
            }
          />
          <BoxControl
            label={__("Margin", "b-blocks")}
            values={styles?.card?.title?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "margin"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isExcerptShow && (
        <PanelBody
          title={__("Description", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Color (Dark Style)", "b-blocks")}
            value={styles?.card?.des?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "des", "color"),
              })
            }
          />
          <ColorControl
            label={__("Color (Light Style)", "b-blocks")}
            value={styles?.card?.des?.light?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "des",
                  "light",
                  "color",
                ),
              })
            }
          />
          <Typography
            label={__("Typography", "b-blocks")}
            value={styles?.card?.des?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "des", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isButtonShow && (
        <PanelBody
          title={__("Button", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Color", "b-blocks")}
            value={styles?.card?.button?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "button", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "b-blocks")}
            value={styles?.card?.button?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "button", "typo"),
              })
            }
          />

          {options?.isDynamicPost && (
            <TextControl
              label={__("Button Text", "b-blocks")}
              value={options?.buttonText}
              onChange={(val) =>
                setAttributes({
                  options: updateData(options, val, "buttonText"),
                })
              }
            />
          )}
          <small
            style={{
              display: "block",
              color: "#856404",
              backgroundColor: "#fff3cd",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ffeeba",
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            <span style={{ marginRight: "5px" }}>⚠️</span>
            <strong>Note:</strong> Copy the icon from another location and paste
            it here.
          </small>
          <TextControl
            label={__("After Icon", "b-blocks")}
            value={styles?.card?.button?.icon}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "button", "icon"),
              })
            }
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
