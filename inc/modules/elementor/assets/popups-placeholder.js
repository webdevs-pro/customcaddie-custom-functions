jQuery(window).on('elementor/frontend/init', function () {

   var CCPopupsPlaceholder = function ($scope, $) {

      if ( ! $( 'body' ).hasClass( 'elementor-editor-active' ) ) {
         $scope.find('.elementor-widget-container').html('');
      }

      $( document ).on( 'elementor/popup/show', function( event, id, instance ) {
         $scope.find('.elementor-widget-container').html('');
         $scope.find( '.elementor-widget-container' ).append( $( '#elementor-popup-modal-' + id + ' .dialog-widget-content' ) );
         // var modal = instance.getModal();
         // modal.destroy()
         $( '#elementor-popup-modal-' + id ).remove();
      } );
      
      $( document ).on( 'elementor/popup/hide', function( event, id, instance ) {
         alert();
      } );
   }

   elementorFrontend.hooks.addAction('frontend/element_ready/cc-popups-placeholder.default', CCPopupsPlaceholder);
});