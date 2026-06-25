import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneCard from "../Common/player-cards/OneCard";
import RichTextComponent from "../../utils/RichText";
import ClipBoard from "../../../../components/ClipBoard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, CPTType, currentPostId } = props;
  const shortcode = `[icb id=${currentPostId}]`;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        {CPTType === "icb" && <ClipBoard shortCode={shortcode} />}

        <OneCard
          attributes={attributes}
          setAttributes={setAttributes}
          RichTextComponent={RichTextComponent}
        />
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
    currentPostId: getCurrentPostId ? getCurrentPostId() : 0,
    CPTType: getCurrentPostType?.(),
  };
})(Edit);
