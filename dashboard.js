const classes = {
    FIT1008: {
        title: "Introduction to Computer Science",
        progress: "50",
    },
    FIT2004: {
        title: "Algorithms and Data Structures",
        progress: "30",
    },
    FIT2014: {
        title: "Theory Of Computation",
        progress: "15",
    },
    FIT3155: {
        title: "AADS",
        progress: "70",
    },
    FIT3171: {
        title: "Databases",
        progress: "100",
    }
}

const user = {
    id: 1,
    name: "Punk",
    lastClass: "FIT2014",
}

function createClassRow(unitName) {
    title = classes[unitName].title
    progress = classes[unitName].progress + "%"
    return (
        `<div class="class-info">
            <div class="unit-name">
                ${unitName} - ${title}
            </div>
            <div class="unit-progress-bar">
                <div class="progress-bar-container">
                    <div class="progress-bar-fill-2" style="width:${progress}"></div>
                </div>
            </div>
            <p class="unit-progress-percentage">${progress}</p>
        </div>`
    )
}

function fillWelcomeBackContainer(user, classes) {
    $("#welcomeBack").html("Welcome back, " + user.name + "!")
    lastClass = classes[user.lastClass]
    $("#lastClassUnit").html(user.lastClass + " - " + lastClass.title)
    $("#lastClassProgressBar").css("width", lastClass.progress + "%")
    $("#progressPercentage").html(lastClass.progress + "%")
}

function fillClassesList(classes) {
    const keys = Object.keys(classes)
    keys.forEach((unitName) => {
        $("#classList").append(createClassRow(unitName))
    })
}

$( document ).ready(function() {
    if ($(window).width() >= 992) {
        $('#collapseContainer').removeClass('collapse')
    }

    $(window).resize(function() {
        if ($(window).width() >= 992) {
            $('#collapseContainer').removeClass('collapse')
        }
        else {
            $('#collapseContainer').addClass('collapse')
        }
    });

    fillWelcomeBackContainer(user, classes)
    fillClassesList(classes)
})