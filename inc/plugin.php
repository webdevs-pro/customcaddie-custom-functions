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

	return 'Add Set to Cart (' . $plain_price_text . ')';
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
		wp_safe_redirect( wc_get_cart_url() );
		// wp_safe_redirect( wc_get_checkout_url() );
		exit;
	}
}
// add_action( 'template_redirect', 'cc_redirect_single_product_to_cart' );



function custom_add_to_cart_redirect($url) {
	$url = wc_get_cart_url();

	return $url;
}
add_filter('woocommerce_add_to_cart_redirect', 'custom_add_to_cart_redirect');










add_action( 'woocommerce_after_cart_table', function() {
	$cart_items = array();

	echo '<div class="cc-cart-preview-elements-wrapper">';

		foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
			// error_log( "cart_item\n" . print_r( $cart_item, true ) . "\n" );

			// Ball
			$svg                        = $cart_item['wsf_submit']->meta['field_256']['value'] ?? '';
			$first_name                 = $cart_item['wsf_submit']->meta['field_82']['value'] ?? '';
			$middle_name                = $cart_item['wsf_submit']->meta['field_83']['value'] ?? '';
			$last_name                  = $cart_item['wsf_submit']->meta['field_84']['value'] ?? '';
			$ball_elements              = $cart_item['wsf_submit']->meta['field_158']['value'] ?? '';
			$ball_custom_text           = $cart_item['wsf_submit']->meta['field_159']['value'] ?? '';
			$ball_custom_text_position  = $cart_item['wsf_submit']->meta['field_161']['value'] ?? '';
			$ball_custom_text_font_size = $cart_item['wsf_submit']->meta['field_107']['value'] ?? '';
			$ball_signature_font_size   = $cart_item['wsf_submit']->meta['field_112']['value'] ?? '';
			$ball_signature_font_type   = $cart_item['wsf_submit']->meta['field_101']['value'] ?? '';
			$ball_icon_size             = $cart_item['wsf_submit']->meta['field_127']['value'] ?? '';

			$name_arr = [];
			if ( $first_name ) {
				$name_arr[] = $first_name;
			}
			if ( $first_name ) {
				$name_arr[] = $middle_name;
			}
			if ( $first_name ) {
				$name_arr[] = $last_name;
			}

			$ball_preview_classes = array(
				'cc-preview-wrapper',
				'cc-ball-preview-wrapper',
			);

			if ( in_array( 'Signature', $ball_elements ) ) {
				$ball_preview_classes[] = 'cc-ball-preview-show-signature';
			}
			if ( in_array( 'Custom Text', $ball_elements ) ) {
				$ball_preview_classes[] = 'cc-ball-preview-show-text';
			}
			if ( in_array( 'Icon', $ball_elements ) ) {
				$ball_preview_classes[] = 'cc-ball-preview-show-icon';
			}

			if ( in_array( 'Bottom', $ball_custom_text_position ) ) {
				$ball_preview_classes[] = 'cc-custom-text-bottom';
			}
			if ( in_array( 'Top', $ball_custom_text_position ) ) {
				$ball_preview_classes[] = 'cc-custom-text-top';
			}

			$font = '';
			switch ( $ball_signature_font_type[0] ) {
				case 'Jimmy Script Bold 700':
					$font = "font-family: 'Jimmy Script', cursive;";
					break;

				case 'Dancing Script - Bold 700':
					$font = "font-family: 'Dancing Script', cursive;";
					break;

				case 'Caveat - Regular 400':
					$font = "font-family: 'Caveat', cursive;";
					break;

				case 'Satisfy - Regular 400':
					$font = "font-family: 'Satisfy', cursive;";
					break;
			}

			?>
			<div class="<?php echo implode( ' ', $ball_preview_classes ); ?>" style="background-image: url(/wp-content/uploads/2024/01/ball_gray_bg.jpg)">
				<div class="cc-preview-texts">
					<div class="cc-preview-icon" style="width: <?php echo $ball_icon_size; ?>%;"><?php echo $svg; ?></div>
					<div class="cc-preview-signature" style="<?php echo $font; ?> --signature-font-size: <?php echo $ball_signature_font_size; ?>px;"><?php echo implode( ' ', $name_arr ); ?></div>
					<div class="cc-preview-text" style="--custom-text-font-size: <?php echo $ball_custom_text_font_size; ?>px;"><?php echo $ball_custom_text; ?></div>
				</div>
			</div>
			<?php


			// Ball marker
			$ball_marker_preview_classes = array(
				'cc-preview-wrapper',
				'cc-set-preview-item-pin',
			);
			?>
			<div class="<?php echo implode( ' ', $ball_marker_preview_classes ); ?>" style="background-image: url(/wp-content/uploads/2023/12/Pin_clean.jpg)">
				<div class="cc-preview-icon cc-pin-preview-icon"><?php echo $svg; ?></div>
			</div>
			<?php


			// Divot tool
			$divot_tool_preview_classes = array(
				'cc-preview-wrapper',
				'cc-set-preview-item-marker',
			);
			?>
			<div class="<?php echo implode( ' ', $divot_tool_preview_classes ); ?>" style="background-image: url(/wp-content/uploads/2023/12/Marker_clean.jpg)">
				<div class="cc-preview-icon cc-marker-preview-icon"><?php echo $svg; ?></div>
			</div>
			<?php


			// Tees
			$tees_text_type   = $cart_item['wsf_submit']->meta['field_184']['value'] ?? '';
			$tees_custom_text = $cart_item['wsf_submit']->meta['field_175']['value'] ?? '';
			$tees_font_size   = $cart_item['wsf_submit']->meta['field_180']['value'] ?? '';
			$tees_preview_classes = array(
				'cc-preview-wrapper',
				'cc-tees-preview-wrapper',
			);

			if ( in_array( 'Use Name', $tees_text_type ) ) {
				$tees_preview_classes[] = 'cc-tees-name';
			}
			if ( in_array( 'Use Custom Text', $tees_text_type ) ) {
				$tees_preview_classes[] = 'cc-tees-custom-text';
			}


			?>
			<div class="<?php echo implode( ' ', $tees_preview_classes ); ?>" style="background-image: url(/wp-content/uploads/2024/04/tees_clean_single.jpg)">
				<div class="cc-tees-preview-texts" style="--tees-font-size: <?php echo $tees_font_size; ?>px;">
					<div class="cc-preview-name"><?php echo $first_name . ' ' . $last_name; ?></div>
					<div class="cc-preview-text"><?php echo $tees_custom_text; ?></div>
				</div>
			</div>
			<?php


			// Towel
			$towel_preview_classes = array(
				'cc-preview-wrapper',
				'cc-set-preview-towel-item-wrapper',
			);
			$towel_color_name = $cart_item['wsf_submit']->meta['field_97']['value'] ?? '';



			switch ( $towel_color_name[0] ) {
				case 'Blue':
					$towel_url = "/wp-content/uploads/2023/12/Blue_no_logo.jpg";
					break;

				case 'Red':
					$towel_url = "/wp-content/uploads/2023/12/Red_no_logo.jpg";
					break;

				case 'Black':
					$towel_url = "/wp-content/uploads/2023/12/Black_no_logo.jpg";
					break;

				case 'Black':
					$towel_url = "/wp-content/uploads/2023/12/Black_no_logo.jpg";
					break;

				case 'Navy':
					$towel_url = "/wp-content/uploads/2023/12/Navy_no_logo.jpg";
					break;

				default:
					$towel_url = "/wp-content/uploads/2023/12/Blue_no_logo.jpg";
					break;

			}
			?>
			<div class="<?php echo implode( ' ', $towel_preview_classes ); ?>" >
				<div class="cc-set-preview-item cc-towel-preview" style="background-image: url(<?php echo $towel_url; ?>);">
					<div class="cc-towel-icon"><?php echo $svg; ?></div>
				</div>
			</div>
			<?php
		}

	echo '</div>';
} );