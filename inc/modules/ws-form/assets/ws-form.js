( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {

		$( 'input.cc-set-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			if ( ! value ) {
				value = 'James Marshall';
			}

			$( '.cc-signature-preview label.wsf-label' ).text( value );
		} );





		$( 'input.cc-initials-field' ).on( 'input', function() {
			var value = $( this ).val();
			var first_letter = value.length > 0 ? value[0] : 'J';
			var middle_letter = 'M'; // Default value
			var last_letter = 'D';   // Default value

			if (value.length == 2) {
				last_letter = value[1];
			} else if (value.length >= 3) {
				middle_letter = value[1];
				last_letter = value[2];
			}


			$( '.cc-first-letter' ).text( first_letter );
			$( '.cc-middle-letter' ).text( middle_letter );
			$( '.cc-last-letter' ).text( last_letter );
		} );





		$( 'input.cc-first-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			var first_name = value ? value : 'JOHN';

			$( '.cc-first-name-letters' ).text( first_name.toUpperCase() );
		} );





		$( 'input.cc-last-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			var last_name = value ? value : 'DANIELS';

			$( '.cc-last-name-letters' ).text( last_name.toUpperCase() );
		} );




		$( '.cc-icon-select input' ).on( 'change', function() {
			var font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size' );
			if ( typeof font_size === 'undefined' ) {
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size' );
			}
			if ( typeof font_size === 'undefined' ) {
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size' );
			}

			$( '.cc-icon-font-size' ).val( font_size );
		} );





		$( '.cc-icon-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			var checked_input = $( '.cc-icon-select' ).find( 'input:checked' );
			
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-middle-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size', value );
		} );



		$( '.cc-icon-font-size-wrapper .wsf-input-group-prepend' ).on( 'click', function() {
			var value = $( this ).closest( '.cc-icon-font-size-wrapper' ).find( '.cc-icon-font-size' ).val();
			$( this ).closest( '.cc-icon-font-size-wrapper' ).find( '.cc-icon-font-size' ).val( parseInt( value ) - 1 ).trigger( 'change' );
		} );
		$( '.cc-icon-font-size-wrapper .wsf-input-group-append' ).on( 'click', function() {
			var value = $( this ).closest( '.cc-icon-font-size-wrapper' ).find( '.cc-icon-font-size' ).val();
			$( this ).closest( '.cc-icon-font-size-wrapper' ).find( '.cc-icon-font-size' ).val( parseInt( value ) + 1 ).trigger( 'change' );
		} );




		$('.cc-first-name-field, .cc-middle-name-field, .cc-last-name-field').on('input', function() {
			// Initialize the initials as an empty string
			var initials = '';
 
			// Check each field and add its first letter to the initials if it's not empty
			if ($('.cc-first-name-field').val()) {
				 initials += $('.cc-first-name-field').val().charAt(0);
			}
			if ($('.cc-middle-name-field').val()) {
				 initials += $('.cc-middle-name-field').val().charAt(0);
			}
			if ($('.cc-last-name-field').val()) {
				 initials += $('.cc-last-name-field').val().charAt(0);
			}
 
			// Set the initials to the initials field and convert them to uppercase
			$('.cc-initials-field').val(initials.toUpperCase()).trigger('input');
	  });
	} );

} )( jQuery );