
const disabledBlocks = window?.ICB_BLOCK_DATA?.disabledBlocks || [];

const proBlocks = {
	'info-cards': () => require('./info-cards/index.js'),
};

Object.entries(proBlocks).forEach(([name, load]) => {
	if (!disabledBlocks.includes(name)) {
		load();
	}
});
