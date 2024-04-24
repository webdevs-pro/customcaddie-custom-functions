( function( $ ) {
   // Function to adjust the cart container
   function adjustCartContainer() {
       var $cartContainer = $('.elementor-menu-cart__container.elementor-lightbox');
       var windowWidth = $(window).width();

       // Check if the window width is less than or equal to 600px
       if (windowWidth <= 600) {
           var $button = $('.elementor-menu-cart__toggle_button');
           var rect = $button[0].getBoundingClientRect();
           var leftOffset = rect.left; // Get the left position relative to the viewport

           // Set the CSS properties to adjust positioning and width
           $cartContainer.css({
               left: -leftOffset + 'px', // Adjust left to align with the left edge of the viewport
               width: windowWidth + 'px' // Stretch to the window's width
           });
       } else {
           // Reset styles if the window width is greater than 600px
           $cartContainer.css({
               left: '',
               width: ''
           });
       }
   }

   // Bind click event on toggle button
   $('.elementor-menu-cart__toggle_button').on('click', adjustCartContainer);

   // Bind resize event on window
   $(window).resize(adjustCartContainer);
} )( jQuery );
