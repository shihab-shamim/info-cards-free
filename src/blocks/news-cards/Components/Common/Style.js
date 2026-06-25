import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../../bpl-tools/utils/data";
import {
  getBackgroundCSS,
  getBoxCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles = {} } = attributes;

  const mainSl = `#${id}`;
  const cardsContainerSl = `${mainSl} .icbnc-news-card-grid`;
  const cardSl = `${cardsContainerSl} .icbnc-news-card`;
  const cardInnerSl = `${cardSl} .icbnc-card-inner`;
  const lightCardSl = `${cardSl}.icbnc-style-light`;
  const darkCardSl = `${cardSl}.icbnc-style-dark`;
  const authorSl = `${cardSl} .icbnc-card-author`;
  const titleSl = `${cardSl} .icbnc-card-title`;
  const descriptiontSl = `${cardSl} .icbnc-card-excerpt`;
  const readMoreSl = `${cardSl} .icbnc-card-read-more`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
			 ${getTypoCSS("", styles?.card?.date?.typo)?.googleFontLink}
			 ${getTypoCSS("", styles?.card?.stat?.typo)?.googleFontLink}
			 ${getTypoCSS("", styles?.card?.author?.typo)?.googleFontLink}
			 ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
			 ${getTypoCSS("", styles?.card?.des?.typo)?.googleFontLink}
			 ${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}

		  ${
        getTypoCSS(`${cardSl} .icbnc-card-date span`, styles?.card?.date?.typo)
          ?.styles
      }
		  ${
        getTypoCSS(
          `${lightCardSl} .icbnc-card-date span`,
          styles?.card?.date?.typo,
        )?.styles
      }
	  ${getTypoCSS(`${cardSl} .icbnc-card-value`, styles?.card?.stat?.typo)?.styles}
	  ${getTypoCSS(authorSl, styles?.card?.author?.typo)?.styles}
	  ${getTypoCSS(titleSl, styles?.card?.title?.typo)?.styles}
	  ${getTypoCSS(descriptiontSl, styles?.card?.des?.typo)?.styles}
	  ${getTypoCSS(readMoreSl, styles?.card?.button?.typo)?.styles}
		
		${cardsContainerSl} {
		    ${getBackgroundCSS(styles?.bg)}
			grid-template-columns: repeat(${styles.columns.desktop}, 1fr);
			gap: ${styles.columnGap.desktop}px;
			row-gap: ${styles.rowGap.desktop}px;
			margin:${getBoxCSS(styles?.margin?.desktop)};
			padding:${getBoxCSS(styles?.padding?.desktop)};
			border-radius:${getBoxCSS(styles?.radius)};
		}
		 
		${cardInnerSl}{
	
		min-height:${styles?.card?.minHeight};
		box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
		border-radius:${getBoxCSS(styles?.card?.radius)};
		padding:${getBoxCSS(styles?.card?.padding)};
		background-size:${styles?.card?.imageFit};
		background-color:${styles?.card?.bg};
		
		}

		${cardInnerSl}::before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		${getBackgroundCSS(styles?.card?.overlay)}
		}

		${lightCardSl} .icbnc-card-date{
		 background-color:${styles?.card?.date?.bg};
		 color:${styles?.card?.date?.color};
		 padding:${getBoxCSS(styles?.card?.date?.padding)};
		 
			
		}
		 ${lightCardSl} .icbnc-card-date span{
		 margin-bottom:${styles?.card?.date?.gap}px;
		 
			
		}
		 ${darkCardSl} .icbnc-card-date{
		 color:${styles?.card?.date?.color};
		 gap:${styles?.card?.date?.gap}px;
			
		}
		
		 ${darkCardSl} .icbnc-card-header{
		 padding:${getBoxCSS(styles?.card?.date?.padding)};
			
		}
		 ${darkCardSl} .icbnc-card-menu {
		 gap:${styles?.card?.stat?.gap}px;
		 }
		 ${lightCardSl} .icbnc-card-menu li{
		 background-color:${styles?.card?.stat?.bg};
		 
			
		}
	
		 ${cardSl} .icbnc-card-value{
			color:${styles?.card?.stat?.color};
		 }
		  .icbnc-card-icon svg {
		 color:${styles?.card?.stat?.color};
		width:${styles?.card?.stat?.size}px;
		height:${styles?.card?.stat?.size}px;
		margin-top:${styles?.card?.stat?.valueGap}px;
		}

		.icbnc-card-menu-btn span {
		background-color: ${styles?.card?.stat?.dot?.bg};
        color: ${styles?.card?.stat?.dot?.color};
		}

		${lightCardSl} .icbnc-card-content{
		${getBackgroundCSS(styles?.card?.content?.bg)}
		}
		.icbnc-card-content{
		padding:${getBoxCSS(styles?.card?.content?.padding)};
		}

		${darkCardSl} .icbnc-card-author {
		color:${styles?.card?.author?.color};
		}
		${lightCardSl} .icbnc-card-author {
		color:${styles?.card?.author?.light?.color};
		}

		.icbnc-card-title {
		margin:${getBoxCSS(styles?.card?.title?.margin)};
		}
		${lightCardSl} .icbnc-card-title a{
		color:${styles?.card?.title?.light?.color};
		}
		${darkCardSl} .icbnc-card-title a{
		color:${styles?.card?.title?.color};
		}
		${lightCardSl} .icbnc-card-excerpt{
		color:${styles?.card?.des?.light?.color};
		}
		${darkCardSl} .icbnc-card-excerpt{
		color:${styles?.card?.des?.color};
		}

		${readMoreSl}{
		color:${styles?.card?.button?.color};
		} 
		${readMoreSl}::after {
         content:"${styles?.card?.button?.icon}";
	
		}


		


		${tabBreakpoint}{
			${cardsContainerSl}{
			grid-template-columns: repeat(${styles.columns.tablet}, 1fr);
			gap: ${styles.columnGap.tablet}px;
			row-gap: ${styles.rowGap.tablet}px;
			margin:${getBoxCSS(styles?.margin?.tablet)};
			padding:${getBoxCSS(styles?.padding?.tablet)};
			}
		}
		
		${mobileBreakpoint}{
			${cardsContainerSl}{
			grid-template-columns: repeat(${styles.columns.mobile}, 1fr);
			gap: ${styles.columnGap.mobile}px;
			row-gap: ${styles.rowGap.mobile}px;
			margin:${getBoxCSS(styles?.margin?.mobile)};
			padding:${getBoxCSS(styles?.padding?.mobile)};
			}
		}

	`,
      }}
    />
  );
};
export default Style;
