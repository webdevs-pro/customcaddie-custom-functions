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
   }

   public function enqueue_css() {
		wp_enqueue_style( 'cc-ws-form', CC_PLUGIN_DIR_URL . 'inc/modules/ws-form/assets/ws-form.css', array(), CC_PLUGIN_VERSION );
      // wp_enqueue_style( 'cc-dancing-script-font', 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap', false );
   }

}
new CC_WS_Form();
