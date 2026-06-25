		import {
		getBackgroundCSS,
		getBorderCSS,
		getBoxCSS,
		getColorsCSS,
		getMultiShadowCSS,
		getTypoCSS,
		} from "../../../../../../bpl-tools/utils/getCSS";
		import { getBoxValue } from "../../../../../../bpl-tools/utils/functions";
		import {
			deskBreakpoint,
		mobileBreakpoint,
		tabBreakpoint,
		} from "../../../../../../bpl-tools/utils/data";

		const Style = ({ attributes, id,isBack }) => {
		const {
			cards,
			background,
			btnPadding,
			padding,
			titleColor,
			titleTypo,
			descColor,
			descTypo,
			btnTypo,
			contentAlign,
			btnRadius,
			contentPadding,
			cardPadding,
			cardShadow,
			cardRadius,
			imgHeight,
			columnGap,
			rowGap,
			btnAlign,
			btnColors,
			btnHovColors,
			styles={},
			alignment,
			productsInfo,options,
			theme
		} = attributes;




		const mainSl = `#${id}`;

		//  first 1-5 (default ta dhore 6 ta )  theme ar jonno 
		const cardsSl = `#${id} .icbCards`;


		// theme 6 theke (default dhore 7 ) selector 
		const productInfoCards = `${mainSl} .productInfoCards`;
		const cardSl = `${productInfoCards} .card`;
		const imgboxSl = `${cardSl} .imgbox`;
		const productImageSl = `${imgboxSl} .productImage`;
		const circleSl = `${imgboxSl} .circle`;
		const productDescSl = `${cardSl} .productDesc`;
		const productTitlecSl = `${productDescSl} .productTitle`;
		const productDescriptionSl = `${productDescSl} .productDescription`;
		const processorcSl = `${cardSl} .processor`;
		const productInfoBtnSl = `${processorcSl} .productInfoBtn`;
		const buyboxSl = `${cardSl} .buybox`;
		const productBuyBtnSl = `${buyboxSl} .productBuyBtn`;

		// theme 7 theke selector  
		const containerWrapperrSl = `${mainSl} .InfoContainerWrapper`;
		const threeDContainerSl = `${containerWrapperrSl} .infoThreeDContainer`;
		const parentSl = `${threeDContainerSl} .infoParent`;
		const infoCardSl = `${parentSl} .threeDinfoCard`;
		const contentBoxSl = `${infoCardSl} .threeDinfoCardContentBox`;
		const dateBoxSl = `${infoCardSl} .date-box`;
		const nameSl = `${dateBoxSl} .month`;
		const valueSl = `${dateBoxSl} .date`;
		const titleSl = `${contentBoxSl} .threeDinfoCardTitle`;
		const cardContentSl = `${contentBoxSl} .threeDinfoCardDescription`;
		const buttonSl = `${contentBoxSl} .threeDinfoSeeMore`;

		const dynamicCardStyle = productsInfo
			.map((card, index) => {
			return `
					.threeDinfoCard${index}{
						${getBackgroundCSS(card.backgroundImage)}
					}
					.threeDinfoCardContentBox${index}{
					background:${card?.backgroundColor};
					box-shadow:${getMultiShadowCSS(card?.shadow)};
					padding:${getBoxCSS(styles?.card?.contentPadding)}
					}
					${dateBoxSl}${index}{
					box-shadow:${getMultiShadowCSS(card?.tagShadow)};

					}
				
				
				
					`;
			})
			.join("\n");

			// theme 8 theke selector 

			const themeEightInfoContainer = `${mainSl} .infoProfileMain`;
		const themeEightCardSl = `${themeEightInfoContainer} .themeEightCard`;
		const themeEightNameSl = `${themeEightCardSl} .themeEightInfoProfileName`;

		const themeEightTitleSl = `${themeEightCardSl} .themeEightInfoProfileTitle`;
		const themeEightBoiSl = `${themeEightCardSl} .themeEightBio`;
		const themeEightStatusSl = `${themeEightCardSl} .themeEightStatus-text`;
		const themeEightDotSl = `${themeEightCardSl} .themeEightStatus-dot`;
		const themeEightStatSl = `${themeEightCardSl} .themeEightStat`;
		const themeEightStatNumberSl = `${themeEightCardSl} .themeEightStat-number`;
		const themeEightStatLabelSl = `${themeEightCardSl} .themeEightStat-label`;
		const themeEightMessageBtnlSl = `${themeEightCardSl} .themeEightMessage-btn`;
		const themeEightInfoProfileCompanySl = `${themeEightCardSl} .themeEightInfoProfileCompany`;
		const themeEightProfileImageSl = `${themeEightCardSl} .themeEightProfile-img`;

		const dynamicIconColor = () => {
		return productsInfo
			?.map((card, index) => {
			return card?.social
				.map((icon, i) => {
				return `
					.themeEightContain-card-${index} .themeEightSocial-icon${i} {
					color: ${icon?.color};
					}
				`;
				})
				.join("");
			})
			.join("");
		};
		

		//  theme nine (9)  selector 

			const themeNineVoyageViewCardContainer = `${mainSl} .themeNineVoyageViewCardContainer`;
			const themeNinevoyageContent = `${themeNineVoyageViewCardContainer} .themeNineVoyage-page-content`;
			const themeNineCardSl = `${themeNinevoyageContent} .themeNineVoyage-card`;

			const themeNineCardContentSl = `${themeNineCardSl} .themeNinevoyage-content`;
			const themeNineTitleSl = `${themeNineCardContentSl} .voyage-title`;
			const themeNineDescriptionSl = `${themeNineCardContentSl} .voyage-copy`;
			const themeNineBtnSl = `${themeNineCardContentSl} .voyage-btn`;




			const themeNineAlignment=styles?.alignment
		let marginValue = '0 auto'; 
		if (themeNineAlignment === 'left') marginValue = '0 auto 0 0';
		else if (themeNineAlignment === 'right') marginValue = '0 0 0 auto';



		//   theme 10 ar selector 

		const themeTenProductInfoGrab = `${mainSl} .themeTenProductInfoGrab`;
		const themeTenGrabMouseMoveSectionSl = `${themeTenProductInfoGrab} .themeTenGrabMouseMoveSection`;
		const themeTenGrabMouseMoveContentSl = `${themeTenGrabMouseMoveSectionSl} .themeTenGrabMouseMoveContent`;
		const themeTenInfocardsl = `${themeTenGrabMouseMoveSectionSl} .themeTenProductInfoCard`;
		const themeTenQuestsl = `${themeTenInfocardsl} .themeTenCardQuest`;
		const  themeTenGrabImgSl= `${themeTenQuestsl} .grabImg`;
		const  themeTenTextSl= `${themeTenInfocardsl} .themeTenCardText`;
		const  themeTenGrabTitleSl= `${themeTenTextSl} .themeTenGrabTitle`;
		const  themeTenGrabDescriptionSl= `${themeTenTextSl} .themeTenGrabDescription`;
		const  themeTenGrabButtonSl= `${themeTenTextSl} .themeTenGrabButton`;

		// const jsonWitdh = "552";
		const themeTenDesktopImagWidth= styles?.card?.image?.width?.desktop?.split("px")[0]
		const themeTenTabletImagWidth= styles?.card?.image?.width?.tablet?.split("px")[0]
		const themeTenMobileImagwidth= styles?.card?.image?.width?.mobile?.split("px")[0]

		const themeTenDesktopImagHeight= styles?.card?.image?.height?.desktop?.split("px")[0]
		const themeTenTabletImagHeight= styles?.card?.image?.height?.tablet?.split("px")[0]
		const themeTenMobileImagHeight= styles?.card?.image?.height?.mobile?.split("px")[0]

		const themeTenContentAlignment = () => {
		const value = styles?.card?.content?.alignment;

		if (value === "left") {
			return `margin: ${styles?.card?.content?.gap} auto ${styles?.card?.content?.gap} 0;`; // top:0, right:auto, bottom:0, left:0
		}
		if (value === "center") {
			return `margin: ${styles?.card?.content?.gap}  auto;`; // top:0, bottom:0, left/right:auto
		}
		if (value === "right") {
			return `margin:  ${styles?.card?.content?.gap} 0 ${styles?.card?.content?.gap} auto;`; // top:0, right:0, bottom:0, left:auto
		}
		}



		// theme 11 ar style selector 
		const themeElevenServicesSectionSl = `${mainSl} .themeElevenServices-section`;
		const themeElevenServicesContainerSl = `${themeElevenServicesSectionSl} .themeElevenServices-container`;
		const themeElevenServicesCardContainerSl = `${themeElevenServicesContainerSl} .themeElevenService-card-container`;
		const themeElevenServicesCardIconSl = `${themeElevenServicesContainerSl} .themeElevenService-icon`;
		const themeElevenServicesCardSl = `${themeElevenServicesContainerSl} .themeElevenService-card`;
		const themeElevenServicesTitleSl = `${themeElevenServicesContainerSl} .themeElevenService-title`;
		const themeElevenServicesDescriptionSl = `${themeElevenServicesContainerSl} .themeElevenService-description`;
		const themeElevenServicesButtonSl = `${themeElevenServicesContainerSl} .themeElevenService-link`;
		const themeElevenServicesButtonArrowIconSl = `${themeElevenServicesButtonSl} .themeElevenServiceArrow-icon`;
		const themeElevenServicesHighlightSl = `${themeElevenServicesCardSl} .themeElevenService-badge`;



			const themeElevenDynamicPadding = productsInfo?.map((card, index) => {
			return `
			${themeElevenServicesCardContainerSl}-${index + 1}{
			padding-top:${card?.top};

			}
			
			`;
			})
			.join("\n");

		const themeElevenDynamicIconColor = productsInfo?.map((card, index) => {
			return `
			.themeElevenIcon-${index + 1} svg{
			width: ${styles?.card?.logo?.size};
				height: ${styles?.card?.logo?.size};
				fill: ${card?.icon?.color};
			
			}
				${themeElevenServicesCardIconSl}-${index + 1}{
				background-color:${card?.icon?.bg};
				}

			
			`;
			})
			.join("\n");


			// theme 12 ar style 
			const themeTwelveSectionSl = `${mainSl} .themeTwelveSection`;
		const themeTwelveRowSl = `${mainSl} .themeTwelveRow`;
		const themeTwelveSectionContentSl = `${themeTwelveSectionSl} .hover-service-section-content`;
		const themeTwelveSectionImagetSl = `${themeTwelveSectionSl} .themeTwelveHover-section-img`;
		const themeTwelveSectionContenSubTitletSl = `${themeTwelveSectionContentSl} .themeTwelveContentSubTitle`;
		const themeTwelveSectionContenTitletSl = `${themeTwelveSectionContentSl} .themeTwelveContentTitle`;
		const themeTwelveHoverSectionIcon = `${themeTwelveSectionContentSl} .themeTwelveHoverSectionIcon`;

		return (
			<style>
			{`
				${getTypoCSS("", titleTypo)?.googleFontLink}
				${getTypoCSS("", descTypo)?.googleFontLink}
				${getTypoCSS("", btnTypo)?.googleFontLink}
				
				

				${
				getTypoCSS(
					`${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2`,
					titleTypo
				)?.styles
				}
				${
				getTypoCSS(
					`${cardsSl} .first4Theme .content p, ${cardsSl} .theme5 .content .details p`,
					descTypo
				)?.styles
				}
				${
				getTypoCSS(
					`${cardsSl} .theme5 .content .details .actionBtn button, ${cardsSl} .first4Theme .content .btnWrapper a`,
					btnTypo
				)?.styles
				}

				
				${cardsSl}{
					${getBackgroundCSS(background)}
					column-gap: ${columnGap};
					row-gap: ${rowGap};
					padding: ${getBoxValue(padding)};
				}
				${cardsSl} .first4Theme, ${cardsSl} .theme5 .content{
					border-radius: ${cardRadius};
					padding: ${getBoxValue(cardPadding)};
					box-shadow: ${getMultiShadowCSS(cardShadow)};
				}
				${cardsSl} .first4Theme img{
					height: ${imgHeight}
				}
				${cardsSl} .vertical .card img{
					max-height: ${imgHeight}
				}
				${cardsSl} .first4Theme .content, ${cardsSl} .theme5 .content {
					padding: ${getBoxValue(contentPadding)};
					text-align: ${contentAlign};
				}
				${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2{
					color: ${titleColor};
					text-align: ${contentAlign};
				}
				${cardsSl} .first4Theme .content p, ${cardsSl} .theme5 .content .details  p{
					text-align: ${contentAlign};
					color: ${descColor};
				}
				${cardsSl} .first4Theme .content .btnWrapper, ${cardsSl} .theme5 .content .details .actionBtn{
					justify-content: ${btnAlign}
				}
				${cardsSl}  .first4Theme .content a, ${cardsSl} .theme5 .content .details .actionBtn button{

					${getColorsCSS(btnColors)};
					border-radius: ${btnRadius};
					padding: ${getBoxValue(btnPadding)}
				}
				${cardsSl}  .first4Theme .content a:hover, ${cardsSl} .theme5 .content .details .actionBtn button:hover {
					${getColorsCSS(btnHovColors)}
				}
			`}
			{cards.map((card, index) => {
				const { background } = card;
				return `
				${cardsSl} .first4Theme.card-${index}, ${cardsSl} .theme5.card-${index} .content{
					${getBackgroundCSS(background, true, true, false)}
				}






				



			`;
			})}
			</style>
		);
		};

		export default Style;
