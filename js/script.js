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

// ------------------
// STICKY NAV EFFECTS
// ------------------

// $(window).scroll(function(){
//     // var scrollTop = 680;
//     var scrollTop = $(window).scrollTop();

//     if(scrollTop >= 850) {
//         $('.sticky-nav').slideDown();
//     }
//     else {
//          $('.sticky-nav').slideUp();
//     }
// });

// -----------------------------------------------
// SECTION SCROLL AFFECTING BODY'S BG-COLOR FADING
// -----------------------------------------------

// Create waypoints for each sections specified in the argument object
function backgroundTransition(sections) {
	var body = $('body');

	$('section[id]').each(function() {
		var el = $(this),
			name = el.prop('id'),
			section = sections[name],
			bgColorOnScrollUp = section.bgColorOnScrollUp,
			bgColorOnScrollDown = section.bgColorOnScrollDown,
			speed = section.hasOwnProperty('speed') ? section.speed : 50,
			offset = section.hasOwnProperty('offset') ? section.offset : '50%';

		el.waypoint({
			offset: offset,
			handler: function(direction) {
				var opacity,
					color;

				if ( direction === 'down' ) {
					color = bgColorOnScrollDown;
					opacity = 1;
				}
				else if ( direction === 'up' ) {
					color = bgColorOnScrollUp;
					opacity = 0;
				}

				body.animate({ backgroundColor: color }, { duration: speed, queue: false });
				el.animate({ opacity: opacity }, { duration: speed, queue: false });
				el.prev().animate({ opacity: opacity ? 0 : 1 }, { duration: speed, queue: false });
			}
		})
	});
}

var sections = {
		'welcome': {
			'bgColorOnScrollDown': '#008bd0',
			'bgColorOnScrollUp': '#19191b',
			'offset': '34%',
		},
		'speakers': {
			'bgColorOnScrollDown': '#ffffff',
			'bgColorOnScrollUp': '#008bd0',
			'offset': '65%'
		},
		'schedule': {
			'bgColorOnScrollDown': '#f73b3b',
			'bgColorOnScrollUp': '#ffffff',
			'offset': '35%'
		},
		'venue': {
			'bgColorOnScrollDown': '#ffffff',
			'bgColorOnScrollUp': '#f73b3b',
			'offset': '40%'
		},
		'sponsors': {
			'bgColorOnScrollDown': '#008bd0',
			'bgColorOnScrollUp': '#ffffff',
			'offset': '45%'
		}
	};

backgroundTransition(sections);
