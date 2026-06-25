import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneCard from "../Common/news-cards/OneCard";
import RichTextComponent from "../../utils/RichText";
import LoadingSkeleton from "../Common/LoadingSkeleton";
import usePostsQuery from "../../hooks/usePostsQuery";
import DynamicData from "../Common/news-cards/DynamicData";
import ClipBoard from "../../../../components/ClipBoard";
// import usePostsQuery from "../../hooks/usePostsQuery";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, currentPostId, CPTType } = props;
  const shortcode = `[icb id=${currentPostId}]`;

  // wpApiSettings.nonce is globally available in the WP admin context
  const nonce = typeof wpApiSettings !== "undefined" ? wpApiSettings.nonce : "";

  const { posts, isLoading, totalPosts } = usePostsQuery(
    nonce,
    attributes,
    currentPostId,
  );

  const  {options={}}=attributes;

  // Console log fetched post data
  console.log("News Cards Post Data:", posts);
  console.log("News Cards Total Posts:", totalPosts);
  console.log("News Cards Loading:", isLoading);

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        {CPTType === "icb" && <ClipBoard shortCode={shortcode} />}

        {options.isDynamicPost ? isLoading? <LoadingSkeleton attributes={attributes} />:<DynamicData posts={posts} totalPosts={totalPosts} attributes={attributes} blockId={clientId}/>:<OneCard attributes={attributes}
            setAttributes={setAttributes}
            blockId={clientId}
            RichTextComponent={RichTextComponent}/>}


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
