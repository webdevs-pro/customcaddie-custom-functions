<?php
/**
 * Plugin Name: CustomCaddie Custom Functions
 * Plugin URI: https://github.com/webdevs-pro/customcaddie-custom-functions
 * Version: 1.7.5
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






function embed_woocommerce_product($atts) {
	// Extract product ID from shortcode attributes
	$atts = shortcode_atts(array('id' => ''), $atts);
	$product_id = $atts['id'];

	if (!$product_id) {
		 return 'Product ID is required.';
	}

	// Load global WooCommerce, needed for some functions
	global $woocommerce;
	global $product;

	// Get the product
	$product = wc_get_product($product_id);

	if (!$product) {
		 return 'Invalid product ID.';
	}

	// Start output buffering
	ob_start();

	// Here, manually render the product's details
	// For example:
	echo '<div class="custom-product">';
		echo '<h2>' . $product->get_name() . '</h2>';
		?>

		<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
			<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

			<?php
			do_action( 'woocommerce_before_add_to_cart_quantity' );

			woocommerce_quantity_input(
				array(
					'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
					'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
					'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
				)
			);

			do_action( 'woocommerce_after_add_to_cart_quantity' );
			?>

			<button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="single_add_to_cart_button button alt<?php echo esc_attr( wc_wp_theme_get_element_class_name( 'button' ) ? ' ' . wc_wp_theme_get_element_class_name( 'button' ) : '' ); ?>"><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>

			<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
		</form>

		<?php
	echo '</div>';

	// End output buffering and return the content
	return ob_get_clean();
}
add_shortcode('embed_product', 'embed_woocommerce_product');
