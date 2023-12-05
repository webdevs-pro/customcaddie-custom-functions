( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {

		function fill_name_placeholders() {
			var first_name = $( '.cc-first-name-field' ).val();
			var middle_name = $( '.cc-middle-name-field' ).val();
			var last_name = $( '.cc-last-name-field' ).val();
	
			if ( ! first_name ) {
				first_name = 'John';
			}
	
			if ( ! last_name ) {
				last_name = 'Daniels';
			}
	
			// Initialize full_name with first_name
			var full_name = first_name;
	
			// Only add middle name with preceding space if it's present
			if ( middle_name ) {
				full_name += ' ' + middle_name;
			}
	
			// Add last name with preceding space
			full_name += ' ' + last_name;
	
			$( '.cc-signature-preview .wsf-tile label.wsf-label' ).text( full_name );
			$( '.cc-preview-wrapper .cc-preview-name' ).text( full_name );
			$( '.cc-preview-wrapper .cc-preview-signature' ).text( full_name );
		}
		fill_name_placeholders();



		$( '.cc-first-name-field, .cc-middle-name-field, .cc-last-name-field' ).on( 'input', function() {
			fill_name_placeholders();
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

		$( '.cc-name-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-name' ).css( 'font-size', value + 'px' );
		} );

		$( '.cc-signature-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-signature' ).css( 'font-size', value + 'px' );
		} );



		$( '.cc-font-size-wrapper .wsf-input-group-prepend' ).on( 'click', function() {
			var value = $( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' ).val();
			$( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' ).val( parseInt( value ) - 1 ).trigger( 'change' );
		} );
		$( '.cc-font-size-wrapper .wsf-input-group-append' ).on( 'click', function() {
			var value = $( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' ).val();
			$( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' ).val( parseInt( value ) + 1 ).trigger( 'change' );
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
		} );







		function render_ball_preview() {
			var type = $( '.cc-ball-print-type:checked' ).val();
			console.log('type', type);

			if ( type == 'Signature Only') {
				$( '.cc-preview-wrapper .cc-preview-name' ).hide();
			} else {
				$( '.cc-preview-wrapper .cc-preview-name' ).show();
			}

			if ( type == 'Name Only') {
				$( '.cc-preview-wrapper .cc-preview-signature' ).hide();
			} else {
				$( '.cc-preview-wrapper .cc-preview-signature' ).show();
			}
		}

		function set_signature_font() {

			var signature_design = $( '.cc-signature-preview input:checked' ).val();
			console.log('signature_design', signature_design);


			switch ( signature_design ) {
				case 'Dancing Script - Bold 700':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Dancing Script", cursive'
					} );
					break;

				case 'Caveat - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Caveat", cursive'
					} );
					break;

				case 'Shadows Into Light - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Shadows Into Light", cursive'
					} );
					break;

				case 'Satisfy - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Satisfy", cursive'
					} );
					break;

				case 'Indie Flower - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Indie Flower", cursive'
					} );
					break;

				case 'Great Vibes - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Great Vibes", cursive'
					} );
					break;

				case 'Zeyada - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Zeyada", cursive'
					} );
					break;

				case 'Sacramento - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Sacramento", cursive'
					} );
					break;

				case 'Cookie - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Cookie", cursive'
					} );
					break;

				case 'Allura - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Allura", cursive'
					} );
					break;

				case 'Alex Brush - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Alex Brush", cursive'
					} );
					break;

				case 'Homemade Apple - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Homemade Apple", cursive'
					} );
					break;
			}
		}

		set_signature_font();
		render_ball_preview();

		$( '.cc-signature-preview input' ).on( 'change', function() {
			set_signature_font();
		} );

		$( '.cc-ball-print-type' ).on( 'change', function() {
			render_ball_preview();
		} );





	} );
} )( jQuery );