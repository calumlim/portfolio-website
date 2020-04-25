$(document).ready(function() {
    $('#open').on('click', function() {
        $('#overlay').removeClass('close');
    });

    $('#close').on('click', function() {
        $('#overlay').addClass('close');
    });
});