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
  const cardsContainerSl = `${mainSl} .pcb-card-grid`;
  const cardSl = `${cardsContainerSl} .pcb-profile-card`;

  const nameSl = `${cardSl} h1`;
  const descSl = `${cardSl} p`;
  const promptSl = `${cardSl} .pcb-hover-prompt`;

  const roleSl = `${cardSl} .pcb-role-text`;
  const citySl = `${cardSl} .pcb-city-text`;
  const joinedSl = `${cardSl} .pcb-joined-text`;
  const groupNameSl = `${cardSl} .pcb-groupName-text`;

  const levelSl = `${cardSl} .pcb-user-level`;
  const pointsSl = `${cardSl} .pcb-user-points`;

  const statTitleSl = `${cardSl} .pcb-stat-title`;
  const statValueSl = `${cardSl} .pcb-stat-value`;
  const statIconSl = `${cardSl} .pcb-stat-icon svg`;

  const sidebarSl = `${cardSl} .pcb-sidebar`;
  const imageSl = `${cardSl} .pcb-user-image`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.des?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.prompt?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.role?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.city?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.joined?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.groupName?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.level?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.points?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.stat?.title?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.stat?.value?.typo)?.googleFontLink}

        ${getTypoCSS(nameSl, styles?.card?.title?.typo)?.styles}
        ${getTypoCSS(descSl, styles?.card?.des?.typo)?.styles}
        ${getTypoCSS(promptSl, styles?.card?.prompt?.typo)?.styles}
        ${getTypoCSS(roleSl, styles?.card?.role?.typo)?.styles}
        ${getTypoCSS(citySl, styles?.card?.city?.typo)?.styles}
        ${getTypoCSS(joinedSl, styles?.card?.joined?.typo)?.styles}
        ${getTypoCSS(groupNameSl, styles?.card?.groupName?.typo)?.styles}
        ${getTypoCSS(levelSl, styles?.card?.level?.typo)?.styles}
        ${getTypoCSS(pointsSl, styles?.card?.points?.typo)?.styles}
        ${getTypoCSS(statTitleSl, styles?.card?.stat?.title?.typo)?.styles}
        ${getTypoCSS(statValueSl, styles?.card?.stat?.value?.typo)?.styles}
        
        ${cardsContainerSl} {
          ${getBackgroundCSS(styles?.bg)}
          display: grid;
          grid-template-columns: repeat(${styles?.columns?.desktop || 1}, 1fr);
          column-gap: ${styles?.columnGap?.desktop || 20}px;
          row-gap: ${styles?.rowGap?.desktop || 20}px;
          margin: ${getBoxCSS(styles?.margin?.desktop)};
          padding: ${getBoxCSS(styles?.padding?.desktop)};
          border-radius: ${getBoxCSS(styles?.radius)};
        }
         
        ${cardSl} {
          min-height: ${styles?.card?.minHeight || "auto"};
          box-shadow: ${getMultiShadowCSS(styles?.card?.shadow)};
          border-radius: ${getBoxCSS(styles?.card?.radius)};
          padding: ${getBoxCSS(styles?.card?.padding)};
          ${styles?.card?.bg ? `background: ${styles.card.bg} !important;` : ""}
          border-color: ${styles?.card?.border?.color || "transparent"};
          border-style: ${styles?.card?.border?.style || "solid"};
          border-width: ${getBoxCSS(styles?.card?.border?.width) || "0px"};
        }

        ${cardSl} .pcb-user-avatar img {
           object-fit: ${styles?.card?.imageFit || "cover"};
        }

        ${sidebarSl} {
           ${
             styles?.card?.sidebar?.width
               ? `width: ${styles.card.sidebar.width};`
               : ""
           }
           ${
             styles?.card?.sidebar?.bg_red?.color ||
             styles?.card?.sidebar?.bg_red?.gradient
               ? `${getBackgroundCSS(styles.card.sidebar.bg_red)} !important;`
               : ""
           }
        }
        
        ${cardSl}:hover .pcb-sidebar {
           width: 100cqi !important;
        }

        ${sidebarSl} .pcb-sidebar-info {
           ${
             styles?.card?.sidebar?.width
               ? `width: calc(100cqi - ${styles.card.sidebar.width});
                  left: ${styles.card.sidebar.width};`
               : ""
           }
        }

        ${cardSl} .pcb-main-content {
           ${
             styles?.card?.sidebar?.width
               ? `width: calc(100% - ${styles.card.sidebar.width});`
               : ""
           }
        }

        ${cardSl}.pcb-theme-green .pcb-sidebar {
           ${
             styles?.card?.sidebar?.bg_green?.color ||
             styles?.card?.sidebar?.bg_green?.gradient
               ? `${getBackgroundCSS(styles.card.sidebar.bg_green)} !important;`
               : ""
           }
        }

        ${sidebarSl} .pcb-user-avatar::after {
           ${
             styles?.card?.sidebar?.divider?.width
               ? `border-left-width: ${styles.card.sidebar.divider.width} !important;`
               : ""
           }
           ${
             styles?.card?.sidebar?.divider?.color_red
               ? `border-left-color: ${styles.card.sidebar.divider.color_red} !important;`
               : ""
           }
        }
        
        ${cardSl}.pcb-theme-green .pcb-sidebar .pcb-user-avatar::after {
           ${
             styles?.card?.sidebar?.divider?.color_green
               ? `border-left-color: ${styles.card.sidebar.divider.color_green} !important;`
               : ""
           }
        }

        ${nameSl} {
          ${
            styles?.card?.title?.color
              ? `color: ${styles.card.title.color};`
              : ""
          }
        }

        ${cardSl}:hover h1 {
          ${
            styles?.card?.title?.hoverColor
              ? `color: ${styles.card.title.hoverColor} !important;`
              : ""
          }
        }

        ${descSl} {
          ${styles?.card?.des?.color ? `color: ${styles.card.des.color};` : ""}
          margin: ${getBoxCSS(styles?.card?.des?.margin)};
        }
        
        ${promptSl} {
          ${
            styles?.card?.prompt?.color
              ? `color: ${styles.card.prompt.color};`
              : ""
          }
        }
        
        ${roleSl} {
          ${
            styles?.card?.role?.color_red
              ? `color: ${styles.card.role.color_red};`
              : ""
          }
        }

        ${cardSl}.pcb-theme-green .pcb-role-text {
          ${
            styles?.card?.role?.color_green
              ? `color: ${styles.card.role.color_green} !important;`
              : ""
          }
        }
        
        ${citySl} {
          ${
            styles?.card?.city?.color_red
              ? `color: ${styles.card.city.color_red};`
              : ""
          }
        }

        ${cardSl}.pcb-theme-green .pcb-city-text {
          ${
            styles?.card?.city?.color_green
              ? `color: ${styles.card.city.color_green} !important;`
              : ""
          }
        }
        
        ${joinedSl} {
          ${
            styles?.card?.joined?.color_red
              ? `color: ${styles.card.joined.color_red};`
              : ""
          }
        }

        ${cardSl}.pcb-theme-green .pcb-joined-text {
          ${
            styles?.card?.joined?.color_green
              ? `color: ${styles.card.joined.color_green} !important;`
              : ""
          }
        }
        
        ${groupNameSl} {
          ${
            styles?.card?.groupName?.color_red
              ? `color: ${styles.card.groupName.color_red};`
              : ""
          }
        }

        ${cardSl}.pcb-theme-green .pcb-groupName-text {
          ${
            styles?.card?.groupName?.color_green
              ? `color: ${styles.card.groupName.color_green} !important;`
              : ""
          }
        }

        ${levelSl} {
          ${
            styles?.card?.level?.color
              ? `color: ${styles.card.level.color};`
              : ""
          }
          ${
            styles?.card?.level?.bg
              ? `background-color: ${styles.card.level.bg};`
              : ""
          }
          padding: ${getBoxCSS(styles?.card?.level?.padding)};
        }
        
        ${pointsSl} {
          ${
            styles?.card?.points?.color
              ? `color: ${styles.card.points.color};`
              : ""
          }
          ${
            styles?.card?.points?.bg
              ? `background-color: ${styles.card.points.bg};`
              : ""
          }
          padding: ${getBoxCSS(styles?.card?.points?.padding)};
        }
        
        ${statTitleSl} {
          ${
            styles?.card?.stat?.title?.color_red
              ? `color: ${styles.card.stat.title.color_red};`
              : ""
          }
        }
        
        ${cardSl}.pcb-theme-green .pcb-stat-title {
          ${
            styles?.card?.stat?.title?.color_green
              ? `color: ${styles.card.stat.title.color_green} !important;`
              : ""
          }
        }

        ${statValueSl} {
          ${
            styles?.card?.stat?.value?.color_red
              ? `color: ${styles.card.stat.value.color_red};`
              : ""
          }
        }

        ${cardSl}.pcb-theme-green .pcb-stat-value {
          ${
            styles?.card?.stat?.value?.color_green
              ? `color: ${styles.card.stat.value.color_green} !important;`
              : ""
          }
        }

        ${statIconSl} {
          ${
            styles?.card?.stat?.icon?.color_red
              ? `color: ${styles.card.stat.icon.color_red} !important;`
              : ""
          }
          width: ${
            typeof styles?.card?.stat?.icon?.size === "number"
              ? styles.card.stat.icon.size + "px"
              : styles?.card?.stat?.icon?.size || "40px"
          } ;
          height: ${
            typeof styles?.card?.stat?.icon?.size === "number"
              ? styles.card.stat.icon.size + "px"
              : styles?.card?.stat?.icon?.size || "40px"
          } ;
        }

        ${cardSl}.pcb-theme-green .pcb-stat-icon svg {
          ${
            styles?.card?.stat?.icon?.color_green
              ? `color: ${styles.card.stat.icon.color_green} !important;`
              : ""
          }
        }

        ${statIconSl} *:not([fill="none"]) {
          ${
            styles?.card?.stat?.icon?.color_red || styles?.card?.stat?.icon?.color_green
              ? `fill: currentColor !important;`
              : ""
          }
        }

        ${statIconSl} [stroke]:not([stroke="none"]) {
          ${
            styles?.card?.stat?.icon?.color_red || styles?.card?.stat?.icon?.color_green
              ? `stroke: currentColor !important;`
              : ""
          }
        }

        ${imageSl} {
          width: ${styles?.card?.image?.width || "110px"};
          height: ${styles?.card?.image?.height || "110px"};
          border-radius: ${getBoxCSS(styles?.card?.image?.radius)};
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
        }

        ${tabBreakpoint} {
          ${cardsContainerSl} {
            grid-template-columns: repeat(${styles?.columns?.tablet || 1}, 1fr);
            column-gap: ${styles?.columnGap?.tablet || 20}px;
            row-gap: ${styles?.rowGap?.tablet || 20}px;
            margin: ${getBoxCSS(styles?.margin?.tablet)};
            padding: ${getBoxCSS(styles?.padding?.tablet)};
          }
        }
        
        ${mobileBreakpoint} {
          ${cardsContainerSl} {
            grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
            column-gap: ${styles?.columnGap?.mobile || 20}px;
            row-gap: ${styles?.rowGap?.mobile || 20}px;
            margin: ${getBoxCSS(styles?.margin?.mobile)};
            padding: ${getBoxCSS(styles?.padding?.mobile)};
          }
        }
        
      `,
      }}
    />
  );
};
export default Style;
