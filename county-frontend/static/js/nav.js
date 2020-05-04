$(document).ready(function() {
    $('#open').on('click', function() {
        $('#overlay').removeClass('close');
        $('#overlay').removeClass('animated fadeOut');
        $('#overlay').addClass('animated fadeIn');
        $("section").css("display", "none");
    });

    $('#close').on('click', function() {
        $('#overlay').addClass('animated fadeOut');
        $("section").css("display", "block");
        $("#Footer").css("display", "grid");
        setTimeout(function() {
            $('#overlay').addClass('close');
        }, 1000);
    });

    $('#overlay').on('click', 'a[href^="#"]', function (e) {
        $('#overlay').addClass('animated fadeOut');
        $("section").css("display", "block");
        $("#Footer").css("display", "grid");
        setTimeout(function() {
            $('#overlay').addClass('close');
        }, 1000);
    });
});

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600);

});