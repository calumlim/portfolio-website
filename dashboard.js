$( document ).ready(function() {
    if ($(window).width() >= 992) {
        $('#collapseContainer').removeClass('collapse');
    }

    $(window).resize(function(){
        if ($(window).width() >= 992) {
            $('#collapseContainer').removeClass('collapse');
        }
        else {
            $('#collapseContainer').addClass('collapse');
        }
    });
});