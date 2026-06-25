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
  const eaclContainerSl = `${mainSl} .eacl-container`;
  const eaclTitleSl = `${eaclContainerSl} .eacl-title`;
  const eaclCardSl = `${eaclContainerSl} .eacl-card`;
  const eaclCardTitleSl = `${eaclCardSl} .eacl-card-title`;
  const eaclCardDesSl = `${eaclCardSl} .eacl-card-des`;
  const eaclCardContentSl = `${eaclCardSl} .eacl-card-description`;
  const eaclDotsSl = `${eaclContainerSl} .owl-dot`;
  const eaclDotsContainerSl = `${eaclContainerSl} .owl-theme.eacl-carousel .owl-dots`;
  const eaclNavSl = `${eaclContainerSl} .owl-nav`;

  //   class="owl-dot active"

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

		 ${getTypoCSS("", styles?.card?.headingText?.typo)?.googleFontLink}
		 ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
		 ${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}

		${getTypoCSS(`${eaclTitleSl}`, styles?.card?.headingText?.typo)?.styles}
		${getTypoCSS(`${eaclCardTitleSl}`, styles?.card?.title?.typo)?.styles}
		${getTypoCSS(`${eaclCardDesSl}`, styles?.card?.description?.typo)?.styles}

		${eaclContainerSl} {
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding.desktop)};
		margin:${getBoxCSS(styles?.margin.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
			
		}

		${eaclCardSl}{
			margin:${getBoxCSS(styles?.card?.margin)};
			width: ${styles?.card?.width.inactive?.desktop};
			height: ${styles?.card?.height.inactive?.desktop};
			background-size: ${styles?.card?.imagePosition};
			border-radius:${getBoxCSS(styles?.card?.radius)};
			
		}
			${eaclTitleSl}{
				color: ${styles?.card?.headingText?.color};
				padding: ${getBoxCSS(styles?.card?.headingText?.padding)};
				margin: ${getBoxCSS(styles?.card?.headingText?.margin)};
			}
			${eaclTitleSl}::after{
				background-color: ${styles?.card?.headingText?.badge?.color};
				width: ${styles?.card?.headingText?.badge?.width}px;
			}
			${eaclCardContentSl}{
				padding: ${getBoxCSS(styles?.card?.padding)};
			}
			${eaclCardTitleSl}{
				color: ${styles?.card?.title?.color};
				margin: ${getBoxCSS(styles?.card?.title?.margin)};
			}
			${eaclCardDesSl}{
				color: ${styles?.card?.description?.color};
				margin: ${getBoxCSS(styles?.card?.description?.margin)};
			}


			${eaclCardSl}::after{
				${getBackgroundCSS(styles?.card?.overlay)}
			}
		${eaclCardSl}.active{
			width: ${styles?.card?.width.active?.desktop};
			height: ${styles?.card?.height.active?.desktop};
			box-shadow:${getMultiShadowCSS(styles?.card?.activeShadow)};
		}

		${eaclDotsContainerSl}{
      margin: ${getBoxCSS(styles?.dots?.margin)};
      gap: ${styles?.dots?.gap}px;
		}

		${eaclDotsSl} span{
			width: ${styles?.dots?.size}px;
			height: ${styles?.dots?.size}px;
			background-color: ${styles?.dots?.inactive?.color};
		}
		${eaclDotsSl}.active span{
			background-color: ${styles?.dots?.active?.color};
		}

		${eaclNavSl} button.owl-prev,
		${eaclNavSl} button.owl-next {
			${getBackgroundCSS(styles?.nav?.bg)}
			color: ${styles?.nav?.color} !important;
			width: ${styles?.nav?.size}px !important;
			height: ${styles?.nav?.size}px !important;
			border-radius: ${getBoxCSS(styles?.nav?.radius)} !important;
		}

		${eaclNavSl} button.owl-prev svg,
		${eaclNavSl} button.owl-next svg {
			width: ${styles?.nav?.iconsize}px !important;
			height: ${styles?.nav?.iconsize}px !important;
		}

		${tabBreakpoint}{
			${eaclContainerSl} {
		padding:${getBoxCSS(styles?.padding.tablet)};
		margin:${getBoxCSS(styles?.margin.tablet)};
			
		}
			${eaclCardSl}{
			width: ${styles?.card?.width.inactive?.tablet};
			height: ${styles?.card?.height.inactive?.tablet};
		}
		${eaclCardSl}.active{
			width: ${styles?.card?.width.active?.tablet};
			height: ${styles?.card?.height.active?.tablet};
		}
		}

		${mobileBreakpoint}{
			${eaclContainerSl} {
		padding:${getBoxCSS(styles?.padding.mobile)};
		margin:${getBoxCSS(styles?.margin.mobile)};
			
		}
			${eaclCardSl}{
			width: ${styles?.card?.width.inactive?.mobile};
			height: ${styles?.card?.height.inactive?.mobile};
		}
		${eaclCardSl}.active{
			width: ${styles?.card?.width.active?.mobile};
			height: ${styles?.card?.height.active?.mobile};
		}
		}
		
	

	`,
      }}
    />
  );
};
export default Style;
