import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneCard from "../Common/NCards/OneCard";
import RichTextComponent from "./richText/RichText";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

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
  const { getDeviceType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
