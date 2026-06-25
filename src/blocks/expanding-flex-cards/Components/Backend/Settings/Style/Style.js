import { useState } from "react";
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
  ColorsControl,
  Device,
  Label,
  Typography,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles, options } = attributes || {};
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "info-cards")}
        initialOpen={true}
      >
        {/* <small>{__("Note: Height adjusts automatically on tablet and mobile devices.", "info-cards")}</small> */}
        <div
          style={{
            margin: "10px 0",
            padding: "10px 12px",
            backgroundColor: "#fff8e5",
            borderLeft: "4px solid #f0b849",
            fontSize: "12px",
            color: "#1e1e1e",
          }}
        >
          {__(
            "Note: Height adjusts automatically on tablet and mobile devices.",
            "info-cards",
          )}
        </div>
        <UnitControl
          label={__("Height", "info-cards")}
          value={styles?.container?.height}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "container", "height") })
          }
        />
        <Background
          label={__("Background", "info-cards")}
          value={styles?.bg}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "bg") })
          }
        />
        <PanelRow>
          <Label>{__("Margin", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // label={__("Margin", "info-cards")}
          values={styles?.margin[device]}
          onChange={(val) =>
            setAttributes({ styles: updateData(styles, val, "margin", device) })
          }
        />
        <PanelRow>
          <Label>{__("Padding", "info-cards")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          // label={__("Margin", "info-cards")}
          values={styles?.padding[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "padding", device),
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
        title={__("Cards", "info-cards")}
        initialOpen={false}
      >
        <div
          style={{
            margin: "10px 0",
            padding: "10px 12px",
            backgroundColor: "#fff8e5",
            borderLeft: "4px solid #f0b849",
            fontSize: "12px",
            color: "#1e1e1e",
          }}
        >
          {__(
            "Note: The active card will ignore this limit and automatically expand to 100% width.",
            "info-cards",
          )}
        </div>
        <UnitControl
          className="mt10"
          label={__("Max Width", "info-cards")}
          value={styles?.card?.maxWidth}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "maxWidth"),
            })
          }
          units={"px"}
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

        <SelectControl
          className="mt10"
          label={__("Image Position", "info-cards")}
          value={styles?.card?.fitImage}
          options={[
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "100% 100%" },
            { label: "Auto (Original Size)", value: "auto" },
          ]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "fitImage"),
            })
          }
        />
      </PanelBody>
   {   options?.isIconshow && <PanelBody
        className="bPlPanelBody"
        title={__("Icon", "info-cards")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Background", "info-cards")}
          value={styles?.card?.icon?.bg || "#ffffff"}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "bg"),
            })
          }
        />
        <RangeControl
          label={__("Icon Size", "info-cards")}
          value={styles?.card?.icon?.size}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "size"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Padding", "info-cards")}
          values={
            styles?.card?.icon?.padding || {
              top: "10px",
              right: "10px",
              bottom: "10px",
              left: "10px",
            }
          }
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "padding"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={
            styles?.card?.icon?.radius || {
              top: "100%",
              right: "100%",
              bottom: "100%",
              left: "100%",
            }
          }
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "icon", "radius"),
            })
          }
        />
        <UnitControl className="mt10" label='Gap'  value={styles?.card?.icon?.gap} onChange={(val)=>setAttributes({styles:updateData(styles,val,"card","icon","gap")})} />
      </PanelBody>}
      {options?.isTitleshow && <PanelBody
        className="bPlPanelBody"
        title={__("Title", "info-cards")}
        initialOpen={false}
      >
        <Typography
          label={__("Typography", "info-cards")}
          value={styles?.card?.title?.typo}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "title", "typo"),
            })
          }
        />
        <ColorControl
          label={__("Color", "info-cards")}
          value={styles?.card?.title?.color || "#ffffff"}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "title", "color"),
            })
          }
        />
  
      </PanelBody>}

      {options?.issubtitleShow &&  <PanelBody
        className="bPlPanelBody"
        title={__("Subtitle", "info-cards")}
        initialOpen={false}
      >
        <Typography
          label={__("Typography", "info-cards")}
          value={styles?.card?.subtitle?.typo}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "subtitle", "typo"),
            })
          }
        />
        <ColorControl
          label={__("Color", "info-cards")}
          value={styles?.card?.subtitle?.color || "#ffffff"}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "subtitle", "color"),
            })
          }
        />
        <BoxControl
          className="mt10"
          label={__("Margin", "info-cards")}
          values={styles?.card?.subtitle?.margin}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "card", "subtitle", "margin"),
            })
          }
        />
      </PanelBody>}
    </>
  );
};

export default Style;
