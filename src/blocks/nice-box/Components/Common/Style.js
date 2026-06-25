import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBoxCSS,
  getBackgroundCSS,
  getTypoCSS,
  getMultiShadowCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { options = {}, styles = {} } = attributes;

  const mainSl = `#${id}`;
  const containerSl = `${mainSl} .nbhs-container`;
  const rowSl = `${containerSl} .nbhs-row`;
  const cardSl = `${rowSl} .nbhs-card`;
  const cardWavePathSl = `${cardSl} .nbhs-card-wave-shape`;
  const cardImgSl = `${cardSl} .nbhs-card-img`;
  const contentSl = `${cardSl} .nbhs-card-body`;
  const titleSl = `${contentSl} .nbhs-card-title`;
  const dividerSl = `${contentSl} .nbhs-card-divider`;
  const descriptionSl = `${contentSl} .nbhs-card-text`;
  const iconSl = `${cardSl} .nbhs-icon`;
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

         ${getTypoCSS("", styles?.card?.content?.title?.typo)?.googleFontLink}
		  ${getTypoCSS("", styles?.card?.content?.description?.typo)?.googleFontLink}

		  ${getTypoCSS(titleSl, styles?.card?.content?.title?.typo)?.styles}
		  ${getTypoCSS(descriptionSl, styles?.card?.content?.description?.typo)?.styles}



		${containerSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		}
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.desktop || 3}, 1fr);
		column-gap: ${styles?.columnGap}px;
		row-gap: ${styles?.rowGap}px;
		}

		${cardSl} {
		cursor: ${!options?.isIcon && options?.clickOnCard ? "pointer" : "default"};
		${getBackgroundCSS(styles?.card?.bg)}
		border-radius:${getBoxCSS(styles?.card?.radius)};
		padding:${getBoxCSS(styles?.card?.padding)};
		
		border-color: ${styles?.card?.border?.color};
		border-style: ${styles?.card?.border?.style};
		border-width: ${styles?.card?.border?.width};
		box-shadow: ${getMultiShadowCSS(styles?.card?.shadow)};

		}
		${cardSl}:hover {
			box-shadow: ${getMultiShadowCSS(styles?.card?.hoverShadow)};
			transform: translateY(${styles?.card?.translateY}px);

		}
		${cardImgSl}{
			height: ${styles?.card?.image?.height};
		object-fit: ${styles?.card?.image?.objectFit};
		}

		${cardWavePathSl} path{
		fill:${styles?.card?.shapeColor};
		 }

		 ${contentSl}{
		 padding:${getBoxCSS(styles?.card?.content?.padding)}
		 }
		 ${titleSl}{
		 color:${styles?.card?.content?.title?.color};
		 margin:${getBoxCSS(styles?.card?.content?.title?.margin)};
		 }

		 ${dividerSl}{
		 margin:${getBoxCSS(styles?.card?.content?.divider?.margin)};
	
		 border-top: ${styles?.card?.content?.divider?.width} ${
       styles?.card?.content?.divider?.style
     } ${styles?.card?.content?.divider?.color};
	 opacity:${styles?.card?.content?.divider?.opacity};
		 }

		 ${descriptionSl}{
		 margin:${getBoxCSS(styles?.card?.content?.description?.margin)};
			color:${styles?.card?.content?.description?.color};
		  }

		  ${iconSl}{
		  	width:${styles?.card?.icon?.size}px;
			height:${styles?.card?.icon?.size}px;
		  	color:${styles?.card?.icon?.color};
			fill:${styles?.card?.icon?.color};
		  	 ${getBackgroundCSS(styles?.card?.icon?.bg)}
			padding:${getBoxCSS(styles?.card?.icon?.padding)};
			border-radius:${getBoxCSS(styles?.card?.icon?.radius)};
		  }
		 ${iconSl}:hover{
            transform: rotate(${styles?.card?.icon?.rotate}deg);
			box-shadow: ${getMultiShadowCSS(styles?.card?.icon?.hoverShadow)};
		  }



		${tabBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
		}
		${containerSl}{
		
		padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
		
		}

		}

		${mobileBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
		}
				${containerSl}{
		
		padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
		
		}

		}



	`,
      }}
    />
  );
};
export default Style;
