// -----------------------------------
// HEXAGON BACKGROUND PARALLAX EFFECTS
// -----------------------------------

// $(window).scroll(function(e){
// 	parallax();
// });
// function parallax(){
//   	var scrolled = $(window).scrollTop();

//   	$('.hex-bg').css('top', -(scrolled * 0.6) + 'px');
// }

// ----------------------------
// COUNTDOWN UNTIL EVENT STARTS
// ----------------------------

$('#count_down').county({ 
    endDateTime: new Date('2014/10/06 08:30:00'), 
    reflection: false, 
    animation: 'scroll' 
    // theme: 'black' 
});



// $(window).scroll(function() {
// 	// $('#animatedElement').each(function(){
// 	var imagePos = $('.welcome').offset().top;
// 	var topOfWindow = $(window).scrollTop();

// 	if (imagePos < topOfWindow+700) {
// 		$('body').addClass('bg-blue');
// 	}
// });
