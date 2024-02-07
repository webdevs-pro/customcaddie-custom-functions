( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {

		/**
		 * This function populates the name placeholders and signature preview with the values ​​entered in the corresponding fields.. 
		 */
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

			$( '.cc-tees-preview-wrapper .cc-preview-name' ).text( first_name + ' ' + last_name );
		}

		/**
		 * Populates the name placeholders and signature preview on load.
		 */
		fill_name_placeholders();


		/**
		 * Populates the name placeholders and signature preview on input.
		 */
		$( '.cc-first-name-field, .cc-middle-name-field, .cc-last-name-field' ).on( 'input', function() {
			fill_name_placeholders();
		} );




		/**
		 * Populate the initials placeholders on input.
		 */
		$( 'input.cc-initials-field' ).on( 'input', function() {
			var value = $( this ).val();
			var first_letter = value.length > 0 ? value[0] : 'J';
			var middle_letter = ''; // Default value
			var last_letter = 'D';   // Default value

			if ( value.length == 2 ) {
				last_letter = value[1];
			} else if ( value.length >= 3 ) {
				middle_letter = value[1];
				last_letter = value[2];
			}

			$( '.cc-first-letter' ).text( first_letter );
			$( '.cc-middle-letter' ).text( middle_letter );
			$( '.cc-last-letter' ).text( last_letter );
		} );




		/**
		 * Populate the first name placeholders on input.
		 */
		$( 'input.cc-first-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			var first_name = value ? value : 'JOHN';

			$( '.cc-first-name-letters' ).text( first_name.toUpperCase() );
		} );




		/**
		 * Populate the last name placeholders on input.
		 */
		$( 'input.cc-last-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			var last_name = value ? value : 'DANIELS';

			$( '.cc-last-name-letters' ).text( last_name.toUpperCase() );
		} );



		/**
		 * On icon select.
		 */
		$( '.cc-icon-select input' ).on( 'change', function() {

			// Set font size input value from selected SVG icon
			var font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size' );
			if ( typeof font_size === 'undefined' ) {
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size' );
			}
			if ( typeof font_size === 'undefined' ) {
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size' );
			}
			$( '.cc-icon-font-size' ).val( font_size );

			// Set ball preview icon
			update_preview_icons();
		} );






		update_preview_icons();
		function update_preview_icons() {
			// Get selected icon SVG
			var checked_svg = $( '.cc-icon-select input:checked' ).closest( '.wsf-tile' ).find( 'label svg' );
			if ( checked_svg.length == 0 ) {
				checked_svg = $( '.cc-initials-icons .wsf-grid .wsf-tile:first-child label svg' );
			}
			
			var svg_for_ball = checked_svg.clone();

			// Get ball preview icon width
			var ball_icon_width = $( '.cc-preview-wrapper .cc-preview-icon svg' ).css('width')|| '80%';

			// Update ball preview icon
			$( '.cc-preview-wrapper .cc-preview-icon' ).empty().append( svg_for_ball );

			// Set ball preview icon width
			$( '.cc-preview-wrapper .cc-preview-icon svg' ).css('width', ball_icon_width);


			// Set towel preview icon
			var svg_for_towel = checked_svg.clone();
			$( '.cc-towel-preview .cc-towel-icon' ).empty().append( svg_for_towel );

			// Set towel preview icon
			var svg_for_towel = checked_svg.clone();
			$( '.cc-preview-icon .cc-marker-preview-icon' ).empty().append( svg_for_towel );




			// /**
			//  * Set preview
			//  */
			// // Marker preview
			// var svg_for_marker = checked_svg.clone();
			// $( '.cc-set-preview-item.cc-marker-preview .cc-preview-icon' ).empty().append( svg_for_marker );

			// // Ball preview
			// // Setting up MutationObserver to observe changes in the iframe's content

			// var observer = new MutationObserver( function( mutations ) {

			// 	// console.log('mutations', mutations);

			// 	var ball_preview_elements = $( '.cc-ball-preview-wrapper .cc-preview-texts' ).clone();
			// 	var ball_preview_wrapper = $( '.cc-ball-preview-wrapper' );
			// 	if ( ! $( ball_preview_wrapper ).hasClass( 'cc-ball-preview-show-icon' ) ) {
			// 		$( ball_preview_elements ).find( '.cc-preview-icon' ).hide();
			// 	}
			// 	if ( ! $( ball_preview_wrapper ).hasClass( 'cc-ball-preview-show-signature' ) ) {
			// 		$( ball_preview_elements ).find( '.cc-preview-signature' ).hide();
			// 	}
			// 	if ( ! $( ball_preview_wrapper ).hasClass( 'cc-ball-preview-show-text' ) ) {
			// 		$( ball_preview_elements ).find( '.cc-preview-text' ).hide();
			// 	}

			// 	$( '.cc-set-preview-item.cc-ball-preview' ).empty().append( ball_preview_elements );
			// });
			// var config = { attributes: true, childList: true, characterData: true, subtree: true };
			// observer.observe( $( '.cc-ball-preview-wrapper' )[0], config );



		}



		/**
		 * Adjust ball icon width.
		 */
		$( '.cc-icon-size-wrapper input' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-icon svg' ).css( 'width', value + '%' );
		} )


		/**
		 * Change icon letters font size.
		 */
		$( '.cc-icon-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			var checked_input = $( '.cc-icon-select' ).find( 'input:checked' );
			
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-middle-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size', value );

			// Set ball preview icon
			update_preview_icons();
		} );

		$( '.cc-name-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-name' ).css( 'font-size', value + 'px' );
		} );

		$( '.cc-signature-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-signature' ).css( 'font-size', value + 'px' );
		} );

		$( '.cc-custom-text-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-text' ).css( 'font-size', value + 'px' );
		} );

		$( '.cc-tees-text-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '#tees-render-wrapper' ).css( 'font-size', value + 'px' );
		} );

		$( '.cc-tees-custom-text-input' ).on( 'input change', function() {
			var value = $( this ).val();
			$( '#tees-render-wrapper .cc-preview-text' ).text( value );
		} );


		/**
		 *  Makes + and - buttons works for size input.
		 */
		function updateButtonState( $input ) {
			var value = parseInt( $input.val(), 10 );
			var min = parseInt( $input.attr( 'min' ), 10 ) || 0;
			var max = parseInt( $input.attr( 'max' ), 10 ) || Infinity;

			$input.closest( '.cc-font-size-wrapper' ).find( '.wsf-input-group-prepend' ).toggleClass( 'disabled', value <= min );
			$input.closest( '.cc-font-size-wrapper' ).find( '.wsf-input-group-append' ).toggleClass( 'disabled', value >= max );
		}

		$( '.cc-font-size-wrapper .wsf-input-group-prepend' ).on( 'click', function() {
			var $input = $( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' );
			var value = parseInt( $input.val(), 10 );
			var min = parseInt( $input.attr( 'min' ), 10 ) || 0;

			if ( value > min ) {
					$input.val( value - 1 ).trigger( 'change' );
			}
		} );

		$( '.cc-font-size-wrapper .wsf-input-group-append' ).on( 'click', function() {
			var $input = $( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' );
			var value = parseInt( $input.val(), 10 );
			var max = parseInt( $input.attr( 'max' ), 10 ) || Infinity;

			if ( value < max ) {
					$input.val( value + 1 ).trigger( 'change' );
			}
		} );

		// Event handler for direct input or scroll changes
		$( '.cc-font-size-wrapper .cc-font-size' ).on( 'input change', function() {
			updateButtonState( $( this ) );
		});

		// Initialize button state on page load
		$( '.cc-font-size' ).each( function() {
			updateButtonState( $( this ) );
		} );




		// /**
		//  * Autopopulate initials field on enter first, middle and last names.
		//  */
		// $('.cc-first-name-field, .cc-middle-name-field, .cc-last-name-field').on('input', function() {
		// 	// Initialize the initials as an empty string
		// 	var initials = '';

		// 	// Check each field and add its first letter to the initials if it's not empty
		// 	if ($('.cc-first-name-field').val()) {
		// 		initials += $('.cc-first-name-field').val().charAt(0);
		// 	}
		// 	if ($('.cc-middle-name-field').val()) {
		// 		initials += $('.cc-middle-name-field').val().charAt(0);
		// 	}
		// 	if ($('.cc-last-name-field').val()) {
		// 		initials += $('.cc-last-name-field').val().charAt(0);
		// 	}

		// 	// Set the initials to the initials field and convert them to uppercase
		// 	$('.cc-initials-field').val(initials.toUpperCase()).trigger('input');
		// } );







		/**
		 * Function to change signature preview font.
		 */
		function set_signature_font() {
			var signature_design = $( '.cc-signature-preview input:checked' ).val();

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

		/**
		 * Run on form load.
		 */
		set_signature_font();
		// render_ball_preview();

		/**
		 * Change signature preview font on option select.
		 */
		$( '.cc-signature-preview input' ).on( 'change', function() {
			set_signature_font();
		} );



		/**
		 * Set custom text on load
		 */
		function set_custom_text_to_ball() {
			var text = $( '.cc-custom-text-input' ).val();

			$( '.cc-preview-wrapper .cc-preview-text' ).text( text );
		}
		$( '.cc-custom-text-input' ).on( 'input change', function() {
			set_custom_text_to_ball();
		} );
		set_custom_text_to_ball();






		

		


	


		function update_set_preview() {
			// Ball
			var node = document.getElementById('ball-render-wrapper');
			domtoimage.toJpeg(node, { filter: filter})
				.then(function (dataUrl) {
					var img = new Image();
					img.src = dataUrl;
					$('.cc-set-preview-item-ball').empty().append(img);
				});

			// Towel
			node = document.getElementById('towel-render-wrapper');
			domtoimage.toJpeg(node, {})
				.then(function (dataUrl) {
					var img = new Image();
					img.src = dataUrl;
					$('.cc-set-preview-item-towel').empty().append(img);
				});

			// Tees
			node = document.getElementById('tees-render-wrapper');
			domtoimage.toJpeg(node, { filter: filter})
				.then(function (dataUrl) {
					var img = new Image();
					img.src = dataUrl;
					$('.cc-set-preview-item-tees').empty().append(img);
				});


			var checked_svg = $( '.cc-icon-select input:checked' ).closest( '.wsf-tile' ).find( 'label svg' );
			// Set pin preview icon
			var svg_for_pin = checked_svg.clone();
			$( '.cc-set-preview-item-pin .cc-pin-preview-icon' ).empty().append( svg_for_pin );

			// Set marker preview icon
			var svg_for_pin = checked_svg.clone();
			$( '.cc-set-preview-item-marker .cc-marker-preview-icon' ).empty().append( svg_for_pin );


			function filter (node) {
				if (node.classList && node.classList.contains('cc-ball-print-area')) {
					return false;
				}

				if (node.classList && node.classList.contains('cc-tees-print-area')) {
					return false;
				}
				return true; // Return true to include the node in the output
			}
		}














	// 	function fetchAndConvertFont(url, onSuccess) {
	// 		// Fetch the Google Font CSS
	// 		fetch(url)
	// 			.then(response => response.text())
	// 			.then(css => {
	// 				// Extract the font URL from the CSS (this may need to be adjusted based on the actual CSS structure)
	// 				const fontUrlMatch = css.match(/url\((.*?)\)/);
	// 				if (fontUrlMatch && fontUrlMatch[1]) {
	// 						const fontUrl = fontUrlMatch[1].replace(/"/g, ''); // Remove quotes
	// 						// Fetch and convert the font file to Base64
	// 						fetch(fontUrl)
	// 							.then(response => response.blob())
	// 							.then(blob => {
	// 								const reader = new FileReader();
	// 								reader.readAsDataURL(blob);
	// 								reader.onloadend = () => {
	// 										const base64Font = reader.result;
	// 										// Replace the URL in the @font-face rule with the Base64 string
	// 										const base64Css = css.replace(fontUrlMatch[0], `url(${base64Font})`);
	// 										onSuccess(base64Css);
	// 								};
	// 							});
	// 				}
	// 			})
	// 			.catch(error => console.error('Error in font conversion:', error));
	// 	}
		
	// 	function injectStyleIntoSVG(svgElement, css) {
	// 		const styleElement = document.createElement('style');
	// 		styleElement.textContent = css;
	// 		svgElement.prepend(styleElement);
	// 	}
	
	// 	function update_set_preview() {
	// 		const fontUrls = [
	// 			'https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-',
	// 			'https://fonts.googleapis.com/css2?family=Vina+Sans&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-',
	// 			'https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-'
	// 		];
	
	// 		let loadedFonts = 0;
	// 		let combinedCSS = '';

	
	// 		fontUrls.forEach(url => {
	// 			fetchAndConvertFont(url, base64Css => {
	// 				combinedCSS += base64Css;
	// 				loadedFonts++;
	// 				if (loadedFonts === fontUrls.length) {
	// 						// Once all fonts are loaded
	// 						var svgElement = document.querySelector('#ball-render-wrapper svg');
	// 						if (svgElement) {
	// 							injectStyleIntoSVG(svgElement, combinedCSS);
	// 						}

	// 						svgElement = document.querySelector('#towel-render-wrapper svg');
	// 						if (svgElement) {
	// 							injectStyleIntoSVG(svgElement, combinedCSS);
	// 						}

	// 				}
	// 			});
	// 		});



	// 		// Now call html2canvas
	// 		setTimeout(function() {

	// 			var node = document.getElementById('ball-render-wrapper');
	// 			html2canvas(node).then(canvas => {
	// 				$('.cc-set-preview-item-ball').empty().append(canvas);
	// 			});


	// 			// Towel
	// 			node = document.getElementById('towel-render-wrapper');
	// 			html2canvas(node).then(canvas => {
	// 				$('.cc-set-preview-item-towel').empty().append(canvas);
	// 			});



	// 			// Tees
	// 			node = document.getElementById('tees-render-wrapper');
	// 			html2canvas(node, {
	// 				onclone: function(doc) {
	// 					$(doc).find('.cc-tees-preview-lines').css('border', 'none');
	// 				}
	// 				}).then(canvas => {
	// 				$('.cc-set-preview-item-tees').empty().append(canvas);
	// 			});

	// 		}, 100 );
	// }


		$('#generate-set-preview').on('click', function(e) {
			e.preventDefault();
			update_set_preview();
		})





	} );
} )( jQuery );