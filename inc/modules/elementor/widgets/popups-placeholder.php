<?php

use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class CC_Popups_Placeholder extends Elementor\Widget_Base {

	public function get_name() {
		return 'cc-popups-placeholder';
	}

	public function get_title() {
		return 'Popups Placeholder';
	}

	public function get_icon() {
		return 'eicon-container';
	}

	public function get_categories() {
		return ['customcaddie'];
	}

	public function get_keywords() {
		return ['popup', 'placeholder'];
	}

	public function get_style_depends() {
		return ['cc-popups-placeholder'];
	}

   public function get_script_depends() {
		return [ 'cc-popups-placeholder' ];
	}

	protected function register_controls() {
		$this->start_controls_section( 'section_items', [
			'label' => 'Items',
		] );

			$repeater = new \Elementor\Repeater();

			$repeater->add_control( 'popup', [
				'label' => esc_html__( 'Popup', 'elementor-pro' ),
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_LIBRARY_TEMPLATE,
					'query' => [
						'posts_per_page' => 20,
						'post_status' => [ 'publish', 'private' ],
						'meta_query' => [
							[
								'key' => '_elementor_template_type',
								'value' => 'popup',
							],
						],
					],
				],
				'label_block' => true,
			] );


			$this->add_control( 'popups', [
				'label' => 'Popups',
				'type'         => \Elementor\Controls_Manager::REPEATER,
				'fields'       => $repeater->get_controls(),
				'item_actions' => [
					'add'       => true,
					'duplicate' => true,
					'remove'    => true,
					'sort'      => true,
				],
				'title_field'  => 'Popup ID {{{popup}}}',
				'show_label'   => true,
				'frontend_available' => true,
			] );

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		if ( ! \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
			echo '<!-- Popup plaseholder -->';
		}
		
	}

}