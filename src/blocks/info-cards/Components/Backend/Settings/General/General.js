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
  
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Label,
  Background,
  InlineMediaUpload,

} from "../../../../../../../../bpl-tools/Components";
import { useState } from "react";
import { BDevice } from "../../../../../../../../bpl-tools/Components/Deprecated";
import { gearIcon } from "../../../../../../../../bpl-tools/utils/icons";


const General = ({
  attributes,
  setAttributes,
  updateCard,

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
   
  } = attributes;
 

  const [device, setDevice] = useState("desktop");



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

       
          }}
          options={[
            { label: "Default", value: "default" },
            { label: "Theme 1", value: "theme1" },
            { label: "Theme 2", value: "theme2" },
            { label: "Theme 3", value: "theme3" },
            { label: "Theme 4", value: "theme4" },
            { label: "Theme 5", value: "theme5" }
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

                

             
              }}
              options={[
                { label: "Default", value: "default" },
                { label: "Theme 1", value: "theme1" },
                { label: "Theme 2", value: "theme2" },
                { label: "Theme 3", value: "theme3" },
                { label: "Theme 4", value: "theme4" },
                { label: "Theme 5", value: "theme5" }
              
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
     

     
    
  );
};

export default General;
