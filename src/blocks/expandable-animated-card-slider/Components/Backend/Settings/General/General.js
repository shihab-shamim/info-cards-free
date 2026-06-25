import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  RangeControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
import { ItemsPanel } from "../../../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/sCards/OneSetting";

const General = ({ attributes, setAttributes }) => {
  const { cards = [], sliderSettings = {} } = attributes;

  const newOneCard = {
    title: "title",
    image:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    description:
      "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    active: false,
  };

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
          <strong>Note:</strong> Card information can only be edited from the
          side panel.
        </small>
      </div>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove Cards", "b-blocks")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={newOneCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="cards"
          itemLabel="Card"
          ItemSettings={OneSetting}
          // premiumProps={premiumProps}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Settings", "b-blocks")}
        initialOpen={false}
      >
        <RangeControl
          className="mt10"
          label={__("Initial Open Card Number", "info-cards")}
          value={sliderSettings?.initialOpenCardNumber}
          min={1}
          max={cards.length}
          onChange={(v) =>
            setAttributes({
              sliderSettings: updateData(
                sliderSettings,
                v,
                "initialOpenCardNumber",
              ),
            })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Auto Play", "info-cards")}
          checked={sliderSettings?.autoplay}
          onChange={(v) =>
            setAttributes({
              sliderSettings: updateData(sliderSettings, v, "autoplay"),
            })
          }
        />
        {sliderSettings?.autoplay && (
          <RangeControl
            className="mt10"
            label={__("Auto Play Timeout", "info-cards")}
            value={sliderSettings?.autoplayTimeout}
            min={1000}
            max={10000}
            step={1000}
            onChange={(v) =>
              setAttributes({
                sliderSettings: updateData(
                  sliderSettings,
                  v,
                  "autoplayTimeout",
                ),
              })
            }
          />
        )}
        <ToggleControl
          className="mt10"
          label={__("Loop", "info-cards")}
          checked={sliderSettings?.loop}
          onChange={(v) =>
            setAttributes({
              sliderSettings: updateData(sliderSettings, v, "loop"),
            })
          }
        />

        <ToggleControl
          className="mt10"
          label={__("Mouse Wheel", "info-cards")}
          checked={sliderSettings?.mousewheelon}
          onChange={(v) =>
            setAttributes({
              sliderSettings: updateData(sliderSettings, v, "mousewheelon"),
            })
          }
        />

        {!sliderSettings?.nav && (
          <ToggleControl
            className="mt10"
            label={__("Dots", "info-cards")}
            checked={sliderSettings?.dots}
            onChange={(v) =>
              setAttributes({
                sliderSettings: updateData(sliderSettings, v, "dots"),
              })
            }
          />
        )}

        {!sliderSettings?.dots && (
          <ToggleControl
            className="mt10"
            label={__("Nav", "info-cards")}
            checked={sliderSettings?.nav}
            onChange={(v) =>
              setAttributes({
                sliderSettings: updateData(sliderSettings, v, "nav"),
              })
            }
          />
        )}

        {/* Nav Icon Picker — Nav চালু থাকলে দেখাবে */}
        {sliderSettings?.nav && !sliderSettings?.dots && (
          <div className="eacl-nav-icon-picker">
            <p className="eacl-icon-picker-label">
              {__("Select Nav Icon", "info-cards")}
            </p>
            <div className="eacl-icon-picker-grid">
              {[
                {
                  id: "chevron",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
                },
                {
                  id: "arrow",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
                },
                {
                  id: "circle-chevron",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="14 16 10 12 14 8"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="10 16 14 12 10 8"/></svg>',
                },
                {
                  id: "circle-arrow",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14" y1="12" x2="10" y2="12"/><polyline points="12 10 10 12 12 14"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="12" x2="14" y2="12"/><polyline points="12 10 14 12 12 14"/></svg>',
                },
                {
                  id: "caret",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',
                },
                {
                  id: "double-chevron",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>',
                },
                {
                  id: "triangle",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15 19l-7-7 7-7z"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 5l7 7-7 7z"/></svg>',
                },
                {
                  id: "long-arrow",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M5 12l4-4m-4 4l4 4"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m14 0l-4 4m4-4l-4-4"/></svg>',
                },
                {
                  id: "square-chevron",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="14 16 10 12 14 8"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="10 16 14 12 10 8"/></svg>',
                },
                {
                  id: "filled-circle",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.71-11.29L11.3 7.29 6.59 12l4.71 4.71 1.41-1.41L9.41 12l3.3-3.29z"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.29-11.29l1.41-1.41L16.83 12l-4.71 4.71-1.41-1.41L13.17 13H7v-2h6.17l-2.46-2.29z"/></svg>',
                },
                {
                  id: "skip",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>',
                },
                {
                  id: "angle",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="M16 4l-8 8 8 8"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="M8 4l8 8-8 8"/></svg>',
                },
                {
                  id: "rounded-arrow",
                  left: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7" transform="rotate(-90 12 12)"/></svg>',
                  right:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" transform="rotate(-90 12 12)"/></svg>',
                },
              ].map((icon) => {
                const isSelected =
                  sliderSettings?.slideIcon?.id === icon.id ||
                  (!sliderSettings?.slideIcon?.id && icon.id === "chevron");
                return (
                  <button
                    key={icon.id}
                    type="button"
                    title={icon.id}
                    style={{ cursor: "pointer" }}
                    className={`eacl-icon-btn${isSelected ? " selected" : ""}`}
                    onClick={() =>
                      setAttributes({
                        sliderSettings: updateData(
                          sliderSettings,
                          {
                            id: icon.id,
                            left: icon.left,
                            right: icon.right,
                          },
                          "slideIcon",
                        ),
                      })
                    }
                  >
                    <span dangerouslySetInnerHTML={{ __html: icon.left }} />
                    <span dangerouslySetInnerHTML={{ __html: icon.right }} />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Elements", "info-cards")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt10"
          label={__("Title", "info-cards")}
          checked={sliderSettings?.titleShow}
          onChange={(value) =>
            setAttributes({
              sliderSettings: updateData(sliderSettings, value, "titleShow"),
            })
          }
        />

        <ToggleControl
          className="mt10"
          label={__("Description", "info-cards")}
          checked={sliderSettings?.descriptionShow}
          onChange={(value) =>
            setAttributes({
              sliderSettings: updateData(
                sliderSettings,
                value,
                "descriptionShow",
              ),
            })
          }
        />

        <ToggleControl
          className="mt10"
          label={__("Heading", "info-cards")}
          checked={sliderSettings?.headingShow}
          onChange={(value) =>
            setAttributes({
              sliderSettings: updateData(sliderSettings, value, "headingShow"),
            })
          }
        />

        {sliderSettings?.headingShow && (
          <TextControl
            className="mt10"
            label={__("Heading Text", "info-cards")}
            value={sliderSettings?.headingText}
            onChange={(value) =>
              setAttributes({
                sliderSettings: updateData(
                  sliderSettings,
                  value,
                  "headingText",
                ),
              })
            }
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
