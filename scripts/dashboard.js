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
    name: "Julian Lee",
    title: "Developer",
    lastClass: "FIT2014",
    hoursStudying: {
        Monday: 2,
        Tuesday: 4,
        Wednesday: 8,
        Thursday: 6,
        Friday: 10,
    },
    topicProgress: {
        1: {
            title: "Python",
            level: "Advanced",
            progress: "75%",
        },
        2: {
            title: "Laravel",
            level: "Intermediate",
            progress: "50%",
        },
        3: {
            title: "HTML",
            level: "Beginner",
            progress: "20%",
        },
    }
}

function fillWelcomeBackContainer() {
    $("#welcomeBack").html("Welcome back, " + user.name + "!")
    lastClass = classes[user.lastClass]
    $("#lastClassUnit").html(user.lastClass + " - " + lastClass.title)
    $("#lastClassProgressBar").css("width", lastClass.progress + "%")
    $("#progressPercentage").html(lastClass.progress + "%")
}

function fillClassesList() {
    const keys = Object.keys(classes)
    keys.forEach((unitName) => {
        $("#classList").append(createClassRow(unitName))
    })
}

function createClassRow(unitName) {
    const title = classes[unitName].title
    const progress = classes[unitName].progress + "%"
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

function drawHoursSpentChart() {
    let data = {
        labels: Object.keys(user.hoursStudying),
        datasets: [
            {
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: Object.values(user.hoursStudying)
            }
        ]
    }

    const chartContainerHeight = $('#myChart').closest('.chart-container').height()
    const chartContainerWidth = $('#myChart').closest('.chart-container').width()
    $("#myChart").css("height", chartContainerHeight)
    $("#myChart").css("width", chartContainerWidth)
    
    let ctx = $("#myChart").get(0).getContext("2d");
    let myLineChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {  
            responsive: false,
            maintainAspectRatio: false
        }
    })
}

function fillProfileInfo() {
    $("#profileName").html(user.name)
    $("#profileTitle").html(user.title)
}

function fillTopicList() {
    const keys = Object.keys(user.topicProgress)
    keys.forEach((id) => {
        $("#topicList").append(createTopicRow(id))
    })
}

function createTopicRow(id) {
    topic = user.topicProgress[id]
    return (
        `
        <div class="topic-info">
            <p class="topic-title">${topic.title}</p>
            <p class="topic-level">${topic.level}</p>
            <div class="completion-font">
                <p style="float:left">Course-completion:</p>
                <p style="float:right">${topic.progress}</p>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width:${topic.progress}"></div>
            </div>
        </div>
        `
    )
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

    fillWelcomeBackContainer()
    fillClassesList()
    drawHoursSpentChart()
    fillProfileInfo()
    fillTopicList()
})
