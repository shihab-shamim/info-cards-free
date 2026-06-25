import { __ } from "@wordpress/i18n";

import { PanelBody, ToggleControl } from "@wordpress/components";
import { ItemsPanel } from "../../../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/eCards/OneSetting";
const General = ({ attributes, setAttributes }) => {
  const newOneCard = {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7z"/></svg>',
    title: "Title One",
    subtitle: "Subtitle One",
    bgUrl:
      "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
    color: "#ed5565",
  };
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add or Remove Cards", "b-blocks")}
        initialOpen={true}
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
        title={__("Options", "b-blocks")}
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show Icon", "b-blocks")}
          checked={attributes?.options?.isIconshow}
          onChange={(value) =>
            setAttributes({
              options: {
                ...attributes?.options,
                isIconshow: value,
              },
            })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Title", "b-blocks")}
          checked={attributes?.options?.isTitleshow}
          onChange={(value) =>
            setAttributes({
              options: {
                ...attributes?.options,
                isTitleshow: value,
              },
            })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Subtitle", "b-blocks")}
          checked={attributes?.options?.isSubtitleShow}
          onChange={(value) =>
            setAttributes({
              options: {
                ...attributes?.options,
                isSubtitleShow: value,
              },
            })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Title Link", "b-blocks")}
          checked={attributes?.options?.titleLink}
          onChange={(value) =>
            setAttributes({
              options: {
                ...attributes?.options,
                titleLink: value,
              },
            })
          }
        />
        {attributes?.options?.titleLink && (
          <ToggleControl
            className="mt10"
            label={__("Open in New Tab", "b-blocks")}
            checked={attributes?.options?.isOpenNewTab}
            onChange={(value) =>
              setAttributes({
                options: {
                  ...attributes?.options,
                  isOpenNewTab: value,
                },
              })
            }
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
