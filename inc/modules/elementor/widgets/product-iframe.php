<?php

use Elementor\Controls_Manager as Controls_Manager;
use ElementorPro\Modules\QueryControl\Module;



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class CC_Product_Iframe extends Elementor\Widget_Base {

	public function get_name() {
		return 'cc-product-iframe';
	}

	public function get_title() {
		return 'Product Iframe';
	}

	public function get_icon() {
		return 'eicon-product-description';
	}

	public function get_categories() {
		return ['customcaddie'];
	}

	public function get_keywords() {
		return ['product', 'iframe'];
	}

	// public function get_style_depends() {
	// 	return ['cc-popups-placeholder'];
	// }

   // public function get_script_depends() {
	// 	return [ 'cc-popups-placeholder' ];
	// }

	protected function register_controls() {
		$this->start_controls_section( 'section_items', [
			'label' => 'Product',
		] );

		$this->add_control( 'product_id', [
         'label' => esc_html__( 'Product', 'elementor-pro' ),
         'type' => Module::QUERY_CONTROL_ID,
         'options' => [],
         'label_block' => true,
         'autocomplete' => [
            'object' => Module::QUERY_OBJECT_POST,
            'query' => [
               'post_type' => [ 'product' ],
            ],
         ],
      ] );

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

      if ( ! $settings['product_id'] ) {
         return;
      }

      $product_url = get_permalink( $settings['product_id'] );

		echo '<iframe src="' . $product_url . '?admin-bar=false' . '" height="100%" width="100%" onload="this.style.height = this.contentWindow.document.body.scrollHeight + \'px\';"></iframe>';
	}

}