var userChoice = [];
var correctAnswer;
var correctQs = 0;
var wrongQs = 0;
var unansweredQs = 0;
var time = 30;


// var for question array with object:
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


// Create onClick command to start the game / timer / and question cycle.
$(".start").click(function () {
    $(".container").html("<div>");
    $(".start").remove();


    // timer starts for each question / 30 seconds per page
    for (var i = 0; i < questions.length; i++) {

        $("#ask").append("<br><div>" + questions[i].question + "</div>");

        for (var j = 0; j < questions[i].options.length; j++) {
            var radioButton = $('<input type="radio"/>');
            radioButton.attr("name", 'rbtncount' + i);
            radioButton.attr("value", questions[i].options[j]);
            radioButton.html("<span>" + questions[i].options[j] + "</span>");
            var label = $("<label>");
            label.text(questions[i].options[j]);


            $("#ask").append(radioButton, label, "<br>");
        }
    }

    $("input").on("click", function () {
        console.log(this.value)
        //this is where you add the if statement to only push the value of the button clicked to the userChoice array once per 'rbtncount'+[i]
        // var object = {};
        // for (var i = 0; i < questions.length; i++)
        // var selection = userChoice[i];
            // if (object[selection]) {
            //     return selection;
            // } else {
            //     object[selection] = true;
            // }
            // console.log(object);
        userChoice.push(this.value);
        console.log(userChoice);
    })

    var submit = $(".submit");
    submit.append("<br><button>Submit</button>");

    $(".submit").click(function () {
        countDown = false;

        // onSubmit event to capture user's choice
        console.log(userChoice);

        // Match with the answer in the array object to determine if answered correctly or not
        // If correct, push to correctQs array
        for (var i = 0; i < userChoice.length; i++) {
            if (userChoice[i] === questions[i].answer) {
                correctQs++;
                console.log(correctQs);
                console.log(questions[i].answer);
            }
            // If wrong, push to wrongQs array
            else if (userChoice !== questions[i].answer) {
                wrongQs++
                console.log(wrongQs);
            }
            // if unanswered, push to unansweredQs
            else {
                unansweredQs++
                console.log(unansweredQs);
            }
        }
        // Display recap page:
        // This will show how many Qs the user got correct, wrong, unanswered
        //display correctQs / of questions.length 'correct'
        //display wrongQs / of questions.length 'wrong'
        // display unansweredQs / of questions.length 'unanswered'
    })

    setTimeout(countDown, 1000);

    function countDown() {
        time--;
        if (time > 0) {
            setTimeout(countDown, 1000);
            $(".timer").html("Time remaining: " + time);
        } else (time === 0)
        // submitQs();

        console.log(time);
    }


});




//Pseudo Code:
//1. game starts onClick of the 'start' button
//2. Start button initializes the first question to generate & the timer to start for predetermined time
//3. once you answer the question the answer is shown and the screen moves you along to the next questions (no refresh)
//4. timer resets with new question and repeat step 3 until all questions are answered or timer is up
//5. once user answers all the questions, recap how many Q's they got correct / wrong / unanswered & display "restart" button

