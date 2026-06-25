  import { produce } from "immer";
  import Cards from "../Components/Backend/Cards";
  import Theme6 from "../Components/Common/theme6/Theme6";
  import SevenInfoCard from "../Components/Common/theme7/SevenInfoCard";
  import ThemeEightInfoProfile from "../Components/Common/theme8/ThemeEightInfoProfile";
  import ThemeNineTexOverly from "../Components/Common/theme9/ThemeNineTexOverly";
  import ThemeTenMouseMove from "../Components/Common/theme10/ThemeTenMouseMove";
import ThemeElevenServiceInfo from "../Components/Common/theme11/ThemeElevenServiceInfo";
import ThemeTwelveHoverService from "../Components/Common/theme12/ThemeTwelveHoverService";
  export const getBoxValue = (object) => Object.values(object).join(" ");

  export const themeSwitch = (theme = "default", attributes) =>
    produce(attributes, (draft) => {
      // setAttributes({theme:theme})
      draft["theme"] = theme;
      draft["align"] = "full";
      switch (theme) {
        case "theme6":
          draft["styles"]["bg"] = {};
          draft["styles"]["radius"] = {
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          };

          draft["styles"]["width"] = {
            desktop: "100%",
            tablet: "100%",
            mobile: "100%",
          };

          draft["styles"]["padding"] = {
            desktop: {
              top: "10px",
              left: "0px",
              right: "0px",
              bottom: "10px",
            },
            tablet: {
              top: "10px",
              left: "0px",
              right: "0px",
              bottom: "10px",
            },
            mobile: {
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
            },
          };
          draft["styles"]["margin"] = {
            desktop: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            tablet: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            mobile: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
          };
          draft["styles"]["contentAlignment"] = "center";
          draft["styles"]["columnGap"] = "20px";
          draft["styles"]["rowGap"] = "20px";
          draft["options"] = {
            isOpenInNewTab: true,
            isVariantShow: true,
            isButtonShow: true,
            isVisibleCircle: true,
            isTagShow: true,
            isNewTabOpen: true,
            isHoverRotated: true,
          };
          draft["styles"]["card"] = {
            width: "400px",
            height: "660px",
            bg: { type: "solid", color: "#ffffff" },
            radius: {
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
            },
            padding: {
              top: "10px",
              left: "20px",
              right: "20px",
              bottom: "10px",
            },
            shadow: [
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "10px",
                spreed: "0px",
                color: "rgba(99,99,99,0.2)",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "5px",
                blur: "6px",
                spreed: "0px",
                color: "rgba(99,99,99,0.2)",
                isInset: false,
              },
            ],
            image: {
              width: "360px",
              height: "362px",
              position: "cover",
            },
            circle: {
              width: "300px",
              height: "270px",
              radius: {
                top: "50%",
                left: "50%",
                right: "50%",
                bottom: "50%",
              },
              bg: {
                type: "gradient",
                gradient:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 217, 255, 0.5))",
              },
            },
            title: {
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: "",
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 30,
                  tablet: 30,
                  mobile: 22,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              color: "#000000",
              alignment: "center",
            },
            description: {
              color: "#000000",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: "",
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 20,
                  tablet: 20,
                  mobile: 16,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "1.5",
                letterSpace: "0px",
              },
              alignment: "justify",
            },
            variantState: {
              bg: "#ffffff",
              padding: {
                top: "10px",
                right: "20px",
                bottom: "10px",
                left: "20px",
              },
              radius: {
                top: "2px",
                right: "2px",
                bottom: "2px",
                left: "2px",
              },
              shadow: [
                {
                  hOffset: "0px",
                  vOffset: "0px",
                  blur: "2px",
                  spreed: "0px",
                  color: "#666666",
                  isInset: false,
                },
              ],
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: "",
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 15,
                  tablet: 15,
                  mobile: 15,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "1px",
              },
              color: "#000000",
              gap: "5px",
              alignment: "space-between",
              active: {
                color: "#fff ",
                bg: "#444",
              },
            },
            button: {
              bg: "#0bf2f2",
              color: "#000000",
              padding: {
                top: "10px",
                left: "20px",
                right: "20px",
                bottom: "10px",
              },
              radius: {
                top: "6px",
                left: "6px",
                right: "6px",
                bottom: "6px",
              },
              shadow: [
                {
                  hOffset: "0px",
                  vOffset: "0px",
                  blur: "2px",
                  spreed: "0px",
                  color: "#666666",
                  isInset: false,
                },
              ],
              hover: {
                color: "#0bf2f2 ",
                bg: "#444",
              },
              width: "100%",
              alignment: "center",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: "",
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 18,
                  tablet: 18,
                  mobile: 18,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
          };
          draft["productsInfo"] = [
            {
              title: "Alienware Gaming Laptop",
              description:
                "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
              variant: ["i3", "i5", "i6", "i9"],
              image:
                "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
              button: {
                text: "Buy Now",
                link: "",
              },
            },
            {
              title: "Alienware Gaming Laptop",
              description:
                "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
              variant: ["i3", "i5", "i6", "i9"],
              image:
                "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
              button: {
                text: "Buy Now",
                link: "",
              },
            },
            {
              title: "Alienware Gaming Laptop",
              description:
                "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
              variant: ["i3", "i5", "i6", "i9"],
              image:
                "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
              button: {
                text: "Buy Now",
                link: "",
              },
            },
          ];
          break;

        case "theme7":
          draft["styles"]["bg"] = {
            type: "solid",
            color: "#191919",
          };
          draft["styles"]["radius"] = {
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          };

          draft["styles"]["width"] = {
            desktop: "100%",
            tablet: "100%",
            mobile: "100%",
          };
          draft["styles"]["padding"] = {
            desktop: {
              top: "50px",
              left: "0px",
              bottom: "50px",
              right: "0px",
            },
            tablet: {
              top: "50px",
              left: "0px",
              bottom: "50px",
              right: "0px",
            },
            mobile: {
              top: "50px",
              left: "0px",
              bottom: "50px",
              right: "0px",
            },
          };

          draft["styles"]["margin"] = {
            desktop: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            tablet: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            mobile: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
          };
          draft["styles"]["contentAlignment"] = "center";
          draft["styles"]["columnGap"] = "100px";
          draft["styles"]["rowGap"] = "100px";
          draft["options"] = {
            isOpenInNewTab: true,
            isVariantShow: true,
            isButtonShow: true,
            isVisibleCircle: true,
            isTagShow: true,
            isNewTabOpen: true,
            isHoverRotated: true,
          };

          draft["styles"]["card"] = {
            width: {
              desktop: "300px",
              tablet: "300px",
              mobile: "300px",
            },
            height: {
              desktop: "400px",
              tablet: "400px",
              mobile: "400px",
            },
            contentBg: { type: "solid", color: "#4379F2" },
            contentRadius: {
              top: "0px",
              right: "0px",
              bottom: "10px",
              left: "10px",
            },
            radius: {
              top: "10px",
              right: "10px",
              bottom: "10px",
              left: "10px",
            },
            tag: {
              bg: "#191919",
              width: "70px",
              height: "70px",
              position: {
                left: 25,
                top: 75,
              },
              radius: {
                top: "10px",
                left: "10px",
                right: "10px",
                bottom: "10px",
              },
              padding: {
                top: "12px",
                left: "12px",
                right: "12px",
                bottom: "12px",
              },
              color: "#ffffff",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: 700,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 12,
                  tablet: 12,
                  mobile: 12,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "1px",
              },
              value: {
                color: "#FFEB00",
                typo: {
                  fontFamily: "Archivo",
                  fontCategory: "sans-serif",
                  fontWeight: 900,
                  fontVariant: "400",
                  isUploadFont: true,
                  fontSize: {
                    desktop: 19,
                    tablet: 19,
                    mobile: 19,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "135%",
                  letterSpace: "",
                },
              },
            },
            title: {
              color: "#f0f8ff",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: 900,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 25,
                  tablet: 25,
                  mobile: 25,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "1px",
              },
            },
            description: {
              color: "#b5b7b9",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: 400,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 12,
                  tablet: 12,
                  mobile: 12,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "",
              },
            },
            button: {
              color: "#FFEB00",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: 900,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 10,
                  tablet: 10,
                  mobile: 10,
                },
                fontStyle: "normal",
                textTransform: "uppercase",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "",
              },
            },
            contentPadding: {
              top: "50px",
              left: "25px",
              right: "25px",
              bottom: "25px",
            },
            cardPadding: {
              top: "100px",
              left: "0px",
              right: "0px",
              bottom: "0px",
            },
            cardRoted: 20,
          };

          draft["productsInfo"] = [
            {
              title: "Nicotine",
              content:
                "Nicotine is a poisonous, addictive chemical found in tobacco plants. It is also present in most e-cigarettes, and is used in some insecticides.",
              button: {
                text: "See more",
                link: "#",
                color: "#FFEB00",
              },
              tag: {
                name: "View",
                value: "3D",
              },
              tagStyle: {
                name: "#ffffff",
                value: "#FFEB00",
              },
              backgroundImage: {
                type: "image",
                image: {
                  alt: "",
                  url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                  title: "backgrouns",
                },
                position: "top center",
              },
              backgroundColor: "#4379F2",
              titleColor: "#f0f8ff",
              descriptionColor: "#b5b7b9",
              shadow: [
                {
                  blur: "50px",
                  color: "#4379F2",
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
                  color: "#0000f3",
                  isInset: false,
                },
                {
                  hOffset: "0px",
                  vOffset: "18px",
                  blur: "36px",
                  spreed: "-18px",
                  color: "#0000f0",
                  isInset: false,
                },
              ],
            },
            {
              title: "Caffeine",
              content:
                "Caffeine is a central nervous system stimulant found in coffee, tea, and energy drinks. It's the most commonly consumed psychoactive substance in the world.",
              tag: {
                name: "View",
                value: "3D",
              },
              tagStyle: {
                name: "#ffffff",
                value: "#53F6FF",
              },
              button: {
                text: "See more",
                link: "#",
                color: "#53F6FF",
              },
              backgroundImage: {
                type: "image",
                image: {
                  alt: "",
                  url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                  title: "backgrouns",
                },
                position: "top center",
              },
              backgroundColor: "#E05F25",
              titleColor: "#f0f8ff",
              descriptionColor: "#b5b7b9",
              shadow: [
                {
                  blur: "50px",
                  color: "#E05F25",
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
                  color: "#E05F25",
                  isInset: false,
                },
                {
                  hOffset: "0px",
                  vOffset: "18px",
                  blur: "36px",
                  spreed: "-18px",
                  color: "#E05F25",
                  isInset: false,
                },
              ],
            },
            {
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
                  title: "backgrouns",
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
            },
            {
              title: "Oxytocin",
              content:
                "Oxytocin is a hormone that plays lorem50 a role in reproduction, social bonding, and childbirth. It's also known as the love hormone.",
              tag: {
                name: "View",
                value: "3D",
              },
              tagStyle: {
                name: "#ffffff",
                value: "#01FFBE",
              },
              button: {
                text: "See more",
                link: "#",
                color: "#01FFBE",
              },
              backgroundImage: {
                type: "image",
                image: {
                  alt: "",
                  url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                  title: "backgrouns",
                },
                position: "top center",
              },
              backgroundColor: "#F24CA9",
              titleColor: "#f0f8ff",
              descriptionColor: "#b5b7b9",
              shadow: [
                {
                  blur: "50px",
                  color: "#F24CA9",
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
                  color: "#F24CA9",
                  isInset: false,
                },
                {
                  hOffset: "0px",
                  vOffset: "18px",
                  blur: "36px",
                  spreed: "-18px",
                  color: "#F24CA9",
                  isInset: false,
                },
              ],
            },
          ];

          break;

        case "theme8":
          draft["styles"] = {
            radius: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            columns: {
              desktop: 3,
              tablet: 2,
              mobile: 1,
            },
            columnGap: {
              desktop: "50px",
              tablet: "20px",
              mobile: "20px",
            },
            rowGap: {
              desktop: "50px",
              tablet: "20px",
              mobile: "20px",
            },
            bg: "#FFFFFF",
            margin: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            padding: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            card: {
              profileImage: {
                border: { color: "#ffffff", style: "solid", width: "3px" },
                width: "70px",
                height: "70px",
                radius: {
                  top: "10px",
                  right: "10px",
                  bottom: "10px",
                  left: "10px",
                },
              },
              company: {
                color: "#666",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: "",
                  fontSize: {
                    desktop: 14,
                    tablet: 12,
                    mobile: 10,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
              },
              bg: {
                type: "gradient",
                gradient: "linear-gradient(to bottom right, #f7f7f6, #f3faf8)",
              },
              padding: {
                top: "0px",
                left: "0px",
                bottom: "0px",
                right: "0px",
              },
              margin: {
                top: "0px",
                left: "0px",
                bottom: "0px",
                right: "0px",
              },
              radius: {
                top: "16px",
                left: "16px",
                bottom: "16px",
                right: "16px",
              },
              shadow: [
                {
                  hOffset: "0px",
                  vOffset: "4px",
                  blur: "15px",
                  spreed: "0px",
                  color: "rgba(0, 0, 0, 0.1)",
                  isInset: false,
                },
              ],
              header: {
                name: {
                  color: "#222",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: "",
                    fontSize: {
                      desktop: 20,
                      tablet: 16,
                      mobile: 14,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "",
                    letterSpace: "0px",
                  },
                  alignment: "center",
                },
                title: {
                  color: "#f13a59",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      desktop: 16,
                      tablet: 14,
                      mobile: 9,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "",
                    letterSpace: "0px",
                  },
                },
                status: {
                  color: "#00c07f",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 500,
                    fontSize: {
                      desktop: 14,
                      tablet: 14,
                      mobile: 14,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "",
                    letterSpace: "0px",
                  },
                },
                description: {
                  color: "#555",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      desktop: 14,
                      tablet: 14,
                      mobile: 14,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "1.5",
                    letterSpace: "0px",
                  },
                  alignment: "center",
                },
              },
              messageButton: {
                bg: "#f13a59",
                color: "white",
                radius: {
                  top: "8px",
                  left: "8px",
                  bottom: "8px",
                  right: "8px",
                },
                padding: {
                  top: "12px",
                  left: "12px",
                  bottom: "12px",
                  right: "12px",
                },
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    desktop: 16,
                    tablet: 16,
                    mobile: 16,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
                size: "20px",
              },

              states: {
                bg: "#fff",
                padding: {
                  top: "10px",
                  left: "20px",
                  bottom: "10px",
                  right: "20px",
                },
                radius: {
                  top: "8px",
                  left: "8px",
                  bottom: "8px",
                  right: "8px",
                },
                number: {
                  color: "#222",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 700,
                    fontSize: {
                      desktop: 18,
                      tablet: 18,
                      mobile: 18,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "",
                    letterSpace: "0px",
                  },
                },
                text: {
                  color: "#666",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: "",
                    fontSize: {
                      desktop: 14,
                      tablet: 14,
                      mobile: 14,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "",
                    letterSpace: "0px",
                  },
                },
              },
            },
          };

          draft["productsInfo"] = [
            {
              id: 1,
              name: "Aisha Patel",
              title: "Marketing Strategist",
              company: "GrowthBoost",
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
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
                  color: "#1da1f2",
                  show: true,
                },
                {
                  name: "instagram",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
                  color: "#e1306c",
                  show: true,
                },
                {
                  name: "linkedin",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
                  color: "#666",
                  show: true,
                },
                {
                  name: "email",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>',
                  color: "#0077b5",
                  show: true,
                },
              ],
              button: {
                text: "Message",
                link: "#",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
              },
            },
            {
              id: 2,
              name: "John Doe",
              title: "Product Manager",
              company: "InnovateX",
              status: "Online",
              bio: "Leading product development and improving user experiences.",
              state: [
                { name: "posts", quantity: 120 },
                { name: "followers", quantity: 8920 },
                { name: "following", quantity: 540 },
              ],
              profileImg: "https://randomuser.me/api/portraits/men/75.jpg",
              social: [
                {
                  name: "twitter",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
                  color: "#1da1f2",
                  show: true,
                },
                {
                  name: "instagram",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
                  color: "#e1306c",
                  show: true,
                },
                {
                  name: "linkedin",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
                  color: "#666",
                  show: true,
                },
                {
                  name: "email",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>',
                  color: "#0077b5",
                  show: true,
                },
              ],
              button: {
                text: "Message",
                link: "#",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
              },
            },
            {
              id: 3,
              name: "Sara Lee",
              title: "UX Designer",
              company: "Creatives",
              status: "Online",
              bio: "Passionate about creating intuitive and beautiful user interfaces.",
              state: [
                { name: "posts", quantity: 45 },
                { name: "followers", quantity: 3200 },
                { name: "following", quantity: 120 },
              ],
              profileImg: "https://randomuser.me/api/portraits/women/68.jpg",
              social: [
                {
                  name: "twitter",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
                  color: "#1da1f2",
                  show: true,
                },
                {
                  name: "instagram",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
                  color: "#e1306c",
                  show: true,
                },
                {
                  name: "linkedin",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
                  color: "#666",
                  show: true,
                },
                {
                  name: "email",
                  link: "#",
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>',
                  color: "#0077b5",
                  show: true,
                },
              ],
              button: {
                text: "Message",
                link: "#",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
              },
            },
          ];
          draft["align"] = "wide";

          draft["options"] = {
            isSocialMediaShow: true,
            isStateShow: true,
            isButtonShow: true,
            isStatusShow: true,
            isOpenUrlNewTab: true,
            messageButtonIcon:
              '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
          };

          break;

        case "theme9":
          draft["styles"] = {
            bg: { type: "solid", color: "" },
            width: "1024px",
            padding: {
              desktop: {
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
              },
              tablet: {
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
              },
              mobile: {
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
              },
            },
            margin: {
              desktop: {
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
              },
              tablet: {
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
              },
              mobile: {
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
              },
            },
            radius: {
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
            },
            gap: {
              column: "16px",
              row: "16px",
            },
            alignment: "center",
            columns: {
              desktop: 4,
              tablet: 2,
              mobile: 1,
            },

            overlay: {
              type: "gradient",
              gradient:
                "linear-gradient( to bottom, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.009) 11.7%, hsla(0, 0%, 0%, 0.034) 22.1%, hsla(0, 0%, 0%, 0.072) 31.2%, hsla(0, 0%, 0%, 0.123) 39.4%, hsla(0, 0%, 0%, 0.182) 46.6%, hsla(0, 0%, 0%, 0.249) 53.1%, hsla(0, 0%, 0%, 0.320) 58.9%, hsla(0, 0%, 0%, 0.394) 64.3%, hsla(0, 0%, 0%, 0.468) 69.3%, hsla(0, 0%, 0%, 0.540) 74.1%, hsla(0, 0%, 0%, 0.607) 78.8%, hsla(0, 0%, 0%, 0.668) 83.6%, hsla(0, 0%, 0%, 0.721) 88.7%, hsla(0, 0%, 0%, 0.762) 94.1%, hsla(0, 0%, 0%, 0.790) 100%)",
            },
            title: {
              typo: {
                fontFamily: "Cardo, serif",
                fontCategory: "sans-serif",
                fontWeight: 700,
                fontVariant: "700",
                isUploadFont: true,
                fontSize: {
                  desktop: 21,
                  tablet: 21,
                  mobile: 21,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "120%",
                letterSpace: "0px",
              },
              color: "#F5F5F5",
            },
            description: {
              typo: {
                fontFamily: "Cardo, serif",
                fontCategory: "sans-serif",
                fontWeight: 400,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 18,
                  tablet: 18,
                  mobile: 18,
                },
                fontStyle: "italic",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "0px",
              },
              color: "#F5F5F5",
            },
            button: {
              padding: {
                top: "12px",
                right: "24px",
                bottom: "12px",
                left: "24px",
              },
              colors: {
                color: "#ffffff",
                bgType: "solid",
                bg: "#000000",
              },
              hover: {
                color: "#ffffff",
                bgType: "solid",
                bg: "#1a1a1a",
              },
              typo: {
                fontFamily: "Cardo, serif",
                fontCategory: "sans-serif",
                fontWeight: 700,
                fontVariant: "700",
                isUploadFont: true,
                fontSize: {
                  desktop: 10,
                  tablet: 10,
                  mobile: 10,
                },
                fontStyle: "normal",
                textTransform: "uppercase",
                textDecoration: "none",
                lineHeight: "120%",
                letterSpace: "0.4px",
              },
              border: {
                color: "yellow",
                style: "dashed",
                width: "1px",
              },
            },
            view: {
              padding: {
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
              },
              radius: {
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
              },
              contentPadding: {
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
              },
            },
          };

          draft["productsInfo"] = [
            {
              title: "Mountain View",
              description:
                "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
              buttonText: "View Trips",
              buttonLink: "",
              imageUrl:
                "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              newTab: true,
            },
            {
              title: "To The Beach",
              description:
                "Plan your next beach trip with these fabulous destinations",
              buttonText: "View Trips",
              buttonLink: "",
              imageUrl:
                "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              newTab: true,
            },
            {
              title: "Desert Destinations",
              description: "It's the desert you've always dreamed of",
              buttonText: "Book Now",
              buttonLink: "",
              imageUrl:
                "https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              newTab: true,
            },
            {
              title: "Explore The Galaxy",
              description:
                "Seriously, straight up, just blast off into outer space today",
              buttonText: "Book Now",
              buttonLink: "",
              imageUrl:
                "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
              newTab: true,
            },
          ];

          break;

        case "theme10":
          draft["styles"] = {
            width: {
              desktop: "100%",
              tablet: "100%",
              mobile: "100%",
            },
            height: {
              desktop: "900px",
              tablet: "900px",
              mobile: "900px",
            },
            margin: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
            radius: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            card: {
              translateY: "50%",
              translateX: "50%",
              width: {
                desktop: "684px",
                tablet: "684px",
                mobile: "300px",
              },
              height: {
                desktop: "600px",
                tablet: "600px",
                mobile: "550px",
              },
              bg: {
                type: "image",
                image: { url: "https://assets.codepen.io/3165458/pattern.png" },
              },
              overlay: {
                type: "gradient",
                gradient:
                  "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              },
              radius: {
                top: "36px",
                right: "36px",
                left: "36px",
                bottom: "36px",
              },
              image: {
                width: {
                  desktop: "552px",
                  tablet: "552px",
                  mobile: "280px",
                },
                height: {
                  desktop: "468px",
                  tablet: "468px",
                  mobile: "468px",
                },
                translateY: "-20%",
                translateX: "50%",
              },
              content: {
                padding: {
                  desktop: {
                    top: "48px",
                    right: "48px",
                    bottom: "48px",
                    left: "48px",
                  },
                  tablet: {
                    top: "48px",
                    right: "48px",
                    bottom: "48px",
                    left: "48px",
                  },
                  mobile: {
                    top: "0",
                    right: "0",
                    bottom: "30px",
                    left: "0",
                  },
                },
                alignment: "center",
                gap: "10px",
                title: {
                  color: "#1c2b33",
                  typo: {
                    fontFamily: "Montserrat",
                    fontCategory: "sans-serif",
                    fontWeight: 600,
                    fontVariant: "600",
                    isUploadFont: true,
                    fontSize: {
                      desktop: 48,
                      tablet: 48,
                      mobile: 24,
                    },
                    fontStyle: "bold",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "120%",
                    letterSpace: "0px",
                  },
                },
                description: {
                  color: "#1c2b33",
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 400,
                    fontVariant: "600",
                    isUploadFont: true,
                    fontSize: {
                      desktop: 16,
                      tablet: 16,
                      mobile: 14,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "144%",
                    letterSpace: "0px",
                  },
                },
                button: {
                  padding: {
                    top: "18px",
                    right: "24px",
                    left: "24px",
                    bottom: "18px",
                  },
                  colors: {
                    color: "#FFFFFF",
                    bgType: "solid",
                    bg: "#0081fa",
                    gradient: "linear-gradient(135deg, #4527a4, #8344c5)",
                  },
                  typo: {
                    fontFamily: "",
                    fontCategory: "sans-serif",
                    fontWeight: 400,
                    fontVariant: "400",
                    isUploadFont: true,
                    fontSize: {
                      desktop: 16,
                      tablet: 16,
                      mobile: 13,
                    },
                    fontStyle: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    lineHeight: "144%",
                    letterSpace: "0px",
                  },
                },
              },
            },
          };
          draft["options"] = {
            isOpenNewTab: true,
          };

          break;

          case "theme11":
            draft["styles"]={
          "columns": {
            "desktop": 4,
            "tablet": 2,
            "mobile": 1
          },
          "columnGap": {
            "desktop": "45px",
            "tablet": "45px",
            "mobile": "45px"
          },
          "rowGap": {
            "desktop": "45px",
            "tablet": "45px",
            "mobile": "45px"
          },
          "width": {
            "desktop": "",
            "tablet": "",
            "mobile": ""
          },
          "bg": { "type": "solid", "color": "" },
          "padding": {
            "desktop": {
              "top": "20px",
              "right": "20px",
              "bottom": "20px",
              "left": "20px"
            },
            "tablet": {
              "top": "20px",
              "right": "0px",
              "bottom": "30px",
              "left": "0px"
            },
            "mobile": {
              "top": "20px",
              "right": "0px",
              "bottom": "30px",
              "left": "0px"
            }
          },
          "margin": {
            "desktop": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "tablet": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            },
            "mobile": {
              "top": "0px",
              "right": "0px",
              "bottom": "0px",
              "left": "0px"
            }
          },
          "radius": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "alignment": "",
          "card": {
            "height": "386px",
            "radius": {
              "top": "10px",
              "right": "10px",
              "bottom": "10px",
              "left": "10px"
            },
            "padding": {
              "top": "40px",
              "right": "32px",
              "bottom": "40px",
              "left": "32px"
            },
            "bg": {
              "color": "#ffffff"
            },
            "shadow": [
              {
                "hOffset": "0px",
                "vOffset": "8px",
                "blur": "32px",
                "spreed": "0px",
                "color": "rgba(148, 163, 184, 0.15)",
                "isInset": false
              }
            ],
        "logo":{
        "width":"56px",
        "height":"56px",
        "size":"27px"
        },
        "title":{
        "color":"#233D62",
        "typo":{
                "fontFamily": "",
                "fontCategory": "sans-serif",
                "fontWeight": "600",
                "fontVariant": "400",
                "isUploadFont": true,
                "fontSize": {
                  "desktop": 20,
                  "tablet": 20,
                  "mobile": 20
                },
                "fontStyle": "normal",
                "textTransform": "none",
                "textDecoration": "none",
                "lineHeight": "130%",
                "letterSpace": "1px"
              }
        }
        ,
        "description":{
        "color":"#233D62",
        "typo":{
                "fontFamily": "",
                "fontCategory": "sans-serif",
                "fontWeight": "",
                "fontVariant": "400",
                "isUploadFont": true,
                "fontSize": {
                  "desktop": 14,
                  "tablet": 14,
                  "mobile": 14
                },
                "fontStyle": "normal",
                "textTransform": "none",
                "textDecoration": "none",
                "lineHeight": "160%",
                "letterSpace": "0px"
              }
        },
        "button":{
        "color":"#243D62",
        "hoverColor":"#1e293b",
        "typo":{
                "fontFamily": "",
                "fontCategory": "sans-serif",
                "fontWeight": "700",
                "fontVariant": "400",
                "isUploadFont": true,
                "fontSize": {
                  "desktop": 13,
                  "tablet": 13,
                  "mobile": 13
                },
                "fontStyle": "normal",
                "textTransform": "none",
                "textDecoration": "none",
                "lineHeight": "130%",
                "letterSpace": "1.5px"
              },
        "size":"15px"
        },
        "highlight":{
          "colors":{
            "bg":"#eef3f9", "bgType":"solid","color":"#1b1268"

          },
          "padding":{
            "top": "6px",
              "right": "12px",
              "bottom": "6px",
              "left": "12px"
          },
          "radius":{
            "top": "100px",
              "right": "100px",
              "bottom": "100px",
              "left": "100px"

          },
          "typo":{
                "fontFamily": "",
                "fontCategory": "sans-serif",
                "fontWeight": "600",
                "fontVariant": "400",
                "isUploadFont": true,
                "fontSize": {
                  "desktop": 11,
                  "tablet": 11,
                  "mobile": 11
                },
                "fontStyle": "normal",
                "textTransform": "none",
                "textDecoration": "none",
                "lineHeight": "",
                "letterSpace": "0.5px"
              }
        }
          }
                  }

            draft["options"] ={
        "buttonIcon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z'/></svg>",
		"isButtonVisible":true,
		"isOpenNewTab":true
      }
      draft["align"] = "wide";

 draft["productsInfo"] =[
        {
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
        },
        {
          "title": "Digital Marketing",
          "badge": "EXCLUSIVE",
          "description": "Creating brand identities, digital experiences, and print materials that communicate clearly.",
          "icon": {
            "color": "#67C8D8",
            "svgPath": "<svg viewBox=\"0 0 24 24\" ><path  d=\"M17,0a1,1,0,0,0-1,1c0,2.949-2.583,4-5,4H4A4,4,0,0,0,0,9v2a3.979,3.979,0,0,0,1.514,3.109l3.572,7.972A3.233,3.233,0,0,0,8.039,24a2.982,2.982,0,0,0,2.72-4.2L8.559,15H11c2.417,0,5,1.051,5,4a1,1,0,0,0,2,0V1A1,1,0,0,0,17,0ZM8.937,20.619A.983.983,0,0,1,8.039,22a1.232,1.232,0,0,1-1.126-.734L4.105,15H6.359ZM16,14.6A7.723,7.723,0,0,0,11,13H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7h7a7.723,7.723,0,0,0,5-1.595Zm7.9.852a1,1,0,0,1-1.342.448l-2-1a1,1,0,0,1,.894-1.79l2,1A1,1,0,0,1,23.9,15.447Zm-3.79-9a1,1,0,0,1,.448-1.342l2-1a1,1,0,1,1,.894,1.79l-2,1a1,1,0,0,1-1.342-.448ZM20,10a1,1,0,0,1,1-1h2a1,1,0,0,1,0,2H21A1,1,0,0,1,20,10Z\" /></svg>",
            "bg": "#E2F5F8"
          },
          "button": {
            "text": "— LEARN MORE",
            "link": "#"
          },
          "top": "60px",
          "highlight": true,
          "highlightLabel": "EXCLUSIVE"
        },
        {
          "title": "Search Engine Optimization",
          "description": "Creating brand identities, digital experiences, and print materials that communicate clearly.",
          "icon": {
            "color": "#16a34a",
            "svgPath": "<svg viewBox=\"0 0 24 24\" ><path  d=\"M20,4H15a4,4,0,0,0-4-4H4A4,4,0,0,0,0,4V23a1,1,0,0,0,2,0V13h8a4,4,0,0,0,4,4h6a4,4,0,0,0,4-4V8A4,4,0,0,0,20,4ZM2,11V4A2,2,0,0,1,4,2h7a2,2,0,0,1,2,2V9a2,2,0,0,1-2,2Zm20,2a2,2,0,0,1-2,2H14a2,2,0,0,1-2-2v-.142A4,4,0,0,0,15,9V6h5a2,2,0,0,1,2,2Z\" /></svg>",
            "bg": "#E3F8EB"
          },
          "button": {
            "text": "— LEARN MORE",
            "link": "#"
          },
          "top": "0px",
          "highlight": false,
          "highlightLabel": "EXCLUSIVE"
        },
        {
          "title": "Social Media",
          "description": "Creating brand identities, digital experiences, and print materials that communicate clearly.",
          "icon": {
            "color": "#DD74C3",
            "svgPath": "<svg viewBox=\"0 0 24 24\" ><path  d=\"M22.773,7.721A4.994,4.994,0,0,0,19,6H15.011l.336-2.041A3.037,3.037,0,0,0,9.626,2.122L7.712,6H5a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5H18.3a5.024,5.024,0,0,0,4.951-4.3l.705-5A5,5,0,0,0,22.773,7.721ZM2,16V11A3,3,0,0,1,5,8H7V19H5A3,3,0,0,1,2,16Zm19.971-4.581-.706,5A3.012,3.012,0,0,1,18.3,19H9V7.734a1,1,0,0,0,.23-.292l2.189-4.435A1.07,1.07,0,0,1,13.141,2.8a1.024,1.024,0,0,1,.233.84l-.528,3.2A1,1,0,0,0,13.833,8H19a3,3,0,0,1,2.971,3.419Z\" /></svg>",
            "bg": "#f5e5f1"
          },
          "button": {
            "text": "— LEARN MORE",
            "link": "#"
          },
          "top": "60px",
          "highlight": false,
          "highlightLabel": "EXCLUSIVE"
        }
      ]
           break;

           case "theme12":
            draft["productsInfo"]=[
        {
          "title": "Web Development",
          "subtitle": "For developers and startups",
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'/></svg>",
          "img": "https://hubhtml.liquid-themes.com/assets/images/demo/digital-hub/portfolio-1.jpg",
          "gradient": "linear-gradient(180deg, rgba(246,72,42,0) 25%, rgba(246,72,42,0.9) 100%)",
          "cardLink":{
            "url":"",
            "openInNewTab":true
          }
        },
        {
          "title": "Search Engine Optimization",
          "subtitle": "For developers and startups",
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'/></svg>",
          "img": "https://hubhtml.liquid-themes.com/assets/images/demo/digital-hub/portfolio-2.jpg",
          "gradient": "linear-gradient(180deg, rgba(192,11,238,0) 25%, rgba(192,11,238,0.8) 100%)",
          "cardLink":{
            "url":"",
            "openInNewTab":true
          }
        },
        {
          "title": "eCommerce Consulting",
          "subtitle": "For developers and startups",
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'/></svg>",
          "img": "https://hubhtml.liquid-themes.com/assets/images/demo/digital-hub/portfolio-3.jpg",
          "gradient": "linear-gradient(180deg, rgba(255,255,255,0) 25%, rgba(71,214,126,0.8) 100%)",
          "cardLink":{
            "url":"",
            "openInNewTab":true
          }
        },
        {
          "title": "Business Consultation",
          "subtitle": "For developers and startups",
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z'/></svg>",
          "img": "https://hubhtml.liquid-themes.com/assets/images/demo/digital-hub/portfolio-4.jpg",
          "gradient": "linear-gradient(180deg, rgba(238,109,11,0) 25%, rgb(238,109,1) 100%)",
          "cardLink":{
            "url":"",
            "openInNewTab":true
          }
        }
      ]
      draft["styles"]={
        "bg": {},
        "padding": {
          "desktop": {
            "top": "100px",
            "right": "0px",
            "bottom": "100px",
            "left": "0px"
          },
          "tablet": {
            "top": "100px",
            "right": "0px",
            "bottom": "100px",
            "left": "0px"
          },
          "mobile": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }
        },
        "radius": {
          "top": "0px",
          "right": "0px",
          "bottom": "0px",
          "left": "0px"
        },
        "margin": {
          "desktop": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "tablet": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          },
          "mobile": {
            "top": "0px",
            "right": "0px",
            "bottom": "0px",
            "left": "0px"
          }
        },
        "gap": {
          "column": 0,
          "row": 0
        },
        "columns": {
          "desktop": 4,
          "tablet": 2,
          "mobile": 1
        },
        "content": {
          "padding": {
            "top": "48px",
            "right": "56px",
            "bottom": "48px",
            "left": "56px"
          },
          "subTitle": {
            "color": "#fff",
            "typo": {
              "fontFamily": "Default",
              "fontCategory": "sans-serif",
              "fontWeight": 0,
              "fontVariant": 0,
              "isUploadFont": true,
              "fontSize": {
                "desktop": 12,
                "tablet": 12,
                "mobile": 12
              },
              "fontStyle": "normal",
              "textTransform": "none",
              "textDecoration": "auto",
              "lineHeight": "",
              "letterSpace": "0px"
            }
          },
          "title": {
            "color": "#fff",
            "typo": {
              "fontFamily": "Default",
              "fontCategory": "sans-serif",
              "fontWeight": 0,
              "fontVariant": 0,
              "isUploadFont": true,
              "fontSize": {
                "desktop": 28,
                "tablet": 28,
                "mobile": 28
              },
              "fontStyle": "normal",
              "textTransform": "none",
              "textDecoration": "auto",
              "lineHeight": "",
              "letterSpace": "0px"
            }
          },
          "image": {
            "radius": {
              "top": "4px",
              "right": "4px",
              "bottom": "4px",
              "left": "4px"
            }
          },
          "icon": {
            "width": "50px",
            "height": "50px",
            "color": "#fff"
          }
        }
      }      
           
           break;
      }
    });


  //     getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked,activeIndex,setActiveIndex)

  export function getCardContentEdit(
    theme,
    attributes,
    updateCard,
    setAttributes,
    isBacked,
    activeIndex,
    setActiveIndex,
    premiumProps
  ) {
    if (
      ["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
        theme
      )
    ) {
      return (
        <Cards
          attributes={attributes}
          clientId={attributes.clientId}
          updateCard={updateCard}
        />
      );
    }
    if (theme === "theme6") {
      return (
        <Theme6
          attributes={attributes}
          setAttributes={setAttributes}
          isBacked={isBacked}
          premiumProps={premiumProps}
        />
      );
    }
    if (theme === "theme7") {
      return (
        <SevenInfoCard
          isBackend={isBacked}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          attributes={attributes}
          setAttributes={setAttributes}
          premiumProps={premiumProps}
        />
      );
    }
    if (theme === "theme8") {
      return (
        <div className="infoProfileMain">
          {attributes?.productsInfo?.map((infoProfile, index) => (
            <ThemeEightInfoProfile
              isBackend={isBacked}
              infoProfile={infoProfile}
              index={index}
              key={index}
              attributes={attributes}
              setAttributes={setAttributes}
              premiumProps={premiumProps}
            />
          ))}
        </div>
      );
    }

    if (theme === "theme9") {
      
      return (
        <ThemeNineTexOverly
          attributes={attributes}
          setAttributes={setAttributes}
          isBackend={isBacked}
          premiumProps={premiumProps}
        />
      );
    }
    if (theme === "theme10") {
      
      return (
        <div className="themeTenProductInfoGrab">
          <ThemeTenMouseMove
            isEditor={isBacked}
            attributes={attributes}
            setAttributes={setAttributes}
            premiumProps={premiumProps}
          />
        </div>
      );
    }
    if(theme==="theme11"){
      return(<ThemeElevenServiceInfo isEditor={isBacked} attributes={attributes} setAttributes={setAttributes} premiumProps={premiumProps} />)
    }
    if(theme === "theme12"){
      return (<ThemeTwelveHoverService isEditor={isBacked} attributes={attributes} setAttributes={setAttributes} premiumProps={premiumProps} />)
    }
  }

  export const updateData = (attr, value, ...props) => {
    if (props.length === 0) {
      return value;
    }
    const [currentProp, ...remainingProps] = props;
    if (remainingProps.length === 0) {
      return produce(attr, (draft) => {
        draft[currentProp] = value;
      });
    }
    return produce(attr, (draft) => {
      if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
        draft[currentProp] = {};
      }
      draft[currentProp] = updateData(
        draft[currentProp],
        value,
        ...remainingProps
      );
    });
  };



  export const toolTipPresets = [
    {
      label: "Default",
      value: "default",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-5.png",
      height: "auto",
      width: "160px",
      isPro:false
    },
    {
      label: "Theme-1",
      value: "theme1",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-6.png",
      height: "auto",
      width: "160px",
      isPro:false
    },
    {
      label: "Theme-2",
      value: "theme2",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-7.png",
      height: "auto",
      width: "160px",
      isPro:false
    },
    {
      label: "Theme-3",
      value: "theme3",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-8.png",
      height: "auto",
      width: "160px",
      isPro:false
    },
    {
      label: "Theme-4",
      value: "theme4",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-9.png",
      height: "auto",
      width: "160px",
      isPro:false
    },
    {
      label: "Theme-5",
      value: "theme5",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-10.png",
      height: "auto",
      width: "160px",
      isPro:false
      
    },
    {
      label: "Theme-6",
      value: "theme6",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-11.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-7",
      value: "theme7",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-12.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-8",
      value: "theme8",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-13.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-9",
      value: "theme9",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-14.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-10",
      value: "theme10",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-15.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-11",
      value: "theme11",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/07/image-7-1.png",
      height: "auto",
      width: "160px",
      isPro:true
    },
    {
      label: "Theme-12",
      value: "theme12",
      img: "https://templates.bplugins.com/wp-content/uploads/2025/09/info-cards-theme-12.png",
      height: "auto",
      width: "160px",
      isPro:true
    }
  ];
