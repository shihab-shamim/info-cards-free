import { __ } from "@wordpress/i18n";

import {
  PanelBody,
  PanelRow,
  RangeControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
// import {
//   Device,
//   ItemsPanel,
//   Label,
// } from "../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/player-cards/OneSetting";
import {
  ItemsPanel,
  Device,
  Label,
} from "../../../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes, device }) => {
  const { options = {}, styles = {} } = attributes || {};

  const newOneCard = {
    name: "Jane Doe",
    role: "Position/Role",
    city: "City, Country",
    joined: "Joined January 2019",
    groupName: "Team Alpha",
    level: "Level 13",
    points: "5,312 Points",
    image: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stats: [
      {
        title: "New Stat",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" fill="currentColor"><path d="M528 56H448V40c0-22.1-17.9-40-40-40H168c-22.1 0-40 17.9-40 40v16H48C21.5 56 0 77.5 0 104v80c0 48.2 36.5 87.9 83.3 94.7 19.3 35.6 52.8 62.4 92.7 73.1V400c0 17.7-14.3 32-32 32H128c-17.7 0-32 14.3-32 32v16c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-16c0-17.7-14.3-32-32-32h-16c-17.7 0-32-14.3-32-32v-48.2c39.9-10.7 73.4-37.5 92.7-73.1 46.8-6.8 83.3-46.5 83.3-94.7v-80c0-26.5-21.5-48-48-48zM128 184c0 18.5-12.7 34.1-30 38.6-8-12.8-10-29.3-10-38.6v-40h40v40zm384 0v40h40v-40c0 9.3-2 25.8-10 38.6-17.3-4.5-30-20.1-30-38.6v-40h40v40z" /></svg>',
        value: "1",
      },
    ],
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
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layouts", "info-cards")}
        initialOpen={false}
      >
        <PanelRow>
          <Label>{__("Columns", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles?.columns?.[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columns", device),
            })
          }
          min={1}
          max={12}
          step={1}
        />
        <PanelRow>
          <Label>{__("Column Gap", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles?.columnGap?.[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columnGap", device),
            })
          }
          min={1}
          max={100}
          step={1}
        />
        <PanelRow>
          <Label>{__("Row Gap", "info-cards")}</Label> <Device />
        </PanelRow>
        <RangeControl
          value={styles?.rowGap?.[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "rowGap", device),
            })
          }
          min={1}
          max={100}
          step={1}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Elements", "info-cards")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Name", "info-cards")}
          checked={options.isNameShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isNameShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Role", "info-cards")}
          checked={options.isRoleShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isRoleShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show City", "info-cards")}
          checked={options.isCityShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isCityShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Joined", "info-cards")}
          checked={options.isJoinedShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isJoinedShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Group Name", "info-cards")}
          checked={options.isGroupNameShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isGroupNameShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Level", "info-cards")}
          checked={options.isLevelShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isLevelShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Points", "info-cards")}
          checked={options.isPointsShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isPointsShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Stats", "info-cards")}
          checked={options.isStatsShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isStatsShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Description", "info-cards")}
          checked={options.isDescriptionShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isDescriptionShow: value } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Prompt", "info-cards")}
          checked={options.isPromptShow}
          onChange={(value) =>
            setAttributes({ options: { ...options, isPromptShow: value } })
          }
        />

        {options.isPromptShow && (
          <TextControl
            className="mt10"
            label={__("Card Prompt", "info-cards")}
            value={styles?.card?.prompt?.title}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "prompt", "title"),
              })
            }
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
