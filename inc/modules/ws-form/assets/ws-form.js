( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {




		$( '.single_add_to_cart_button.button' ).appendTo( '.set-preview-section .cc-add-to-cart-button-wrapper' );

		// Variable to keep track of the current view state
		// Initialize as 'desktop' to prevent automatic desktop switch on load
		var currentViewState = 'desktop';

		// Function to check window width and switch to mobile or desktop view
		function checkWindowSize() {
			var width = window.innerWidth;
			if (width <= 767) {
				// Call switch_to_mobile only if not already in 'mobile' state
				if (currentViewState !== 'mobile') {
						switch_to_mobile();
						currentViewState = 'mobile';
				} 
				// else if (width >= 768 && currentViewState === 'mobile') {
				// 	// This condition is now only true if resizing from mobile to desktop
				// 	switch_to_desktop();
				// 	currentViewState = 'desktop';
				// }
			}
		}

		// Call checkWindowSize on page load
		checkWindowSize();

		// function switch_to_desktop() {
		// 	$( '.cart.wsf-form.wsf-woocommerce' ).closest( '.elementor-widget-shortcode' ).removeClass( 'cc-mobile-customizer' );
		// }


		function switch_to_mobile() {
			$( '.cart.wsf-form.wsf-woocommerce' ).closest( '.elementor-widget-shortcode' ).addClass( 'cc-mobile-customizer' );

			$('.wsf-grid.wsf-sections').each(function() {
				// Within each parent element, find the first '.cc-mobile-header'
				var startElement = $(this).find('.cc-mobile-header').first();
				
				// Within the same parent, find the last '.cc-mobile-footer'
				var endElement = $(this).find('.cc-mobile-footer').last();
				
				// Get all elements between the start and end elements
				var elementsToWrap = startElement.nextUntil(endElement);
				
				// Wrap these elements with a new div having the class 'cc-mobile-content'
				elementsToWrap.wrapAll('<div class="cc-mobile-content"></div>');

				$( '<div class="cc-mobile-footer-controls"></div>' ).insertBefore( endElement );


			});

			var icon_font_size_wrapper = $( '.cart.wsf-form.wsf-woocommerce .cc-icon-font-size-wrapper' );
			icon_font_size_wrapper.prependTo( '.cart.wsf-form.wsf-woocommerce .cc-icon-tab-wrapper .cc-mobile-footer-controls' );
			icon_font_size_wrapper.removeClass( 'cc-margin-top-30' );
			icon_font_size_wrapper.css( {
				'padding-top': '12px',
				'padding-bottom': '12px',
				'margin-bottom': '0',
				'margin-left': '-10px',
				'margin-right': '-10px',
				'width': 'calc( 100% + 20px )',
			});
			icon_font_size_wrapper[0].style.setProperty( 'max-width', 'calc(100% + 20px)', 'important' );


			var signature_font_size_wrapper = $( '.cart.wsf-form.wsf-woocommerce .cc-signature-font-size-wrapper' );
			signature_font_size_wrapper.prependTo( '.cart.wsf-form.wsf-woocommerce .cc-ball-tab-wrapper .cc-mobile-footer-controls' );
			signature_font_size_wrapper.wrapInner('<div class="wsf-grid wsf-fields"></div>');
			signature_font_size_wrapper.removeClass( 'cc-margin-top-30' );
			signature_font_size_wrapper.find('.wsf-grid.wsf-fields > *').wrap('<div class="wsf-tile"></div>');
			signature_font_size_wrapper.find( 'label' ).css( {
				'padding': '9.5px 0',
				'margin-bottom': '0',
				'font-weight': 'bold'
			} );
			signature_font_size_wrapper.css( {
				'padding-top': '12px',
				'padding-bottom': '12px',
				'margin-bottom': '0',
				'margin-left': '-10px',
				'margin-right': '-10px',
				'width': 'calc( 100% + 20px )',
			});
			signature_font_size_wrapper[0].style.setProperty( 'max-width', 'calc(100% + 20px)', 'important' );


			var icon_size_wrapper = $( '.cart.wsf-form.wsf-woocommerce .cc-icon-size-wrapper' );
			icon_size_wrapper.prependTo( '.cart.wsf-form.wsf-woocommerce .cc-ball-tab-wrapper .cc-mobile-footer-controls' );
			icon_size_wrapper.wrapInner('<div class="wsf-grid wsf-fields"></div>');
			icon_size_wrapper.removeClass( 'cc-margin-top-30' );
			icon_size_wrapper.find('.wsf-grid.wsf-fields > *').wrap('<div class="wsf-tile"></div>');
			icon_size_wrapper.find( 'label' ).css( {
				'padding': '9.5px 0',
				'margin-bottom': '0',
				'font-weight': 'bold'
			} );
			icon_size_wrapper.css( {
				'padding-top': '12px',
				'padding-bottom': '12px',
				'margin-bottom': '0',
				'margin-left': '-10px',
				'margin-right': '-10px',
				'width': 'calc( 100% + 20px )',
			});
			icon_size_wrapper[0].style.setProperty( 'max-width', 'calc(100% + 20px)', 'important' );


			var custom_text_font_size_wrapper = $( '.cart.wsf-form.wsf-woocommerce .cc-custom-text-font-size-wrapper ' );
			custom_text_font_size_wrapper.prependTo( '.cart.wsf-form.wsf-woocommerce .cc-ball-tab-wrapper .cc-mobile-footer-controls' );
			custom_text_font_size_wrapper.wrapInner('<div class="wsf-grid wsf-fields"></div>');
			custom_text_font_size_wrapper.removeClass( 'cc-margin-top-30' );
			custom_text_font_size_wrapper.find('.wsf-grid.wsf-fields > *').wrap('<div class="wsf-tile"></div>');
			custom_text_font_size_wrapper.find( 'label' ).css( {
				'padding': '9.5px 0',
				'margin-bottom': '0',
				'font-weight': 'bold'
			} );
			custom_text_font_size_wrapper.css( {
				'padding-top': '12px',
				'padding-bottom': '12px',
				'margin-bottom': '0',
				'margin-left': '-10px',
				'margin-right': '-10px',
				'width': 'calc( 100% + 20px )',
			});
			custom_text_font_size_wrapper[0].style.setProperty( 'max-width', 'calc(100% + 20px)', 'important' );


			var tees_text_font_size_wrapper = $( '.cart.wsf-form.wsf-woocommerce .cc-tees-text-font-size-wrapper' );
			tees_text_font_size_wrapper.prependTo( '.cart.wsf-form.wsf-woocommerce .cc-tees-tab-wrapper .cc-mobile-footer-controls' );
			tees_text_font_size_wrapper.wrapInner('<div class="wsf-grid wsf-fields"></div>');
			tees_text_font_size_wrapper.removeClass( 'cc-margin-top-30' );
			tees_text_font_size_wrapper.find('.wsf-grid.wsf-fields > *').wrap('<div class="wsf-tile"></div>');
			tees_text_font_size_wrapper.find( 'label' ).css( {
				'padding': '9.5px 0',
				'margin-bottom': '0',
				'font-weight': 'bold'
			} );
			tees_text_font_size_wrapper.css( {
				'padding-top': '12px',
				'padding-bottom': '12px',
				'margin-bottom': '0',
				'margin-left': '-10px',
				'margin-right': '-10px',
				'width': 'calc( 100% + 20px )',
			});
			tees_text_font_size_wrapper[0].style.setProperty( 'max-width', 'calc(100% + 20px)', 'important' );


		$( '.single_add_to_cart_button.button' ).appendTo( '.cart.wsf-form.wsf-woocommerce .cc-preview-tab-wrapper .cc-mobile-footer > .wsf-grid.wsf-fields' );
		var buttonText = $( '.single_add_to_cart_button.button' ).text();
		var modifiedText = buttonText.replace( 'Customized ', '' );
		$( '.single_add_to_cart_button.button' ).text(modifiedText);


		}

		$(document).on('wsf-tab-clicked', function(e, form, form_id, instance_id) {
			console.log('e', e);
			// Select all elements with class 'cc-mobile-content'
			$('.cc-mobile-content').each(function() {
				// Check if the element has 'overflow-y' set to 'auto'
				if ($(this).css('overflow-y') === 'auto') {
						// Scroll the element to the top
						$(this).scrollTop(0);
				}
			} );
		} );

		$( document ).on( 'click', '.cc-preview-back-button', function() {
			$( '.set-preview-section' ).slideUp();
		} );

		// Call checkWindowSize on window resize
		$( window ).resize(function() {
			checkWindowSize();
		} );


		// Listen for clicks on links with the '#custom' hash
		document.addEventListener('click', function(e) {
			// Find the closest <a> ancestor of the clicked element with the href '#custom'
			var target = e.target.closest('a[href="#custom"]');
			
			// If such an element is found and the current view state is 'mobile'
			if (target && currentViewState === 'mobile') {
				// Prevent the default action
				e.preventDefault();

				// Remove the href attribute to prevent scrolling
				var href = target.getAttribute('href');
				target.removeAttribute('href');

				// Open the customizer popup
				open_customizer_popup();

				// Re-add the href attribute after a brief delay
				setTimeout(function() {
					target.setAttribute('href', href);
				}, 100); // Adjust delay as necessary
			}
		}, true); // Use capturing phase


		function open_customizer_popup() {
			$( '.cart.wsf-form.wsf-woocommerce' ).closest( '.elementor-widget-shortcode.cc-mobile-customizer' ).addClass( 'opened' );
		}	

		$( '.cart.wsf-form.wsf-woocommerce .close-popup' ).on( 'click', function(e) {
			e.preventDefault();
			close_customizer_popup();
		} );

		function close_customizer_popup() {
			$( '.cart.wsf-form.wsf-woocommerce' ).closest( '.elementor-widget-shortcode.cc-mobile-customizer' ).removeClass( 'opened' );
		}	
 

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
			// var ball_icon_width = $( '.cc-preview-wrapper .cc-preview-icon svg' ).css('width') || '80%';
			var ball_icon_width = $( '.cc-icon-size.cc-font-size' ).val();

			// Update ball preview icon
			$( '.cc-preview-wrapper .cc-preview-icon' ).empty().append( svg_for_ball );

			// Set ball preview icon width
			$( '.cc-preview-wrapper .cc-preview-icon svg' ).css('width', ball_icon_width + '%');



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
				value = value - 1;

				if ( value < min ) {
					value = min;
				}

				$input.val( value ).trigger( 'change' );
			}
		} );

		$( '.cc-font-size-wrapper .wsf-input-group-append' ).on( 'click', function() {
			var $input = $( this ).closest( '.cc-font-size-wrapper' ).find( '.cc-font-size' );
			var value = parseInt( $input.val(), 10 );
			var max = parseInt( $input.attr( 'max' ), 10 ) || Infinity;

			if ( value < max ) {
				value = value + 1;

				if ( value > max ) {
					value = max;
				}

				$input.val( value ).trigger( 'change' );
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
			var text = $( '.cc-custom-text-input' ).val() || 'Your Text Here';

			$( '.cc-preview-wrapper .cc-preview-text' ).text( text );
		}
		$( '.cc-custom-text-input' ).on( 'input change', function() {
			set_custom_text_to_ball();
		} );
		set_custom_text_to_ball();






		

		


	


		function update_set_preview() {

			var preview_generated = {
				'ball': false,
				'tees': false
			}

			// Tees
			// $('.cc-tees-tab-wrapper').show();
			// setTimeout( function() {
			// 	node = document.getElementById('tees-render-wrapper');
			// 	domtoimage.toPng(node, { filter: filter, quality: 1 })
			// 	.then(function (dataUrl) {
			// 		var img = new Image();
			// 		img.src = dataUrl;
			// 		$('.cc-set-preview-item-tees').empty().append(img);
			// 		preview_generated.tees = true;
			// 		$('.cc-tees-tab-wrapper').hide();

			// 		setTimeout(function() {
			// 			$('.cc-ball-tab-wrapper').show();
			// 			var node = document.getElementById('ball-render-wrapper');
			// 			domtoimage.toJpeg(node, { filter: filter})
			// 				.then(function (dataUrl) {
			// 					var img = new Image();
			// 					img.src = dataUrl;
			// 					$('.cc-set-preview-item-ball').empty().append(img);
			// 					preview_generated.ball = true;
			// 					$('.cc-ball-tab-wrapper').hide();
			// 				});
			// 		}, 100)
			// 	} );
			// }, 100 );
			// $('.cc-tees-tab-wrapper').show();


			var node = document.getElementById('ball-render-wrapper');
			domtoimage.toJpeg(node, { filter: filter})
			.then(function (dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				$('.cc-set-preview-item-ball').empty().append(img);
				preview_generated.ball = true;
			});

			node = document.getElementById('tees-render-wrapper');
			domtoimage.toPng(node, { filter: filter, quality: 1 })
			.then(function (dataUrl) {
				var img = new Image();
				img.src = dataUrl;
				$('.cc-set-preview-item-tees').empty().append(img);
				preview_generated.tees = true;
			} );




			
			// Ball


			



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


			// Function to check if all items are true
			function checkAllTrue( obj ) {
				return Object.keys( obj ).every( ( key ) => obj[key] === true);
			}

			var checkInterval = setInterval(function() {

				if ( checkAllTrue( preview_generated ) ) {

					$( '.generate-set-preview' ).removeClass( 'generation-preview' );
					$( '.generate-set-preview' ).addClass( 'generated' );
					$( '.set-preview-section' ).removeClass( 'generation-preview' );
					$( '.generate-set-preview' ).html( 'Regenerate set preview<span class="cc-loader"></span>' );
					$( '#preview-section-divider' ).addClass( 'visible' );
					$( '.set-preview-section' ).slideDown();

					clearInterval( checkInterval ); // Stop the interval
				}
			}, 150);


			
		}


		$('#show-customizer').on('click', function() {
			$(this).closest('.wsf-form').addClass('desktop-customizer-enabled');
		})





		$('.generate-set-preview').on('click', function(e) {
			e.preventDefault();

			$( '.generate-set-preview' ).addClass( 'generation-preview' );
			$( '.set-preview-section' ).addClass( 'generation-preview' );
			$( '.set-preview-section' ).addClass( 'generation-preview' );

			$('.cc-precustomize-section button.show-customizer').show();
			$('.cc-precustomize-section button.add-to-cart').show();
			$('.cc-precustomize-section button.generate-set-preview').hide();
			// $( '#customizer-cancel-button' ).prependTo( '.set-preview-section .cc-add-to-cart-button-wrapper' );


			update_set_preview();

		} );


		$( document ).on('click', '.cc-mobile-generate-set-preview-button', function(e) {
			e.preventDefault();
			setTimeout(function() {
				$('.cc-ball-tab-wrapper').show();
				$('.cc-tees-tab-wrapper').show();

				setTimeout(function() {
					update_set_preview();
				}, 100)
			}, 100)
		} );







	} );
} )( jQuery );