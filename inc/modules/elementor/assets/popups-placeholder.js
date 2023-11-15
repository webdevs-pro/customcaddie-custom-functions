jQuery(window).on('elementor/frontend/init', function () {

   var CCPopupsPlaceholder = function ($scope, $) {

      var widget_settings = JSON.parse( $scope.attr('data-settings') );
      var popup_ids = [];
      if ( typeof widget_settings.popups !== 'undefined' ) {
         popup_ids = widget_settings.popups.map( obj => obj.popup );
      }


      if ( ! $( 'body' ).hasClass( 'elementor-editor-active' ) ) {
         $scope.find('.elementor-widget-container').css('display', 'block');
         $scope.find('.elementor-widget-container').html('');
      }


      $( document ).on( 'elementor/popup/show', function( event, id, instance ) {
         if ( ! popup_ids.includes( id.toString() ) ) {
            return;
         }

         if ( window.matchMedia("(max-width: 767px)").matches ) {
            return;
         }

         $scope.find( '.elementor-widget-container .dialog-lightbox-widget' ).each( function() {
            $( this ).hide();
            $( 'body' ).append( $( this ) );
         } );

         $scope.find( '.elementor-widget-container' ).append( $( '#elementor-popup-modal-' + id ) );
      } );


      $( document ).on( 'elementor/popup/hide', function( event, id, instance ) {
         $scope.find( '.elementor-widget-container .dialog-lightbox-widget' ).each( function() {
            $( this ).hide();
            $( 'body' ).append( $( this ) );
         } );
      } );
   }

   elementorFrontend.hooks.addAction('frontend/element_ready/cc-popups-placeholder.default', CCPopupsPlaceholder);
});