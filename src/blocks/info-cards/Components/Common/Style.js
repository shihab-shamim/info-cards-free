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
				${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.variantState?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.tag?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.tag?.value?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.header?.name?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.header?.title?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.header?.status?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.header?.description?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.states?.number?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.states?.text?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.messageButton?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.company?.color)?.googleFontLink}

				${getTypoCSS("", styles?.title?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.description?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.button?.typo)?.googleFontLink}

				${getTypoCSS('', styles?.card?.content?.title?.typo)?.googleFontLink}
				${getTypoCSS('', styles?.card?.content?.description?.typo)?.googleFontLink}
				${getTypoCSS('', styles?.card?.content?.button?.typo)?.googleFontLink}

				${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.descriptions?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.card?.highlight?.typo)?.googleFontLink}

				${getTypoCSS("", styles?.content?.subTitle?.typo)?.googleFontLink}
				${getTypoCSS("", styles?.content?.title?.typo)?.googleFontLink}

				
				

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
				${getTypoCSS(productTitlecSl, styles?.card?.title?.typo)?.styles}
				${getTypoCSS(productDescriptionSl, styles?.card?.description?.typo)?.styles}
				${getTypoCSS(productInfoBtnSl, styles?.card?.variantState?.typo)?.styles}
				${getTypoCSS(productBuyBtnSl, styles?.card?.button?.typo)?.styles}
			
			${getTypoCSS(nameSl, styles?.card?.tag?.typo)?.styles} 
				${getTypoCSS(valueSl, styles?.card?.tag?.value?.typo)?.styles} 
				${getTypoCSS(titleSl, styles?.card?.title?.typo)?.styles} 
				${getTypoCSS(cardContentSl, styles?.card?.description?.typo)?.styles} 
				${getTypoCSS(buttonSl, styles?.card?.button?.typo)?.styles} 

				${getTypoCSS(themeEightNameSl, styles?.card?.header?.name?.typo)?.styles}
				${getTypoCSS(themeEightTitleSl, styles?.card?.header?.title?.typo)?.styles}
				${getTypoCSS(themeEightStatusSl, styles?.card?.header?.status?.typo)?.styles}
				${getTypoCSS(themeEightBoiSl, styles?.card?.header?.description?.typo)?.styles}
				${getTypoCSS(themeEightStatNumberSl, styles?.card?.states?.number?.typo)?.styles}
				${getTypoCSS(themeEightStatLabelSl, styles?.card?.states?.text?.typo)?.styles}
				${getTypoCSS(themeEightMessageBtnlSl, styles?.card?.messageButton?.typo)?.styles}
				${getTypoCSS(themeEightInfoProfileCompanySl, styles?.card?.company?.typo)?.styles}

				${getTypoCSS(themeNineTitleSl,styles?.title?.typo)?.styles}
			${getTypoCSS(themeNineDescriptionSl,styles?.description?.typo)?.styles}
			${getTypoCSS(themeNineBtnSl,styles?.button?.typo)?.styles}

			${getTypoCSS(themeTenGrabTitleSl, styles?.card?.content?.title?.typo)?.styles}
				${getTypoCSS(themeTenGrabDescriptionSl, styles?.card?.content?.description?.typo)?.styles}
				${getTypoCSS(themeTenGrabButtonSl, styles?.card?.content?.button?.typo)?.styles}

				
				${getTypoCSS(themeElevenServicesTitleSl, styles?.card?.title?.typo)?.styles} 
				${getTypoCSS(themeElevenServicesDescriptionSl, styles?.card?.description?.typo)?.styles} 
				${getTypoCSS(themeElevenServicesButtonSl, styles?.card?.button?.typo)?.styles} 
				${getTypoCSS(themeElevenServicesHighlightSl, styles?.card?.highlight?.typo)?.styles} 

						${
			getTypoCSS(
				themeTwelveSectionContenSubTitletSl,
				styles?.content?.subTitle?.typo
			)?.styles
			}
				${
			getTypoCSS(
				themeTwelveSectionContenTitletSl,
				styles?.content?.title?.typo
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






				



					${productInfoCards} {
				${getBackgroundCSS(styles?.bg)}
				padding:${getBoxCSS(styles?.padding?.desktop)};
				margin:${getBoxCSS(styles?.margin?.desktop)};
				border-radius:${getBoxCSS(styles?.radius)};
				width:${styles?.width?.desktop};
				justify-content:${styles?.contentAlignment};
				row-gap:${styles?.rowGap};
				column-gap:${styles?.columnGap};
				

				}
				${cardSl}{
				max-width:${styles?.card?.width};
				min-height:${styles?.card?.height};
				border-radius:${getBoxCSS(styles?.card?.radius)};
				${getBackgroundCSS(styles?.card?.bg)}
				padding:${getBoxCSS(styles?.card?.padding)};
				box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
				}
				${productImageSl}{
					max-width:${styles?.card?.image?.width};
					height: ${styles?.card?.image?.height};
					object-fit: ${styles?.card?.image?.position};
				

				}
					${circleSl}{
					width: ${styles?.card?.circle?.width};
					height: ${styles?.card?.circle?.width};
					border-radius:${getBoxCSS(styles?.card?.circle?.radius)};
					${getBackgroundCSS(styles?.card?.circle?.bg)}
					
					}
					${productTitlecSl}{
					color:${styles?.card?.title?.color};
					text-align: ${styles?.card?.title?.alignment};
					}
					${productDescriptionSl}{
					color:${styles?.card?.description?.color};
					text-align: ${styles?.card?.description?.alignment};
					}
					${productInfoBtnSl}{
						background:${styles?.card?.variantState?.bg};
						color:${styles?.card?.variantState?.color};
						padding:${getBoxCSS(styles?.card?.variantState?.padding)};
						border-radius:${getBoxCSS(styles?.card?.variantState?.radius)};
						box-shadow:${getMultiShadowCSS(styles?.card?.variantState?.shadow)};
					}

					${processorcSl}{
					gap:${styles?.card?.variantState?.gap};
					justify-content: ${styles?.card?.variantState?.alignment};
					}
					${processorcSl} .active{
					color:${styles?.card?.variantState?.active?.color} !important;
					background:${styles?.card?.variantState?.active?.bg} !important;
					} 
					${productBuyBtnSl}{
					color:${styles?.card?.button?.color};
					background:${styles?.card?.button?.bg};
					padding:${getBoxCSS(styles?.card?.button?.padding)};
					border-radius:${getBoxCSS(styles?.card?.button?.radius)};
					box-shadow:${getMultiShadowCSS(styles?.card?.button?.shadow)};
					width:${styles?.card?.button?.width};

					
					}
					${productBuyBtnSl}:hover{
					background-color:${styles?.card?.button?.hover?.bg} !important;
					color:${styles?.card?.button?.hover?.color} !important;
					}
					${buyboxSl}{
					display:flex;
					justify-content:${styles?.card?.button?.alignment};
					
					}


				${tabBreakpoint}{
				${productInfoCards}{
				padding:${getBoxCSS(styles?.padding?.tablet)};
				margin:${getBoxCSS(styles?.margin?.tablet)};
				width:${styles?.width?.tablet}
				}
				
				}

				${mobileBreakpoint}{
					${productInfoCards}{
				padding:${getBoxCSS(styles?.padding?.mobile)};
				margin:${getBoxCSS(styles?.margin?.mobile)};
				width:${styles?.width?.mobile}
					}}








					${theme==="theme7"&&dynamicCardStyle}
				${containerWrapperrSl}{
				display:flex;
				justify-content:${alignment};

				}
				
				${threeDContainerSl} {
				${getBackgroundCSS(styles?.bg)}
				padding:${getBoxCSS(styles?.padding?.desktop)};
				margin:${getBoxCSS(styles?.margin?.desktop)};
				width:${styles?.width?.desktop};
				justify-content:${styles?.contentAlignment};
				row-gap:${styles?.rowGap};
				column-gap:${styles?.columnGap};
				border-radius:${getBoxCSS(styles?.radius)};
					
				}

				${parentSl}{
				width:${styles?.card?.width?.desktop};
				}
				${infoCardSl}{
				min-height:${styles?.card?.height?.desktop} !important;
				border-radius:${getBoxCSS(styles?.card?.radius)};
				padding:${getBoxCSS(styles?.card?.cardPadding)};

				}
				${infoCardSl}:hover{
				transform: rotate3d(0.5, 1, 0, ${
			options?.isHoverRotated
				? `${styles?.card?.cardRoted}deg`
				: "0deg"
			});
				}
				${contentBoxSl}{
				border-radius:${getBoxCSS(styles?.card?.contentRadius)};
				}
				${dateBoxSl}{
				background-color:${styles?.card?.tag?.bg};
				width:${styles?.card?.tag?.width};
				height:${styles?.card?.tag?.height};
				left:${styles?.card?.tag?.position?.left}px;
				top:${styles?.card?.tag?.position?.top}px;
				border-radius:${getBoxCSS(styles?.card?.tag?.radius)};
				padding:${getBoxCSS(styles?.card?.tag?.padding)};
				
				}
				${dateBoxSl} .month{
				color:${styles?.card?.tag?.color};
				
				}
				${valueSl}{
				color:${styles?.card?.tag?.value?.color};
				}

				${titleSl}{
				color:${styles?.card?.title?.color};
				
				}
				${cardContentSl}{
				color:${styles?.card?.description?.color};

				}
				${buttonSl}{
				color:${styles?.card?.button?.color};
				}







				${tabBreakpoint}{
				${threeDContainerSl}{
				padding:${getBoxCSS(styles?.padding?.tablet)};
				margin:${getBoxCSS(styles?.margin?.tablet)};
				width:${styles?.width?.tablet}
				}
				${parentSl}{
				width:${styles?.card?.width?.tablet};
				}
				${infoCardSl}{
				min-height:${styles?.card?.height?.tablet} !important;
				}
				
				}

				${mobileBreakpoint}{
				${threeDContainerSl}{
				padding:${getBoxCSS(styles?.padding?.mobile)};
				margin:${getBoxCSS(styles?.margin?.mobile)};
				width:${styles?.width?.mobile}
				}
				${parentSl}{
				width:${styles?.card?.width?.mobile};
				}
				${infoCardSl}{
				min-height:${styles?.card?.height?.mobile} !important;
				}
				
				}








				${themeEightInfoContainer} {
				grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
				${getBackgroundCSS(styles?.bg)}
				padding:${getBoxCSS(styles?.padding)};
				margin:${getBoxCSS(styles?.margin)};
				column-gap:${styles?.columnGap?.desktop};
				row-gap:${styles?.rowGap?.desktop};
				border-radius:${getBoxCSS(styles?.radius)};
				}
				${themeEightCardSl}{
				${getBackgroundCSS(styles?.card?.bg)}
				padding:${getBoxCSS(styles?.card?.padding)};
				margin:${getBoxCSS(styles?.card?.margin)};
				border-radius:${getBoxCSS(styles?.card?.radius)};
					box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
				
			}
					${themeEightNameSl}{
					color:${styles?.card?.header?.name?.color};
					}
					${themeEightTitleSl}{
					color:${styles?.card?.header?.title?.color};
					}


					${themeEightStatusSl}{
					color:${styles?.card?.header?.status?.color};
					
					}
					${themeEightDotSl}{
					background-color:${styles?.card?.header?.status?.color};
					}
					${themeEightBoiSl}{
					color:${styles?.card?.header?.description?.color};
					text-align:${styles?.card?.header?.description?.alignment};
					
					}

					${themeEightStatSl}{
					background-color:${styles?.card?.states?.bg};
					padding:${getBoxCSS(styles?.card?.states?.padding)};
					border-radius:${getBoxCSS(styles?.card?.states?.radius)}
					
					}
					${themeEightStatNumberSl}{
					color:${styles?.card?.states?.number?.color};
					}
					${themeEightStatLabelSl}{
					color:${styles?.card?.states?.text?.color}
					}
					${themeEightMessageBtnlSl}{
					background-color:${styles?.card?.messageButton?.bg};
					
					color:${styles?.card?.messageButton?.color};
					border-radius:${getBoxCSS(styles?.card?.messageButton?.radius)};
					padding:${getBoxCSS(styles?.card?.messageButton?.padding)};
					}

					${themeEightMessageBtnlSl} svg{
					width:${styles?.card?.messageButton?.size};
					height:${styles?.card?.messageButton?.size};
					color:${styles?.card?.messageButton?.color};
					} 
					${theme==="theme8"&&dynamicIconColor()}

					${themeEightInfoProfileCompanySl}{
					
						color:${styles?.card?.company?.color};
					}
						${themeEightProfileImageSl}{
						width: ${styles?.card?.profileImage?.width};
					height: ${styles?.card?.profileImage?.height};
					border-radius:${getBoxCSS(styles?.card?.profileImage?.radius)} !important;
					${getBorderCSS(styles?.card?.profileImage?.border)};
						}

					${tabBreakpoint}{
					${themeEightInfoContainer} {
					grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr);
					column-gap:${styles?.columnGap?.tablet};
				row-gap:${styles?.rowGap?.tablet};
						}
					}
					
					${mobileBreakpoint}{
					${themeEightInfoContainer} {
					grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr);
					column-gap:${styles?.columnGap?.mobile};
				row-gap:${styles?.rowGap?.mobile};
						}
					}







					${themeNineVoyageViewCardContainer}{
			margin:${getBoxCSS(styles?.margin?.desktop)};
			}


				${themeNinevoyageContent}{
				${getBackgroundCSS(styles?.bg)}
				margin: ${marginValue};
				max-width:${styles?.width};
				padding:${getBoxCSS(styles?.padding?.desktop)};
				border-radius:${getBoxCSS(styles?.radius)};
				column-gap: ${styles?.gap?.column};
				row-gap: ${styles?.gap?.row};
				grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
				
				}
				${themeNineCardSl}{
				padding:${getBoxCSS(styles?.view?.padding)};
				border-radius:${getBoxCSS(styles?.view?.radius)};
				}
				${themeNineCardContentSl}{
				padding:${getBoxCSS(styles?.view?.contentPadding)};
				}

				${themeNineCardSl}::after{
				${getBackgroundCSS(styles?.overlay)}
					}



				${themeNineTitleSl}{
				color:${styles?.title?.color};
				
				}
				${themeNineDescriptionSl}{
				color:${styles?.description?.color};
				}
				${themeNineBtnSl}{
				padding:${getBoxCSS(styles?.button?.padding)};
				${getColorsCSS(styles?.button?.colors)}
				}
				${themeNineBtnSl}:hover {
				${getColorsCSS(styles?.button?.hover)}
				}
				
				${themeNineBtnSl}:focus{
				outline: ${styles?.button?.border?.width} ${styles?.button?.border?.style} ${styles?.button?.border?.color};

				}



				${tabBreakpoint}{
					${themeNineVoyageViewCardContainer}{
			margin:${getBoxCSS(styles?.margin?.tablet)};
			}
				${themeNinevoyageContent}{
				padding:${getBoxCSS(styles?.padding?.tablet)};
				grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr);

				}
				
				}
				${mobileBreakpoint}{
					${themeNineVoyageViewCardContainer}{
			margin:${getBoxCSS(styles?.margin?.mobile)};
			}
				${themeNinevoyageContent}{
				padding:${getBoxCSS(styles?.padding?.mobile)};
				grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr);

				}
				
				}







				${
			isBack
				? `
					.block-editor__container .grabImg {
						max-width: ${themeTenDesktopImagWidth}px;
						aspect-ratio: ${themeTenDesktopImagWidth} / ${themeTenDesktopImagHeight};
				height:${themeTenDesktopImagHeight}px;
			
					}
				`
				: `
				
					${themeTenGrabImgSl} {
						width: ${themeTenDesktopImagWidth}px;
						aspect-ratio: ${themeTenDesktopImagWidth} / ${themeTenDesktopImagHeight};
				height:${themeTenDesktopImagHeight}px;
				

					}

				`
			}
			${themeTenGrabImgSl} {
						width: ${themeTenDesktopImagWidth}px;
						aspect-ratio: ${themeTenDesktopImagWidth} / ${themeTenDesktopImagHeight};
				height:${themeTenDesktopImagHeight}px;
				

					}
				${themeTenQuestsl}{
			top: ${styles?.card?.image?.translateY};
				left: ${styles?.card?.image?.translateX};
			}


			${themeTenGrabMouseMoveSectionSl}{
			width: ${styles?.width?.desktop};
			height: ${styles?.height?.desktop};
			margin:${getBoxCSS(styles?.margin?.desktop)};
			padding:${getBoxCSS(styles?.padding?.desktop)};
			border-radius:${getBoxCSS(styles?.radius)};

			}
			${themeTenInfocardsl}{
			width:${styles?.card?.width?.desktop};
			height:${styles?.card?.height?.desktop};
			border-radius:${getBoxCSS(styles?.card?.radius)};
			
			}

			${themeTenInfocardsl}::before{
			${getBackgroundCSS(styles?.card?.bg)}
			border-radius:${getBoxCSS(styles?.card?.radius)};
			}

			${themeTenInfocardsl}::after{
			${getBackgroundCSS(styles?.card?.overlay)}
			border-radius:${getBoxCSS(styles?.card?.radius)};
			}

			${themeTenTextSl}{
			padding:${getBoxCSS(styles?.card?.content?.padding?.desktop)};
			text-align: ${styles?.card?.content?.alignment};

			}

			${themeTenGrabDescriptionSl}{
			${themeTenContentAlignment()}
			color:${styles?.card?.content?.description?.color};
			}
			
			${themeTenGrabTitleSl}{
			color:${styles?.card?.content?.title?.color};
			}
			
			${themeTenGrabButtonSl}{
			padding:${getBoxCSS(styles?.card?.content?.button?.padding)};
			${getColorsCSS(styles?.card?.content?.button?.colors)}
			}


			${themeTenGrabMouseMoveContentSl}{
				top: ${styles?.card?.translateY};
				left:  ${styles?.card?.translateX};
			}









		
			${tabBreakpoint}{
			${themeTenGrabMouseMoveSectionSl}{
			width: ${styles?.width?.tablet};
			height: ${styles?.height?.tablet};
			margin:${getBoxCSS(styles?.margin?.tablet)}
			padding:${getBoxCSS(styles?.padding?.tablet)}

			}
				${themeTenInfocardsl}{
			width:${styles?.card?.width?.tablet};
			height:${styles?.card?.height?.tablet};
			}
			${
			isBack
				? `
					.block-editor__container .grabImg {
						max-width: ${themeTenTabletImagWidth}px;
						aspect-ratio: ${themeTenTabletImagWidth} / ${themeTenTabletImagHeight};
					}
				`
				: `
				
					${themeTenGrabImgSl} {
						width: ${themeTenTabletImagWidth}px;
						aspect-ratio: ${themeTenTabletImagWidth} / ${themeTenTabletImagHeight};

					}

				`
			}
			${themeTenGrabImgSl} {
						width: ${themeTenTabletImagWidth}px;
						aspect-ratio: ${themeTenTabletImagWidth} / ${themeTenTabletImagHeight};

					}
				${themeTenTextSl}{
			padding:${getBoxCSS(styles?.card?.content?.padding?.tablet)};
			

			}
			
			}


			${mobileBreakpoint}{
			${themeTenGrabMouseMoveSectionSl}{
			width: ${styles?.width?.mobile};
			height: ${styles?.height?.mobile};
			margin:${getBoxCSS(styles?.margin?.mobile)}
			padding:${getBoxCSS(styles?.padding?.mobile)}

			}
				${themeTenInfocardsl}{
			width:${styles?.card?.width?.mobile};
			height:${styles?.card?.height?.mobile};
			}
			${
			isBack
				? `
					.block-editor__container .grabImg {
						max-width: ${themeTenMobileImagwidth}px;
						aspect-ratio: ${themeTenMobileImagwidth} / ${themeTenMobileImagHeight};
					}
				`
				: `
				
					${themeTenGrabImgSl} {
						width: ${themeTenMobileImagwidth}px;
						aspect-ratio: ${themeTenMobileImagwidth} / ${themeTenMobileImagHeight};

					}

				`
			}
			${themeTenGrabImgSl} {
						width: ${themeTenMobileImagwidth}px;
						aspect-ratio: ${themeTenMobileImagwidth} / ${themeTenMobileImagHeight};

					}
				${themeTenTextSl}{
			padding:${getBoxCSS(styles?.card?.content?.padding?.mobile)};
			

			}

			}








			
				${themeElevenServicesContainerSl}{

				${getBackgroundCSS(styles?.bg)}
				padding:${getBoxCSS(styles?.padding?.desktop)};
				margin:${getBoxCSS(styles?.margin?.desktop)};
				border-radius:${getBoxCSS(styles?.radius)};
				grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr); 
				column-gap:${styles?.columnGap?.desktop};
				row-gap:${styles?.rowGap?.desktop} ;
				}
				${ theme==="theme11" && themeElevenDynamicIconColor}
				


				
				${deskBreakpoint}{
				${ theme==="theme11" && themeElevenDynamicPadding}
				}

				${themeElevenServicesCardSl}{
				${getBackgroundCSS(styles?.card?.bg)}
				height:${styles?.card?.height};
				border-radius:${getBoxCSS(styles?.card?.radius)};
				padding:${getBoxCSS(styles?.card?.padding)};
				box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
				}
				${themeElevenServicesCardIconSl}{
				width:${styles?.card?.logo?.width};
				height:${styles?.card?.logo?.height};
				
				}
				${themeElevenServicesTitleSl}{
				color: ${styles?.card?.title?.color};
				}
			${themeElevenServicesDescriptionSl}{
				color: ${styles?.card?.description?.color};
				}
				

				${themeElevenServicesButtonSl}{
				color:${styles?.card?.button?.color};
				}
				${themeElevenServicesButtonSl}:hover{
				color:${styles?.card?.button?.hoverColor};
				fill:${styles?.card?.button?.hoverColor};
				}

				${themeElevenServicesButtonArrowIconSl} svg{
				width:${styles?.card?.button?.size};
				height:${styles?.card?.button?.size};
				}

				${themeElevenServicesHighlightSl}{
				${getColorsCSS(styles?.card?.highlight?.colors)}
				padding:${getBoxCSS(styles?.card?.highlight?.padding)};
				border-radius:${getBoxCSS(styles?.card?.highlight?.radius)};
				}





				${tabBreakpoint}{
				
				${themeElevenServicesContainerSl}{
			
				padding:${getBoxCSS(styles?.padding?.tablet)};
				margin:${getBoxCSS(styles?.margin?.tablet)};
				grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr); 
				column-gap:${styles?.columnGap?.tablet};
				row-gap:${styles?.rowGap?.tablet} ;
				}
				
				}



				${mobileBreakpoint}{
				${themeElevenServicesContainerSl}{
				
				padding:${getBoxCSS(styles?.padding?.mobile)};
				margin:${getBoxCSS(styles?.margin?.mobile)};
				grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr); 
					column-gap:${styles?.columnGap?.mobile};
				row-gap:${styles?.rowGap?.mobile};
				}
					
				}




					${themeTwelveSectionSl} {
					${getBackgroundCSS(styles?.bg)}

					padding:${getBoxCSS(styles?.padding?.desktop)};
					margin:${getBoxCSS(styles?.margin?.desktop)};
					border-radius:${getBoxCSS(styles?.radius)}
					${tabBreakpoint}{
					padding:${getBoxCSS(styles?.padding?.tablet)};
					margin:${getBoxCSS(styles?.margin?.tablet)};
					}
					${mobileBreakpoint}{
					padding:${getBoxCSS(styles?.padding?.mobile)};
					margin:${getBoxCSS(styles?.margin?.mobile)};
					}
					};




					
					
				${themeTwelveSectionContentSl}{
					padding:${getBoxCSS(styles?.content?.padding)};

					
					}
					${themeTwelveSectionContenSubTitletSl}{
					color:${styles?.content?.subTitle?.color};
					opacity:0.7;
					
				
				}
					${themeTwelveSectionContenTitletSl}{
						color:${styles?.content?.title?.color};
					
					}

					
		
				${themeTwelveRowSl}{
				grid-template-columns: repeat(${styles?.columns?.desktop}, 1fr);
				column-gap: ${styles?.gap?.column}px;
				row-gap: ${styles?.gap?.row}px;

				${tabBreakpoint}{
				grid-template-columns: repeat(${styles?.columns?.tablet}, 1fr);
				
				}
				
				${mobileBreakpoint}{
					grid-template-columns: repeat(${styles?.columns?.mobile}, 1fr);
				
				}
				}
				${themeTwelveSectionImagetSl}{
				border-radius:${getBoxCSS(styles?.content?.image?.radius)};
				}
				${themeTwelveHoverSectionIcon}{
				width:${styles?.content?.icon?.width};
				height:${styles?.content?.icon?.height};
				fill:${styles?.content?.icon?.color};
				}
			


				
			`;
			})}
			</style>
		);
		};

		export default Style;
