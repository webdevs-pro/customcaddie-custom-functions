<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


class CC_Elementor {

   const MINIMUM_ELEMENTOR_VERSION = '3.15.0';
   const MINIMUM_PHP_VERSION = '7.3';

   public function __construct() {
      add_action( 'plugins_loaded', array( $this, 'init' ) );
      add_action( 'elementor/elements/categories_registered', array( $this, 'register_widgets_categories' ) );
		add_action( 'elementor/frontend/after_register_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'elementor/frontend/after_register_styles', array( $this, 'register_frontend_styles' ) );
      add_action( 'elementor/widgets/register', array( $this, 'on_widgets_registered' ) );
   }

   public function init() {
      // Check if Elementor installed and activated
      if ( ! did_action( 'elementor/loaded' ) ) {
         add_action( 'admin_notices', array( $this, 'admin_notice_missing_main_plugin' ) );
         return;
      }

      // Check for required Elementor version
      if ( ! version_compare( ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=' ) ) {
         add_action( 'admin_notices', array( $this, 'admin_notice_minimum_elementor_version' ) );
         return;
      }

      // Check for required PHP version
      if ( version_compare( PHP_VERSION, self::MINIMUM_PHP_VERSION, '<' ) ) {
         add_action( 'admin_notices', array( $this, 'admin_notice_minimum_php_version' ) );
         return;
      }
   }



   /**
    * Register custom widgets categories
    *
    * @param \Elementor\Elements_Manager $elements_manager
    *
    * @return void
    */
   function register_widgets_categories( \Elementor\Elements_Manager $elements_manager ) {
      $elements_manager->add_category( 'customcaddie', [
         'title' => 'Custom Caddie',
         'icon' => 'fa fa-plug',
      ] );
   }



   /**
    * Admin notice
    *
    * Warning when the site doesn't have Elementor installed or activated.
    *
    * @return void
    */
   public function admin_notice_missing_main_plugin() {
      if ( isset( $_GET['activate'] ) ) {
         unset( $_GET['activate'] );
      }
      $message = sprintf(
         '"%1$s" requires "%2$s" to be installed and activated.',
         '<strong>' . 'Custom Caddie Custom Functions' . '</strong>',
         '<strong>' . 'Elementor' . '</strong>'
      );
      printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
   }



   /**
    * Admin notice
    *
    * Warning when the site doesn't have a minimum required Elementor version.
    *
    * @return void
    */
   public function admin_notice_minimum_elementor_version() {
      if ( isset( $_GET['activate'] ) ) {
         unset( $_GET['activate'] );
      }
      $message = sprintf(
         /* translators: 1: Plugin name 2: Elementor 3: Required Elementor version */
         '"%1$s" requires "%2$s" version %3$s or greater.',
         '<strong>' . 'Custom Caddie Custom Functions' . '</strong>',
         '<strong>' . 'Elementor' . '</strong>',
         self::MINIMUM_ELEMENTOR_VERSION
      );
      printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
   }



   /**
    * Admin notice
    *
    * Warning when the site doesn't have a minimum required PHP version.
    *
    * @return void
    */
   public function admin_notice_minimum_php_version() {
      if ( isset( $_GET['activate'] ) ) {
         unset( $_GET['activate'] );
      }
      $message = sprintf(
         /* translators: 1: Plugin name 2: PHP 3: Required PHP version */
         '"%1$s" requires "%2$s" version %3$s or greater.',
         '<strong>' . 'Custom Caddie Custom Functions' . '</strong>',
         '<strong>' . 'PHP' . '</strong>',
         self::MINIMUM_PHP_VERSION
      );
      printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message );
   }



   /**
    * Register DT widgets
    *
    * @return void
    */
	public function on_widgets_registered() {
		require ( CC_PLUGIN_DIR . '/inc/modules/elementor/widgets/comparison-table.php' );
		require ( CC_PLUGIN_DIR . '/inc/modules/elementor/widgets/popups-placeholder.php' );
		require ( CC_PLUGIN_DIR . '/inc/modules/elementor/widgets/product-iframe.php' );

		\Elementor\Plugin::instance()->widgets_manager->register( new CC_Comparison_Table() );
		\Elementor\Plugin::instance()->widgets_manager->register( new CC_Popups_Placeholder() );
		\Elementor\Plugin::instance()->widgets_manager->register( new CC_Product_Iframe() );
	}



   /**
    * Register frontend scripts
    *
    * @return void
    */
   public function register_frontend_scripts() {
		wp_register_script( 'cc-popups-placeholder', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/popups-placeholder.js', array( 'jquery', 'elementor-frontend' ), CC_PLUGIN_VERSION, true );
		wp_register_script( 'cc-product-iframe', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/product-iframe.js', array( 'jquery', 'elementor-frontend' ), CC_PLUGIN_VERSION, true );

      // https://github.com/tsayen/dom-to-image
		wp_enqueue_script( 'cc-dom2image', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/dom-to-image.min.js', array( ), CC_PLUGIN_VERSION, true );

      // https://github.com/bubkoo/html-to-image
		// wp_enqueue_script( 'cc-html-to-image', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/html-to-image.js', array( ), CC_PLUGIN_VERSION, true );

      // https://html2canvas.hertzen.com/configuration
		// wp_enqueue_script( 'cc-html2canvas', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/html2canvas.min.js', array( ), CC_PLUGIN_VERSION, true );

      // $google_fonts_url = 'https://fonts.googleapis.com/css2?' .
      // 'family=Lora:wght@700' .
      // '&family=Vina+Sans' .
      // '&family=Courier+Prime' .
      // '&family=Dancing+Script:wght@700' .
      // '&family=Caveat' .
      // '&family=Shadows+Into+Light:wght@400' .
      // '&family=Satisfy:wght@400' .
      // '&family=Indie+Flower:wght@400' .
      // '&family=Great+Vibes:wght@400' .
      // '&family=Zeyada:wght@400' .
      // '&family=Sacramento:wght@400' .
      // '&family=Cookie:wght@400' .
      // '&family=Allura:wght@400' .
      // '&family=Alex+Brush:wght@400' .
      // '&family=Homemade+Apple:wght@400&display=swap';

      // wp_enqueue_style( 
      //    'cc-google-fonts', 
      //    $google_fonts_url, 
      //    array(), 
      //    null 
      // );
   }



   /**
    * Register frontend styles
    *
    * @return void
    */
   public function register_frontend_styles() {
      wp_register_style( 'cc-comparison-table', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/comparison-table.css', array(), CC_PLUGIN_VERSION ); 
      wp_register_style( 'cc-popups-placeholder', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/popups-placeholder.css', array(), CC_PLUGIN_VERSION ); 
      wp_register_style( 'cc-product-iframe', CC_PLUGIN_DIR_URL . 'inc/modules/elementor/assets/product-iframe.css', array(), CC_PLUGIN_VERSION ); 
   }
}
new CC_Elementor();



// function cc_add_crossorigin_to_google_fonts( $html, $handle ) {

//    if ( $handle === 'cc-google-fonts' || $handle === 'google-fonts' ) {
//       $html = str_replace( "rel='stylesheet'", "rel='stylesheet' crossorigin='anonymous'", $html );
//       return $html;
//    }
//    return $html;
// }
// add_filter( 'style_loader_tag', 'cc_add_crossorigin_to_google_fonts', 10, 2 );
