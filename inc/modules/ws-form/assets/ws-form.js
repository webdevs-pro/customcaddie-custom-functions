( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {

		$( 'input.cc-set-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			if ( ! value ) {
				value = 'James Marshall';
			}

			$( '.cc-signature-preview label.wsf-label' ).text( value );
		} )


	} );

} )( jQuery );