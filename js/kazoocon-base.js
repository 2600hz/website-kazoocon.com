$(document).ready(function() {
	
 	// ----------------------
    // FORM INPUT INERACTIONS
    // ----------------------

    if($('.input-wrap input[type="text"], input[type="password"], input[type="email"]').val() == '' ){$('.placeholder-shift').removeClass('hidden');}  

    $('.input-wrap input[type="text"], input[type="password"], input[type="email"]').on('change' , function() {
        
        if( this.value != '') {
            $(this).next('.placeholder-shift').addClass('fixed'); 
        }
        else {
           $(this).next('.placeholder-shift').removeClass('fixed'); 
        }
    });
});

