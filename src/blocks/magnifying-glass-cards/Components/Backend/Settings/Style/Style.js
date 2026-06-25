import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  BorderControl,
  PanelBody,
  PanelRow,
  RangeControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  BButtonGroup,
  BoxControl,
  ColorControl,
  Device,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {} } = attributes;

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
        title={__("Cards", "info-cards")}
        initialOpen={false}
      >
        <Background
          value={styles?.card?.bg}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "bg"),
            })
          }
        />

        <UnitControl
          units={["px"]}
          label="Height"
          value={styles?.card?.height}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "height"),
            })
          }
        />

        <BorderControl
          className="mt15"
          label="Outline Border"
          value={styles?.card?.outline}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "outline"),
            })
          }
        />

        <BoxControl
          className="mt15"
          label={"Border Radius"}
          values={styles.card?.radius || {}}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "card", "radius") })
          }
        />

        <ShadowControl
          label="Shadow"
          value={styles?.card?.shadow}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "card", "shadow") })
          }
        />

        <BButtonGroup
          label="Text Align"
          value={styles?.card?.textAlign}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "textAlign"),
            })
          }
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
        />

        <ColorControl
          label="Title Color"
          value={styles?.card?.title?.color}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "title", "color"),
            })
          }
        />

        <Typography
          label="Title Typography"
          value={styles?.card?.title?.typo}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "title", "typo"),
            })
          }
        />
      </PanelBody>

      {/*   "image": {
            "clip": {
              "focus": 82,
              "spotlight": 82,
              "radius": 40
            },
            "brightness": 1.3,
            "scale": 1.5
          }
           */}

      <PanelBody title={__("Image", "info-cards")} initialOpen={false}>
        <RangeControl
          step={1}
          label="Focus Area Position"
          value={styles?.card?.image?.clip?.focus}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "clip", "focus"),
            })
          }
        />

        <RangeControl
          step={1}
          label="Spotlight Area Position"
          value={styles?.card?.image?.clip?.spotlight}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "image",
                "clip",
                "spotlight",
              ),
            })
          }
        />

        <RangeControl
          step={1}
          max={600}
          label="Clip Radius"
          value={styles?.card?.image?.clip?.radius}
          onChange={(val) =>
            setAttributes({
              styles: updateData(
                styles,
                val,
                "card",
                "image",
                "clip",
                "radius",
              ),
            })
          }
        />

        <RangeControl
          min={0}
          max={5}
          step={0.1}
          label="Brightness"
          value={styles?.card?.image?.brightness}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "brightness"),
            })
          }
        />

        <RangeControl
          min={0.5}
          max={3}
          step={0.1}
          label="Scale"
          value={styles?.card?.image?.scale}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "scale"),
            })
          }
        />

        <RangeControl
          min={1}
          max={6}
          step={1}
          label="Duration (Open Image)"
          value={styles?.card?.image?.duration}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "duration"),
            })
          }
        />

        <RangeControl
          min={0.1}
          max={6}
          step={0.1}
          label="Delay (Open Image)"
          value={styles?.card?.image?.delay}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "image", "delay"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        title={__("Magnifying Glass", "info-cards")}
        initialOpen={false}
      >
        <RangeControl
          min={1}
          max={400}
          step={1}
          label="Size"
          value={styles?.card?.glass?.size}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "glass", "size"),
            })
          }
        />

        <RangeControl
          min={1}
          max={100}
          step={1}
          label="Radius"
          value={styles?.card?.glass?.radius}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "glass", "radius"),
            })
          }
        />

        <BorderControl
          label="Border"
          value={styles?.card?.glass?.border}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "glass", "border"),
            })
          }
        />

        <ShadowControl
          label="Shadow"
          value={styles?.card?.glass?.shadow}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "glass", "shadow"),
            })
          }
        />

        <RangeControl
          min={1}
          max={100}
          step={1}
          label="Icon Size"
          value={styles?.card?.icon?.size || 24}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "size"),
            })
          }
        />

        <ColorControl
          label="Icon Color"
          value={styles?.card?.icon?.color}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "color"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
