
var correctQs = 0;
var wrongQs = 0;
var unansweredQs = 0;
var time = 30;


var questions = [
    {
        question: "Question 1: How many modes does the game have?",
        options: [
            "7",
            "2",
            "1",
            "4"
        ],
        answer: "2"
    },
    {
        question: "Question 2: When was the game created?",
        options: [
            "March 1, 2016",
            "June 30, 2017",
            "July 25, 2017",
            "July 20, 2016"
        ],
        answer: "July 25, 2017"
    },
    {
        question: "Question 3: Who developed the game?",
        options: [
            "Epic Games",
            "Nintendo",
            "EA Sports",
            "Disney"
        ],
        answer: "Epic Games"
    },
    {
        question: "Question 4: How many players participate in Fortnite battle royale?",
        options: [
            "10",
            "100",
            "50",
            "However many you want"
        ],
        answer: "100"
    },
    {
        question: "Question 5: In-game purchase in Fornite battle royale are called?",
        options: [
            "Purchases",
            "Battle Pass",
            "Royale Pass",
            "Battle Royale Pass"
        ],
        answer: "Battle Pass"
    },
    {
        question: "Question 6: What is the maximum health you can have?",
        options: [
            "50",
            "100",
            "150",
            "200"
        ],
        answer: "100"
    },
    {
        question: "Question 7: What is the first weapon you are given in battle royale?",
        options: [
            "Pistol",
            "Glider",
            "Pick Axe",
            "None"
        ],
        answer: "Pick Axe"
    },
    {
        question: "Question 8: What is the name of the hot air balloon?",
        options: [
            "Battle Bus",
            "Battle Balloon",
            "Battle Shuttle",
            "Battle Ship"
        ],
        answer: "Battle Bus"
    },
    {
        question: "Question 9: The shrinking map in battle royale is called?",
        options: [
            "Poison",
            "Storm",
            "Hurricane",
            "Death"
        ],
        answer: "Storm"
    },
    {
        question: "Question 10: Which one of these is not a level of weapon?",
        options: [
            "Rare",
            "Epic",
            "Normal",
            "Legendary"
        ],
        answer: "Normal"
    }
]


$(".start").click(function () {
    $(".container").html("<div>");
    $(".start").remove();
    $(".time").attr("class", "timer fixed-top");
    $(".timer").html("Time remaining: " + time);
    $(".bod").attr("class", "body");

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].pick);
        $("#ask").append("<br><div>" + questions[i].question + "</div>");

        for (var j = 0; j < questions[i].options.length; j++) {
            var radioButton = $('<input type="radio"/>');
            radioButton.attr("name", 'rbtncount' + i);
            radioButton.attr("value", questions[i].options[j]);
            radioButton.attr("class", "radioButton");
            radioButton.html("<span>" + questions[i].options[j] + "</span>");
            var label = $("<label>");
            label.text(questions[i].options[j]);


            $("#ask").append(radioButton, label, "<br>");
        }
    }

    var submit = $(".submit");
    submit.append("<br><button class='btn-lg btn-block'>Submit</button>");


    $("input").on("click", function () {
        console.log(this.value);
        console.log(this.name);
    })

    $(".submit").click(function () {
        checkScores();
    });

    function checkScores() {
        countDown = false;

        // One way to address this is 'if (selection[i].name === rbtncount[i]) {userChoice[i].name.push(selection[i].value)}
        var userChoice = [];
        var selection = $("[class=radioButton]");
        for (var i = 0; i < selection.length; i++) {
            if (selection[i].checked) {
                var selValue = selection[i].value

                userChoice.push(selValue);
            }
        };


        console.log(userChoice);
        
        for (var i = 0; i < userChoice.length; i++) {
            if (userChoice[i] === questions[i].answer) {
                correctQs++;
            }
            else if (userChoice !== questions[i].answer) {
                wrongQs++
            }
            else {
                unansweredQs++
            }
        }

        var alertMessage = "You got " + correctQs + " correct!" + "\n\nYou got " + wrongQs + " wrong!" + "\n\nYou didn't answer " + unansweredQs + " questions";
        alert(alertMessage);
    }

    setTimeout(countDown, 1000);

    function countDown() {
        time--;
        if (time > 0) {
            setTimeout(countDown, 1000);
            $(".timer").html("Time remaining: " + time);
        } else {
            $(".timer").html("Time remaining: 0");
            checkScores();
        }
    }
});

function startGame() {

}

function pressA2Start() {

}


//Pseudo Code:
//1. game starts onClick of the 'start' button
//2. Start button initializes the first question to generate & the timer to start for predetermined time
//3. once you answer the question the answer is shown and the screen moves you along to the next questions (no refresh)
//4. timer resets with new question and repeat step 3 until all questions are answered or timer is up
//5. once user answers all the questions, recap how many Q's they got correct / wrong / unanswered & display "restart" button