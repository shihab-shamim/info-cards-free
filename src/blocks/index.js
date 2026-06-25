// Shared editor bundle for ALL Pro blocks.
// Each Pro block's block.json references this file via "editorScript": "file:../index.js",
// so wp-scripts dedupes them into a single entry -> build/blocks/index.js (+ index.css).
// The free "info-cards" (icb/cards) block and the "parent" selector keep their own
// standalone bundles (they reference "file:./index.js" in their own block.json).
const disabledBlocks = window?.ICB_BLOCK_DATA?.disabledBlocks || [];

const proBlocks = {
	'3d-fold-out-reveal': () => require('./3d-fold-out-reveal/index.js'),
	'animated-gradient-cards': () => require('./animated-gradient-cards/index.js'),
	'expandable-animated-card-slider': () => require('./expandable-animated-card-slider/index.js'),
	'expanding-flex-cards': () => require('./expanding-flex-cards/index.js'),
	'magnifying-glass-cards': () => require('./magnifying-glass-cards/index.js'),
	'news-cards': () => require('./news-cards/index.js'),
	'nice-box': () => require('./nice-box/index.js'),
	'player-cards': () => require('./player-cards/index.js'),
};

Object.entries(proBlocks).forEach(([name, load]) => {
	if (!disabledBlocks.includes(name)) {
		load();
	}
});
