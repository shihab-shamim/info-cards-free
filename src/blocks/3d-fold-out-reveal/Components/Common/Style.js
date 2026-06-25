import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBoxCSS,
  getBackgroundCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles = {} } = attributes;

  const mainSl = `#${id}`;
  const cardsContainerSl = `${mainSl} .dfor-cards`;
  const cardSl = `${cardsContainerSl} .dfor-card`;
  const descriptionSl = `${cardSl} .dfor-card-description`;
  const titleSl = `${cardSl} .dfor-card-title`;
  const flapSl = `${cardSl} .dfor-card-flap .dfor-flap2`;
  const imageSl = `${cardSl} .dfor-card__image`;
  const titleTextSl = `${cardSl} .dfor-title`;
  const subtitleTextSl = `${cardSl} .dfor-subtitle`;
  const btnContainerSl = `${cardSl} .dfor-card-actions`;
  const btnSl = `${btnContainerSl} .dfor-btn`;
  const iconSl = `${cardSl} .dfor-toggle-info`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

         ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
         ${getTypoCSS("", styles?.card?.subTitle?.typo)?.googleFontLink}
         ${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}
         ${getTypoCSS("", styles?.card?.btn?.typo)?.googleFontLink}

         
		  ${getTypoCSS(titleTextSl, styles?.card?.title?.typo)?.styles}
      ${getTypoCSS(subtitleTextSl, styles?.card?.subTitle?.typo)?.styles}
      ${getTypoCSS(descriptionSl, styles?.card?.description?.typo)?.styles}
      ${getTypoCSS(btnSl, styles?.card?.btn?.typo)?.styles}
		 
		${cardsContainerSl} {
		 	grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
			row-gap: ${styles?.rowGap}px;
			column-gap: ${styles?.columnGap}px;
      border-radius: ${getBoxCSS(styles?.border)};
			padding: ${getBoxCSS(styles?.padding?.desktop)};
			margin: ${getBoxCSS(styles?.margin?.desktop)};
			${getBackgroundCSS(styles?.bg)}
			
		}

    ${cardSl},${descriptionSl},${titleSl},${flapSl}{
			${getBackgroundCSS(styles?.card?.bg)}
    }

    ${descriptionSl},${titleSl},${flapSl}{
      padding: ${getBoxCSS(styles?.card?.padding)};

    
      
    }


    ${imageSl}{
      height: ${styles?.card?.image?.height};
      object-fit: ${styles?.card?.image?.objectFit};
    }

    ${titleTextSl}{
    color:${styles?.card?.title?.color};
    }
    ${subtitleTextSl}{
    color:${styles?.card?.subTitle?.color};
    }
    ${descriptionSl}{
    color:${styles?.card?.description?.color};
    }

    ${btnSl}{
      ${getBackgroundCSS(styles?.card?.btn?.bg)}
      border-radius:${getBoxCSS(styles?.card?.btn?.border)};
      padding:${getBoxCSS(styles?.card?.btn?.padding)};
      color:${styles?.card?.btn?.color};
    }

    ${iconSl}{
      ${getBackgroundCSS(styles?.card?.icon?.bg)}
      span{
         background:${styles?.card?.icon?.color};
      }
   
    }

    ${cardSl}.dfor-show .dfor-toggle-info {
      background: ${styles?.card?.icon?.closeBg} !important;
      span{
        background:${styles?.card?.icon?.closeIconColor};
      }
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
