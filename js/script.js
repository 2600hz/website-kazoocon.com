$(document).ready(function() {
	// LOCAL NAV DROPDOWN MENU
	// $('.local-nav li').on('click', function(){

	// 	$('.product-drawer').slideToggle().toggleClass('opened');
	// 	$(this).toggleClass('active');
	// });

	// CountDown
	$('#count_down').county({ 
	    endDateTime: new Date('2016/10/17 08:30:00'), 
	    reflection: false, 
	    animation: 'scroll' 
	    // theme: 'black' 
	});





	$(window).scroll(function(){
	    // var scrollTop = 680;
	    var scrollTop = $(window).scrollTop();

	    // if(scrollTop >= 850) {
	    //     $('.sticky-header').fadeIn(650);
	    // }
	    // else {
	    //      $('.sticky-header').fadeOut();
	    // }
	    if(scrollTop >= 560) {
	        $('.sticky-header').fadeIn(650).addClass('slideDown');
	    }
	    else {
	         $('.sticky-header').fadeOut().removeClass('slideDown');
	    }
	});



	// TESTING AGIN
	$('.local-nav li a[href^="#"], .sticky-nav li a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        // debugger
        var hrefLink = this.hash;
        var target = $(hrefLink);

		$('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 'easeInOutQuad');
    });

	// $('.local-nav li a, .sticky-nav li a').click(function(){
	//     $('html, body').animate({
	//         scrollTop: $( $(this).attr('id')).offset().top
	//     }, 1500, 'easeInOutQuart');
	//     return false;
	// });
	        

});
	//page scrolling animation
	// $('a[href*=#]:not([href=#])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	//         || location.hostname == this.hostname) {

	//         var target = $(this.hash);
	//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//            if (target.length) {
	//              $('html,body').animate({
	//                  scrollTop: target.offset().top
	//             }, 1000);
	//             return false;
	//         }
	//     }
	// });

// -------------------------
// DAY 1/2 SCHEDULE TOGGLING 
// -------------------------
	
	






	// LOCAL HEADER STYLE CHANGES ON SCROLL
	// $(window).scroll(function() {
		// var height = $('.main-content').height();
		// var scrollTop = $(window).scrollTop();
		// var globalHeaderHeight = $('.global-header').height();

	// 	if(scrollTop > 40) {
	// 		$('.local-header').addClass('sticky');
	// 		$('section.hero').css('marginTop', '0');
	// 	}
	// 	else {
	// 		$('.local-header').removeClass('sticky');
	// 		$('section.hero').css('marginTop', '-70px');
	// 	}
	// });
	
	

	
		







// triggers animations when objects hits a certain distance (px) from the top of window

// $(window).scroll(function() {
// 	$('.start-anim').each(function(){
// 		var imagePos = $(this).offset().top;
// 		var topOfWindow = $(window).scrollTop();

// 		if (imagePos < topOfWindow+500) {
// 			$(this).children('.left').addClass("animated fadeInLeft");
// 			$(this).children('.right').addClass("animated fadeInRight");
// 		}
// 	});
// });

