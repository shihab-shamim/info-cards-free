import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { foldOutRevealIcon } from '../../utils/icons';

registerBlockType(metadata, {
	icon: foldOutRevealIcon,
	edit: Edit
});