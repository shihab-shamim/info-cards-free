import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { animatedGradientCardsIcon } from '../../utils/icons';

registerBlockType(metadata, {
    icon: animatedGradientCardsIcon,
    edit: Edit
});