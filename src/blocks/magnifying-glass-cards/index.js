import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { magnifyingGlassCardsIcon } from '../../utils/icons';

registerBlockType(metadata, {
    icon: magnifyingGlassCardsIcon,
    edit: Edit
});