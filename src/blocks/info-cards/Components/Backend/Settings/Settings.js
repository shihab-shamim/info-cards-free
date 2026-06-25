  import {
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
  } from "@wordpress/block-editor";
  import { __ } from "@wordpress/i18n";


  import { TabPanel } from "@wordpress/components";

  import General from "./General/General";
  import Style from "./Style/Style";

  import {  toolTipPresets, } from "../../../utils/function";
  import BlockPreview from "./panel/BlockPreview";
import { BBlocksAds } from "../../../../../../../bpl-tools/Components";


  export default function ({ attributes, setAttributes, updateCard, device,activeIndex }) {
    const {
      cards,
      theme,
      columns,

      alignment
    } = attributes;
    
    // const [isProModalOpen, setIsProModalOpen] = useState(false);

 

    return (
      <>
        <InspectorControls>
          <div className='bPlInspectorInfo'>
					<BBlocksAds/>
				</div>

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
                  
                    attributes={attributes}
                    setAttributes={setAttributes}
                    updateCard={updateCard}
                    editDevice={device}
                  />
                )}

                {"style" === tab.name && (
                  <Style
                 
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
            
  
            
                    
                      }}


          ></BlockPreview>

        </BlockControls>

      </>
    );
  }
