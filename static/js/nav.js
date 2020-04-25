$(document).ready(function() {
    $('#open').on('click', function() {
        $('#overlay').removeClass('close');
        $('#overlay').removeClass('animated fadeOut');
        $('#overlay').addClass('animated fadeIn');
    });

    $('#close').on('click', function() {
        $('#overlay').addClass('animated fadeOut');
        setTimeout(function() {
            $('#overlay').addClass('close');
        }, 1000);
    });
});