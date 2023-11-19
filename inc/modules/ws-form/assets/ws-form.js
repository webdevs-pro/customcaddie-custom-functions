( function( $ ) {

	// Create wsf-rendered event handler
	$(document).on('wsf-rendered', function(e, form, form_id, instance_id) {

		console.log('e', e);
		console.log('form', form);
		console.log('form_id', form_id);
		console.log('instance_id', instance_id);

		var my_form_id = 1;

		if(form_id != my_form_id) { return; }

		$( 'input.cc-set-name-field' ).on( 'input', function() {
			var value = $( this ).val();
			if ( ! value ) {
				value = 'James Marshall';
			}

			$( '.cc-signature-preview label.wsf-label' ).text( value );
		} )


		

	} );

} )( jQuery );