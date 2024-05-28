( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {




		$('.single_add_to_cart_button.button' ).appendTo( '.cc-add-to-cart-button-wrapper').hide();





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
			} else {
				var startElement = $('.wsf-groups').find('.cc-icon-tab-wrapper');
				var endElement = $('.wsf-groups').find('.cc-tees-tab-wrapper');
				
				// Get all elements between the start and end elements, including them
				var elementsToWrap = startElement.nextUntil(endElement).add(startElement).add(endElement);
				
				// Check if the elements are not already wrapped to prevent double wrapping
				if (!startElement.parent().hasClass('cc-customizer-sections')) {
					elementsToWrap.wrapAll('<div class="cc-customizer-sections"></div>');
					
					// Apply CSS to the wrapped elements
					elementsToWrap.css('display', 'block');
				}
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
			// $( '.set-preview-section' ).slideUp();
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
			setTimeout(function() {
				adjustSvgTextFontSize();
			})
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
				// font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size' );
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).css( 'font-size' );
			}
			if ( typeof font_size === 'undefined' ) {
				// font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size' );
				font_size = $( this ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).css( 'font-size' );
			}
			
			font_size = parseInt(font_size, 10);

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
			var ball_icon_width = $( '.cc-icon-size.cc-font-size' ).val();

			// Update ball preview icon
			$( '.cc-preview-icon' ).empty().append( svg_for_ball );

			// Set ball preview icon width
			$( '.cc-preview-icon svg' ).css('width', ball_icon_width + '%');



			// Set towel preview icon
			var svg_for_towel = checked_svg.clone();
			$( '.cc-towel-preview .cc-towel-icon' ).empty().append( svg_for_towel );

			// Set towel preview icon
			var svg_for_towel = checked_svg.clone();
			$( '.cc-preview-icon .cc-marker-preview-icon' ).empty().append( svg_for_towel );


		}



		/**
		 * Adjust ball icon width.
		 */
		$( '.cc-icon-size-wrapper input' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-icon svg' ).css( 'width', value + '%' );
		} )


		// $( '.cc-icon-size-wrapper input' ).on( 'change', function() {
		// 	var inputValue = $(this).val();
		// 	// Loop through each element you want to resize
		// 	$('.cc-ball-preview-wrapper').each(function() {
		// 		var $this = $(this); // Current element
		// 		var previewWrapperWidth = $this.width();

		// 		var modifier = 20;
		// 		var newWidth = previewWrapperWidth / modifier * inputValue;

		// 		// Set the new font size
		// 		$this.find('.cc-preview-icon svg').css( 'width', newWidth + '%' );
		// 	});
		// });


		/**
		 * Change icon letters font size.
		 */
		$( '.cc-icon-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			var checked_input = $( '.cc-icon-select' ).find( 'input:checked' );
			
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-middle-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-letter' ).attr( 'font-size', value );
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-first-name-letters' ).attr( 'font-size', value ).css('font-size', value + 'px');
			$( checked_input ).closest( '.wsf-tile' ).find( '.cc-last-name-letters' ).attr( 'font-size', value ).css('font-size', value + 'px');

			// Set ball preview icon
			update_preview_icons();
		} );

		$( '.cc-name-font-size' ).on( 'change', function() {
			var value = $( this ).val();
			$( '.cc-preview-wrapper .cc-preview-name' ).css( 'font-size', value + 'px' );
		} );

		// $( '.cc-signature-font-size' ).on( 'change', function() {
		// 	var value = $( this ).val();
		// 	$( '.cc-preview-wrapper .cc-preview-signature' ).css( 'font-size', value + 'px' );
		// } );

		$( '.cc-signature-font-size' ).on( 'change', function() {
			var inputValue = $(this).val();
			// Loop through each element you want to resize
			$('.cc-ball-preview-wrapper').each(function() {
				var $this = $(this); // Current element
				var previewWrapperWidth = $this.width();

				var modifier = 277;
				var newFontSize = previewWrapperWidth / modifier * inputValue;

				// Set the new font size
				$this.find('.cc-preview-signature').css('font-size', newFontSize + 'px');
			});
		});

		

		// $( '.cc-custom-text-font-size' ).on( 'change', function() {
		// 	var value = $( this ).val();
		// 	$( '.cc-preview-wrapper .cc-preview-text' ).css( 'font-size', value + 'px' );
		// } );

		$( '.cc-custom-text-font-size' ).on( 'change', function() {
			var inputValue = $(this).val();
			// Loop through each element you want to resize
			$('.cc-ball-preview-wrapper').each(function() {
				var $this = $(this); // Current element
				var previewWrapperWidth = $this.width();

				var modifier = 277;
				var newFontSize = previewWrapperWidth / modifier * inputValue;

				// Set the new font size
				$this.find('.cc-preview-text').css('font-size', newFontSize + 'px');
			});
		});

		// $( '.cc-tees-text-font-size' ).on( 'change', function() {
		// 	var value = $( this ).val();
		// 	$( '.tees-render-wrapper' ).css( 'font-size', value + 'px' );
		// } );

		$( '.cc-tees-text-font-size' ).on( 'change', function() {
			var inputValue = $(this).val();
			// Loop through each element you want to resize
			$('.cc-tees-preview-wrapper').each(function() {
				var $this = $(this); // Current element
				var previewWrapperWidth = $this.width();

				var modifier = 277;
				var newFontSize = previewWrapperWidth / modifier * inputValue;

				// Set the new font size
				$this.find('.cc-tees-preview-texts').css('font-size', newFontSize + 'px');
			});
		});

		$( '.cc-tees-custom-text-input' ).on( 'input change', function() {
			var value = $( this ).val();
			$( '.tees-render-wrapper .cc-preview-text' ).text( value );
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

				case 'Jimmy Script Bold 700':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Jimmy Script", cursive'
					} );
					break;


				case 'Satisfy - Regular 400':
					$( '.cc-preview-wrapper .cc-preview-signature' ).css( {
						'font-family': '"Satisfy", cursive'
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



			var checked_svg = $( '.cc-icon-select input:checked' ).closest( '.wsf-tile' ).find( 'label svg' );
			// Set pin preview icon
			var svg_for_pin = checked_svg.clone();
			$( '.cc-set-preview-item-pin .cc-pin-preview-icon' ).empty().append( svg_for_pin );

			// Set marker preview icon
			var svg_for_pin = checked_svg.clone();
			$( '.cc-set-preview-item-marker .cc-marker-preview-icon' ).empty().append( svg_for_pin );





			$( '.generate-set-preview' ).removeClass( 'generation-preview' );
			$( '.generate-set-preview' ).addClass( 'generated' );
			$( '.set-preview-section' ).removeClass( 'generation-preview' );
			$( '.generate-set-preview' ).html( 'Regenerate set preview<span class="cc-loader"></span>' );
			$( '#preview-section-divider' ).addClass( 'visible' );
			// $( '.set-preview-section' ).slideDown();
			$( '.set-preview-section' ).slideDown();




		}




		










		$('#cc-icon-preview .cc-preview-wrapper').on('click', function() {
			var itemIndex = $(this).parent().children('.cc-preview-wrapper').index(this);
	  
			var previewWrappers = $(this).parent().find('.cc-preview-wrapper');
			var $previewSwiperWrapper = $('#cc-icon-preview-lightbox-wrapper');
	  
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			
			$.each(previewWrappers, function(index, previewWrapper) {
				 var previewItemClone = $(previewWrapper).clone();
				 var width = $(previewWrapper).width();
				 var height = $(previewWrapper).height();
			
				 // Calculate scale to fit within 80% of the window's width or height while maintaining proportions
				 var maxScaleWidth = 0.8 * windowWidth / width;
				 var maxScaleHeight = 0.8 * windowHeight / height;
				 var scale = Math.min(maxScaleWidth, maxScaleHeight); // Use the smaller scale to fit within both dimensions
			
				 previewItemClone.width(width);
				 previewItemClone.height(height);
			
				 previewItemClone.css({
					  'transform': 'scale(' + scale + ')'
				 });
			
				 previewItemClone.removeClass('wsf-extra-small-10 wsf-small-4 wsf-tile wsf-field-wrapper cc-padding-bottom-20');
			
				 // Append the cloned element to the target container
				 $previewSwiperWrapper.find('.swiper-slide .swiper-slide-inner').eq(index).empty().append(previewItemClone);
			});
	  
			var sliderElement = $previewSwiperWrapper.find('.swiper-slider-container');
			var swiperSlider;
	  
			var previewSliderConfig = {
				 loop: true,
				 initialSlide: itemIndex,
				 navigation: {
					  prevEl: $previewSwiperWrapper.find('.cc-swiper-prev')[0],
					  nextEl: $previewSwiperWrapper.find('.cc-swiper-next')[0],
				 },
				 pagination: {
					  el: $previewSwiperWrapper.find('.cc-swiper-fraction')[0],
					  type: 'fraction',
				 },
			};
	  
			if ('undefined' === typeof Swiper) { // Improved Asset Loading enabled
				 var asyncSwiper = elementorFrontend.utils.swiper;
	  
				 new asyncSwiper(sliderElement[0], previewSliderConfig).then(function (newSwiperSliderInstance) {
					  swiperSlider = newSwiperSliderInstance;
				 });
			} else { // Improved Asset Loading disabled
				 swiperSlider = new Swiper(sliderElement[0], previewSliderConfig);
			}
	  
			// Add a history state when the lightbox is opened
			history.pushState({ lightbox: true }, '');
	  
			setTimeout(function() {
				 $previewSwiperWrapper.fadeIn(200);
			}, 100)
	  
			var closeLightbox = function() {
				 $previewSwiperWrapper.fadeOut(200, function() {
					  if (swiperSlider) {
							swiperSlider.destroy();
							swiperSlider = null; // Clear the swiperSlider reference
					  }
					  $previewSwiperWrapper.find('.swiper-slide .swiper-slide-inner').empty();
				 });
			};
	  
			// Ensure the event handler is only attached once by removing any previous handlers
			$previewSwiperWrapper.off('click', '.cc-swiper-close').on('click', '.cc-swiper-close', closeLightbox);
	  
			// Listen for the popstate event to handle the Android back button
			$(window).off('popstate').on('popstate', function(event) {
				 if (event.originalEvent.state && event.originalEvent.state.lightbox) {
					  closeLightbox();
				 }
			});
	  });
	  
		










	$('.cc-set-preview-item-wrapper').on('click', function() {
		var itemIndex = $(this).parent().children('.cc-set-preview-item-wrapper').index(this);

		var previewWrappers = $(this).parent().find('.cc-set-preview-item-wrapper');
		var $previewSwiperWrapper = $('#cc-main-preview-lightbox-wrapper');



		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		
		$.each(previewWrappers, function(index, previewWrapper) {
			var previewItemClone = $(previewWrapper).clone();
			var width = $(previewWrapper).width();
			var height = $(previewWrapper).height();
		
			// Calculate scale to fit within 80% of the window's width or height while maintaining proportions
			var maxScaleWidth = 0.8 * windowWidth / width;
			var maxScaleHeight = 0.8 * windowHeight / height;
			var scale = Math.min(maxScaleWidth, maxScaleHeight); // Use the smaller scale to fit within both dimensions
		
			previewItemClone.width(width);
			previewItemClone.height(height);
		
			previewItemClone.css({
				'transform': 'scale(' + scale + ')'
			});
		
			previewItemClone.removeClass('wsf-extra-small-10 wsf-small-4 wsf-tile wsf-field-wrapper cc-padding-bottom-20');

			previewItemClone.find('.cc-quantity-badge').remove();
		
			// Append the cloned element to the target container
			$previewSwiperWrapper.find('.swiper-slide .swiper-slide-inner').eq(index).empty().append(previewItemClone);
		});




		var sliderElement = $previewSwiperWrapper.find('.swiper-slider-container');
		var swiperSlider;

		var previewSliderConfig = {
			loop: true,
			initialSlide: itemIndex,
			navigation: {
				prevEl: $previewSwiperWrapper.find('.cc-swiper-prev')[0],
				nextEl: $previewSwiperWrapper.find('.cc-swiper-next')[0],
			},
			pagination: {
				el: $previewSwiperWrapper.find('.cc-swiper-fraction')[0],
				type: 'fraction',
			},
		};

		if ('undefined' === typeof Swiper) { // Improved Asset Loading enabled
			var asyncSwiper = elementorFrontend.utils.swiper;

			new asyncSwiper(sliderElement[0], previewSliderConfig).then(function (newSwiperSliderInstance) {
				swiperSlider = newSwiperSliderInstance;
			});
		} else { // Improved Asset Loading disabled
			swiperSlider = new Swiper(sliderElement[0], previewSliderConfig);
		}

		setTimeout(function() {
			$previewSwiperWrapper.fadeIn(200);
		}, 100)

		// Ensure the event handler is only attached once by removing any previous handlers
		$previewSwiperWrapper.off('click', '.cc-swiper-close').on('click', '.cc-swiper-close', function() {
			$previewSwiperWrapper.fadeOut(200, function() {
				if (swiperSlider) {
					swiperSlider.destroy();
					swiperSlider = null; // Clear the swiperSlider reference
				}
				$previewSwiperWrapper.find('.swiper-slide .swiper-slide-inner').empty();
			});
		});
		
	});
  
	  



// $('.cc-set-preview-item-wrapper').on('click', function() {
// 	var itemIndex = $(this).parent().children('.cc-set-preview-item-wrapper').index(this);

// 	$('#cc-preview-images-wrapper a').eq(itemIndex).trigger('click');

// 	var previewWrappers = $(this).parent().find('.cc-set-preview-item-wrapper');
// 	var promises = [];

// 	// Adjust the order to start from the clicked item
// 	var orderedWrappers = [];
// 	for (var i = itemIndex; i < previewWrappers.length; i++) {
// 		orderedWrappers.push(previewWrappers[i]);
// 	}
// 	for (var j = 0; j < itemIndex; j++) {
// 		orderedWrappers.push(previewWrappers[j]);
// 	}

// 	orderedWrappers.forEach(function(previewWrapper, index) {
// 		var node = $(previewWrapper).children('div')[0];
// 		var scale = 3;

// 		var promise = domtoimage.toBlob(node, {
// 			width: node.clientWidth * scale,
// 			height: node.clientHeight * scale,
// 			style: {
// 					'transform': 'scale(' + scale + ')',
// 					'transform-origin': 'top left'
// 			},
// 			filter: filter
// 		})
// 		.then(function(blob) {
// 			return URL.createObjectURL(blob);
// 		})
// 		.catch(function(error) {
// 			console.error('oops, something went wrong!', error);
// 		});

// 		promises.push(promise);
// 	});

// 	Promise.all(promises).then(function(images) {

// 		console.log('images', images.length);

// 		var placeholders = $('#cc-preview-images-wrapper a');
		
// 		images.forEach(function(blobUrl, index) {
// 			var placeholderIndex = (itemIndex + index) % placeholders.length;

// 			console.log('placeholderIndex', placeholderIndex);

// 			var placeholder = $(placeholders).eq(placeholderIndex);

// 			placeholder.attr('href', blobUrl + '#.png'); // Add a file extension

// 			var slideshowPreviewLightbox = $('#elementor-lightbox-slideshow-preview-lightbox');

// 			console.log('slideshowPreviewLightbox', slideshowPreviewLightbox);
				

// 			var imgElement = slideshowPreviewLightbox.find('.swiper-slide[data-swiper-slide-index="' + index + '"] img');

// 			console.log('imgElement', imgElement);

// 			imgElement.attr('src', blobUrl);

// 		});



// 	});

// 	function filter(node) {
// 		if (node.classList) return !node.classList.contains("cc-quantity-badge");
// 		return true;
// 	}
// });






		



		


		$('.customize-set').on('click', function(e) {
			e.preventDefault();
			$('.cc-customizer-sections').slideDown();
			$(this).hide();
		})




		$('.generate-set-preview').on('click', function(e) {
			e.preventDefault();

			$(this).hide();
			$('button.single_add_to_cart_button').show();
			$('.customize-set').show();

			update_set_preview();

		} );


		$( document ).on('click', '.cc-mobile-generate-set-preview-button', function(e) {
			e.preventDefault();
			setTimeout(function() {
				// $('.cc-ball-tab-wrapper').show();
				// $('.cc-tees-tab-wrapper').show();

				$('button.single_add_to_cart_button').show();

				setTimeout(function() {
					update_set_preview();
				}, 100)
			}, 100)
		} );




		$.fn.serializeArrayAll = function () {
			var rCRLF = /\r?\n/g;
			return this.map(function () {
			return this.elements ? jQuery.makeArray(this.elements) : this;
			}).map(function (i, elem) {
			var val = jQuery(this).val();
			if (val == null) {
				return val == null
				//next 2 lines of code look if it is a checkbox and set the value to blank
				//if it is unchecked
			} else if (this.type == "checkbox" && this.checked === false) {
				return {name: this.name, value: this.checked ? this.value : ''}
				//next lines are kept from default jQuery implementation and
				//default to all checkboxes = on
			} else if (this.type === 'radio') {
				if (this.checked) {
					return {name: this.name, value: this.checked ? this.value : ''};
				}
			} else {
				return jQuery.isArray(val) ?
							jQuery.map(val, function (val, i) {
							return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
							}) :
							{name: elem.name, value: val.replace(rCRLF, "\r\n")};
			}
			}).get();
		};


		$(document).on('click', '.single_add_to_cart_button:not(.disabled)', function (e) {

			var $thisbutton = $(this),
					$form = $thisbutton.closest('form.cart'),
					//quantity = $form.find('input[name=quantity]').val() || 1,
					//product_id = $form.find('input[name=variation_id]').val() || $thisbutton.val(),
					data = $form.find('input:not([name="product_id"]):not([disabled]), select, button, textarea').serializeArrayAll() || 0;

			$.each(data, function (i, item) {
			if (item.name == 'add-to-cart') {
				item.name = 'product_id';
				item.value = $form.find('input[name=variation_id]').val() || $thisbutton.val();
			}
			});

			e.preventDefault();

			$(document.body).trigger('adding_to_cart', [$thisbutton, data]);

			$.ajax({
			type: 'POST',
			url: woocommerce_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
			data: data,
			beforeSend: function (response) {
				$thisbutton.removeClass('added').addClass('loading');
			},
			complete: function (response) {
				$thisbutton.addClass('added').removeClass('loading');
			},
			success: function (response) {

				if (response.error && response.product_url) {
					window.location = response.product_url;
					return;
				}

				$(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, $thisbutton]);
			},
			});

			return false;

		});


		$( document.body ).on( 'wc_cart_button_updated', function(event, $button) {
			$('.single_add_to_cart_button.added').hide();
			$('.added_to_cart.wc-forward').hide();
			$('.customize-set').hide();
			$button.after( '<a href="/store-checkout" class="added_to_cart wc-forward" title="Go To Checkout Page">Added. Go to check out</a>' );
			$('.single_add_to_cart_button.added').remove();
		} );









	// function adjustSvgTextFontSize() {
	// 	$('.cc-icon text').each(function() {
	// 			var textElement = $(this);
	// 			var maxWidth = textElement.data('max-text-width');
	// 			var fontSize = parseFloat(textElement.css('font-size'));

	// 			console.log('maxWidth', maxWidth);
	// 			console.log('fontSize', fontSize);

	// 			// Adjust font size to fit within the maximum width
	// 			while (textElement.get(0).getComputedTextLength() > maxWidth && fontSize > 0) {
	// 				fontSize -= 0.5;  // Decrease font size by 0.5px increments
	// 				textElement.css('font-size', fontSize + 'px');
	// 			}
	// 	});
	// }



	function adjustSvgTextFontSize() {
		$('.cc-icon text').each(function() {
				var textElement = $(this);
				var maxWidth = textElement.attr('data-max-text-width');

				// Store the original font size if it's not already stored
				if (!textElement.data('original-font-size')) {
					textElement.data('original-font-size', parseFloat(textElement.css('font-size')));
				}

				var originalFontSize = parseFloat(textElement.data('original-font-size'));
				var fontSize = parseFloat(textElement.css('font-size'));

				// Attempt to increase font size first if less than original
				if (textElement.get(0).getComputedTextLength() < maxWidth && fontSize < originalFontSize) {
					while (textElement.get(0).getComputedTextLength() < maxWidth && fontSize < originalFontSize) {
						fontSize += 0.5;
						textElement.css('font-size', fontSize + 'px');
					}
					// Step back once if we overshoot the maxWidth
					if (textElement.get(0).getComputedTextLength() > maxWidth) {
						fontSize -= 0.5;
						textElement.css('font-size', fontSize + 'px');
					}
				} 

				// Then reduce font size if necessary
				if (textElement.get(0).getComputedTextLength() > maxWidth) {
					while (textElement.get(0).getComputedTextLength() > maxWidth && fontSize > 0) {
						fontSize -= 0.5;
						textElement.css('font-size', fontSize + 'px');
					}
				}

		});
	}
  
  
	$('.cc-is-icon.cc-radio-choose input').on('change', function() {
		setTimeout(function() {
			adjustSvgTextFontSize();
		});
	});
  
  

  
  

	});
} )( jQuery );


