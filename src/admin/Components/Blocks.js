import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import allBlocks from '../utils/blocks';

/**
 * Blocks.js — Admin dashboard block toggle management UI.
 * Mirrors: the blocks toggle page in pdf-embed-block's admin dashboard.
 *
 * Data flow:
 *   PHP (Admin.php) → wp_localize_script → ICB_BLOCK_DATA.disabledBlocks
 *   Toggle change   → AJAX (icbGetBlocks) → updates icbBlocks option in DB
 *
 * @param {object} props — passed from App via dashboardInfo (isPremium, nonce, action)
 */
const Blocks = ( { isPremium, nonce, action } ) => {
	const [ disabledBlocks, setDisabledBlocks ] = useState(
		() => window?.ICB_BLOCK_DATA?.disabledBlocks ?? []
	);
	const [ saving, setSaving ] = useState( false );
	const [ message, setMessage ] = useState( '' );

	const isDisabled = ( name ) => disabledBlocks.includes( name );

	const handleToggle = async ( block ) => {
		if ( block.required ) return; // Cannot disable required blocks

		const newDisabled = isDisabled( block.name )
			? disabledBlocks.filter( ( n ) => n !== block.name )
			: [ ...disabledBlocks, block.name ];

		setDisabledBlocks( newDisabled );
		setSaving( true );
		setMessage( '' );

		try {
			const formData = new FormData();
			formData.append( 'action', action || 'icbGetBlocks' );
			formData.append( '_wpnonce', nonce );
			formData.append( 'data', JSON.stringify( newDisabled ) );

			const res = await fetch( window.ajaxurl, {
				method: 'POST',
				body: formData,
			} );
			const json = await res.json();

			if ( json.success ) {
				setMessage( __( 'Settings saved!', 'info-cards' ) );
			} else {
				setMessage( __( 'Save failed. Please try again.', 'info-cards' ) );
			}
		} catch {
			setMessage( __( 'Network error.', 'info-cards' ) );
		} finally {
			setSaving( false );
			setTimeout( () => setMessage( '' ), 3000 );
		}
	};

	return (
		<div className='icb-blocks-manager'>
			<div className='icb-blocks-manager__header'>
				<h2>{ __( 'Manage Blocks', 'info-cards' ) }</h2>
				<p>
					{ __(
						'Toggle blocks on or off. Disabled blocks will not be registered and will disappear from the editor.',
						'info-cards'
					) }
				</p>
				{ saving && (
					<span className='icb-blocks-manager__saving'>
						{ __( 'Saving…', 'info-cards' ) }
					</span>
				) }
				{ message && (
					<span className='icb-blocks-manager__message'>{ message }</span>
				) }
			</div>

			<div className='icb-blocks-manager__grid'>
				{ allBlocks.map( ( block ) => {
					const active    = ! isDisabled( block.name );
					const isLocked  = block.isPremium && ! isPremium;
					const isReq     = block.required;

					return (
						<div
							key={ block.name }
							className={ `icb-block-card ${ active ? 'icb-block-card--active' : '' } ${ isLocked ? 'icb-block-card--locked' : '' }` }
						>
							{/* Pro badge */ }
							{ block.isPremium && (
								<span className='icb-block-card__badge icb-block-card__badge--pro'>
									{ isPremium ? __( 'Pro', 'info-cards' ) : __( '🔒 Pro', 'info-cards' ) }
								</span>
							) }
							{ ! block.isPremium && (
								<span className='icb-block-card__badge icb-block-card__badge--free'>
									{ __( 'Free', 'info-cards' ) }
								</span>
							) }

							<div className='icb-block-card__info'>
								<h3 className='icb-block-card__title'>{ block.title }</h3>
								{/* <code className='icb-block-card__name'>icb/{ block.name }</code> */}
							</div>

							<label
								className={ `icb-block-toggle ${ isLocked || isReq ? 'icb-block-toggle--disabled' : '' }` }
								title={
									isReq
										? __( 'This block cannot be disabled', 'info-cards' )
										: isLocked
										? __( 'Upgrade to Pro to use this block', 'info-cards' )
										: ''
								}
							>
								<input
									type='checkbox'
									checked={ active }
									disabled={ isLocked || isReq }
									onChange={ () => handleToggle( block ) }
								/>
								<span className='icb-block-toggle__slider' />
							</label>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

export default Blocks;
