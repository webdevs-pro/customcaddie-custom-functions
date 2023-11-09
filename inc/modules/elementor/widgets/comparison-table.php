<?php

use Elementor\Controls_Manager as Controls_Manager;
use Elementor\Group_Control_Typography as Group_Control_Typography;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors as Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography as Global_Typography;
use Elementor\Group_Control_Box_Shadow as Group_Control_Box_Shadow;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


class CC_Comparison_Table extends Elementor\Widget_Base {

	public function get_name() {
		return 'cc-comparison-table';
	}

	public function get_title() {
		return 'Comparison Table';
	}

	public function get_icon() {
		return 'eicon-price-table';
	}

	public function get_categories() {
		return ['customcaddie'];
	}

	public function get_keywords() {
		return ['price', 'table'];
	}

	public function get_style_depends() {
		return ['cc-comparison-table'];
	}

	protected function register_controls() {
		$this->start_controls_section( 'section_items', [
			'label' => 'Items',
		] );

			$items_repeater = new \Elementor\Repeater();

			$items_repeater->add_control( 'header_heading', [
				'label' => '<br><br>Header section',
				'type'  => Controls_Manager::HEADING,
			] );

			$items_repeater->add_control( 'title', [
				'label'       => 'Title',
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'default'     => 'Plan title',
				'ai' => [
					'active' => false,
				],
			] );

			$items_repeater->add_control( 'button_label', [
				'label'       => 'Button label',
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'ai' => [
					'active' => false,
				],
			] );

			$items_repeater->add_control( 'button_link', [
				'label'       => 'Link',
				'type'        => \Elementor\Controls_Manager::URL,
				'options'     => [ 'url', 'is_external', 'nofollow' ],
				'default'     => [
					'url' => '',
					'is_external' => true,
					'nofollow'   => true,
				],
				'label_block' => true,
			] );

			$this->add_control( 'items', [
				// 'label' => 'Fields',
				'type'         => \Elementor\Controls_Manager::REPEATER,
				'fields'       => $items_repeater->get_controls(),
				'item_actions' => [
					'add'       => false,
					'duplicate' => false,
					'remove'    => false,
					'sort'      => false,
				],
				'default'      => [
					[
						'title'        => 'Item 1',
						'button_label' => 'Buy Now',
					],
					[
						'title'        => 'Item 2',
						'button_label' => 'Buy Now',
					],
				],
				'show_label'   => true,
				'title_field'  => '{{{title}}}',
			] );


			$features_repeater = new \Elementor\Repeater();

			$features_repeater->add_control( 'heading', [
				'label'       => 'Heading',
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'ai' => [
					'active' => false,
				],
			] );


			$features_repeater->add_control( 'item_1_heading', [
				'label' => '<br><br>Plan 1',
				'type'  => Controls_Manager::HEADING,
			] );

			$features_repeater->add_control( 'item_1_icon', [
				'label' => 'Icon',
				'type'  => Controls_Manager::ICONS,
				'skin'  => 'inline',
			] );

			$features_repeater->add_control( 'item_1_text', [
				'label'       => 'Text',
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'ai' => [
					'active' => false,
				],
			] );


			$features_repeater->add_control( 'item_2_heading', [
				'label' => '<br><br>Plan 2',
				'type'  => Controls_Manager::HEADING,
			] );

			$features_repeater->add_control( 'item_2_icon', [
				'label' => 'Icon',
				'type'  => Controls_Manager::ICONS,
				'skin'  => 'inline',
			] );

			$features_repeater->add_control( 'item_2_text', [
				'label'       => 'Text',
				'type'        => \Elementor\Controls_Manager::TEXT,
				'label_block' => true,
				'ai' => [
					'active' => false,
				],
			] );


			$this->add_control( 'features', [
				'label' => 'Features',
				'type'         => \Elementor\Controls_Manager::REPEATER,
				'fields'       => $features_repeater->get_controls(),
				'item_actions' => [
					'add'       => true,
					'duplicate' => true,
					'remove'    => true,
					'sort'      => true,
				],
				'title_field'  => '{{{heading}}}',
				'show_label'   => true,
			] );

		$this->end_controls_section();


		// General Style Section
		$this->start_controls_section( 'section_general_style', [
			'label' => 'General Style',
			'tab'   => Controls_Manager::TAB_STYLE,
		] );

		// Table heading
		$this->add_control( 'table_heading_styles_heading', [
			'label' => 'Table Heading',
			'type'  => Controls_Manager::HEADING,
		] );

		$this->add_control( 'table_heading_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'global'    => [
				'default' => Global_Colors::COLOR_PRIMARY,
			],
			'selectors' => [
				'{{WRAPPER}} .cc-item-feature-heading' => 'color: {{VALUE}};',
			],
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'table_heading_typography',
			'label'    => 'Typography',
			'global'   => [
				'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
			],
			'selector' => '{{WRAPPER}} .cc-item-feature-heading',
		] );


		// Plans
		$this->add_control( 'plans_style_heading', [
			'label' => '<br><br>Items',
			'type'  => Controls_Manager::HEADING,
		] );

		$this->add_control( 'item_background_color', [
			'label'     => 'Background Color',
			'type'      => Controls_Manager::COLOR,
			'default'	=> '#f2e1cc',
			'selectors' => [
				'{{WRAPPER}} .cc-table-item-column' => 'background-color: {{VALUE}};',
			],
		] );

		$this->add_group_control( Group_Control_Box_Shadow::get_type(), [
			'name'           => 'item_box_shadow',
			'label' => 'Box Shadow',
			'fields_options' => [
				'box_shadow_type' => [
					'default' => 'yes',
				],
				'box_shadow'      => [
					'default' => [
						'horizontal' => 0,
						'vertical'   => 4,
						'blur'       => 20,
						'spread'     => 0,
						'color' => '#00000012',
					],
				],
			],
			'selector' => '{{WRAPPER}} .cc-table-item-column, {{WRAPPER}} .cc-comparison-table-mobile-wrapper',
		] );

		$this->end_controls_section();


		// Item Header Style Section
		$this->start_controls_section( 'section_item_header_style', [
			'label' => 'Item Header',
			'tab'   => Controls_Manager::TAB_STYLE,
		] );

		$this->add_control( 'item_title_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'global'    => [
				'default' => Global_Colors::COLOR_PRIMARY,
			],
			'selectors' => [
				'{{WRAPPER}} .cc-item-title' => 'color: {{VALUE}};',
			],
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'item_title_typography',
			'label'    => 'Typography',
			'global'   => [
				'default' => Global_Typography::TYPOGRAPHY_PRIMARY,
			],
			'selector' => '{{WRAPPER}} .cc-item-title',
		] );

		$this->end_controls_section();


		// Features Style Section
		$this->start_controls_section( 'section_features_style', [
			'label' => 'Item Features',
			'tab'   => Controls_Manager::TAB_STYLE,
		] );


		// Divider
		$this->add_control( 'features_divider_heading', [
			'label' => 'Divider',
			'type'  => Controls_Manager::HEADING,
		] );

		$this->add_control( 'divider_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'global'    => [
				'default' => Global_Colors::COLOR_PRIMARY,
			],
			'selectors' => [
				'{{WRAPPER}} ' => '--divider-color: {{VALUE}};',
			],
		] );


		// Feature icon
		$this->add_control( 'feature_icon_heading', [
			'label' => '<br><br>Icon',
			'type'  => Controls_Manager::HEADING,
		] );

		$this->add_responsive_control( 'icon_size', [
			'label'     => 'Icon Size',
			'type'      => Controls_Manager::SLIDER,
			'range'     => [
				'px' => [
					'max' => 50,
				],
			],
			'default'   => [
				'unit' => 'px',
				'size' => '24',
			],
			'selectors' => [
				'{{WRAPPER}} .cc-item-feature-icon' => 'font-size: {{SIZE}}{{UNIT}};',
				'{{WRAPPER}} .cc-item-feature-icon svg' => 'height: {{SIZE}}{{UNIT}};',
			],
		] );

		$this->add_control( 'icon_color', [
			'label'     => 'Icon Color',
			'type'      => Controls_Manager::COLOR,
			'selectors' => [
				'{{WRAPPER}} .cc-item-feature-icon' => 'color: {{VALUE}};',
				'{{WRAPPER}} .cc-item-feature-icon svg' => 'fill: {{VALUE}}',
			],
		] );


		// Feature content
		$this->add_control( 'feature_text_heading', [
			'label' => '<br><br>Text',
			'type'  => Controls_Manager::HEADING,
		] );

		$this->add_control( 'feature_text_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'global'    => [
				'default' => Global_Colors::COLOR_PRIMARY,
			],
			'selectors' => [
				'{{WRAPPER}} .cc-item-feature-text' => 'color: {{VALUE}};',
			],
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'feature_typography',
			'label'    => 'Typography',
			'global'   => [
				'default' => Global_Typography::TYPOGRAPHY_TEXT,
			],
			'selector' => '{{WRAPPER}} .cc-item-feature-text',
		] );

		$this->end_controls_section();


		// Buttons Style Section
		$this->start_controls_section( 'section_button_style', [
			'label' => 'Item button',
			'tab'   => Controls_Manager::TAB_STYLE,
		] );

		$this->add_control( 'button_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'default' => '#FFF',
			'selectors' => [
				'{{WRAPPER}} .cc-item-button.elementor-button' => 'color: {{VALUE}};',
			],
		] );

		$this->add_control( 'button_background_color', [
			'label'     => 'Color',
			'type'      => Controls_Manager::COLOR,
			'global'    => [
				'default' => Global_Colors::COLOR_ACCENT,
			],
			'selectors' => [
				'{{WRAPPER}} .cc-item-button.elementor-button' => 'background-color: {{VALUE}};',
			],
		] );

		$this->add_group_control( Group_Control_Typography::get_type(), [
			'name'     => 'button_typography',
			'label'    => 'Typography',
			'selector' => '{{WRAPPER}} .cc-item-button.elementor-button',
		] );

		$this->end_controls_section();


	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$features = $settings['features'];


		// Desktop
		echo '<div class="cc-comparison-table-desktop">';

			echo '<div class="cc-table-heading-column">';
				echo '<div></div>'; // empty cell
				foreach ( $features as $feature ) {
					echo '<div class="cc-item-feature-heading">' . $feature['heading'] . '</div>';
				}
				echo '<div></div>'; // empty cell
			echo '</div>';



			echo '<div class="cc-table-item-column">';
				echo '<div class="cc-item-title">' . ( $settings['items'][0]['title'] ?? '' ) . '</div>';
				foreach ( $features as $feature ) {
					echo '<div class="cc-item-feature-content">';
						echo '<div class="cc-item-feature-icon">';
							\Elementor\Icons_Manager::render_icon( $feature['item_1_icon'], [ 'aria-hidden' => 'true' ] );
						echo '</div>';
						echo '<div class="cc-item-feature-text">' . $feature['item_1_text'] . '</div>';
					echo '</div>';

				}
				if ( isset( $settings['items'][0]['button_label'] ) && $settings['items'][0]['button_label'] ) {
					?>
					<div class="cc-footer">
						<a href="<?php echo $settings['items'][0]['button_link']['url'] ?? ''; ?>" class="cc-item-button elementor-button"><?php echo $settings['items'][0]['button_label'] ?? ''; ?></a>
					</div>
					<?php
				}
			echo '</div>';



			echo '<div class="cc-table-items-divider-column">';
				echo '<div></div>'; // empty cell
				foreach ( $features as $feature ) {
					echo '<div></div>';
				}
				echo '<div></div>'; // empty cell
			echo '</div>';



			echo '<div class="cc-table-item-column">';
				echo '<div class="cc-item-title">' . ( $settings['items'][1]['title'] ?? '' ) . '</div>';
				foreach ( $features as $feature ) {
					echo '<div class="cc-item-feature-content">';
						echo '<div class="cc-item-feature-icon">';
							\Elementor\Icons_Manager::render_icon( $feature['item_2_icon'], [ 'aria-hidden' => 'true' ] );
						echo '</div>';
						echo '<div class="cc-item-feature-text">' . $feature['item_2_text'] . '</div>';
					echo '</div>';

				}
				if ( isset( $settings['items'][1]['button_label'] ) && $settings['items'][1]['button_label'] ) {
					?>
					<div class="cc-footer">
						<a href="<?php echo $settings['items'][1]['button_link']['url'] ?? ''; ?>" class="cc-item-button elementor-button"><?php echo $settings['items'][1]['button_label'] ?? ''; ?></a>
					</div>
					<?php
				}
			echo '</div>';
		echo '</div>';


		// Mobile
		echo '<div class="cc-comparison-table-mobile">';
			echo '<div class="cc-comparison-table-mobile-wrapper">';
				?>
				<!-- Heading row -->
				<div></div>
				<div class="cc-item-title"><?php echo $settings['items'][0]['title'] ?? ''; ?></div>
				<div class="cc-item-title"><?php echo $settings['items'][1]['title'] ?? ''; ?></div>

				<!-- Features -->
				<?php foreach ( $features as $feature ) { ?>
					<div class="cc-item-feature-heading"><?php echo $feature['heading'] ?? ''; ?></div>
					<div class="cc-item-feature-content">
						<div class="cc-item-feature-icon">
							<?php \Elementor\Icons_Manager::render_icon( $feature['item_1_icon'], [ 'aria-hidden' => 'true' ] ); ?>
						</div>
						<div class="cc-item-feature-text"><?php echo $feature['item_1_text'] ?? ''; ?></div>
					</div>
					<div class="cc-item-feature-content">
						<div class="cc-item-feature-icon">
							<?php \Elementor\Icons_Manager::render_icon( $feature['item_2_icon'], [ 'aria-hidden' => 'true' ] ); ?>
						</div>
						<div class="cc-item-feature-text"><?php echo $feature['item_2_text'] ?? ''; ?></div>
					</div>
				<?php }
			echo '</div>';

			
			if ( isset( $settings['items'][0]['button_label'] ) && $settings['items'][0]['button_label'] ) {
				?>
				<div class="cc-comparison-table-mobile-button">
					<a href="<?php echo $settings['items'][0]['button_link']['url'] ?? ''; ?>" class="cc-item-button elementor-button"><?php echo $settings['items'][0]['button_label'] ?? ''; ?></a>
				</div>
				<?php
			}

			if ( isset( $settings['items'][1]['button_label'] ) && $settings['items'][1]['button_label'] ) {
				?>
				<div class="cc-comparison-table-mobile-button">
					<a href="<?php echo $settings['items'][1]['button_link']['url'] ?? ''; ?>" class="cc-item-button elementor-button"><?php echo $settings['items'][1]['button_label'] ?? ''; ?></a>
				</div>
				<?php
			}
		echo '</div>';
	}

}