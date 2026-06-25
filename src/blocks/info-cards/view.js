import { createRoot } from "react-dom/client";
import "./style.scss";

import Style from './Components/Common/Style';
import { getCardContentFront } from "./Components/Frontend/getContent";

window.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".wp-block-icb-cards");

  allCards.forEach((cardsEl) => {
    const attributes = JSON.parse(cardsEl.dataset.attributes);
    const {theme}=attributes;
    const isBacked=false

    const root = createRoot(cardsEl);
    root.render(
      <>
        <Style attributes={attributes} id={cardsEl.id} />

        

          {
           getCardContentFront(theme,attributes,isBacked)
        }
      </>
    );
  });
});
