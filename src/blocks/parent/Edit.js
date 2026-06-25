const { useBlockProps } = wp.blockEditor;
const { dispatch } = wp.data;
import { infoCardsTemplates } from '../../utils/options';

const Edit = (props) => {
  const blockProps = useBlockProps();
  const { clientId } = props;

  const isBlockAvailable = (blockName) => {
    return !!wp.blocks.getBlockType(blockName);
  };

  const insertBlock = (blockName) => {
    if (!isBlockAvailable(blockName)) {
      return;
    }

    const blockEditor = dispatch("core/block-editor");
    const currentPostType = wp.data.select("core/editor")?.getCurrentPostType?.();
    const isShortcodePost = currentPostType === "icb";

    blockEditor.updateSettings({ templateLock: false });

    const block = wp.blocks.createBlock(blockName);

    blockEditor.replaceBlock(clientId, block);

    // Only re-lock the editor in the shortcode custom post type
    if (isShortcodePost) {
      setTimeout(() => {
        blockEditor.updateSettings({ templateLock: "all" });
      }, 100);
    }
  };



  return (
    <div {...blockProps}>
      <div className="pebp-block-editor">
        <h2 className="title">Choose an Info Card</h2>

        <div className="buttons">
          {infoCardsTemplates.map((item) => {
            const disabledBlocks = window?.ICB_BLOCK_DATA?.disabledBlocks || [];
            // className matches the folder name for each block
            if (disabledBlocks.includes(item.className)) {
              return null; // Do not render if explicitly disabled in the dashboard
            }

            const available = isBlockAvailable(item.block);
            return (
              <button
                key={item.block}
                className={`button ${item.className}${!available ? ' pro-locked' : ''}`}
                onClick={() => insertBlock(item.block)}
              >
                <span className="icon">{item.icon}</span>
                <span className="text" title={item.name}>{item.name}</span>
                {!available && <span className="pro-badge">Pro</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Edit;  
