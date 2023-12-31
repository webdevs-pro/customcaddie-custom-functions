jQuery(window).on('elementor/frontend/init', function () {

   var CCProductIframe = function ($scope, $) {
      var widget_id = $scope.attr( 'data-id' );
      var iframe = $scope.find( '#cc-product-iframe-' + widget_id )[0]; // Get the DOM element


      // Function to resize the iframe
      var resizeIframe = function () {
         if (window.innerWidth > 767) {
            // For devices wider than 767px, set height based on content
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 5 + 'px';
            $( iframe.contentWindow.document ).find( 'html' ).css( 'overflow', 'hidden' );
         } else {
            // For devices narrower than 767px, set height to 100vh
            iframe.style.height = '100vh';
         }
      };

      // Initialize the iframe resize when it's loaded
      $( iframe ).one( 'load', function() {
         resizeIframe();

         // Setting up MutationObserver to observe changes in the iframe's content
         var observer = new MutationObserver(function(mutations) {
            console.log('mutations', mutations);
            resizeIframe();
         });

         var config = { attributes: true, childList: true, characterData: true, subtree: true };
         observer.observe( iframe.contentDocument.body, config );



         var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
         var add_to_cart_button = $( iframeDocument ).find( 'button.single_add_to_cart_button' );
         var _this = this;

         if ( add_to_cart_button.length > 0 ) {
            $( add_to_cart_button ).on( 'click', function() {
               setTimeout( function() {

                  // $( _this.contentDocument.body ).empty();
                  var iframe_body = $( _this.contentDocument.body );
                  // iframe_body.empty();
                  if (window.innerWidth > 767) {
                     // Set iframe body height for desktop
                     $( _this.contentDocument.documentElement ).css( {
                        'height': '175px'
                     } );

                     // Scroll main window to iframe top
                     var iframeTop = $( _this ).offset().top;
                     $( 'html, body' ).animate({
                         scrollTop: iframeTop - 100
                     }, 200 );
                  } else {
                     // Set iframe body height for mobile
                     $( _this.contentDocument.documentElement ).css( {
                        'height': '100%'
                     } );
                  }

                  iframe_body.css( {
                     'display': 'flex',
                     'height': '100%',
                     'align-items': 'center',
                     'justify-content': 'center',
                     'flex-direction': 'column'
                  } );
                  iframe_body.html( '<img src="/wp-content/uploads/2023/11/spinner.gif" /><br>Redirect to checkout page' );


               }, 200 );

               // return false;


               // Start timer to check iframe URL changes
               var initial_iframe_url = $( _this ).contents().get( 0 ).location.href;
               var timer = setInterval( function() {
                  var current_iframe_url = $( _this ).contents().get( 0 ).location.href;

                  // Reload main page if iframe URL was chenged
                  if ( initial_iframe_url != current_iframe_url ) {
                     clearInterval( timer );
                     window.location.href = current_iframe_url;

                     // Stop loading iframe
                     $( iframe ).attr( 'src', '' );
                     $( 'body' ).fadeTo( 300, 0.5 );
                  }
               }, 100 )

               // $( _this ).on( 'load', function() {
               //    try {
               //       var iframeUrl = $( this ).contents().get( 0 ).location.href;
               //       window.location.href = iframeUrl; 
               //    } catch (error) {
               //       console.error("Error accessing iframe contents:", error);
               //       // Handle errors here (likely due to cross-origin restrictions)
               //    }
               // } );
            } );
         }

      } );
      
      








   }

   elementorFrontend.hooks.addAction( 'frontend/element_ready/cc-product-iframe.default', CCProductIframe );
});