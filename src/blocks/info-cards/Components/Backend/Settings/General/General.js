import {
  RangeControl,
  PanelBody,
  PanelRow,
  TextControl,
  __experimentalUnitControl as UnitControl,
  Button,
  Dashicon,
  SelectControl,
  ToggleControl,
  TextareaControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Label,
  Background,
  InlineMediaUpload,
  ItemsPanel,
  Device,
  BoxControl,
  BButtonGroup,
  BoxControl as BoxControls,
} from "../../../../../../../../bpl-tools/Components";
import { useState } from "react";
import { BDevice } from "../../../../../../../../bpl-tools/Components/Deprecated";
import { gearIcon } from "../../../../../../../../bpl-tools/utils/icons";
import { themeSwitch } from "../../../../utils/function";
import { updateData } from "../../../../../../../../bpl-tools/utils/functions";
import ProductInfoSetting from "../../../Common/theme6/ProductInfoSetting";
import SevenInfoCardSetting from "../../../Common/theme7/SevenInfoCardSetting";
import ThemeEightInfoSetting from "../../../Common/theme8/ThemeEightInfoSetting";
import ThemeNineTextOverlySetting from "../../../Common/theme9/ThemeNineTextOverlySetting";
import { BControlPro } from "../../../../../../../../bpl-tools/ProControls";
import ThemeElevenInfoSetting from "../../../Common/theme11/ThemeElevenInfoSetting";
import ThemeTwelveSettings from "../../../Common/theme12/ThemeTwelveSettings";

const General = ({
  attributes,
  setAttributes,
  updateCard,
  editDevice,
  premiumProps,
}) => {
  const {
    cards,
    layout,
    theme,
    columns,
    columnGap,
    rowGap,
    isImg,
    imgPos,
    imgHeight,
    isTab,
    options,
    styles,
    grabCardInfo,
    productsInfo
  } = attributes;
 

  const [device, setDevice] = useState("desktop");
  const themeSixNewCard = {
    title: "Alienware Gaming Laptop",
    description:
      "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
    variant: ["i3", "i5", "i6", "i9"],
    image:
      "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
    button: {
      text: "Buy Now",
      link: "#",
    },
  };
  const themeSevenNewCard = {
    title: "Serotonin",
    content:
      "Progressively seize enabled experiences through sticky web-readiness. Proactively facilitate one-to-one.",
    tag: {
      name: "View",
      value: "3D",
    },
    tagStyle: {
      name: "#ffffff",
      value: "#FFA88B",
    },
    button: {
      text: "See more",
      link: "#",
      color: "#FFA88B",
    },
    backgroundImage: {
      type: "image",
      image: {
        alt: "",
        url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
        title: "background",
      },
      position: "top center",
    },
    backgroundColor: "#009C88",
    titleColor: "#f0f8ff",
    descriptionColor: "#b5b7b9",
    shadow: [
      {
        blur: "50px",
        color: "#009C88",
        hOffset: "0px",
        vOffset: "20px",
        spreed: "-20px",
        isInset: false,
      },
    ],
    tagShadow: [
      {
        hOffset: "0px",
        vOffset: "20px",
        blur: "60px",
        spreed: "0px",
        color: "#009C88",
        isInset: false,
      },
      {
        hOffset: "0px",
        vOffset: "18px",
        blur: "36px",
        spreed: "-18px",
        color: "#009C88",
        isInset: false,
      },
    ],
  };
  const themeEightNewCard = {
    id: 1,
    name: "Demo Name",
    title: "Demo Title ",
    company: "Demo Company",
    status: "Online",
    bio: "Developing effective marketing strategies for brands. Specializing in digital marketing and growth.",
    state: [
      { name: "posts", quantity: 70 },
      { name: "followers", quantity: 5640 },
      { name: "following", quantity: 5010 },
    ],
    profileImg:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070",
    social: [
      {
        name: "twitter",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
      },
      {
        name: "instagram",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      },
      {
        name: "linkedin",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      },
      {
        name: "email",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>`,
      },
    ],
    button: {
      text: "Message",
      link: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    },
  };

  const themeNineNewCard = {
    title: "Mountain View",
    description:
      "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    buttonText: "View Trips",
    buttonLink: "https://example.com/mountain-view",
    imageUrl:
      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
  };
    const themeElevenNewCard = {
          "title": "Web Design",
          "description": "Creating brand identities, digital experiences, and print materials that communicate clearly.",
          "icon": {
            "color": "#ed8a92",
            "svgPath": "<svg viewBox=\"0 0 24 24\" ><path  d=\"M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,3,3V7H2V6A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V9H22v9A3,3,0,0,1,19,21Zm0-8a1,1,0,0,1-1,1H6a1,1,0,0,1,0-2H18A1,1,0,0,1,19,13Zm-4,4a1,1,0,0,1-1,1H6a1,1,0,0,1,0-2h8A1,1,0,0,1,15,17ZM3,5A1,1,0,1,1,4,6,1,1,0,0,1,3,5ZM6,5A1,1,0,1,1,7,6,1,1,0,0,1,6,5ZM9,5a1,1,0,1,1,1,1A1,1,0,0,1,9,5Z\" /></svg>",
            "bg": "#fbe3e5"
          },
          "button": {
            "text": "— LEARN MORE",
            "link": "#"
          },
          "top": "0px",
          "highlight": false,
          "highlightLabel": "EXCLUSIVE"
        };

          const themeTwelveCard = {
    title: "Web Development",
    subtitle: "For developers and startups",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'/></svg>",
    img: "https://hubhtml.liquid-themes.com/assets/images/demo/digital-hub/portfolio-1.jpg",
    gradient:
      "linear-gradient(180deg, rgba(246,72,42,0) 25%, rgba(246,72,42,0.9) 100%)",
  };


  const onAddCard = () => {
    const newCards = [
      ...cards,
      {
        background: cards?.[0]?.background || {
          color: "#fff",
        },
        img: "",
        title: `Title of the ${cards?.length + 1} number card`,
        desc: `Description of the ${cards?.length + 1} number card`,
        btnLabal: cards?.[0]?.btnLabal || "Button",
        btnUrl: "#",
        isBtn: true,
        cardUrl: "",
      },
    ];
    setAttributes({ cards: newCards });
  };
  function handleCardDelete(index) {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setAttributes({ cards: newCards });
  }
  const onDuplicateCard = (e, index) => {
    e.preventDefault();
    const newCards = [...cards];
    newCards.splice(index, 0, cards[index]);
    setAttributes({ cards: newCards });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Themes ", "info-cards")}
        initialOpen={true}
      >
        <SelectControl
          className="mt20"
          label={__("Choose A Theme", "info-cards")}
          labelPosition="left"
          value={theme}
          onChange={(val) => {
            const newCards = cards.map((card) => ({
              ...card,
              background: ["default", "theme1", "theme2", "theme3"].includes(
                val
              )
                ? { color: "#fff" }
                : { color: "#570DF8" },
            }));

            "default" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
                            align:"none",
                            styles:{}

              });
            // updateAllCard("background", { color: "#fff" })

            "theme1" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "last",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
                            align:"none",
                            styles:{}

              });
            // updateAllCard("background", { color: "#fff" })

            "theme2" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: {
                  top: "15px",
                  right: "15px",
                  bottom: "15px",
                  left: "15px",
                },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
                            align:"none",
                            styles:{}

              });
            // updateAllCard("background", { color: "#fff" })

            "theme3" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 2 },
                layout: "horizontal",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
                            align:"none"

              });
            // updateAllCard("background", { color: "#fff" })

            "theme4" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
                            align:"none",
                            styles:{}

              });
            // updateAllCard("background", { color: "#570DF8" }));

            "theme5" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
                            align:"none",
                            styles:{}

              });


            // updateAllCard("background", { color: "#570DF8" })

            if (
              val === "theme6" ||
              val === "theme7" ||
              val === "theme8" ||
              val === "theme9" ||
              val === "theme10" ||
               val === "theme11" ||
               val === "theme12" 
            ) {
              setAttributes(themeSwitch(val, attributes, setAttributes));
            }
          }}
          options={[
            { label: "Default", value: "default" },
            { label: "Theme 1", value: "theme1" },
            { label: "Theme 2", value: "theme2" },
            { label: "Theme 3", value: "theme3" },
            { label: "Theme 4", value: "theme4" },
            { label: "Theme 5", value: "theme5" },
            { label: "Theme 6", value: "theme6" },
            { label: "Theme 7", value: "theme7" },
            { label: "Theme 8", value: "theme8" },
            { label: "Theme 9", value: "theme9" },
            { label: "Theme 10", value: "theme10" },
            { label: "Theme 11", value: "theme11" },
            { label: "Theme 12", value: "theme12" }
          ]}
        />

        {theme === "theme10" ?
          <div
            style={{
              backgroundColor: "#e7f3fe",
              color: "#084298",
              padding: "10px",
              borderLeft: "5px solid #2196F3",
              borderRadius: "4px",
              margin: "10px 0",
            }}
          >
            💡 <strong>Note:</strong> This mouse animation works only on the
            frontend.
          </div>:<div
            style={{
              backgroundColor: "#e7f3fe",
              color: "#084298",
              padding: "10px",
              borderLeft: "5px solid #2196F3",
              borderRadius: "4px",
              margin: "10px 0",
            }}
          >
            💡 <strong>Note:</strong> If you change the theme now, certain settings will return to their default values
          </div>
        }
      </PanelBody>

      {["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
        theme
      ) && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Add or Remove Cards", "info-cards")}
          >
            {cards.map((card, index) => {
              const {
                background,
                img,
                btnLabal,
                btnUrl,
                isBtn,
                title,
                cardUrl,
              } = card;

              return (
                <PanelBody
                  key={index}
                  className="bPlPanelBody"
                  title={title}
                  initialOpen={false}
                >
                  <Background
                    label={__("Background", "info-cards")}
                    value={background}
                    onChange={(val) => updateCard(index, "background", val)}
                    isImage={false}
                  />

                  <TextControl
                    className="mt10"
                    label={__("Card Url", "info-cards")}
                    value={cardUrl}
                    onChange={(content) =>
                      updateCard(index, "cardUrl", content)
                    }
                  />

                  {isImg && (
                    <InlineMediaUpload
                    label={__("Image Url", "info-cards")}
                      value={img}
                      onChange={(val) => updateCard(index, "img", val)}
                      placeholder={__("Enter Image URL", "info-cards")}
                    />
                  )}

                  {/* <BColor
                                        label={__("Description Color", "info-cards")}
                                        value={descColor}
                                        onChange={(val) =>
                                            updateCard(index, "descColor", val)
                                        }
                                    /> */}

                  {btnLabal && <Label>{__("Button Url:", "info-cards")}</Label>}
                  {btnLabal && (
                    <TextControl
                      value={btnUrl}
                      onChange={(content) =>
                        updateCard(index, "btnUrl", content)
                      }
                    />
                  )}

                  <ToggleControl
                    label={__("Button Show", "info-cards")}
                    className="mt10"
                    checked={isBtn}
                    onChange={(val) => updateCard(index, "isBtn", val)}
                  />

                  <PanelRow className="itemAction mt20">
                    {1 < cards?.length && (
                      <Button
                        className="removeItem"
                        onClick={() => handleCardDelete(index)}
                      >
                        <Dashicon icon="no" /> Delete
                      </Button>
                    )}

                    <Button
                      className="duplicateItem"
                      onClick={(e) => onDuplicateCard(e, index)}
                    >
                      {gearIcon} Duplicate
                    </Button>
                  </PanelRow>
                </PanelBody>
              );
            })}

            <div className="addItem mt15">
              <Button onClick={() => onAddCard()}>
                <Dashicon icon="plus" /> Add New Card
              </Button>
            </div>
          </PanelBody>

          <PanelBody
            title={__("Layout", "info-cards")}
            className="bPlPanelBody"
            initialOpen={false}
          >
            <SelectControl
              label={__("Layout", "info-cards")}
              labelPosition="left"
              value={layout}
              onChange={(val) => {
                let deskCol = 2;
                if (val == "vertical") {
                  deskCol = 3;
                }
                setAttributes({
                  layout: val,
                  columns: { ...columns, desktop: deskCol },
                });
              }}
              options={[
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" },
              ]}
            />

            <SelectControl
              className="mt20"
              label={__("Theme", "info-cards")}
              labelPosition="left"
              value={theme}
              onChange={(val) => {
                const newCards = cards.map((card) => ({
                  ...card,
                  background: [
                    "default",
                    "theme1",
                    "theme2",
                    "theme3",
                  ].includes(val)
                    ? { color: "#fff" }
                    : { color: "#570DF8" },
                }));

                "default" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 3 },
                    layout: "vertical",
                    titleColor: "#000",
                    descColor: "#000",
                    isImg: true,
                    imgPos: "first",
                    cardPadding: {
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    },
                    btnColors: { color: "#fff", bg: "#4527a4" },
                    btnHovColors: { color: "#fff", bg: "#fe6601" },
                  });
                // updateAllCard("background", { color: "#fff" })

                "theme1" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 3 },
                    layout: "vertical",
                    titleColor: "#000",
                    descColor: "#000",
                    isImg: true,
                    imgPos: "last",
                    cardPadding: {
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    },
                    btnColors: { color: "#fff", bg: "#4527a4" },
                    btnHovColors: { color: "#fff", bg: "#fe6601" },
                  });
                // updateAllCard("background", { color: "#fff" })

                "theme2" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 3 },
                    layout: "vertical",
                    titleColor: "#000",
                    descColor: "#000",
                    isImg: true,
                    imgPos: "first",
                    cardPadding: {
                      top: "15px",
                      right: "15px",
                      bottom: "15px",
                      left: "15px",
                    },
                    btnColors: { color: "#fff", bg: "#4527a4" },
                    btnHovColors: { color: "#fff", bg: "#fe6601" },
                  });
                // updateAllCard("background", { color: "#fff" })

                "theme3" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 2 },
                    layout: "horizontal",
                    titleColor: "#000",
                    descColor: "#000",
                    isImg: true,
                    imgPos: "first",
                    cardPadding: {
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    },
                    btnColors: { color: "#fff", bg: "#4527a4" },
                    btnHovColors: { color: "#fff", bg: "#fe6601" },
                  });
                // updateAllCard("background", { color: "#fff" })

                "theme4" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 3 },
                    layout: "vertical",
                    isImg: true,
                    imgPos: "first",
                    titleColor: "#fff",
                    descColor: "#fff",
                    cardPadding: {
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    },
                    btnColors: { color: "#fff", bg: "#000" },
                    btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
                  });
                // updateAllCard("background", { color: "#570DF8" }));

                "theme5" === val &&
                  setAttributes({
                    cards: newCards,
                    theme: val,
                    columns: { ...columns, desktop: 3 },
                    layout: "vertical",
                    isImg: true,
                    imgPos: "first",
                    titleColor: "#fff",
                    descColor: "#fff",
                    cardPadding: {
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    },
                    btnColors: { color: "#fff", bg: "#000" },
                    btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
                  });

                // updateAllCard("background", { color: "#570DF8" })

                if (
                  val === "theme6" ||
                  val === "theme7" ||
                  val === "theme8" ||
                  val === "theme9" ||
                  val === "theme10"
                ) {
                  setAttributes(themeSwitch(val, attributes, setAttributes));
                }
              }}
              options={[
                { label: "Default", value: "default" },
                { label: "Theme 1", value: "theme1" },
                { label: "Theme 2", value: "theme2" },
                { label: "Theme 3", value: "theme3" },
                { label: "Theme 4", value: "theme4" },
                { label: "Theme 5", value: "theme5" },
                { label: "Theme 6", value: "theme6" },
                { label: "Theme 7", value: "theme7" },
                { label: "Theme 8", value: "theme8" },
                { label: "Theme 9", value: "theme9" },
                { label: "Theme 10", value: "theme10" },
              ]}
            />

            <PanelRow className="mt20">
              <Label className="mb5">{__("Columns:", "info-cards")}</Label>
              <BDevice device={device} onChange={(val) => setDevice(val)} />
            </PanelRow>

            <RangeControl
              value={columns[device]}
              onChange={(val) => {
                setAttributes({ columns: { ...columns, [device]: val } });
              }}
              min={1}
              max={6}
              step={1}
              beforeIcon="grid-view"
            />

            <UnitControl
              className="mt20"
              label={__("Column Gap", "info-cards")}
              labelPosition="left"
              value={columnGap}
              onChange={(val) => setAttributes({ columnGap: val })}
            />

            <UnitControl
              className="mt20"
              label={__("Row Gap", "info-cards")}
              labelPosition="left"
              value={rowGap}
              onChange={(val) => setAttributes({ rowGap: val })}
            />
          </PanelBody>

          <PanelBody
            title={__("Elements", "info-cards")}
            className="bPlPanelBody"
            initialOpen={false}
          >
            <ToggleControl
              help={__("Open Card Url In New Tab", "info-cards")}
              label={__("Open In New Tab", "info-cards")}
              checked={isTab}
              onChange={(val) => setAttributes({ isTab: val })}
            />

            <ToggleControl
              className="mt10"
              label={__("Show Image", "info-cards")}
              checked={isImg}
              onChange={(val) => setAttributes({ isImg: val })}
            />

            {isImg && (
              <>
                <SelectControl
                  className="mt20"
                  label={__("Image Position", "info-cards")}
                  labelPosition="left"
                  value={imgPos}
                  onChange={(val) => setAttributes({ imgPos: val })}
                  options={[
                    {
                      label: "vertical" === layout ? "Top" : "Left",
                      value: "first",
                    },
                    {
                      label: "vertical" === layout ? "Bottom" : "Right",
                      value: "last",
                    },
                  ]}
                />

                <UnitControl
                  className="mt20"
                  label={__("Image Height", "info-cards")}
                  labelPosition="left"
                  value={imgHeight}
                  onChange={(val) => setAttributes({ imgHeight: val })}
                />
              </>
            )}
          </PanelBody>
        </>
      )}

      {theme === "theme6" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Add or Remove Cards ", "info-cards")}
            initialOpen={false}
          >
            <ItemsPanel
              newItem={themeSixNewCard}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="productsInfo"
              itemLabel="Card"
              ItemSettings={ProductInfoSetting}
              premiumProps={premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout ", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              <Label>Section Width</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              step={1}
              label={__(" ", "info-cards")}
              value={styles?.width[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "width", editDevice),
                })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />

            <PanelRow>
              <Label>Section Padding</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              label={__(" ", "info-cards")}
              values={styles?.padding[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "padding", editDevice),
                })
              }
               Component={BoxControls}
                                    {...premiumProps}
              
            />

            <PanelRow>
              <Label>Section Margin</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              label={__(" ", "info-cards")}
              values={styles?.margin[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "margin", editDevice),
                })
              }
               Component={BoxControls}
                                    {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              value={styles?.contentAlignment}
              label={__("Alignment ", "info-cards")}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "contentAlignment"),
                })
              }
               Component={BButtonGroup}
                                    {...premiumProps}
            />

            <Label>Column Gap </Label>
            <BControlPro
              step={1}
              value={styles?.columnGap}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "columnGap"),
                })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />
            <Label>Row Gap </Label>
            <BControlPro
              step={1}
              value={styles?.rowGap}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "rowGap") })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Options", "info-cards")}
            initialOpen={false}
          >
            <Label>
              Open in a New Tab{" "}
              <BControlPro
                checked={options?.isOpenInNewTab}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isOpenInNewTab,
                      "isOpenInNewTab"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>

            <Label>
              Show The Variant{" "}
              <BControlPro
                checked={options?.isVariantShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isVariantShow,
                      "isVariantShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>

            <Label>
              Display the Button{" "}
              <BControlPro
                checked={options?.isButtonShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isButtonShow,
                      "isButtonShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>
            <Label>
              Background Circle{" "}
              <BControlPro
                checked={options?.isVisibleCircle}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isVisibleCircle,
                      "isVisibleCircle"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>
          </PanelBody>
        </>
      )}
      {theme === "theme7" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Add or Remove Cards", "info-cards")}
            initialOpen={false}
          >
            <ItemsPanel
              newItem={themeSevenNewCard}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="productsInfo"
              itemLabel="Card"
              ItemSettings={SevenInfoCardSetting}
              premiumProps={premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="mt0">Section Width</Label>
              <Device />
            </PanelRow>
            <BControlPro
              value={styles?.width[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "width", editDevice),
                })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />
            <PanelRow>
              {" "}
              <Label className="mt0"> Section Padding</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              values={styles?.padding[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "padding", editDevice),
                })
              }
               Component={BoxControl}
                                    {...premiumProps}
            />

            <PanelRow>
              {" "}
              <Label className="mt0"> Section Margin</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              values={styles?.margin[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "margin", editDevice),
                })
              }
               Component={BoxControl}
                                    {...premiumProps}
            />

            <BControlPro
              value={styles?.contentAlignment}
              style={{ marginTop: "5px" }}
              label={__(" Alignment", "info-cards")}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "contentAlignment"),
                })
              }
               Component={BButtonGroup}
                                    {...premiumProps}
            />

            <Label>Column Gap</Label>
            <BControlPro
              value={styles?.columnGap}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "columnGap"),
                })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />

            <Label>Row Gap </Label>
            <BControlPro
              value={styles?.rowGap}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "rowGap") })
              }
               Component={UnitControl}
                                    {...premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Options", "info-cards")}
            initialOpen={false}
          >
            <Label>
              {" "}
              <strong>Enable Tag Visibility</strong>{" "}
              <BControlPro
                checked={options?.isTagShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isTagShow,
                      "isTagShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>

            <Label>
              {" "}
              <strong>Enable Button Visibility</strong>{" "}
              <BControlPro
                checked={options?.isButtonShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isButtonShow,
                      "isButtonShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>

            <Label>
              {" "}
              <strong>Link open in new tab</strong>{" "}
              <BControlPro
                checked={options?.isNewTabOpen}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isNewTabOpen,
                      "isNewTabOpen"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>

            <Label>
              {" "}
              <strong>The element rotates on hover</strong>{" "}
              <BControlPro
                checked={options?.isHoverRotated}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isHoverRotated,
                      "isHoverRotated"
                    ),
                  })
                }
                 Component={ToggleControl}
                                    {...premiumProps}
              />
            </Label>
          </PanelBody>
        </>
      )}

      {theme === "theme8" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__(" Add or Remove Cards", "info-cards")}
            initialOpen={false}
          >
            <ItemsPanel
              newItem={themeEightNewCard}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="productsInfo"
              itemLabel="Card"
              ItemSettings={ThemeEightInfoSetting}
              premiumProps={premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Margin", "info-cards")}
              values={styles?.margin}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "margin") })
              }
              Component={BoxControl}
                               {...premiumProps}
            />
            <BControlPro
              label={__("Padding", "info-cards")}
              values={styles?.padding}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "padding") })
              }
               Component={BoxControl}
                               {...premiumProps}
            />
            <PanelRow>
              <Label>Columns</Label>
              <Device />
            </PanelRow>
            <BControlPro
              value={styles?.columns[device]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "columns", device),
                })
              }
               Component={RangeControl}
                               {...premiumProps}
            />

            <PanelRow>
              <Label>Column Gap</Label> <Device />{" "}
            </PanelRow>

            <BControlPro
              value={styles?.columnGap?.[device]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "columnGap", device),
                })
              }
               Component={UnitControl}
                               {...premiumProps}
            />

            <PanelRow>
              <Label>Row Gap</Label> <Device />{" "}
            </PanelRow>

            <BControlPro
              value={styles?.rowGap?.[device]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "rowGap", device),
                })
              }
               Component={UnitControl}
                               {...premiumProps}
            />
          </PanelBody>

          {/* options  */}
          <PanelBody
            className="bPlPanelBody"
            title={__("Options", "info-cards")}
            initialOpen={false}
          >
            <Label>
              {" "}
              <BControlPro
                checked={options?.isStatusShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isStatusShow,
                      "isStatusShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                               {...premiumProps}
              />{" "}
              <strong>Show Status</strong>
            </Label>

            <Label>
              {" "}
              <BControlPro
                checked={options?.isStateShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isStateShow,
                      "isStateShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                               {...premiumProps}
              />{" "}
              <strong>Show State</strong>
            </Label>

            <Label>
              {" "}
              <BControlPro
                checked={options?.isSocialMediaShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isSocialMediaShow,
                      "isSocialMediaShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                               {...premiumProps}
              />{" "}
              <strong>Show Social Media</strong>
            </Label>

            <Label>
              {" "}
              <BControlPro
                checked={options?.isButtonShow}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isButtonShow,
                      "isButtonShow"
                    ),
                  })
                }
                 Component={ToggleControl}
                               {...premiumProps}
              />{" "}
              <strong>Show Button</strong>
            </Label>

            <Label>
              {" "}
              <BControlPro
                checked={options?.isOpenUrlNewTab}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isOpenUrlNewTab,
                      "isOpenUrlNewTab"
                    ),
                  })
                }
                 Component={ToggleControl}
                               {...premiumProps}
              />{" "}
              <strong>Open the URL in a new tab</strong>
            </Label>
          </PanelBody>
        </>
      )}

      {theme === "theme9" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Add or Remove Cards", "info-cards")}
            initialOpen={false}
          >
            <ItemsPanel
              newItem={themeNineNewCard}
              design="sortable"
              attributes={attributes}
              setAttributes={setAttributes}
              arrKey="productsInfo"
              itemLabel="Card"
              ItemSettings={ThemeNineTextOverlySetting}
             
         premiumProps={premiumProps}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Width", "info-cards")}
              value={styles?.width}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "width") })
              }
               Component={UnitControl}
          {...premiumProps}
            />

            <PanelRow>
              <Label>Padding</Label> <Device />{" "}
            </PanelRow>

            <BControlPro
              values={styles?.padding[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "padding", editDevice),
                })
              }
               Component={BoxControl}
          {...premiumProps}
            />

            <PanelRow>
              <Label>Margin</Label> <Device />{" "}
            </PanelRow>

            <BControlPro
              values={styles?.margin[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "margin", editDevice),
                })
              }
               Component={BoxControl}
          {...premiumProps}
            />

            <PanelRow>
              <Label>Column</Label> <Device />{" "}
            </PanelRow>
            <BControlPro
              value={styles?.columns[editDevice]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "columns", editDevice),
                })
              }
                 Component={RangeControl}
          {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Column Gap", "info-cards")}
              value={styles?.gap?.column}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "gap", "column"),
                })
              }
                 Component={UnitControl}
          {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "10px" }}
              label={__("Row Gap", "info-cards")}
              value={styles?.gap?.row}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "gap", "row"),
                })
              }
              Component={UnitControl}
          {...premiumProps}

            />

            <BControlPro
              style={{ marginTop: "15px" }}
              label={__("Alignment", "info-cards")}
              value={styles?.alignment}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "right", value: "right" },
              ]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "alignment"),
                })
              }
               Component={BButtonGroup}
          {...premiumProps}
            />
          </PanelBody>
        </>
      )}

      {theme === "theme10" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Card", "info-cards")}
            initialOpen={false}
          >
            <BControlPro
              label={__("Upload Image or URL", "info-cards")}
              value={grabCardInfo?.image}
              type={["image"]}
              onChange={(v) => {
                setAttributes({
                  grabCardInfo: updateData(grabCardInfo, v, "image"),
                });
              }}
               Component={InlineMediaUpload}
          {...premiumProps}
            />

            <BControlPro
              placeholder="title..."
              className="productInfoGeneralGap"
              label={__("Title", "info-cards")}
              value={grabCardInfo?.title}
              onChange={(v) =>
                setAttributes({
                  grabCardInfo: updateData(grabCardInfo, v, "title"),
                })
              }
                  Component={TextControl}
          {...premiumProps}
            />

            <BControlPro
              placeholder="description..."
              className="productInfoGeneralGap"
              label={__("Description", "info-cards")}
              value={grabCardInfo?.description}
              onChange={(v) =>
                setAttributes({
                  grabCardInfo: updateData(grabCardInfo, v, "description"),
                })
              }
              Component={TextareaControl}
          {...premiumProps}
            />

            <BControlPro
              placeholder="button text..."
              className="productInfoGeneralGap"
              label={__("Button Text", "info-cards")}
              value={grabCardInfo?.button?.text}
              onChange={(v) =>
                setAttributes({
                  grabCardInfo: updateData(grabCardInfo, v, "button", "text"),
                })
              }

               Component={TextControl}
          {...premiumProps}
            />

            <BControlPro
              placeholder="button link..."
              className="productInfoGeneralGap"
              label={__("Button Link", "info-cards")}
              value={grabCardInfo?.button?.link}
              onChange={(v) =>
                setAttributes({
                  grabCardInfo: updateData(grabCardInfo, v, "button", "link"),
                })
              }
               Component={TextControl}
          {...premiumProps}
            />

            <Label >
              {" "}
              Link open in new tab{" "}
              <BControlPro
                checked={options?.isOpenNewTab}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !options?.isOpenNewTab,
                      "isOpenNewTab"
                    ),
                  })
                }
                 Component={ToggleControl}
          {...premiumProps}
              />
            </Label>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Layout", "info-cards")}
            initialOpen={false}
          >
            <PanelRow>
              {" "}
              <Label className="mt0">Section Width</Label>
              <Device></Device>
            </PanelRow>

            <BControlPro
              value={styles?.width[device]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "width", device),
                })
              }

              Component={UnitControl}
          {...premiumProps}
            />

            <PanelRow>
              {" "}
              <Label className="mt0">Section Height</Label>
              <Device></Device>
            </PanelRow>
            <BControlPro
              value={styles?.height[device]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "height", device),
                })
              }
                 Component={UnitControl}
          {...premiumProps}
            />

            <PanelRow>
              {" "}
              <Label className="mt0">Section Margin</Label>
              <Device></Device>
            </PanelRow>
            <BControlPro
              values={styles?.margin[device]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "margin", device),
                })
              }
                 Component={BoxControl}
          {...premiumProps}
            />

            <PanelRow>
              {" "}
              <Label className="mt0">Section Padding</Label>
              <Device></Device>
            </PanelRow>
            <BControlPro
              values={styles?.padding[device]}
              onChange={(v) =>
                setAttributes({
                  styles: updateData(styles, v, "padding", device),
                })
              }
                  Component={BoxControl}
          {...premiumProps}
            />

            <BControlPro
              style={{ marginTop: "8px" }}
              label={__("Section Radius", "info-cards")}
              values={styles?.radius}
              onChange={(v) =>
                setAttributes({ styles: updateData(styles, v, "radius") })
              }
                  Component={BoxControl}
          {...premiumProps}
            />
          </PanelBody>
        </>
      )}

      {
        theme ==="theme11" &&(  <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add or Remove Cards", "info-cards")}
        initialOpen={false}
      >
      

        <ItemsPanel
          newItem={themeElevenNewCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="productsInfo"
          itemLabel="Card"
          ItemSettings={ThemeElevenInfoSetting}
           premiumProps={premiumProps}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "info-cards")}
        initialOpen={false}
      >
        

        <PanelRow>
          <Label className={"mt5"}>Margin</Label>
          <Device />
        </PanelRow>

        <BControlPro
          values={styles?.margin[editDevice]}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "margin", editDevice) })
          }
            Component={BoxControl}
          {...premiumProps}
        />

        <PanelRow>
          <Label className={"mt5"}>Padding</Label>
          <Device />
        </PanelRow>

        <BControlPro
          values={styles?.padding[editDevice]}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "padding", editDevice) })
          }
           Component={BoxControl}
          {...premiumProps}
        />


        <PanelRow>
          <Label className={"mt5"}>Columns</Label>
          <Device />
        </PanelRow>
        <BControlPro
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          // label="Columns"
          value={styles?.columns[editDevice]}
          onChange={(v) =>
            setAttributes({ styles: updateData(styles, v, "columns", editDevice) })
          }
          min={1}
          max={10}
           Component={RangeControl}
          {...premiumProps}
        />

        <PanelRow>
          <Label className={"mt5"}>Column Gap</Label>
          <Device />
        </PanelRow>
        <BControlPro
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          // label="Columns"
          value={styles?.columnGap[editDevice]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "columnGap", editDevice),
            })
          }
          min={1}
          max={100}
           Component={UnitControl}
          {...premiumProps}
        />

        <PanelRow>
          <Label className={"mt5"}>Row Gap</Label>
          <Device />
        </PanelRow>
        <BControlPro
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          // label="Columns"
          value={styles?.rowGap[editDevice]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "rowGap", editDevice),
            })
          }
          min={1}
          max={100}
           Component={UnitControl}
          {...premiumProps}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <Label>
          Open link in a new tab{" "}
          <BControlPro
            checked={options?.isOpenNewTab}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isOpenNewTab,
                  "isOpenNewTab"
                ),
              })
            }
            Component={ToggleControl}
          {...premiumProps}
          />
        </Label>
        <Label>
          Show Button{" "}
          <BControlPro
            checked={options?.isButtonVisible}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isButtonVisible,
                  "isButtonVisible"
                ),
              })
            }
             Component={ToggleControl}
          {...premiumProps}
          />
        </Label>
      </PanelBody>
    </>)
      }

      {
        theme ==="theme12" &&( <PanelBody
      className="bPlPanelBody"
      title={__("Add or Remove Cards", "info-cards")}
      initialOpen={false}
    >
      <ItemsPanel
        newItem={themeTwelveCard}
        design="sortable"
        attributes={attributes}
        setAttributes={setAttributes}
        arrKey="productsInfo"
        itemLabel="Card"
        ItemSettings={ThemeTwelveSettings}
        premiumProps={premiumProps}
      />
    </PanelBody>)
      }
    </>
  );
};

export default General;
