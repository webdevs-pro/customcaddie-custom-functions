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





		$( '.cc-initials-field input' ).on( 'input', function() {
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

			console.log('first_letter', first_letter);
			console.log('middle_letter', middle_letter);
			console.log('last_letter', last_letter);

			$( '.cc-first-letter' ).text( first_letter );
			$( '.cc-middle-letter' ).text( middle_letter );
			$( '.cc-last-letter' ).text( last_letter );
		} );




		$( '.cc-icon-select input' ).on( 'change', function() {
			var font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size' );
			console.log('font_size', font_size);

			$( '.cc-icon-font-size' ).val( font_size );
		} );





		$( '.cc-icon-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			var checked_input = $( '.cc-icon-select' ).find( 'input:checked' );
			
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-middle-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-letter' ).attr( 'font-size', value );
		} );

		
	} );

} )( jQuery );