import { __ } from "@wordpress/i18n";
import { produce } from "immer";

import {
  PanelBody,
  PanelRow,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  SelectControl,
  contentAlign,
  BorderControl,
  BorderBoxControl,
} from "@wordpress/components";

import {
  Background,
  ColorsControl,
  Typography,
  ShadowControl,
  ColorControl,
  Label,
  Device,
  BButtonGroup,
  BoxControl as BoxControls,
  IconLibrary,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import { RangeControl } from "@wordpress/components";
import { perUnit, pxUnit } from "../../../../../../../../bpl-tools/utils/options";
import { BControlPro, SelectControlPro } from "../../../../../../../../bpl-tools/ProControls";
import { BDevice } from "../../../../../../../../bpl-tools/Components/Deprecated";

const Style = ({
  attributes,
  setAttributes,
  editDevice,
  activeIndex,
  premiumProps,
}) => {
  const {
    theme,
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
    styles,
    options,
    productsInfo,
  } = attributes;

  return (
    <>
      {["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
        theme
      ) && (
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
                  right: "0x",
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
                right: "0x",
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
                  right: "0x",
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
      )}

      {theme === "theme6" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__(" Section", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__(" Background", "info-cards")}
              value={styles?.bg}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "bg") })
              }
               Component={Background}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Radius ", "info-cards")}
              values={styles?.radius}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "radius") })
              }
              Component={BoxControls}
                 {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Card", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              step={1}
              label={__("Width ", "info-cards")}
              value={styles?.card?.width}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "width"),
                })
              }
              Component={UnitControl}
                 {...premiumProps}
            />
            <BControlPro
              step={1}
              style={{ marginTop: "10px" }}
              label={__("Height ", "info-cards")}
              value={styles?.card?.height}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "height"),
                })
              }
              Component={UnitControl}
                 {...premiumProps}

            />

            <BControlPro
              label={__(" Background", "info-cards")}
              value={styles?.card?.bg}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "bg"),
                })
              }
              Component={Background}
                 {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Padding ", "info-cards")}
              values={styles?.card?.padding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "padding"),
                })
              }
              Component={BoxControls}
                 {...premiumProps}
            />
            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Radius ", "info-cards")}
              values={styles?.card?.radius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "radius"),
                })
              }
              Component={BoxControls}
                 {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.shadow}
              label={__(" Shadow", "info-cards")}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "shadow"),
                })
              }
              Component={ShadowControl}
                 {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Image", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              step={1}
              label={__("Width ", "info-cards")}
              value={styles?.card?.image?.width}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "image", "width"),
                })
              }
              Component={UnitControl}
                 {...premiumProps}
            />
            <UnitControl step={1} style={{marginTop:"10px"}} label={__("Height ", "info-cards")} value={styles?.card?.image?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","image","height")})} />

            <SelectControlPro
              label={__("Select Image Fit")}
              value={styles?.card?.image?.position}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "image",
                    "position"
                  ),
                })
              }
              options={[
                {
                  value: null,
                  label: "Select a Image Position",
                  disabled: true,
                },
                { value: "cover", label: "Cover" },
                { value: "contain", label: "Contain" },
                { value: "scale-down", label: "Scale-Down" },
              ]}
              Component={SelectControl}
                 {...premiumProps}
                 proValues={["cover","contain","scale-down"]}

            />
          </PanelBody>

          {options?.isVisibleCircle && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Circle", "info-cards")}
              initialOpen={false}
            >
              <BControlPro
                label={__("Background ", "info-cards")}
                value={styles?.card?.circle?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "circle", "bg"),
                  })
                }
                Component={Background}
                 {...premiumProps}
              />
              <BControlPro
                step={1}
                label={__("Circle Radius ", "info-cards")}
                value={styles?.card?.circle?.width}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "circle",
                      "width"
                    ),
                  })
                }
                Component={UnitControl}
                 {...premiumProps}
              />
              {/* <UnitControl  style={{marginTop:"10px"}}   label={__("Height ", "info-cards")} value={styles?.card?.circle?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","circle","height")})} /> */}

              <BControlPro
                style={{ marginTop: "10px" }}
                label={__("Border Radius ", "info-cards")}
                values={styles?.card?.circle?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "circle",
                      "radius"
                    ),
                  })
                }
                Component={BoxControls}
                 {...premiumProps}
              />
            </PanelBody>
          )}

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Color ", "info-cards")}
              value={styles?.card?.title?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "title", "color"),
                })
              }
              Component={ColorControl}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Typography ", "info-cards")}
              value={styles?.card?.title?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "title", "typo"),
                })
              }
              Component={Typography}
                 {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Alignment", "info-cards")}
              value={styles?.card?.title?.alignment}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
                { label: "Justify", value: "justify" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "title",
                    "alignment"
                  ),
                })
              }
              Component={BButtonGroup}
                 {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Color ", "info-cards")}
              value={styles?.card?.description?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "description",
                    "color"
                  ),
                })
              }
              Component={ColorControl}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Typography ", "info-cards")}
              value={styles?.card?.description?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "description",
                    "typo"
                  ),
                })
              }
              Component={Typography}
                 {...premiumProps}
            />

            <BControlPro
              label={__("Alignment", "info-cards")}
              value={styles?.card?.description?.alignment}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
                { label: "Justify", value: "justify" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "description",
                    "alignment"
                  ),
                })
              }
              Component={BButtonGroup}
                 {...premiumProps}
            />
          </PanelBody>

          {options?.isVariantShow && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Variants", "info-cards")}
              initialOpen={false}
            >
              <BControlPro
                label={__(" Color", "info-cards")}
                value={styles?.card?.variantState?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Background Color", "info-cards")}
                value={styles?.card?.variantState?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "bg"
                    ),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Active Color", "info-cards")}
                value={styles?.card?.variantState?.active?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "active",
                      "color"
                    ),
                  })
                }
                  Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__(" Active Background Color", "info-cards")}
                value={styles?.card?.variantState?.active?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "active",
                      "bg"
                    ),
                  })
                }
                  Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                value={styles?.card?.variantState?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "typo"
                    ),
                  })
                }
                  Component={Typography}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Padding ", "info-cards")}
                values={styles?.card?.variantState?.padding}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "padding"
                    ),
                  })
                }
                  Component={BoxControls}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Radius ", "info-cards")}
                values={styles?.card?.variantState?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "radius"
                    ),
                  })
                }
                  Component={BoxControls}
                 {...premiumProps}
              />
              <BControlPro
                value={styles?.card?.variantState?.shadow}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "shadow"
                    ),
                  })
                }
                  Component={ShadowControl}
                 {...premiumProps}
              />

              <SelectControlPro
                label={__("Justify Content ", "info-cards")}
                value={styles?.card?.variantState?.alignment}
                options={[
                  {
                    value: null,
                    label: "Select a Justify-Content",
                    disabled: true,
                  },
                  { value: "flex-start", label: "Flex Start" },
                  { value: "flex-end", label: "Flex End" },
                  { value: "center", label: "Center" },
                  { value: "space-between", label: "Space Between" },
                  { value: "space-around", label: "Space Around" },
                  { value: "space-evenly", label: "Space Evenly" },
                ]}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "variantState",
                      "alignment"
                    ),
                  })
                }
                  Component={SelectControl}
                 {...premiumProps}
                 proValues={["flex-start","flex-end","center","space-between","space-around","space-evenly"]}
              />

              <Label>
                Gap{" "}
                <BControlPro
                  step={1}
                  value={styles?.card?.variantState?.gap}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "card",
                        "variantState",
                        "gap"
                      ),
                    })
                  }
                  Component={UnitControl}
                 {...premiumProps}

                />
              </Label>
            </PanelBody>
          )}

          {options?.isButtonShow && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Button", "info-cards")}
              initialOpen={false}
            >
              <Label className="mt0">
                Width{" "}
                <BControlPro
                  step={1}
                  value={styles?.card?.button?.width}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "card",
                        "button",
                        "width"
                      ),
                    })
                  }
                  Component={UnitControl}
                 {...premiumProps}
                />{" "}
              </Label>

              <BControlPro
                style={{ marginTop: "10px" }}
                label={__("Alignment", "info-cards")}
                value={styles?.card?.button?.alignment}
                options={[
                  { label: "Left", value: "left" },
                  { label: "Center", value: "center" },
                  { label: "Right", value: "right" },
                ]}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "alignment"
                    ),
                  })
                }
                Component={BButtonGroup}
                 {...premiumProps}
              />

              <BControlPro
                label={__(" Color", "info-cards")}
                value={styles?.card?.button?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Background Color", "info-cards")}
                value={styles?.card?.button?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "button", "bg"),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Hover Color", "info-cards")}
                value={styles?.card?.button?.hover?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "hover",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__(" Hover Background Color", "info-cards")}
                value={styles?.card?.button?.hover?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "hover",
                      "bg"
                    ),
                  })
                }
                Component={ColorControl}
                 {...premiumProps}
              />

              <BControlPro
                label={__(" Typography", "info-cards")}
                value={styles?.card?.button?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "button", "typo"),
                  })
                }
                Component={Typography}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Padding ", "info-cards")}
                values={styles?.card?.button?.padding}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "padding"
                    ),
                  })
                }
                Component={BoxControls}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Radius ", "info-cards")}
                values={styles?.card?.button?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "radius"
                    ),
                  })
                }
                Component={BoxControls}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Shadow ", "info-cards")}
                value={styles?.card?.button?.shadow}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "shadow"
                    ),
                  })
                }
                Component={ShadowControl}
                 {...premiumProps}
              />
            </PanelBody>
          )}
        </>
      )}

      {theme === "theme7" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Section", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Background", "info-cards")}
              value={styles?.bg}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "bg") })
              }
              Component={Background}
                 {...premiumProps}
            />

            <BControlPro
              label={__("Radius", "info-cards")}
              values={styles?.radius}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "radius") })
              }
              Component={BoxControls}
                 {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Card", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mt0"> Width</Label>
              <Device />
            </PanelRow>
            <BControlPro
              value={styles?.card?.width[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "width",
                    editDevice
                  ),
                })
              }
              Component={UnitControl}
                 {...premiumProps}
            />
            <PanelRow>
              <Label className="mt0"> Height</Label>
              <Device />
            </PanelRow>
            <BControlPro
              value={styles?.card?.height[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "height",
                    editDevice
                  ),
                })
              }
              Component={UnitControl}
                 {...premiumProps}
            />
            <BControlPro
              style={{ marginTop: "10px" }}
              label={__(" Content Padding", "info-cards")}
              values={styles?.card?.contentPadding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "contentPadding"),
                })
              }
              Component={BoxControls}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Background", "info-cards")}
              value={productsInfo[activeIndex]?.backgroundImage}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    activeIndex,
                    "backgroundImage"
                  ),
                })
              }
              Component={Background}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Padding", "info-cards")}
              values={styles?.card?.cardPadding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "cardPadding"),
                })
              }
              Component={BoxControls}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Radius", "info-cards")}
              values={styles?.card?.radius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "radius"),
                })
              }
                 Component={BoxControls}
                 {...premiumProps}
            />

            <BControlPro
              label={__("Content Background", "info-cards")}
              value={productsInfo[activeIndex]?.backgroundColor}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    activeIndex,
                    "backgroundColor"
                  ),
                })
              }
                 Component={ColorControl}
                 {...premiumProps}
            />

            <BControlPro
              label={__("Content  Shadow", "info-cards")}
              value={productsInfo[activeIndex]?.shadow}
              onChange={(value) =>
                setAttributes({
                  productsInfo: updateData(
                    productsInfo,
                    value,
                    activeIndex,
                    "shadow"
                  ),
                })
              }
                 Component={ShadowControl}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Content  Radius", "info-cards")}
              values={styles?.card?.contentRadius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "contentRadius"),
                })
              }
                 Component={BoxControls}
                 {...premiumProps}
            />

            <Label>Hover Rotation (deg)</Label>

            {options?.isHoverRotated && (
              <BControlPro
                max={200}
                value={styles?.card?.cardRoted}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "cardRoted"),
                  })
                }
                   Component={RangeControl}
                 {...premiumProps}
              />
            )}
          </PanelBody>

          {options?.isTagShow && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Tag", "info-cards")}
              initialOpen={false}
            >
              <Label className="mt0">
                Width{" "}
                <BControlPro
                  value={styles?.card?.tag?.width}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(styles, value, "card", "tag", "width"),
                    })
                  }
                     Component={UnitControl}
                 {...premiumProps}
                />
              </Label>
              <Label className="mt15 mb15">
                Height{" "}
                <BControlPro
                  value={styles?.card?.tag?.height}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "card",
                        "tag",
                        "height"
                      ),
                    })
                  }
                     Component={UnitControl}
                 {...premiumProps}
                />
              </Label>

              <BControlPro
                label={__("Background-Color", "info-cards")}
                value={styles?.card?.tag?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "tag", "bg"),
                  })
                }
                   Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Shadow ", "info-cards")}
                value={productsInfo[activeIndex]?.tagShadow}
                onChange={(value) =>
                  setAttributes({
                    productsInfo: updateData(
                      productsInfo,
                      value,
                      activeIndex,
                      "tagShadow"
                    ),
                  })
                }
                   Component={ShadowControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Radius ", "info-cards")}
                values={styles?.card?.tag?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "tag", "radius"),
                  })
                }
                   Component={BoxControls}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Padding ", "info-cards")}
                values={styles?.card?.tag?.padding}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "tag", "padding"),
                  })
                }
                   Component={BoxControls}
                 {...premiumProps}
              />

              <Label>TranslateX </Label>
              <BControlPro
                max={300}
                value={styles?.card?.tag?.position?.left}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "tag",
                      "position",
                      "left"
                    ),
                  })
                }
                   Component={RangeControl}
                 {...premiumProps}
              />
              <Label>TranslateY </Label>
              <BControlPro
                max={300}
                value={styles?.card?.tag?.position?.top}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "tag",
                      "position",
                      "top"
                    ),
                  })
                }
                   Component={RangeControl}
                 {...premiumProps}
              />

              <BControlPro
                label={__("Name Color ", "info-cards")}
                value={styles?.card?.tag?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "tag", "color"),
                  })
                }
                   Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Name Typography ", "info-cards")}
                value={styles?.card?.tag?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "tag", "typo"),
                  })
                }
                   Component={Typography}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Value Color ", "info-cards")}
                value={styles?.card?.tag?.value?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "tag",
                      "value",
                      "color"
                    ),
                  })
                }
                   Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Value Typography ", "info-cards")}
                value={styles?.card?.tag?.value?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "tag",
                      "value",
                      "typo"
                    ),
                  })
                }
                   Component={Typography}
                 {...premiumProps}
              />
            </PanelBody>
          )}

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Color ", "info-cards")}
              value={styles?.card?.title?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "title", "color"),
                })
              }
                 Component={ColorControl}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Typography ", "info-cards")}
              value={styles?.card?.title?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "title", "typo"),
                })
              }
                 Component={Typography}
                 {...premiumProps}
            />
          </PanelBody>
          <PanelBody
            lassName="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Color ", "info-cards")}
              value={styles?.card?.description?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "description",
                    "color"
                  ),
                })
              }
                 Component={ColorControl}
                 {...premiumProps}
            />
            <BControlPro
              label={__("Typography ", "info-cards")}
              value={styles?.card?.description?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "description",
                    "typo"
                  ),
                })
              }
                 Component={Typography}
                 {...premiumProps}
            />
          </PanelBody>

          {options?.isButtonShow && (
            <PanelBody
              lassName="bPlPanelBody"
              title={__("Button", "info-cards")}
              initialOpen={false}
            >
              <BControlPro
                label={__("Color ", "info-cards")}
                value={styles?.card?.button?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "button",
                      "color"
                    ),
                  })
                }
                   Component={ColorControl}
                 {...premiumProps}
              />
              <BControlPro
                label={__("Typography ", "info-cards")}
                value={styles?.card?.button?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "button", "typo"),
                  })
                }
                   Component={Typography}
                 {...premiumProps}
              />
            </PanelBody>
          )}
        </>
      )}

      {theme === "theme8" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Section", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              value={styles?.bg}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "bg") })
              }
               Component={Background}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Radius", "info-cards")}
              values={styles?.radius}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "radius") })
              }
               Component={BoxControls}
                               {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Card", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              value={styles?.card?.bg}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "bg"),
                })
              }
               Component={Background}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Margin", "info-cards")}
              values={styles?.card?.margin}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "margin"),
                })
              }
               Component={BoxControls}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Padding", "info-cards")}
              values={styles?.card?.padding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "padding"),
                })
              }
               Component={BoxControls}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Radius", "info-cards")}
              values={styles?.card?.radius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "radius"),
                })
              }
               Component={BoxControls}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Box-Shadow", "info-cards")}
              value={styles?.card?.shadow}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "shadow"),
                })
              }
              Component={ShadowControl}
                               {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Header", "info-cards")}
            initialOpen={false}
          >
            <Label>
              {" "}
              <span style={{ width: "120px" }}>Image Width</span>{" "}
              <BControlPro
                value={styles?.card?.profileImage?.width}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "profileImage",
                      "width"
                    ),
                  })
                }
                Component={UnitControl}
                               {...premiumProps}
              />
            </Label>
            <Label>
              {" "}
              <span style={{ width: "120px" }}>Image Height</span>{" "}
              <BControlPro
                value={styles?.card?.profileImage?.height}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "profileImage",
                      "height"
                    ),
                  })
                }
                Component={UnitControl}
                               {...premiumProps}
              />
            </Label>

            <BControlPro
              label={__("Image Radius", "info-cards")}
              values={styles?.card?.profileImage?.radius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "profileImage",
                    "radius"
                  ),
                })
              }
              Component={BoxControls}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Image Border", "info-cards")}
              value={styles?.card?.profileImage?.border}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "profileImage",
                    "border"
                  ),
                })
              }
              Component={BorderControl}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Name Color", "info-cards")}
              value={styles?.card?.header?.name?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "name",
                    "color"
                  ),
                })
              }
              Component={ColorControl}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Name Typography", "info-cards")}
              value={styles?.card?.header?.name?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "name",
                    "typo"
                  ),
                })
              }
              Component={Typography}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Title Color", "info-cards")}
              value={styles?.card?.header?.title?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "title",
                    "color"
                  ),
                })
              }
              Component={ColorControl}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Title Typography", "info-cards")}
              value={styles?.card?.header?.title?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "title",
                    "typo"
                  ),
                })
              }
              Component={Typography}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Company Color", "info-cards")}
              value={styles?.card?.company?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "company",

                    "color"
                  ),
                })
              }
              Component={ColorControl}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Company Typography", "info-cards")}
              value={styles?.card?.company?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "company", "typo"),
                })
              }
              Component={Typography}
                               {...premiumProps}
            />

            {options?.isStatusShow && (
              <>
                <BControlPro
                  label={__("Status Color", "info-cards")}
                  value={styles?.card?.header?.status?.color}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "card",
                        "header",
                        "status",
                        "color"
                      ),
                    })
                  }
                  Component={ColorControl}
                               {...premiumProps}
                />

                <BControlPro
                  label={__("Status Typography", "info-cards")}
                  value={styles?.card?.header?.status?.typo}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "card",
                        "header",
                        "status",
                        "typo"
                      ),
                    })
                  }
                  Component={Typography}
                               {...premiumProps}
                />
              </>
            )}
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Description Color", "info-cards")}
              value={styles?.card?.header?.description?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "description",
                    "color"
                  ),
                })
              }
              Component={ColorControl}
                               {...premiumProps}
            />

            <BControlPro
              label={__("Description Typography", "info-cards")}
              value={styles?.card?.header?.description?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "description",
                    "typo"
                  ),
                })
              }
              Component={Typography}
                               {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              value={styles?.card?.header?.description?.alignment}
              label={__("Alignment", "info-cards")}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "description",
                    "alignment"
                  ),
                })
              }
              Component={BButtonGroup}
                               {...premiumProps}
            />
          </PanelBody>

          {options?.isStateShow && (
            <PanelBody
              className="bPlPanelBody"
              title={__("States", "info-cards")}
              initialOpen={false}
            >
              <BControlPro
                label={__("Background Color", "info-cards")}
                value={styles?.card?.states?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "card", "states", "bg"),
                  })
                }
                Component={ColorControl}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Padding", "info-cards")}
                values={styles?.card?.states?.padding}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "padding"
                    ),
                  })
                }
                Component={BoxControls}
                               {...premiumProps}
              />
              <BControlPro
                label={__("Radius", "info-cards")}
                values={styles?.card?.states?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "radius"
                    ),
                  })
                }
                Component={BoxControls}
                               {...premiumProps}
              />
              <BControlPro
                label={__("Number Color", "info-cards")}
                value={styles?.card?.states?.number?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "number",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Number Typo", "info-cards")}
                value={styles?.card?.states?.number?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "number",
                      "typo"
                    ),
                  })
                }
                Component={Typography}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Label Color", "info-cards")}
                value={styles?.card?.states?.text?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "text",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Label Typo", "info-cards")}
                value={styles?.card?.states?.text?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "states",
                      "text",
                      "typo"
                    ),
                  })
                }
                Component={Typography}
                               {...premiumProps}
              />
            </PanelBody>
          )}

          {options?.isButtonShow && (
            <PanelBody
              className="bPlPanelBody"
              title={__("Button", "info-cards")}
              initialOpen={false}
            >
              <BControlPro
                label={__("Background", "info-cards")}
                value={styles?.card?.messageButton?.bg}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "messageButton",
                      "bg"
                    ),
                  })
                }
                Component={ColorControl}
                               {...premiumProps}
              />
              <BControlPro
                label={__("Color", "info-cards")}
                value={styles?.card?.messageButton?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "messageButton",
                      "color"
                    ),
                  })
                }
                Component={ColorControl}
                               {...premiumProps}
              />
              <BControlPro
                label={__("Typography", "info-cards")}
                value={styles?.card?.messageButton?.typo}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "messageButton",
                      "typo"
                    ),
                  })
                }
                Component={Typography}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Radius", "info-cards")}
                values={styles?.card?.messageButton?.radius}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "messageButton",
                      "radius"
                    ),
                  })
                }
                Component={BoxControls}
                               {...premiumProps}
              />
              <BControlPro
                label={__("Padding", "info-cards")}
                values={styles?.card?.messageButton?.padding}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "card",
                      "messageButton",
                      "padding"
                    ),
                  })
                }
                Component={BoxControls}
                               {...premiumProps}
              />

              <BControlPro
                label={__("Button Icon", "info-cards")}
                value={options?.messageButtonIcon}
                onChange={(value) => {
                  setAttributes({
                    options: updateData(options, value, "messageButtonIcon"),
                  });
                }}
                Component={IconLibrary}
                               {...premiumProps}
              />

              <Label>
                <span>Icon size </span>{" "}
                <span style={{ width: "180px" }}>
                  <BControlPro
                    onChange={(value) =>
                      setAttributes({
                        styles: updateData(
                          styles,
                          value,
                          "card",
                          "messageButton",
                          "size"
                        ),
                      })
                    }
                    value={styles?.card?.messageButton?.size}
                    Component={UnitControl}
                               {...premiumProps}
                  />
                </span>
              </Label>
            </PanelBody>
          )}
        </>
      )}

      {theme === "theme9" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Section", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Background", "info-cards")}
              value={styles?.bg}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "bg") })
              }
               Component={Background}
                      {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Radius", "info-cards")}
              values={styles?.radius}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "radius") })
              }
               Component={BoxControls}
                      {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("View", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Overly", "info-cards")}
              value={styles?.overlay}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "overlay") })
              }
               Component={Background}
                      {...premiumProps}
            />
            <BControlPro
              label={__("Padding", "info-cards")}
              values={styles?.view?.padding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "view", "padding"),
                })
              }
               Component={BoxControls}
                      {...premiumProps}
            />
            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Rounded", "info-cards")}
              values={styles?.view?.radius}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "view", "radius"),
                })
              }
               Component={BoxControls}
                      {...premiumProps}
            />
            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Content Padding", "info-cards")}
              values={styles?.view?.contentPadding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "view", "contentPadding"),
                })
              }
               Component={BoxControls}
                      {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Color", "info-cards")}
              value={styles?.title?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "title", "color"),
                })
              }
               Component={ColorControl}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Typography", "info-cards")}
              value={styles?.title?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "title", "typo"),
                })
              }
               Component={Typography}
                      {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            {/* description */}
            <BControlPro
              label={__("Color", "info-cards")}
              value={styles?.description?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "description", "color"),
                })
              }
               Component={ColorControl}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Typography", "info-cards")}
              value={styles?.description?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "description", "typo"),
                })
              }
               Component={Typography}
                      {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Button", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              value={styles?.button?.colors}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "button", "colors"),
                })
              }
               Component={ColorsControl}
                      {...premiumProps}
            />
            <BControlPro
              label={__("Hover Colors", "info-cards")}
              value={styles?.button?.hover}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "button", "hover"),
                })
              }
              Component={ColorsControl}
                      {...premiumProps}
            />
            <BControlPro
              label={__("Typography", "info-cards")}
              value={styles?.button?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "button", "typo"),
                })
              }
              Component={Typography}
                      {...premiumProps}
            />
            <BControlPro
              label={__("Padding", "info-cards")}
              values={styles?.button?.padding}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "button", "padding"),
                })
              }
              Component={BoxControls}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Focus Outline", "info-cards")}
              value={styles?.button?.border}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "button", "border"),
                })
              }
              Component={BorderBoxControl}
                      {...premiumProps}
            />
          </PanelBody>
        </>
      )}

      {theme === "theme10" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Card", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mt0">Width</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              value={styles?.card?.width[editDevice]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "width", editDevice),
                })
              }
               Component={UnitControl}
                      {...premiumProps}


            />

            <PanelRow>
              <Label className="mt0">Height</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              value={styles?.card?.height[editDevice]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "height", editDevice),
                })
              }
              Component={UnitControl}
                      {...premiumProps}

            />

            <Label className="mt8">Info Box Translate (X)</Label>

            <BControlPro
              units={[perUnit()]}
              step={1}
              value={styles?.card?.translateX}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "translateX"),
                })
              }
              Component={UnitControl}
                      {...premiumProps}
            />

            <Label className="mt8">Info Box Translate (y)</Label>

            <BControlPro
              units={[perUnit()]}
              step={1}
              value={styles?.card?.translateY}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "translateY"),
                })
              }
              Component={UnitControl}
                      {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.bg}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "card", "bg") })
              }
              Component={Background}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Overlay", "info-cards")}
              value={styles?.card?.overlay}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "overlay"),
                })
              }
              Component={Background}
                      {...premiumProps}
            />

            <BControlPro
              label={__(" Border Radius", "info-cards")}
              values={styles?.card?.radius}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "radius"),
                })
              }
              Component={BoxControls}
                      {...premiumProps}
            />

            <PanelRow>
              <Label className="mt0">Image Width</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              units={[pxUnit()]}
              value={styles?.card?.image?.width[editDevice]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "image",
                    "width",
                    editDevice
                  ),
                })
              }
              Component={UnitControl}
                      {...premiumProps}
            />

            <PanelRow>
              <Label className="mt0">Image Height</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              units={[pxUnit()]}
              value={styles?.card?.image?.height[editDevice]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "image",
                    "height",
                    editDevice
                  ),
                })
              }
               Component={UnitControl}
                      {...premiumProps}
            />

            <Label className="mt8">Image Translate (X)</Label>

            <BControlPro
              units={[perUnit()]}
              step={1}
              value={styles?.card?.image?.translateX}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "image", "translateX"),
                })
              }
               Component={UnitControl}
                      {...premiumProps}
            />

            <Label className="mt8">Image Translate (y)</Label>

            <BControlPro
              units={[perUnit()]}
              step={1}
              value={styles?.card?.image?.translateY}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "image", "translateY"),
                })
              }
               Component={UnitControl}
                      {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Card Content", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mt0">Padding</Label> <Device />{" "}
            </PanelRow>

            <BControlPro
              title={__("Padding", "info-cards")}
              values={styles?.card?.content?.padding?.[editDevice]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "padding",
                    editDevice
                  ),
                })
              }
               Component={BoxControls}
                      {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "8px" }}
              label="Content Alignment"
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              value={styles?.card?.content?.alignment}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "content", "alignment"),
                })
              }
               Component={BButtonGroup}
                      {...premiumProps}
            />
            {/* <Label className = 'mt8'>Gap</Label> */}
            <BControlPro
              label="Gap"
              value={styles?.card?.content?.gap}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "card", "content", "gap"),
                })
              }
               Component={UnitControl}
                      {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.content?.title?.color}
              label={__("Title Color", "info-cards")}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "title",
                    "color"
                  ),
                })
              }
               Component={ColorControl}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Title Typography", "info-cards")}
              value={styles?.card?.content?.title?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "title",
                    "typo"
                  ),
                })
              }
               Component={Typography}
                      {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.content?.description?.color}
              label={__("Description Color", "info-cards")}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "description",
                    "color"
                  ),
                })
              }
               Component={ColorControl}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Description Typography", "info-cards")}
              value={styles?.card?.content?.description?.typo}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "description",
                    "typo"
                  ),
                })
              }
               Component={Typography}
                      {...premiumProps}
            />

            <BControlPro
              label={__("Button Padding", "info-cards")}
              values={styles?.card?.content?.button?.padding}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "button",
                    "padding"
                  ),
                })
              }
               Component={BoxControls}
                      {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.content?.button?.colors}
              label={__("Button Colors", "info-cards")}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "button",
                    "colors"
                  ),
                })
              }
               Component={ColorsControl}
                      {...premiumProps}
            />

            <BControlPro
              value={styles?.card?.content?.button?.typo}
              label={__("Button Typography", "info-cards")}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    v,
                    "card",
                    "content",
                    "button",
                    "typo"
                  ),
                })
              }
               Component={Typography}
                      {...premiumProps}
            />
          </PanelBody>
        </>
      )}

      {
        theme === "theme11" && ( <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Section", "info-cards")}
        initialOpen={false}
      >
        <BControlPro
         label={__("Background Color", "info-cards")}
          value={styles?.bg}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "bg") })
          }
          Component={Background}
          {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label={__("Radius", "info-cards")}
          values={styles?.radius}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "radius") })
          }
            Component={BoxControls}
          {...premiumProps}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
        <BControlPro 
        label={__("Background","info-cards")}
          value={styles?.card?.bg}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "card", "bg") })
          }
            Component={Background}
          {...premiumProps}
        />

        <BControlPro
          label={__("Height", "info-cards")}
          value={styles?.card?.height}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "card", "height") })
          }
            Component={UnitControl}
          {...premiumProps}
        />

        <BControlPro
          className="mt10"
          styles={{ marginTop: "10px" }}
          label={__("Radius", "info-cards")}
          values={styles?.card?.radius}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "card", "radius") })
          }
            Component={BoxControls}
          {...premiumProps}
        />

        <BControlPro
          className="mt10"
          styles={{ marginTop: "10px" }}
          label={__("padding", "info-cards")}
          values={styles?.card?.padding}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "card", "padding") })
          }
           Component={BoxControls}
          {...premiumProps}
        />

        <BControlPro label={__("Shadow","info-cards")} value={styles?.card?.shadow} onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "shadow") })}  Component={ShadowControl}
          {...premiumProps}  />
      </PanelBody>

      <PanelBody className="bPlPanelBody"
        title={__("Logo", "info-cards")}
        initialOpen={false}>

          <BControlPro  Component={UnitControl}
          {...premiumProps} label={__("Logo Bg Width", "info-cards")}  value={styles?.card?.logo?.width} onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "logo","width") })} />

          <BControlPro  Component={UnitControl}
          {...premiumProps} style={{marginTop:"10px"}} label={__("Logo Bg Height", "info-cards")} value={styles?.card?.logo?.height} onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "logo","height") })} />

            <BControlPro  Component={UnitControl}
          {...premiumProps} style={{marginTop:"10px"}} label={__("Logo Size", "info-cards")} value={styles?.card?.logo?.size} onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "logo","size") })} />

      </PanelBody>
      <PanelBody className="bPlPanelBody"
        title={__("HightLight", "info-cards")}
        initialOpen={false}>
          <BControlPro  Component={ColorsControl}
          {...premiumProps} value={styles?.card?.highlight?.colors} onChange={v=>setAttributes({styles:updateData(styles,v,"card","highlight","colors")})} />

          <BControlPro  Component={BoxControls}
          {...premiumProps} label={__("Padding", "info-cards")} values={styles?.card?.highlight?.padding} onChange={v=>setAttributes({styles:updateData(styles,v,"card","highlight","padding")})}  />
          <BControlPro  Component={BoxControls}
          {...premiumProps} className='mt10' label={__("Radius", "info-cards")} values={styles?.card?.highlight?.radius} onChange={v=>setAttributes({styles:updateData(styles,v,"card","highlight","radius")})}  />
          <BControlPro  Component={Typography}
          {...premiumProps} className='mt10' label={__("Typography", "info-cards")} value={styles?.card?.highlight?.typo} onChange={v=>setAttributes({styles:updateData(styles,v,"card","highlight","typo")})}  />


      </PanelBody>


      <PanelBody className="bPlPanelBody"
        title={__("Title", "info-cards")}
         initialOpen={false}
        > 
        <BControlPro label={__("Color", "info-cards")}  Component={ColorControl}
          {...premiumProps} value={styles?.card?.title?.color}  onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "title","color") })} />
        <BControlPro label={__("Typography", "info-cards")}   Component={Typography}
          {...premiumProps} value={styles?.card?.title?.typo}  onChange={v=>setAttributes({styles:updateData(styles,v,"card","title","typo")})} />

      </PanelBody>

   <PanelBody className="bPlPanelBody"
        title={__("Description", "info-cards")}
         initialOpen={false}>
           <BControlPro label={__("Color", "info-cards")}  Component={ColorControl}
          {...premiumProps} value={styles?.card?.description?.color}  onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "description","color") })} />
        <BControlPro label={__("Typography", "info-cards")}  Component={Typography}
          {...premiumProps} value={styles?.card?.description?.typo}  onChange={v=>setAttributes({styles:updateData(styles,v,"card","description","typo")})} />

   </PanelBody>

   {options?.isButtonVisible && <PanelBody className="bPlPanelBody"
        title={__("Button", "info-cards")}
         initialOpen={false}>
           <BControlPro label={__("Color", "info-cards")}  Component={ColorControl}
          {...premiumProps} value={styles?.card?.button?.color}  onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "button","color") })} />

           <BControlPro   Component={ColorControl}
          {...premiumProps} label={__("Hover Color","info-cards")} value={styles?.card?.button?.hoverColor}  onChange={v=>setAttributes({ styles: updateData(styles, v, "card", "button","hoverColor") })} />

        <BControlPro label={__("Typography", "info-cards")}  Component={Typography}
          {...premiumProps} value={styles?.card?.button?.typo}  onChange={v=>setAttributes({styles:updateData(styles,v,"card","button","typo")})} />

          <BControlPro label={__("Icon", "info-cards")}  Component={IconLibrary}
          {...premiumProps}  value={options?.buttonIcon} onChange={v=>setAttributes({options:updateData(options,v,"buttonIcon")})} />

            
            <BControlPro  Component={UnitControl}
          {...premiumProps} style={{marginTop:"10px"}} label={__("Icon Size ","info-cards")} value={styles?.card?.button?.size}  onChange={v=>setAttributes({styles:updateData(styles,v,"card","button","size")})} />

   </PanelBody>}
    </>)
      }


      {
        theme ==="theme12" &&( <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Section", "info-cards")}
        initialOpen={false}
      >
        <BControlPro
          label="Background"
          value={styles?.bg}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "bg") })
          }
          Component={Background}
                            {...premiumProps}
        />
         <PanelRow><Label>Padding</Label> <Device/> </PanelRow>

        <BControlPro
          // label="Padding"
          values={styles?.padding[editDevice]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "padding", editDevice),
            })
          }
          Component={BoxControls}
                            {...premiumProps}
        />
         <PanelRow><Label>Margin</Label> <Device/> </PanelRow>
        <BControlPro
          className="mt10"
          // label="Margin"
          values={styles?.margin[editDevice]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "margin", editDevice),
            })
          }
           Component={BoxControls}
                            {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label="Radius"
          values={styles?.radius}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "radius") })
          }
           Component={BoxControls}
                            {...premiumProps}
        />
        <PanelRow><Label>Columns</Label> <Device/> </PanelRow>

        <BControlPro
          className="mt10"
          // label="Columns"
          value={styles?.columns[editDevice]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "columns",editDevice),
            })
          }
           Component={RangeControl}
                            {...premiumProps}
        />

        <BControlPro
          className="mt10"
          label="Column Gap"
          value={styles?.gap?.column}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "gap", "column") })
          }
          Component={RangeControl}
                            {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label="Column Row"
          value={styles?.gap?.row}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "gap", "row") })
          }
          Component={RangeControl}
                            {...premiumProps}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Content", "info-cards")}
        initialOpen={false}
      >
        <BControlPro
          label="Image Radius"
          values={styles?.content?.image?.radius}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "image", "radius"),
            })
          }
          Component={BoxControls}
                            {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label="Padding"
          values={styles?.content?.padding}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "padding"),
            })
          }
           Component={BoxControls}
                            {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label="Icon Width"
          value={styles?.content?.icon?.width}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "width"),
            })
          }
           Component={UnitControl}
                            {...premiumProps}
        />
        <BControlPro
          className="mt10"
          label="Icon Height"
          value={styles?.content?.icon?.height}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "height"),
            })
          }
           Component={UnitControl}
                            {...premiumProps}
        />
        <BControlPro
          label="Icon Color"
          value={styles?.content?.icon?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "color"),
            })
          }
           Component={ColorControl}
                            {...premiumProps}
        />

        <BControlPro
          label="Sub Title Color"
          value={styles?.content?.subTitle?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "subTitle", "color"),
            })
          }
           Component={ColorControl}
                            {...premiumProps}
        />

        <BControlPro
          label="Sub Title"
          value={styles?.content?.subTitle?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "subTitle", "typo"),
            })
          }
           Component={Typography}
                            {...premiumProps}
        />

        <BControlPro
          label="Title Color"
          value={styles?.content?.title?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "color"),
            })
          }
           Component={ColorControl}
                            {...premiumProps}
        />
        <BControlPro
          label=" Title"
          value={styles?.content?.title?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "typo"),
            })
          }
           Component={Typography}
                            {...premiumProps}
        />
      </PanelBody>
    </>)
      }
    </>
  );
};

export default Style;
