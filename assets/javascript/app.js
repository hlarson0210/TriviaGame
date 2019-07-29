var userChoice;
var correctAnswer;
var correctQs = [];
var wrongQs = [];
var unansweredQs = [];


// var for question array with object:
var questions = [
    {
        question: "Question 1: How many modes does the game have?",
        options:{
            a: 7,
            b: 2,
            c: 1,
            d: 4
        },
        answer: "2"
    },
    {
        question: "Question 2: When was the game created?",
        options:{
            a: "March 1, 2016",
            b: "June 30, 2017",
            c: "July 25, 2017",
            d: "July 20, 2016"
        },
        answer: "July 25, 2017"
    },
    {
        question: "Question 3: Who developed the game?",
        options:{
            a: "Epic Games", 
            b: "Nintendo", 
            c: "EA Sports", 
            d: "Disney"
        },
        answer: "Epic Games"
    },
    {
        question: "Question 4: How many players participate in Fortnite battle royale?",
        options: {
            a: 10,
            b: 100,
            c: 50,
            d: "However many you want"
        },
        answer: "100"
    },
    {
        question: "Question 5: In-game purchase in Fornite battle royale are called?",
        options: {
            a: "Purchases",
            b: "Battle Pass", 
            c: "Royale Pass",
            d: "Battle Royale Pass"
        },
        answer: "Battle Pass"
    },
    {
        question: "Question 6: What is the maximum health you can have?",
        options:{
            a: 50,
            b: 100,
            c: 150,
            d: 200
        },
        answer: "100"
    },
    {
        question: "Question 7: What is the first weapon you are given in battle royale?",
        options:{
            a: "Pistol",
            b: "Glider",
            c: "Pick Axe",
            d: "None"
        },
        answer: "Pick Axe"
    },
    {
        question: "Question 8: The name of the hot air balloon is?",
        options:{
            a: "Battle Bus",
            b: "Battle Balloon",
            c: "Battle Shuttle",
            d: "Battle Ship"
        },
        answer: "Battle Bus"
    },
    {
        question: "Question 9: The shrinking map in battle royale is called?",
        options:{
            a: "Poison",
            b: "Storm",
            c: "Hurricane",
            d: "Death"
        }, 
        answer: "Storm"
    },
    {
        question: "Question 10: Which one of these is not a level of weapon?",
        options:{
            a: "Rare",
            b: "Epic",
            c: "Normal",
            d: "Legendary"
        },
        answer: "Normal"
    }
]

// Create onClick command to start the game / timer / and question cycle.
//$(document).ready(){
    for (var i = 0; i <questions.length; i++){
        // console.log(questions[i]);
        console.log(questions[i].question);
        console.log(questions[i].options.a);
        console.log(questions[i].options.b);
        console.log(questions[i].options.c);
        console.log(questions[i].options.d);
        console.log(questions[i].answer);
    }

    var startGame = function () {
        // Timer starts for 10 seconds
        setTimeout(function () {
            prompt(questions.question1);
            
        }, 10000);
    };


    // Display question 1 with choices displayed

    // onClick event to capture user's choice

    // Match with the answer in the array object to determine if answered correctly or not
        // If correct, push to correctQs array
        // If wrong, push to wrongQs array
        // if unanswered, push to unansweredQs

    // Display answer screen for 3 seconds to reveal if user's choice was correct or not

    // Repeat for the 10 questions (for loop)

    // Display recap page:
    // This will show how many Qs the user got correct, wrong, unanswered


    $(".start").click(function (startGame) {
        var hello = "hello!";
        alert(hello);
    });



//}



//Pseudo Code:
//1. game starts onClick of the 'start' button
//2. Start button initializes the first question to generate & the timer to start for predetermined time
//3. once you answer the question the answer is shown and the screen moves you along to the next questions (no refresh)
//4. timer resets with new question and repeat step 3 until all questions are answered or timer is up
//5. once user answers all the questions, recap how many Q's they got correct / wrong / unanswered & display "restart" button

