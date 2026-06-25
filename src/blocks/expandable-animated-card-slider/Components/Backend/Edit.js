import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneCard from "../Common/sCards/OneCard";
import RichTextComponent from "../../utils/RichText";
import ClipBoard from "../../../../components/ClipBoard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, CPTType, currentPostId } = props;
  const shortcode = `[icb id=${currentPostId}]`;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps({ draggable: false })}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        {CPTType === "icb" && <ClipBoard shortCode={shortcode} />}

        <OneCard {...{ attributes, setAttributes, RichTextComponent }} />
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
