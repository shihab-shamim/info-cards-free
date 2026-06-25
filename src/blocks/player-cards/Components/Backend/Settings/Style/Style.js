import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
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
          values={styles?.margin?.[device]}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "margin", device) })
          }
        />
        <PanelRow>
          <Label>{__("Padding", "b-blocks")}</Label>
          <Device />{" "}
        </PanelRow>
        <BoxControl
          values={styles?.padding?.[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "padding", device),
            })
          }
        />
        <BoxControl
          className="mt10"
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
        <ColorControl
          label={__("Border Color", "info-cards")}
          value={styles?.card?.border?.color}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "border", "color"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Width", "info-cards")}
          values={styles?.card?.border?.width}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "border", "width"),
            })
          }
        />
        {/* <BoxControl
          className="mt10"
          label={__("Padding", "b-blocks")}
          values={styles?.card?.padding}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "padding"),
            })
          }
        /> */}
      </PanelBody>

      <PanelBody
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Image", "b-blocks")}
      >
        <UnitControl
          label={__("Width", "b-blocks")}
          unit="px"
          value={styles?.card?.image?.width}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "width"),
            })
          }
        />
        <UnitControl
          label={__("Height", "b-blocks")}
          unit="px"
          value={styles?.card?.image?.height}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "height"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "b-blocks")}
          values={styles?.card?.image?.radius}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "radius"),
            })
          }
        />

        <SelectControl
          className="mt10"
          label={__("Image Fit", "b-blocks")}
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
      </PanelBody>

      {options?.isNameShow && (
        <PanelBody
          title={__("Name", "b-blocks")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color", "b-blocks")}
            value={styles?.card?.title?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "color"),
              })
            }
          />

          <ColorControl
            label={__("Hover Text Color", "b-blocks")}
            value={styles?.card?.title?.hoverColor}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "title", "hoverColor"),
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
        </PanelBody>
      )}

      {options?.isDescriptionShow && (
        <PanelBody
          title={__("Description", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color", "info-cards")}
            value={styles?.card?.des?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "des", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.des?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "des", "typo"),
              })
            }
          />

          <BoxControl
            className="mt10"
            label={__("Margin", "b-blocks")}
            values={styles?.card?.des?.margin}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "des", "margin"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isRoleShow && (
        <PanelBody
          title={__("Role", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color (Green)", "info-cards")}
            value={styles?.card?.role?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "role", "color_green"),
              })
            }
          />
          <ColorControl
            label={__("Text Color (Red)", "info-cards")}
            value={styles?.card?.role?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "role", "color_red"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.role?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "role", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isCityShow && (
        <PanelBody
          title={__("City", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color (Green)", "info-cards")}
            value={styles?.card?.city?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "city", "color_green"),
              })
            }
          />
          <ColorControl
            label={__("Text Color (Red)", "info-cards")}
            value={styles?.card?.city?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "city", "color_red"),
              })
            }
          />

          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.city?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "city", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isJoinedShow && (
        <PanelBody
          title={__("Joined", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color (Green)", "info-cards")}
            value={styles?.card?.joined?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "joined",
                  "color_green",
                ),
              })
            }
          />
          <ColorControl
            label={__("Text Color (Red)", "info-cards")}
            value={styles?.card?.joined?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "joined", "color_red"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.joined?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "joined", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isGroupNameShow && (
        <PanelBody
          title={__("Group Name", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Text Color (Green)", "info-cards")}
            value={styles?.card?.groupName?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "groupName",
                  "color_green",
                ),
              })
            }
          />
          <ColorControl
            label={__("Text Color (Red)", "info-cards")}
            value={styles?.card?.groupName?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "groupName",
                  "color_red",
                ),
              })
            }
          />

          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.groupName?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "groupName", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      {options?.isLevelShow && (
        <PanelBody
          title={__("Level", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Background Color", "info-cards")}
            value={styles?.card?.level?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "level", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Text Color", "info-cards")}
            value={styles?.card?.level?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "level", "color"),
              })
            }
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.level?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "level", "typo"),
              })
            }
          />
          <BoxControl
            className=""
            values={styles?.card?.level?.padding}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "level", "padding"),
              })
            }
            label={__("Padding", "info-cards")}
          />
        </PanelBody>
      )}

      {options?.isPointsShow && (
        <PanelBody
          title={__("Points", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Background Color", "info-cards")}
            value={styles?.card?.points?.bg}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "points", "bg"),
              })
            }
          />
          <ColorControl
            label={__("Text Color", "info-cards")}
            value={styles?.card?.points?.color}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "points", "color"),
              })
            }
          />

          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.points?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "points", "typo"),
              })
            }
          />

          <BoxControl
            className=""
            values={styles?.card?.points?.padding}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "points", "padding"),
              })
            }
            label={__("Padding", "info-cards")}
          />
        </PanelBody>
      )}

      {options?.isStatsShow && (
        <PanelBody
          title={__("Stats", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <h4 style={{ marginBottom: "5px", marginTop: "0" }}>
            {__("Stat Title", "info-cards")}
          </h4>
          <ColorControl
            label={__("Title Color (Green)", "info-cards")}
            value={styles?.card?.stat?.title?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "title",
                  "color_green",
                ),
              })
            }
          />
          <ColorControl
            label={__("Title Color (Red)", "info-cards")}
            value={styles?.card?.stat?.title?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "title",
                  "color_red",
                ),
              })
            }
          />
          <Typography
            label={__("Title Typography", "info-cards")}
            value={styles?.card?.stat?.title?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "title",
                  "typo",
                ),
              })
            }
          />

          <h4 style={{ marginBottom: "5px", marginTop: "15px" }}>
            {__("Stat Value", "info-cards")}
          </h4>
          <ColorControl
            label={__("Value Color (Green)", "info-cards")}
            value={styles?.card?.stat?.value?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "value",
                  "color_green",
                ),
              })
            }
          />
          <ColorControl
            label={__("Value Color (Red)", "info-cards")}
            value={styles?.card?.stat?.value?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "value",
                  "color_red",
                ),
              })
            }
          />
          <Typography
            label={__("Value Typography", "info-cards")}
            value={styles?.card?.stat?.value?.typo}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "value",
                  "typo",
                ),
              })
            }
          />

          <h4 style={{ marginBottom: "5px", marginTop: "15px" }}>
            {__("Stat Icon", "info-cards")}
          </h4>
          <ColorControl
            label={__("Icon Color (Green)", "info-cards")}
            value={styles?.card?.stat?.icon?.color_green}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "icon",
                  "color_green",
                ),
              })
            }
          />
          <ColorControl
            label={__("Icon Color (Red)", "info-cards")}
            value={styles?.card?.stat?.icon?.color_red}
            onChange={(val) =>
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "stat",
                  "icon",
                  "color_red",
                ),
              })
            }
          />
          <UnitControl
            label={__("Icon Size", "info-cards")}
            value={styles?.card?.stat?.icon?.size}
            onChange={(val) =>
              setAttributes({
                styles: updateData(styles, val, "card", "stat", "icon", "size"),
              })
            }
          />
        </PanelBody>
      )}

      {options.isPromptShow && (
        <PanelBody
          title={__("Prompt", "info-cards")}
          className="bPlPanelBody"
          initialOpen={false}
        >
          <ColorControl
            label={__("Prompt Color", "info-cards")}
            value={styles?.card?.prompt?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "prompt", "color"),
              })
            }
          />
          <Typography
            label={__("Prompt Typography", "info-cards")}
            value={styles?.card?.prompt?.typo}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "prompt", "typo"),
              })
            }
          />
        </PanelBody>
      )}

      <PanelBody
        title={__("Sidebar ", "info-cards")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <Background
          label={__("Background Color (green)", "info-cards")}
          value={styles?.card?.sidebar?.bg_green}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "sidebar", "bg_green"),
            })
          }
        />
        <Background
          label={__("Background Color (red)", "info-cards")}
          value={styles?.card?.sidebar?.bg_red}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "sidebar", "bg_red"),
            })
          }
        />
        <UnitControl
          label={__("Width", "info-cards")}
          value={styles?.card?.sidebar?.width}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "sidebar", "width"),
            })
          }
        />

        <h4 style={{ marginBottom: "5px", marginTop: "15px" }}>
          {__("Vertical Bar", "info-cards")}
        </h4>
        <ColorControl
          label={__("Bar Color (Green)", "info-cards")}
          value={styles?.card?.sidebar?.divider?.color_green}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "sidebar",
                "divider",
                "color_green",
              ),
            })
          }
        />
        <ColorControl
          label={__("Bar Color (Red)", "info-cards")}
          value={styles?.card?.sidebar?.divider?.color_red}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "sidebar",
                "divider",
                "color_red",
              ),
            })
          }
        />
        <UnitControl
          unit="px"
          label={__("Bar Width", "info-cards")}
          value={styles?.card?.sidebar?.divider?.width}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "sidebar",
                "divider",
                "width",
              ),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
