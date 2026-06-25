/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/parent/Edit.js":
/*!***********************************!*\
  !*** ./src/blocks/parent/Edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/options */ "./src/utils/options.js");

const {
  useBlockProps
} = wp.blockEditor;
const {
  dispatch
} = wp.data;

const Edit = props => {
  const blockProps = useBlockProps();
  const {
    clientId
  } = props;
  const isBlockAvailable = blockName => {
    return !!wp.blocks.getBlockType(blockName);
  };
  const insertBlock = blockName => {
    if (!isBlockAvailable(blockName)) {
      return;
    }
    const blockEditor = dispatch("core/block-editor");
    const currentPostType = wp.data.select("core/editor")?.getCurrentPostType?.();
    const isShortcodePost = currentPostType === "icb";
    blockEditor.updateSettings({
      templateLock: false
    });
    const block = wp.blocks.createBlock(blockName);
    blockEditor.replaceBlock(clientId, block);

    // Only re-lock the editor in the shortcode custom post type
    if (isShortcodePost) {
      setTimeout(() => {
        blockEditor.updateSettings({
          templateLock: "all"
        });
      }, 100);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pebp-block-editor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "title"
  }, "Choose an Info Card"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "buttons"
  }, _utils_options__WEBPACK_IMPORTED_MODULE_1__.infoCardsTemplates.map(item => {
    const disabledBlocks = window?.ICB_BLOCK_DATA?.disabledBlocks || [];
    // className matches the folder name for each block
    if (disabledBlocks.includes(item.className)) {
      return null; // Do not render if explicitly disabled in the dashboard
    }
    const available = isBlockAvailable(item.block);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: item.block,
      className: `button ${item.className}${!available ? ' pro-locked' : ''}`,
      onClick: () => insertBlock(item.block)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon"
    }, item.icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text",
      title: item.name
    }, item.name), !available && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pro-badge"
    }, "Pro"));
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/parent/block.json":
/*!**************************************!*\
  !*** ./src/blocks/parent/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"icb/info-cards-selector","version":"2.0.0","title":"Info Cards Selector","category":"info-cards","description":"Choose and display your favorite info cards","keywords":["selector"],"textdomain":"info-cards","attributes":{"align":{"type":"string","default":""}},"supports":{"align":["wide","full"],"html":false,"inserter":false},"editorScript":["file:./index.js"],"editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/blocks/parent/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/parent/editor.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animatedGradientCardsIcon: () => (/* binding */ animatedGradientCardsIcon),
/* harmony export */   expandableAnimatedCardSliderIcon: () => (/* binding */ expandableAnimatedCardSliderIcon),
/* harmony export */   expandingFlexCardsIcon: () => (/* binding */ expandingFlexCardsIcon),
/* harmony export */   foldOutRevealIcon: () => (/* binding */ foldOutRevealIcon),
/* harmony export */   infoCardsIcon: () => (/* binding */ infoCardsIcon),
/* harmony export */   magnifyingGlassCardsIcon: () => (/* binding */ magnifyingGlassCardsIcon),
/* harmony export */   newsCardsIcon: () => (/* binding */ newsCardsIcon),
/* harmony export */   niceBoxIcon: () => (/* binding */ niceBoxIcon),
/* harmony export */   playerCardsIcon: () => (/* binding */ playerCardsIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * icons.js — Shared SVG icons for all Info Cards blocks.
 * Used by:
 *   - blocks.js  (admin dashboard block cards)
 *   - options.js (parent selector UI)
 */

// Info Cards — Grid of cards icon
const infoCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 576 512",
  fill: "white"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
}));

// Player Cards — Person/player profile card icon
const playerCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#6a1b9a"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "12",
  cy: "9",
  r: "3.5",
  fill: "#fff",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6",
  fill: "#fff",
  opacity: "0.7"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  fill: "none",
  stroke: "#fff",
  strokeWidth: "1",
  opacity: "0.4"
}));

// News Cards — Newspaper/article card icon
const newsCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#00897b"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "4",
  y: "4",
  width: "16",
  height: "4",
  rx: "1",
  fill: "#fff",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "4",
  y: "10",
  width: "10",
  height: "2",
  rx: "0.5",
  fill: "#fff",
  opacity: "0.6"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "4",
  y: "14",
  width: "12",
  height: "2",
  rx: "0.5",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "4",
  y: "18",
  width: "8",
  height: "2",
  rx: "0.5",
  fill: "#fff",
  opacity: "0.4"
}));

// Magnifying Glass Cards — Search/zoom card icon
const magnifyingGlassCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#1565c0"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "10.5",
  cy: "10.5",
  r: "5",
  fill: "none",
  stroke: "#fff",
  strokeWidth: "2",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
  x1: "14.5",
  y1: "14.5",
  x2: "19",
  y2: "19",
  stroke: "#fff",
  strokeWidth: "2",
  strokeLinecap: "round",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "8",
  y: "9",
  width: "5",
  height: "1",
  rx: "0.5",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "8",
  y: "11",
  width: "3.5",
  height: "1",
  rx: "0.5",
  fill: "#fff",
  opacity: "0.4"
}));

// Expanding Flex Cards — Expandable panels icon
const expandingFlexCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#b5631f"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "3",
  y: "4",
  width: "4",
  height: "16",
  rx: "1",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "8.5",
  y: "4",
  width: "7",
  height: "16",
  rx: "1",
  fill: "#fff",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "17",
  y: "4",
  width: "4",
  height: "16",
  rx: "1",
  fill: "#fff",
  opacity: "0.5"
}));

// Expandable Animated Card Slider — Sliding cards icon
const expandableAnimatedCardSliderIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#3949ab"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "2",
  y: "5",
  width: "8",
  height: "14",
  rx: "1.5",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "8",
  y: "4",
  width: "8",
  height: "16",
  rx: "1.5",
  fill: "#fff",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "14",
  y: "5",
  width: "8",
  height: "14",
  rx: "1.5",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
  points: "4,12 6,10 6,14",
  fill: "#fff",
  opacity: "0.7"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
  points: "20,12 18,10 18,14",
  fill: "#fff",
  opacity: "0.7"
}));

// Animated Gradient Cards — Gradient/colorful card icon
const animatedGradientCardsIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
  id: "gradCard",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "0%",
  stopColor: "#4CAF50"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
  offset: "100%",
  stopColor: "#1B5E20"
}))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "url(#gradCard)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "4",
  y: "5",
  width: "16",
  height: "14",
  rx: "2",
  fill: "#fff",
  opacity: "0.2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "6",
  y: "8",
  width: "12",
  height: "2",
  rx: "1",
  fill: "#fff",
  opacity: "0.8"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "6",
  y: "12",
  width: "8",
  height: "1.5",
  rx: "0.75",
  fill: "#fff",
  opacity: "0.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "17",
  cy: "16",
  r: "2",
  fill: "#fff",
  opacity: "0.6"
}));

// 3D Fold Out Reveal — Folding/3D card icon
const foldOutRevealIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  width: "24",
  height: "24",
  rx: "3",
  fill: "#c38d35"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 5h7v14H4z",
  fill: "#fff",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11 5l6 2v10l-6 2z",
  fill: "#fff",
  opacity: "0.6"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 7l3 1v8l-3 1z",
  fill: "#fff",
  opacity: "0.35"
}));

// Nice Box — Nice box block icon
const niceBoxIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "32",
  cy: "52",
  rx: "18",
  ry: "6",
  fill: "rgba(0,0,0,0.15)"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "14",
  y: "10",
  width: "36",
  height: "28",
  rx: "6",
  fill: "#4F46E5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "18",
  y: "14",
  width: "36",
  height: "28",
  rx: "6",
  fill: "#818CF8",
  opacity: "0.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 20H40",
  stroke: "white",
  strokeWidth: "3",
  strokeLinecap: "round"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 27H36",
  stroke: "white",
  strokeWidth: "3",
  strokeLinecap: "round",
  opacity: "0.7"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M44 40L48 50L51 46L56 51L58 49L53 44L57 42L44 40Z",
  fill: "#111827"
}));

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   infoCardsTemplates: () => (/* binding */ infoCardsTemplates)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./src/utils/icons.js");

const infoCardsTemplates = [{
  name: "Info Cards",
  block: "icb/cards",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.infoCardsIcon,
  className: "info-cards"
}, {
  name: "Player Cards",
  block: "pcb/player-cards-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.playerCardsIcon,
  className: "player-cards"
}, {
  name: "News Cards",
  block: "icb/news-cards-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.newsCardsIcon,
  className: "news-cards"
}, {
  name: "Magnifying Glass Cards",
  block: "icb/magnifying-glass-cards-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.magnifyingGlassCardsIcon,
  className: "magnifying-glass-cards"
}, {
  name: "Expanding Flex Cards",
  block: "icb/expanding-flex-cards-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.expandingFlexCardsIcon,
  className: "expanding-flex-cards"
}, {
  name: "Expandable Animated Card Slider",
  block: "icb/expandable-animated-card-slider-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.expandableAnimatedCardSliderIcon,
  className: "expandable-animated-card-slider"
}, {
  name: "Animated Gradient Cards",
  block: "b-blocks/animated-gradient-cards-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.animatedGradientCardsIcon,
  className: "animated-gradient-cards"
}, {
  name: "3D Fold Out Reveal",
  block: "icb/fold-out-reveal-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.foldOutRevealIcon,
  className: "fold-out-reveal"
}, {
  name: "Nice Box",
  block: "icb/nice-box-pro",
  icon: _icons__WEBPACK_IMPORTED_MODULE_0__.niceBoxIcon,
  className: "nice-box"
}];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/blocks/parent/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/parent/block.json");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./src/blocks/parent/Edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/parent/editor.scss");
const {
  registerBlockType
} = wp.blocks;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__, {
  icon: "media-document",
  edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map