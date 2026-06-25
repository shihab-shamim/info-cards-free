import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
import {
  BoxControl,
  Device,
  ItemsPanel,
  Label,
} from "../../../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/mCard/OneSetting";

const General = ({ attributes, setAttributes, device }) => {
  const { styles = {}, options = {} } = attributes;

  const newOneCard = {
    image: "https://assets.codepen.io/4787486/man-in-suit-portrait.jpg",
    title: "Title",
  };

  return (
    <>
      {/* <span
        style={{
          color: "#d32f2f",
          backgroundColor: "#ffebee",
          padding: "6px 10px",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: 500,
          display: "inline-block",
        }}
      >
        Magnification is available only on the frontend
      </span> */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove", "info-cards")}
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
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Layout", "info-cards")}
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
        initialOpen={false}
        className="bPlPanelBody"
        title={__("Elements", "info-cards")}
      >
        <ToggleControl
          label={__("Magnifying Icon Show", "info-cards")}
          checked={options?.isMagnifyingIconShow}
          onChange={(val) =>
            setAttributes({
              options: updateData(options, val, "isMagnifyingIconShow"),
            })
          }
        />

        <ToggleControl
          className="mt10"
          label={__("Title Show", "info-cards")}
          checked={options?.isTitleShow}
          onChange={(val) =>
            setAttributes({
              options: updateData(options, val, "isTitleShow"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
