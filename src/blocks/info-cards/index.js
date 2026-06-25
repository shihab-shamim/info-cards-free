import { registerBlockType } from '@wordpress/blocks';
import './editor.scss';
import metadata from './block.json';
import { cardIcon } from './utils/icons';
import Edit from './Components/Backend/Edit';

registerBlockType(metadata, {
	edit: Edit,
	icon: cardIcon,
	save: () => null
});
