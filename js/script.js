$('.main-nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1500, 'easeInOutQuart');
    return false;
});

$(window).scroll(function(){
    var scrollTop = 680;
    if($(window).scrollTop() >= scrollTop){
        $('.sticky-scroll-nav').fadeIn(600);
    }
    if($(window).scrollTop() < scrollTop){
        $('.sticky-scroll-nav').fadeOut(400);
    }
});

$('.sticky-scroll-nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1500, 'easeInOutQuart');
    return false;
});

$('.symbol').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1500, 'easeInOutQuart');
    return false;
});

$('body').scrollSpy();

// event countdown on homepage
$('#count_down').county({ 
    endDateTime: new Date('2013/10/14 09:00:00'), 
    reflection: false, 
    animation: 'scroll' 
    // theme: 'black' 
});

/********  icon navigation functionality   *********/
$('.nav-container').click(function(){
    $('.nav-container').removeClass("active-icon");
    $(this).addClass("active-icon");
});

// schedule_section functionality
$('.nav-container#day2').click(function(){
    $('#day1_schedule').fadeOut(200); 
    $('#day2_schedule').fadeIn(500);
});

$('.nav-container#day1').click(function(){
    $('#day2_schedule').fadeOut(200); 
    $('#day1_schedule').fadeIn(500);
});

$('#link-day2').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1000, 'easeInOutQuart');
    $('#day1_schedule').fadeOut(500); 
    $('#day2_schedule').fadeIn(500);
    $('.nav-container#day1').removeClass("active-icon");
    $('.nav-container#day2').addClass("active-icon");
});

$('#link-day1').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href')).offset().top
    }, 1000, 'easeInOutQuart');
    $('#day2_schedule').fadeOut(500); 
    $('#day1_schedule').fadeIn(500);
    $('.nav-container#day2').removeClass("active-icon");
    $('.nav-container#day1').addClass("active-icon"); 
});

// local area guide functionality
$('.nav-container#transportation').click(function(){
    $('#lodging_content, #dining_content, #attractions_content').fadeOut(200); 
    $('#transportation_content').fadeIn(500);
});

$('.nav-container#lodging').click(function(){
    $('#dining_content, #transportation_content, #attractions_content').fadeOut(100); 
    $('#lodging_content').fadeIn(500);
});

$('.nav-container#dining').click(function(){
    $('#lodging_content, #transportation_content, #attractions_content').fadeOut(100); 
    $('#dining_content').fadeIn(500);
});

$('.nav-container#attractions').click(function(){
    $('#lodging_content, #transportation_content, #dining_content').fadeOut(100); 
    $('#attractions_content').fadeIn(500);
});

/********  venue sneak peek modal functionality   *********/

$('#open_peekModal').click(function(){
    $('.peekBoxWrap').fadeIn(500);
});

$('#close_peekModal, .peekBoxOverlay').click(function(){
    $('.peekBoxWrap').fadeOut(500);
});

//slideshow functionaliyt
$('#slideshow > div:gt(0)').hide();

setInterval(function(){
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 4000);



