import { __ } from "@wordpress/i18n";
import {
  BorderControl,
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
  IconLibrary,
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
        title={__("Container", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles?.bg}
          onChange={(val) => setAttributes({ styles: { ...styles, bg: val } })}
        />
        <PanelRow>
          <Label>Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.margin?.[device]}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                margin: {
                  ...styles?.margin,
                  [device]: val,
                },
              },
            });
          }}
        />
        <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.padding?.[device]}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                padding: {
                  ...styles?.padding,
                  [device]: val,
                },
              },
            });
          }}
        />

        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={styles?.radius}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                radius: val,
              },
            });
          }}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles?.card?.bg}
          onChange={(val) =>
            setAttributes({
              styles: { ...styles, card: { ...styles?.card, bg: val } },
            })
          }
        />

        <BoxControl
          label={__("Padding", "info-cards")}
          values={styles?.card?.padding}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  padding: val,
                },
              },
            });
          }}
        />

        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={styles?.card?.radius}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  radius: val,
                },
              },
            });
          }}
        />

        <Label className="mt10">Border</Label>
        <BorderControl
          value={styles?.card?.border}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  border: val,
                },
              },
            });
          }}
        />
        <ColorControl
          className="mt15"
          label={__("Wave Shape Color", "info-cards")}
          value={styles?.card?.shapeColor}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  shapeColor: val,
                },
              },
            });
          }}
        />
        <BoxControl
          label={__("Content Padding", "info-cards")}
          values={styles?.card?.content?.padding}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  content: {
                    ...styles?.card?.content,
                    padding: val,
                  },
                },
              },
            });
          }}
        />

        <ShadowControl
          label={"Shadow"}
          value={styles?.card?.shadow}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  shadow: val,
                },
              },
            });
          }}
        />
        <ShadowControl
          label={"Hover Shadow"}
          value={styles?.card?.hoverShadow}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  hoverShadow: val,
                },
              },
            });
          }}
        />
        <RangeControl
          min={-50}
          max={50}
          step={1}
          label="Translate Y"
          value={styles?.card?.translateY}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  translateY: val,
                },
              },
            });
          }}
        />
      </PanelBody>

      <PanelBody title={"Image"} initialOpen={false} className="bPlPanelBody">
        <UnitControl
          label={__("Height", "info-cards")}
          value={styles?.card?.image?.height}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  image: {
                    ...styles?.card?.image,
                    height: val,
                  },
                },
              },
            });
          }}
          units="px"
        />
        <SelectControl
          className="mt10"
          label={"Image Fit"}
          value={styles?.card?.image?.objectFit}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                card: {
                  ...styles?.card,
                  image: {
                    ...styles?.card?.image,
                    objectFit: val,
                  },
                },
              },
            });
          }}
          options={[
            { label: "Contain", value: "contain" },
            { label: "Cover", value: "cover" },
            { label: "Fill", value: "fill" },
            { label: "None", value: "none" },
            { label: "Scale Down", value: "scale-down" },
          ]}
        />
      </PanelBody>

      {options?.isIcon && (
        <PanelBody title={"Icon"} initialOpen={false} className="bPlPanelBody">
          <IconLibrary
            label={__("Icon", "info-cards")}
            icon={options?.icon}
            onChange={(val) => {
              setAttributes({
                options: {
                  ...options,
                  icon: val,
                },
              });
            }}
          />
          <RangeControl
            className="mt10"
            label={__("Icon Size", "info-cards")}
            value={styles?.card?.icon?.size}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      size: val,
                    },
                  },
                },
              });
            }}
          />
          <Background
            value={styles?.card?.icon?.bg}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      bg: val,
                    },
                  },
                },
              });
            }}
          />
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.icon?.color}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      color: val,
                    },
                  },
                },
              });
            }}
          />
          <BoxControl
            className="mt10"
            label={__("Padding", "info-cards")}
            values={styles?.card?.icon?.padding}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      padding: val,
                    },
                  },
                },
              });
            }}
          />
          <BoxControl
            className="mt10"
            label={__("Radius", "info-cards")}
            values={styles?.card?.icon?.radius}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      radius: val,
                    },
                  },
                },
              });
            }}
          />

          <RangeControl
            className="mt10"
            label={__("Icon Rotate(degree)", "info-cards")}
            value={styles?.card?.icon?.rotate}
            min={-360}
            max={360}
            step={1}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      rotate: val,
                    },
                  },
                },
              });
            }}
          />

          <ShadowControl
            label={"Hover Shadow"}
            value={styles?.card?.icon?.hoverShadow}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    icon: {
                      ...styles?.card?.icon,
                      hoverShadow: val,
                    },
                  },
                },
              });
            }}
          />
        </PanelBody>
      )}

      {options?.isTitle && (
        <PanelBody title={"Title"} initialOpen={false} className="bPlPanelBody">
          <BoxControl
            label={__("Margin", "info-cards")}
            values={styles?.card?.content?.title?.margin}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      title: {
                        ...styles?.card?.content?.title,
                        margin: val,
                      },
                    },
                  },
                },
              });
            }}
          />
          <ColorControl
            label={__("Color", "info-cards")}
            value={styles?.card?.content?.title?.color}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      title: {
                        ...styles?.card?.content?.title,
                        color: val,
                      },
                    },
                  },
                },
              });
            }}
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.content?.title?.typo}
            onChange={(val) => {
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "content",
                  "title",
                  "typo",
                ),
              });
            }}
          />
        </PanelBody>
      )}

      {options?.isDivider && (
        <PanelBody
          title={"Divider"}
          initialOpen={false}
          className="bPlPanelBody"
        >
          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.card?.content?.divider?.margin}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      divider: {
                        ...styles?.card?.content?.divider,
                        margin: val,
                      },
                    },
                  },
                },
              });
            }}
          />
          <SelectControl
            className="mt10"
            label={"Types"}
            value={styles?.card?.content?.divider?.style}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      divider: {
                        ...styles?.card?.content?.divider,
                        style: val,
                      },
                    },
                  },
                },
              });
            }}
            options={[
              { label: "Solid", value: "solid" },
              { label: "Dashed", value: "dashed" },
              { label: "Dotted", value: "dotted" },
            ]}
          />
          <UnitControl
            className="mt10"
            label={__("Height", "info-cards")}
            value={styles?.card?.content?.divider?.width}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      divider: {
                        ...styles?.card?.content?.divider,
                        width: val,
                      },
                    },
                  },
                },
              });
            }}
            units="px"
          />

          <ColorControl
            className="mt10"
            label={__("Color", "info-cards")}
            value={styles?.card?.content?.divider?.color}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      divider: {
                        ...styles?.card?.content?.divider,
                        color: val,
                      },
                    },
                  },
                },
              });
            }}
          />
          <RangeControl
            className="mt10"
            min={0.1}
            max={1}
            step={0.1}
            label={__("Opacity", "info-cards")}
            value={styles?.card?.content?.divider?.opacity}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      divider: {
                        ...styles?.card?.content?.divider,
                        opacity: val,
                      },
                    },
                  },
                },
              });
            }}
            units="px"
          />
        </PanelBody>
      )}

      {options?.isDescription && (
        <PanelBody
          title={"Description"}
          initialOpen={false}
          className="bPlPanelBody"
        >
          <BoxControl
            className="mt10"
            label={__("Margin", "info-cards")}
            values={styles?.card?.content?.description?.margin}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      description: {
                        ...styles?.card?.content?.description,
                        margin: val,
                      },
                    },
                  },
                },
              });
            }}
          />
          <Typography
            label={__("Typography", "info-cards")}
            value={styles?.card?.content?.description?.typo}
            onChange={(val) => {
              setAttributes({
                styles: updateData(
                  styles,
                  val,
                  "card",
                  "content",
                  "description",
                  "typo",
                ),
              });
            }}
          />
          <ColorControl
            className="mt10"
            label={__("Color", "info-cards")}
            value={styles?.card?.content?.description?.color}
            onChange={(val) => {
              setAttributes({
                styles: {
                  ...styles,
                  card: {
                    ...styles?.card,
                    content: {
                      ...styles?.card?.content,
                      description: {
                        ...styles?.card?.content?.description,
                        color: val,
                      },
                    },
                  },
                },
              });
            }}
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
