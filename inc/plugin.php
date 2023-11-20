<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once ( CC_PLUGIN_DIR . '/inc/modules/elementor/elementor.php' );
require_once ( CC_PLUGIN_DIR . '/inc/modules/ws-form/ws-form.php' );



add_filter( 'show_admin_bar', 'cc_hide_admin_bar_based_on_url_param' );
function cc_hide_admin_bar_based_on_url_param( $show ) {
	if ( isset( $_GET['admin-bar'] ) && 'false' === $_GET['admin-bar'] ) {
		 return false;
	}
	return $show;
}

add_filter( 'woocommerce_product_single_add_to_cart_text', 'cc_custom_woocommerce_product_add_to_cart_text' );
function cc_custom_woocommerce_product_add_to_cart_text() {
	global $product;

	// Get the raw price
	$price = wc_get_price_to_display($product);

	// Format the price with your currency settings
	$formatted_price = wc_price($price);

	// Remove HTML tags to get plain text
	$plain_price_text = wp_strip_all_tags($formatted_price);

	return "Get my Customized Set for " . $plain_price_text;
}

add_action( 'woocommerce_before_add_to_cart_button', 'cc_add_set_name_before_ws_form', 5, 0 );
function cc_add_set_name_before_ws_form() {
	echo '<div class="cc-product-title"><h2>' . get_the_title( get_the_ID() ) . ' customization</h2></div>';
}