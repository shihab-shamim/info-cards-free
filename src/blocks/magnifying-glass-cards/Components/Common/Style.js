import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles = {} } = attributes;

  const mainSl = `#${id}`;
  const cardsContainerSl = `${mainSl} .mgcb-card-grid`;
  const cardSl = `${cardsContainerSl} .mgcb-card`;
  const textContainerSL = `${cardSl} .mgcb-text`;
  const titleSL = `${textContainerSL} .mgcb-split-text`;

  const glassSl = `${cardSl} .mgcb-magnifying-glass`;
  const iconSl = `${cardSl} .mgcb-try-it`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

		 ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
		  ${getTypoCSS(titleSL, styles?.card?.title?.typo)?.styles}
		
		${cardsContainerSl} {
			grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
			row-gap: ${styles?.rowGap}px;
			column-gap: ${styles?.columnGap}px;
			border-radius: ${getBoxCSS(styles?.border)};
			padding: ${getBoxCSS(styles?.padding?.desktop)};
			margin: ${getBoxCSS(styles?.margin?.desktop)};
			${getBackgroundCSS(styles?.bg)}
		}

		${cardSl}{
		${getBackgroundCSS(styles?.card?.bg)}
		height:${styles?.card?.height};
		outline:${styles?.card?.outline?.width} ${styles?.card?.outline?.style} ${
      styles?.card?.outline?.color
    };
		border-radius:${getBoxCSS(styles?.card?.radius)};
		box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
		text-align:${styles?.card?.textAlign};


		}

		${titleSL}{
			color:${styles?.card?.title?.color};
			
		}

		${glassSl}{
		 height: ${styles?.card?.glass?.size}px;
        width: ${styles?.card?.glass?.size}px;
		border-radius:${styles?.card?.glass?.radius}%;
		border:${styles?.card?.glass?.border?.width} ${
      styles?.card?.glass?.border?.style
    } ${styles?.card?.glass?.border?.color};
		box-shadow:${getMultiShadowCSS(styles?.card?.glass?.shadow)};
		
		}

		${iconSl} svg{
		stroke:${styles?.card?.icon?.color};
		width:${styles?.card?.icon?.size || 24}px;
		height:${styles?.card?.icon?.size || 24}px;
		}

	

		${tabBreakpoint}{
			${cardsContainerSl} {
			grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr);
			padding: ${getBoxCSS(styles?.padding?.tablet)};
			margin: ${getBoxCSS(styles?.margin?.tablet)};
			
		}
		
		}
		${mobileBreakpoint}{
			${cardsContainerSl} {
			grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr);
			padding: ${getBoxCSS(styles?.padding?.mobile)};
			margin: ${getBoxCSS(styles?.margin?.mobile)};
			
		}
		
		}

	`,
      }}
    />
  );
};
export default Style;
