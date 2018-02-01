$(document).ready(function() {
	// LOCAL NAV DROPDOWN MENU
	// $('.local-nav li').on('click', function(){

	// 	$('.product-drawer').slideToggle().toggleClass('opened');
	// 	$(this).toggleClass('active');
	// });

	// Agenda
	// <script src="https://use.typekit.net/bkt6ydm.js"></script>
	// <script>try{Typekit.load({ async: true });}catch(e){}</script>


	// announcement bar appearance
	$('.announcement').delay(1600).slideDown(400);

	// CountDown
	$('#count_down').county({ 
	    endDateTime: new Date('2018/04/30 08:30:00'), 
	    reflection: false, 
	    animation: 'scroll' 
	    // theme: 'black' 
	});

	// data-shapes-scroll-end
	var windw = this;

	$.fn.followTo = function ( pos ) {
    	var $this = this,
        	$window = $(windw);
    
    	$window.scroll(function(e){
        	if ($window.scrollTop() > pos) {
            	$this.css({
               	 position: 'absolute',
                	top: pos
           	 });
       	 	} else {
            	$this.css({
                	position: 'fixed',
                	top: 0
            	});
        	}
    	});
	};

$('#hero-data-shapes').followTo(340);




	$(window).scroll(function(){
	  
	    var scrollTop = $(window).scrollTop();
	    if(scrollTop >= 300) {
	        $('.sticky-header').fadeIn(300).addClass('slideDown');
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

