import { __ } from "@wordpress/i18n";
import { produce } from "immer";

import {
  PanelBody,
  PanelRow,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  SelectControl,
  contentAlign,
  
} from "@wordpress/components";

import {
  Background,
  ColorsControl,
  Typography,
  ShadowControl,
  ColorControl,
} from "../../../../../../../../bpl-tools/Components";


const Style = ({
  attributes,
  setAttributes,

}) => {
  const {
    background,
    padding,
    cardPadding,
    cardShadow,
    contentPadding,
    titleColor,
    titleTypo,
    descColor,
    descTypo,
    btnColors,
    btnHovColors,
    btnAlign,
    btnTypo,
    btnPadding,
    cardRadius,
    btnRadius,
    
  } = attributes;

  return (
  
    
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Cards", "info-cards")}
            initialOpen={true}
          >
            <Background
              label={__("background", "info-cards")}
              defaults={{ color: "#0000" }}
              value={background}
              onChange={(val) => setAttributes({ background: val })}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={padding}
                resetValues={{
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ padding: value })}
              />
            </PanelRow>
          </PanelBody>

          {/* Card */}
          <PanelBody
            initialOpen={false}
            title={__("Card", "info-cards")}
            className="bPlPanelBody"
          >
            <BoxControl
              label={__("Padding", "info-cards")}
              values={cardPadding}
              resetValues={{
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              onChange={(value) => setAttributes({ cardPadding: value })}
            />

            <UnitControl
              className="mt20"
              label={__("Border radious", "info-cards")}
              labelPosition="left"
              value={cardRadius}
              onChange={(val) => setAttributes({ cardRadius: val })}
            />

            <ShadowControl
              className="mt20"
              value={cardShadow}
              onChange={(val) => setAttributes({ cardShadow: val })}
              produce={produce}
            />
          </PanelBody>

          {/* Content */}
          <PanelBody
            initialOpen={false}
            title={__("Content", "info-cards")}
            className="bPlPanelBody"
          >
            <SelectControl
              label={__("Alignment", "info-cards")}
              labelPosition="left"
              value={contentAlign}
              onChange={(val) => setAttributes({ contentAlign: val })}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={contentPadding}
                resetValues={{
                  top: "0px",
                  right: "0x",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ contentPadding: value })}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "info-cards")}
            initialOpen={false}
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={titleTypo}
              onChange={(val) => setAttributes({ titleTypo: val })}
              defaults={{ fontSize: 16 }}
              produce={produce}
            />

            <ColorControl
              label={__("Color", "info-cards")}
              value={titleColor}
              onChange={(val) => setAttributes({ titleColor: val })}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={descTypo}
              onChange={(val) => setAttributes({ descTypo: val })}
              produce={produce}
            />

            <ColorControl
              label={__("Color", "info-cards")}
              value={descColor}
              onChange={(val) => setAttributes({ descColor: val })}
            />
          </PanelBody>

          {/* Button */}
          <PanelBody
            initialOpen={false}
            title={__("Button", "info-cards")}
            className="bPlPanelBody"
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={btnTypo}
              onChange={(val) => setAttributes({ btnTypo: val })}
            />

            <SelectControl
              className="mt20"
              label={__("Alignment", "info-cards")}
              labelPosition="left"
              value={btnAlign}
              onChange={(val) => setAttributes({ btnAlign: val })}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
            />

            <ColorsControl
              className="mt20"
              label={__("Colors", "info-cards")}
              value={btnColors}
              onChange={(val) => setAttributes({ btnColors: val })}
            />

            <ColorsControl
              label={__("Hover Colors", "info-cards")}
              value={btnHovColors}
              onChange={(val) => setAttributes({ btnHovColors: val })}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={btnPadding}
                resetValues={{
                  top: "0px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ btnPadding: value })}
              />
            </PanelRow>

            <UnitControl
              className="mt20"
              label={__("Border Radious", "info-cards")}
              labelPosition="left"
              value={btnRadius}
              onChange={(val) => setAttributes({ btnRadius: val })}
            />
          </PanelBody>
        </>
    

    
  );
};

export default Style;
