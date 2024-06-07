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





    if ($('body').hasClass('woocommerce-cart')) {

        // $('button[name="update_cart"]').remove();

        var editUrl = $('td.product-name a').attr('href');

        $('td.actions').append('<a class="button cc-edit-customization" href="' + editUrl + '">Edit Customization</a>');
    }



} )( jQuery );



var elementToWrap = document.querySelector('.cc-cart-preview-elements-wrapper');
if (elementToWrap) {

    // Create the new <tr> and <td> elements
    var newTr = document.createElement('tr');
    var newTd = document.createElement('td');
    
    // Style the <tr> and <td> to display as block elements
    newTr.style.display = 'block';
    newTd.style.display = 'block';
    newTd.style.paddingRight = '0';
    
    // Append the original div to the new <td>
    newTd.appendChild(elementToWrap);
    
    // Append the new <td> to the new <tr>
    newTr.appendChild(newTd);
    
    // Select the reference node after which the new element will be inserted
    var referenceNode = document.querySelector('tr.woocommerce-cart-form__cart-item');
    
    // Insert the new <tr> after the reference node
    if (referenceNode && referenceNode.parentNode) {
        referenceNode.parentNode.insertBefore(newTr, referenceNode.nextSibling);
    }
}

