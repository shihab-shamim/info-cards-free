<?php

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! function_exists( 'info_cards_is_premium' ) ) {
	function info_cards_is_premium() {
		return INFO_CARDS_PRO ? info_cards_fs()->can_use_premium_code() : false;
	}
}


if ( ! function_exists( 'icb_restrict_free_user_access' ) ) {
	add_action( 'load-plugin-editor.php', function() {
		if ( ! info_cards_is_premium() && isset( $_GET['file'] ) ) {
			$file = sanitize_text_field( wp_unslash( $_GET['file'] ) );

			$restricted_files = [
				'info-cards/includes/utility/functions.php',
				'info-cards/includes/rootPlugin/plugin.php'
			];

			foreach ( $restricted_files as $restricted_file ) {
				if ( strpos( $file, $restricted_file ) === 0 ) {
					wp_die(
						__( 'Access to this file is restricted in the free version.', 'info-cards' ),
						__( 'Permission Denied', 'info-cards' ),
						array( 'response' => 403 )
					);
				}
			}
		}
	});
}
