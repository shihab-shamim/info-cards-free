import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import OneCard from "./Components/Common/news-cards/OneCard";
import usePostsQuery from "./hooks/usePostsQuery";
import LoadingSkeleton from "./Components/Common/LoadingSkeleton";
import DynamicData from "./Components/Common/news-cards/DynamicData";

const FrontendBlock = ({ attributes, blockId, nonce }) => {
  const { posts, isLoading, totalPosts } = usePostsQuery(nonce, attributes);

  return (
    <>
      <Style attributes={attributes} id={blockId} />
      {attributes.options.isDynamicPost ? (
        isLoading ? (
          <LoadingSkeleton attributes={attributes} />
        ) : (
          <DynamicData posts={posts} totalPosts={totalPosts} attributes={attributes} blockId={blockId} />
        )
      ) : (
        <OneCard
          attributes={attributes}
        />
      )}
    </>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-icb-news-cards-pro");
  blockNameEls.forEach((blockNameEl) => {
    let attributes = {};
    let nonce = "";
    try {
      attributes = blockNameEl.dataset.attributes ? JSON.parse(blockNameEl.dataset.attributes) : {};
      nonce = blockNameEl.dataset.nonce ? JSON.parse(blockNameEl.dataset.nonce) : "";
    } catch (e) {
      console.error("Failed to parse block attributes", e);
    }

    createRoot(blockNameEl).render(
      <FrontendBlock
        attributes={attributes}
        blockId={blockNameEl.id}
        nonce={nonce}
      />,
    );

    blockNameEl?.removeAttribute("data-attributes");
    blockNameEl?.removeAttribute("data-nonce");
  });
});
