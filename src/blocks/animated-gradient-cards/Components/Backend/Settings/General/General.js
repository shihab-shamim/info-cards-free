import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  ToggleControl,
} from "@wordpress/components";
import {
  Device,
  ItemsPanel,
  Label,
} from "../../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import OneSetting from "../../../Common/cards/OneSetting";

const General = ({ attributes, setAttributes, device }) => {
  const { options = {}, styles } = attributes;

  const newCard = {
    image: {
      url: "https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/animated-border-cards/images/img-1.avif",
    },
    title: "Card Title",
    description: "Card Description",
    linkUrl: "#",
    linkText: "Read more →",
  };

  return (
    <>
      <PanelBody
        title={__("Add or Remove Cards", "b-blocks")}
        initialOpen={true}
      >
        <ItemsPanel
          newItem={newCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="cardsData"
          itemLabel="Card"
          ItemSettings={OneSetting}
          // premiumProps={premiumProps}
        />
      </PanelBody>

      <PanelBody title={__("Elements", "b-blocks")} initialOpen={false}>
        <ToggleControl
          label={__("Show Title", "b-blocks")}
          checked={options.isTitle}
          onChange={(value) =>
            setAttributes({ options: { ...options, isTitle: value } })
          }
        />
        <ToggleControl
          label={__("Show Description", "b-blocks")}
          checked={options.isDescription}
          onChange={(value) =>
            setAttributes({ options: { ...options, isDescription: value } })
          }
        />
        <ToggleControl
          label={__("Show Button/Link", "b-blocks")}
          checked={options.isButton}
          onChange={(value) =>
            setAttributes({ options: { ...options, isButton: value } })
          }
        />
        {options.isButton && (
          <ToggleControl
            label={__("Open Link in New Tab", "b-blocks")}
            checked={options.isOpenLink}
            onChange={(value) =>
              setAttributes({ options: { ...options, isOpenLink: value } })
            }
          />
        )}
      </PanelBody>

      <PanelBody title={__("Layout", "b-blocks")} initialOpen={false}>
        <PanelRow>
          <Label>{__("Columns", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={styles.layouts.column[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "layouts", "column", device),
            })
          }
          min={1}
          max={10}
        />
        <PanelRow>
          <Label>{__("Column Gap", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={styles.layouts.columnGap[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "layouts", "columnGap", device),
            })
          }
          min={0}
          max={100}
        />
        <PanelRow>
          <Label>{__("Row Gap", "b-blocks")}</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={styles.layouts.rowGap[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "layouts", "rowGap", device),
            })
          }
          min={0}
          max={100}
        />
      </PanelBody>
    </>
  );
};

export default General;
