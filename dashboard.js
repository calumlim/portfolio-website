let classes = {
    FIT1008: {
        title: "Introduction to Computer Science",
        progress: "70",
    },
    FIT2004: {
        title: "Algorithms and Data Structures",
        progress: "30",
    }
}

let user = {
    id: 1,
    name: "Punk",
    lastClass: "FIT1008",
}

function fillWelcomeBackContainer(user, classes) {
    $("#welcomeBack").html("Welcome back, " + user.name + "!")
    lastClass = classes[user.lastClass]
    $("#lastClassUnit").html(user.lastClass + " - " + lastClass.title)
    $("#lastClassProgressBar").css("width", lastClass.progress + "%")
}

function fillProgressBars() {

}

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

    fillWelcomeBackContainer(user, classes);
});