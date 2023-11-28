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

			$( 'text.cc-first-letter' ).text( first_letter );
			$( 'text.cc-middle-letter' ).text( middle_letter );
			$( 'text.cc-last-letter' ).text( last_letter );
		} );




	} );

} )( jQuery );