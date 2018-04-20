$(document).ready(function(){   
    $('nav').on('click', '#nav_open', function() {
        $('#nav_open').fadeOut();
        $('.nav_dropdown').slideDown();
        $('#nav_close').fadeIn();
   })
});

$(document).ready(function(){   
    $('nav').on('click', '#nav_close', function() {
        $('#nav_close').fadeOut();
        $('.nav_dropdown').slideUp();
        $('#nav_open').fadeIn();
   })
});

$(document).ready(function(){   
    $('#1').show();
    var current = 1;
    $('.slides').on('click', '#slide_left', function() {
        console.log('Click')
        current -= 1;
        if(current < 1) {
            current = 3;
        }
        $('.slideshow').hide()
        $('#' + current).show()
    })
    $('.slides').on('click', '#slide_right', function() {
        console.log('Click')
        current += 1;
        if(current > 3) {
            current = 1;
        }
        $('.slideshow').hide()
        $('#' + current).show()
    })
});