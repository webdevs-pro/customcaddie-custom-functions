<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class CC_WS_Form {

	public function __construct() {
		add_action( 'wsf_enqueue_scripts', array( $this, 'enqueue_js' ), 10, 1 ); 
		add_action( 'wsf_enqueue_styles', array( $this, 'enqueue_css' ), 10, 0 ); 
	}

	public function enqueue_js() {
		wp_enqueue_script( 'cc-ws-form', CC_PLUGIN_DIR_URL . 'inc/modules/ws-form/assets/ws-form.js', array( 'jquery' ), CC_PLUGIN_VERSION, true );
		add_action( 'wp_footer', array( $this, 'footer_swipers' ), 999 );
	}

	public function enqueue_css() {
		wp_enqueue_style( 'cc-ws-form', CC_PLUGIN_DIR_URL . 'inc/modules/ws-form/assets/ws-form.css', array(), CC_PLUGIN_VERSION );
	}

	public function footer_swipers() {
		?>
		<div id="cc-main-preview-lightbox-wrapper">
			<div id="cc-main-preview-lightbox">
				<?php
				$swiper_container_classes = array(
					'swiper-slider-container',
					'cc-preview-slider',
				);

				if ( \Elementor\Plugin::$instance->experiments->is_feature_active( 'e_swiper_latest' ) ) {
					$swiper_container_classes[] = 'swiper';
				} else {
					$swiper_container_classes[] = 'swiper-container';
				}
				?>

				<div class="<?php echo implode( ' ', $swiper_container_classes ); ?>">
					<div class="swiper-wrapper">

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

					</div>

					<div class="cc-swiper-fraction"></div>
					<div class="cc-swiper-close"><i class="eicon-close"></i></div>

					<div class="cc-swiper-prev cc-swiper-nav-button"><i class="eicon-chevron-left" aria-hidden="true"></i></div>
					<div class="cc-swiper-next cc-swiper-nav-button"><i class="eicon-chevron-right" aria-hidden="true"></i></div>

				</div>
			</div>
		</div>




		<div id="cc-icon-preview-lightbox-wrapper">
			<div id="cc-icon-preview-lightbox">
				<?php
				$swiper_container_classes = array(
					'swiper-slider-container',
					'cc-icon-preview-slider',
				);

				if ( \Elementor\Plugin::$instance->experiments->is_feature_active( 'e_swiper_latest' ) ) {
					$swiper_container_classes[] = 'swiper';
				} else {
					$swiper_container_classes[] = 'swiper-container';
				}
				?>

				<div class="<?php echo implode( ' ', $swiper_container_classes ); ?>">
					<div class="swiper-wrapper">

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

						<div class="swiper-slide">
							<div class="swiper-slide-inner">
							</div>
						</div>

					</div>

					<div class="cc-swiper-fraction"></div>
					<div class="cc-swiper-close"><i class="eicon-close"></i></div>

					<div class="cc-swiper-prev cc-swiper-nav-button"><i class="eicon-chevron-left" aria-hidden="true"></i></div>
					<div class="cc-swiper-next cc-swiper-nav-button"><i class="eicon-chevron-right" aria-hidden="true"></i></div>

				</div>
			</div>
		</div>







		<?php
	}

}
new CC_WS_Form();
