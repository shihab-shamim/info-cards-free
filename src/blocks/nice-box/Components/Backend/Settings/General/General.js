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
import OneSetting from "../../../Common/NCards/OneSetting";

const General = ({ attributes, setAttributes, device }) => {
  const { options = {}, styles = {} } = attributes || {};
  const newOneCard = {
    title: "Title",
    description: "Description",
    image: "https://www.jellypir.at/CODEPEN/picture/autre/jellyfish_15.jpg",
    wavePath: "narcisse",
    link: "#",
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
        className="bPlPanelBody"
        title={__("Layouts", "info-cards")}
        initialOpen={false}
      >
        <PanelRow>
          <Label>Columns</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={styles?.columns?.[device]}
          step={1}
          max={8}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                columns: {
                  ...styles?.columns,
                  [device]: val,
                },
              },
            });
          }}
        />
        <RangeControl
          label={__("Column Gap", "info-cards")}
          value={styles?.columnGap}
          step={1}
          max={250}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                columnGap: val,
              },
            });
          }}
        />
        <RangeControl
          label={__("Row Gap", "info-cards")}
          value={styles?.rowGap}
          step={1}
          max={250}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                rowGap: val,
              },
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Title", "info-cards")}
          checked={options?.isTitle}
          onChange={(val) =>
            setAttributes({ options: { ...options, isTitle: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Description", "info-cards")}
          checked={options?.isDescription}
          onChange={(val) =>
            setAttributes({ options: { ...options, isDescription: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Icon", "info-cards")}
          checked={options?.isIcon}
          onChange={(val) =>
            setAttributes({ options: { ...options, isIcon: val } })
          }
        />
        {!options?.isIcon && (
          <ToggleControl
            className="mt10"
            label={__("Click On Card", "info-cards")}
            checked={options?.clickOnCard}
            onChange={(val) =>
              setAttributes({ options: { ...options, clickOnCard: val } })
            }
          />
        )}

        <ToggleControl
          className="mt10"
          label={__("Open in New Tab", "info-cards")}
          checked={options?.openInNewTab}
          onChange={(val) =>
            setAttributes({ options: { ...options, openInNewTab: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Divider", "info-cards")}
          checked={options?.isDivider}
          onChange={(val) =>
            setAttributes({ options: { ...options, isDivider: val } })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
