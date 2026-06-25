import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles, cards = [] } = attributes || {};

  const mainSl = `#${id}`;
  const efcContainerSl = `${mainSl} .efc-container`;
  const efcCardSl = `${efcContainerSl} .efc-card`;
  const efcCardLabelSl = `${efcCardSl} .efc-card-label`;
  const efcCardIconSl = `${efcCardLabelSl} .efc-card-icon`;
  const efcCardTitleSl = `${efcCardLabelSl} .efc-card-title`;
  const efcCardSubtitleSl = `${efcCardLabelSl} .efc-card-subtitle`;

  const icondynamiccolor = cards
    .map((card, index) => {
      return `
		${efcCardIconSl}-${index} svg{
			color:${card.iconColor};
			fill:${card.iconColor};
			width:${styles?.card?.icon?.size || 20}px;
			height:${styles?.card?.icon?.size || 20}px;
		}
	`;
    })
    .join("");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

			${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
			${getTypoCSS("", styles?.card?.subtitle?.typo)?.googleFontLink}

				
				

			${getTypoCSS(`${efcCardTitleSl}`, styles?.card?.title?.typo)?.styles}
			${getTypoCSS(`${efcCardSubtitleSl}`, styles?.card?.subtitle?.typo)?.styles}


		${efcContainerSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		height:${styles?.container?.height || "600px"};
		}

		${efcCardSl}{
			min-width:${styles?.card?.maxWidth || "60px"};
			max-width:${styles?.card?.maxWidth || "60px"};
			margin:${getBoxCSS(styles?.card?.margin)};
		}
		${efcCardSl}.efc-active{
			min-width: 0 !important;
			max-width: 100% !important;
			margin:0 !important;
			background-position:${styles?.card?.fitImage || "cover"};
		}
		${efcCardIconSl}{
				background-color:${styles?.card?.icon?.bg || "#ffffff"};
				padding:${getBoxCSS(styles?.card?.icon?.padding)};
				margin-right:${styles?.card?.icon?.gap || "10px"};
				border-radius:${getBoxCSS(
          styles?.card?.icon?.radius || {
            top: "100%",
            right: "100%",
            bottom: "100%",
            left: "100%",
          },
        )};
		}

		${icondynamiccolor}

		${efcCardTitleSl}{
			color:${styles?.card?.title?.color || "#ffffff"};
			margin:${getBoxCSS(styles?.card?.title?.margin)};
		}
		${efcCardSubtitleSl}{
			
			color:${styles?.card?.subtitle?.color || "#ffffff"};
			margin:${getBoxCSS(styles?.card?.subtitle?.margin)};
		}


		${tabBreakpoint}{
			${efcContainerSl}{
			padding:${getBoxCSS(styles?.padding?.tablet)};
			margin:${getBoxCSS(styles?.margin?.tablet)};
			
			}
		}
		${mobileBreakpoint}{
			${efcContainerSl}{
			padding:${getBoxCSS(styles?.padding?.mobile)};
			margin:${getBoxCSS(styles?.margin?.mobile)};
			height: auto !important;
			min-height: 80vh !important;
			}
		}
		

	`,
      }}
    />
  );
};
export default Style;
