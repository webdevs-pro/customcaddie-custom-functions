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

	if ( is_product() && isset( $_GET['wsf_cart_item_key'] ) ) {
		return 'Update Set';
	}

	// Get the raw price
	$price = wc_get_price_to_display( $product );

	// Format the price with your currency settings
	$formatted_price = wc_price($price);

	// Remove HTML tags to get plain text
	$plain_price_text = wp_strip_all_tags( $formatted_price );

	return "Get my Customized Set for " . $plain_price_text;
}




// add_filter( 'woocommerce_add_to_cart_redirect', 'cc_skip_cart_redirect_checkout' );
function cc_skip_cart_redirect_checkout( $url ) {
	return wc_get_checkout_url();
}






// add_filter( 'woocommerce_locate_template', 'cc_override_template', 10, 3 );
// function cc_override_template( $template, $template_name, $template_path ) {
// 	$basename = basename( $template );
// 	error_log( "basename\n" . print_r( $basename, true ) . "\n" );
// 	if( $basename == 'single-product.php' ) {
// 		$template = CC_PLUGIN_DIR . '/inc/woocommerce/templates/single-product.php';
// 	}
// 	return $template;
// }



add_filter('wc_get_template_part', 'override_template_part', 10, 3);
function override_template_part($template, $slug, $name) {

	$template = CC_PLUGIN_DIR . '/inc/woocommerce/templates/single-product.php';
	

    // Return default template if conditions are not met
    return $template;
}


/**
 * Shortcode to display the time since the post was published in a human-readable format.
 *
 * @return string Human-readable time difference.
 */
function cc_custom_post_time_shortcode() {
	global $post;

	if ( is_a( $post, 'WP_Post' ) ) {
		 // Get the UNIX timestamp of when the post was published.
		 $post_time = get_the_time( 'U', $post->ID );

		 // Get the current UNIX timestamp.
		 $current_time = current_time( 'timestamp' );

		 // Calculate the difference and sanitize the output.
		 $time_diff = human_time_diff( $post_time, $current_time ) . ' ago';

		 return esc_html( $time_diff );
	}

	return ''; // Return an empty string if not in a post context.
}

// Register the shortcode with WordPress.
add_shortcode( 'cc_hr_post_time', 'cc_custom_post_time_shortcode' );




function cc_add_body_class_if_wsf_cart_item_key( $classes ) {
	if ( isset( $_GET['wsf_cart_item_key'] ) ) {
		$classes[] = 'cc-cart-item-edit';
	}
	return $classes;
}
add_filter( 'body_class', 'cc_add_body_class_if_wsf_cart_item_key' );



function cc_redirect_single_product_to_cart() {
	// Check if we are on a single product page and the 'wsf_cart_item_key' URL argument is not present
	if ( is_product() && ! isset( $_GET['wsf_cart_item_key'] ) ) {
		// Redirect to the cart page
		// wp_safe_redirect( wc_get_cart_url() );
		wp_safe_redirect( wc_get_checkout_url() );
		exit;
	}
}
// add_action( 'template_redirect', 'cc_redirect_single_product_to_cart' );



function custom_add_to_cart_redirect($url) {
	$url = wc_get_checkout_url();

	return $url;
}
add_filter('woocommerce_add_to_cart_redirect', 'custom_add_to_cart_redirect');