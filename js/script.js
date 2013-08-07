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