//Preloader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(750, function() {
        $(".loader").fadeOut(100);
    });
});

$(document).ready(function () {
    //super slide plugin
    //option
    $('#slides').superslides({
        play : 4000,
        pagination : false,
        animation : 'fade'
    });

    //typed js
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Designer.', 'App Designer.', 'Web Developer.', 'App Developer.'],
        typeSpeed: 70,loop: true,showCursor: false,
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,

        responsive:{
            //0-599=1
            0:{
                items:1
            },
            //600-900=2
            600:{
                items:3
            },
            //1000-rest=5
            1000:{
                items:4
            }
        }
    });


    //Easy pie chart
    $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });


    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //smoth scroll
    //BOM = Browser object model
    $("#navigation li a").click(function(e){
       e.preventDefault();

       var targetElement = $(this).attr("href");
       var targetPosition = $(targetElement).offset().top;
       $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    // FancyBox for Gallery
    $('[data-fancybox]').fancybox();

    // Sort and filter
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
});