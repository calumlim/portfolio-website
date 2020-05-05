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
    keys.forEach((unitCode) => {
        $("#classList").append(createClassRow(unitCode))
    })
}

function createClassRow(unitCode) {
    const title = classes[unitCode].title
    const progress = classes[unitCode].progress + "%"
    return (
        `<div class="class-info">
            <p>
                <span class="unit-code">
                    ${unitCode} - 
                </span>
                <span class="unit-name">
                    ${title}
                </span>
            </p>
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
    const chartContainerHeight = $('#myChart').closest('.chart-container').height()
    const chartContainerWidth = $('#myChart').closest('.chart-container').width()
    $("#myChart").css("height", chartContainerHeight)
    $("#myChart").css("width", chartContainerWidth)
    
    let ctx = $("#myChart").get(0).getContext("2d");
    let gradientFill = ctx.createLinearGradient(0, 0, 250, 500);
    gradientFill.addColorStop(0, "#9300FF");
    gradientFill.addColorStop(1, "#CA88FC5D");

    let data = {
        labels: Object.keys(user.hoursStudying),
        datasets: [
            {
                label: 'Hours per day',
                fill: true,
                backgroundColor: gradientFill,
                borderColor: '#9300FF',
                borderWidth: '3px',
                pointRadius: 0,
                data: Object.values(user.hoursStudying)
            }
        ]
    }

    let myLineChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {  
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            elements: {
                line: {
                    tension: 0.4
                },
            },
            animation: {
                easing: 'easeInOutQuad',
                duration: 800,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontFamily: 'Nunito',
                        fontSize: 12,
                        fontColor: '#707070',
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        color: '#E8E8E8',
                        lineWidth: 1
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2,
                        fontFamily: 'Nunito',
                        fontSize: 12,
                        fontColor: '#707070',
                    }
                }]
            },
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
        <div class="topic-info-container">
            <p class="topic-title">${topic.title}</p>
            <p class="topic-level">${topic.level}</p>
            <div class="completion-font">
                <p style="float:left">Course-completion:</p>
                <p style="float:right">${topic.progress}</p>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill-2" style="width:${topic.progress}"></div>
            </div>
        </div>
        `
    )
}


/* Handle event for, open and close left and right side menus */
function openLeftColumnSidebar() {
    $(".left-column-outer").css("width", "280px")
}

function closeLeftColumnSidebar() {
    $(".left-column-outer").css("width", "0")
}

function openRightColumnSidebar() {
    $('.right-column-outer').css("width", "280px")
}

function closeRightColumnSidebar() {
    $('.right-column-outer').css("width", "0")
}

function resizeDashboardHeight() {
    let win = $(this); // this = window
    if (win.height() < 868) {
        let htmlHeight = $(document).height()
        $(".dashboard-container").css("height", htmlHeight)
    }
    else {
        $(".dashboard-container").css("height", "100vh")
    }
}

/* Handle window resize function */
function handleWindowResize() {
    $(window).on('resize', function() {
        resizeDashboardHeight()
    });
}

function render() {
    fillWelcomeBackContainer()
    fillClassesList()
    drawHoursSpentChart()
    fillProfileInfo()
    fillTopicList()
    resizeDashboardHeight()
}

/* Init function */
$( document ).ready(function() {
    render()
    handleWindowResize()
})
