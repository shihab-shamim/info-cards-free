import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { playerCardsIcon } from '../../utils/icons';

registerBlockType(metadata, {
    icon: playerCardsIcon,
    edit: Edit
});