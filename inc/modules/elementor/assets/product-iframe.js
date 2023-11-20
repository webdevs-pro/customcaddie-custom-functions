jQuery(window).on('elementor/frontend/init', function () {

   var CCProductIframe = function ($scope, $) {
      var widget_id = $scope.attr( 'data-id' );
      var iframe = $scope.find( '#cc-product-iframe-' + widget_id )[0]; // Get the DOM element


      // Function to resize the iframe
      var resizeIframe = function () {
         if (window.innerWidth >= 767) {
            // For devices wider than 767px, set height based on content
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 5 + 'px';
         } else {
            // For devices narrower than 767px, set height to 100vh
            iframe.style.height = '100vh';
         }
      };

      // Initialize the iframe resize when it's loaded
      $( iframe ).on( 'load', function() {
         resizeIframe();

         // Setting up MutationObserver to observe changes in the iframe's content
         var observer = new MutationObserver(function(mutations) {
            resizeIframe();
         });

         var config = { attributes: true, childList: true, characterData: true, subtree: true };
         observer.observe( iframe.contentDocument.body, config );
      } );
   }

   elementorFrontend.hooks.addAction( 'frontend/element_ready/cc-product-iframe.default', CCProductIframe );
});