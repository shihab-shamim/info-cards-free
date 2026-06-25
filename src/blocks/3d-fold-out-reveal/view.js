import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import OneCards from "./Components/Common/fcards/OneCards";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-icb-fold-out-reveal-pro",
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <OneCards attributes={attributes} />
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
