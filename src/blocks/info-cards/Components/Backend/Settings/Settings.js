  import {
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
  } from "@wordpress/block-editor";
  import { __ } from "@wordpress/i18n";


  import { TabPanel } from "@wordpress/components";

  import General from "./General/General";
  import Style from "./Style/Style";

  import { themeSwitch, toolTipPresets, } from "../../../utils/function";
  import BlockPreview from "./panel/BlockPreview";
  import { AboutProModal, ProModal } from "../../../../../../../bpl-tools/ProControls";


  export default function ({ attributes, setAttributes, updateCard, device,activeIndex,isPremium,isProModalOpen,setIsProModalOpen }) {
    const {
      cards,
      theme,
      columns,

      alignment
    } = attributes;
    
    // const [isProModalOpen, setIsProModalOpen] = useState(false);

    const premiumProps = { isPremium, setIsProModalOpen };

    const props={
      premiumProps
    }

    return (
      <>
        <InspectorControls>
          <TabPanel
            className="bPlTabPanel"
            activeClass="activeTab"
            tabs={[
              { name: "general", title: "General" },
              { name: "style", title: "Style" },
            ]}
          >
            {(tab) => (
              <>
                {"general" === tab.name && (
                  <General
                  {...props}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    updateCard={updateCard}
                    editDevice={device}
                  />
                )}

                {"style" === tab.name && (
                  <Style
                  {...props}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    updateCard={updateCard}
                    editDevice={device}
                    activeIndex={activeIndex}
                  />
                )}
              </>
            )}
          </TabPanel>
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar
            value={alignment}
            onChange={(val) => setAttributes({ alignment: val })}
            describedBy={__("Block Name Alignment")}
            alignmentControls={[
              {
                title: __("Block Name in left", "textdomain"),
                align: "left",
                icon: "align-left",
              },
              {
                title: __("Block Name in center", "textdomain"),
                align: "center",
                icon: "align-center",
              },
              {
                title: __("Block Name in right", "textdomain"),
                align: "right",
                icon: "align-right",
              },
            ]}
          />


        
          <BlockPreview
            options={toolTipPresets}
            isPremium={isPremium}
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
                            align:"none",
                            styles:{}

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


          ></BlockPreview>

        </BlockControls>

        <ProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link="admin.php?page=info-cards-dashboard#/pricing"
      >
          <li>
          <strong>
            {__("Pro: ", "info-cards")}
          </strong>
          {__("Everything in free", "info-cards")}
        </li>

        <li>
          <strong>
            {__("Themes: ", "info-cards")}
          </strong>
          {__("5+ built-in design themes with 1 click.", "info-cards")}
        </li>
            <li>
          <strong>
            {__("Animated Cards: ", "info-cards")}
          </strong>
          {__("Eye-catching 3D and animated card styles for an interactive user experience.", "info-cards")}
        </li>
         <li>
          <strong>
            {__("Motion: ", "info-cards")}
          </strong>
          {__("Advanced mouse movement animation for cards.", "info-cards")}
        </li>
        <li>
				<strong>
					{__("Customization: ", "info-cards")}
				</strong>
				{__("Easily customize color, font, spacing, and card behavior directly from the block editor.", "info-cards")}
			</li>
      </ProModal>
      </>
    );
  }
