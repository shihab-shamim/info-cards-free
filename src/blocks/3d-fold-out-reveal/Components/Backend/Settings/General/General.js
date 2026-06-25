import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
import {
  Device,
  ItemsPanel,
  Label,
} from "../../../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/fcards/OneSetting";

const General = ({ attributes, setAttributes, device }) => {
  const { options = {}, styles = {} } = attributes;
  const newOneCard = {
    title: "Card title",
    subtitle: "Image from Picsum",
    image: "https://picsum.photos/seed/field/300/225",
    description:
      "This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they’re not available etc.",
    btn: {
      link: "#",
      text: "Read More",
    },
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove Cards", "info-cards")}
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
        title={__("Layouts", "info-cards")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <PanelRow>
          <Label>{__("Columns", "info-cards")}</Label>
          <Device />
        </PanelRow>

        <RangeControl
          value={styles?.columns[device]}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "columns", device),
            })
          }
        />

        <RangeControl
          label={__("Row Gap", "info-cards")}
          value={styles?.rowGap}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "rowGap"),
            })
          }
        />

        <RangeControl
          label={__("Column Gap", "info-cards")}
          value={styles?.columnGap}
          onChange={(val) =>
            setAttributes({
              styles: updateData(styles, val, "columnGap"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        title={__("Elements", "info-cards")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <ToggleControl
          label={__("Show Title", "info-cards")}
          checked={options.showTitle}
          onChange={(val) =>
            setAttributes({ options: { ...options, showTitle: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Subtitle", "info-cards")}
          checked={options.showSubtitle}
          onChange={(val) =>
            setAttributes({ options: { ...options, showSubtitle: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Description", "info-cards")}
          checked={options.showDescription}
          onChange={(val) =>
            setAttributes({ options: { ...options, showDescription: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Button", "info-cards")}
          checked={options.showButton}
          onChange={(val) =>
            setAttributes({ options: { ...options, showButton: val } })
          }
        />
        {!options?.showIcons && (
          <small
            className="mt10"
            style={{
              display: "block",
              padding: "8px 12px",
              backgroundColor: "#fff7ed", // Light orange background
              color: "#c2410c", // Dark orange text
              borderLeft: "4px solid #f97316", // Warning border
              borderRadius: "4px",
              fontSize: "0.85rem",
              lineHeight: "1.4",
            }}
          >
            <strong>Note:</strong> If “Show Icons” is turned off, the card
            becomes clickable to open and close.
          </small>
        )}
        <ToggleControl
          className="mt10"
          label={__("Show Icons", "info-cards")}
          checked={options.showIcons}
          onChange={(val) =>
            setAttributes({ options: { ...options, showIcons: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Link Open In New Tab", "info-cards")}
          checked={options.linkOpenInNewTab}
          onChange={(val) =>
            setAttributes({ options: { ...options, linkOpenInNewTab: val } })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
