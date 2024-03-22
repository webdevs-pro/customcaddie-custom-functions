<?php
/**
 * Plugin Name: CustomCaddie Custom Functions
 * Plugin URI: https://github.com/webdevs-pro/customcaddie-custom-functions
 * Version: 1.99
 * Description: A place for custom functions for customcaddie.co website
 * Author: Alex Ishchenko
 * Author URI: https://website.cv.ua
 */

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

final class CC_Plugin {

	public function __construct() {
		$this->define_constants();
		$this->include_files();
		$this->init_plugin_update_checker();
	}

	function define_constants() {
		if ( ! function_exists( 'get_plugin_data' ) ) {
			require_once ( ABSPATH . 'wp-admin/includes/plugin.php' );
		}
		if ( ! function_exists( 'get_home_path' ) ) {
			require_once ( ABSPATH . 'wp-admin/includes/file.php' );
		}
		define( 'CC_PLUGIN_VERSION', get_plugin_data( __FILE__ )['Version'] );
		// define( 'CC_HOME_PATH', get_home_path() );
		define( 'CC_HOME_PATH', ABSPATH );
		define( 'CC_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
		define( 'CC_PLUGIN_DIR', dirname( __FILE__ ) );
		define( 'CC_PLUGIN_FILE', __FILE__ );
		define( 'CC_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
	}

	function include_files() {
		require_once ( CC_PLUGIN_DIR . '/inc/vendor/autoload.php' );
		require_once ( CC_PLUGIN_DIR . '/inc/plugin.php' );
	}

	function init_plugin_update_checker() {
		$UpdateChecker = PucFactory::buildUpdateChecker(
			'https://github.com/webdevs-pro/customcaddie-custom-functions',
			__FILE__,
			'customcaddie-custom-functions'
		);
		
		//Set the branch that contains the stable release.
		$UpdateChecker->setBranch( 'main' );
	}

}

new CC_Plugin();



add_filter( 'woocommerce_add_to_cart_validation', 'empty_cart_before_add_new', 10, 3 );
function empty_cart_before_add_new( $passed, $product_id, $quantity ) {
    if ( $passed ) {
        WC()->cart->empty_cart();
    }
    return $passed;
}



add_filter( 'hello_elementor_viewport_content', function( $viewport_content ) {
	return 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
} );

add_filter( 'elementor/template/viewport_tag', function( $meta_tag, $context ) {
	return '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">';
}, 10, 2 );