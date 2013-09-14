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

$('#count_down').county({ 
    endDateTime: new Date('2013/10/14 09:00:00'), 
    reflection: false, 
    animation: 'scroll' 
    // theme: 'black' 
});

$('.nav-container').click(function(){
    $('.nav-container').removeClass("active-icon");
    $(this).addClass("active-icon");
});
// *************************************************
$('.nav-container#day2').click(function(){
    $('#day1_schedule').fadeOut(200); 
    $('#day2_schedule').fadeIn(500);
});

$('.nav-container#day1').click(function(){
    $('#day2_schedule').fadeOut(200); 
    $('#day1_schedule').fadeIn(500);
});
// *************************************************
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