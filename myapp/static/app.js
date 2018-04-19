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