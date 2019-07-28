var userChoice;
var correctAnswer;
var correctQs = [];
var wrongQs = [];
var unansweredQs = [];


// var for question array with object:
var questions = [
    {1: "Question 1: How many modes does the game have?",
    //options include: 7, 2, 1, 4
    answer: "2"},
    {2: "Question 2: When was the game created?",
    //options include: March 1, 2016; June 30, 2017; July 25, 2017; July 20, 2016;
    answer: "July 25, 2017"},
    {3: "Question 3: Who developed the game?",
    //options include: Epic Games, Nintendo, EA Sports, Disney
    answer: "Epic Games"},
    {4: "Question 4: How many players participate in Fortnite battle royale?",
    //options include: 10, 100, 50, however many you want
    answer: "100"},
    {5: "Question 5: In-game purchase in Fornite battle royale are called?",
    //options include: Purchases, Battle Pass, Royale Pass, Battle Royale Pass
    answer: "Battle Pass"},
    {6: "Question 6: What is the maximum health you can have?",
    //options include: 50, 100, 150, 200
    answer: "100"},
    {7: "Question 7: What is the first weapon you are given in battle royale?",
    //options include: Pistol, Glider, Pick Axe, None
    answer: "Pick Axe"},
    {8: "Question 8: The name of the hot air balloon is?",
    //options include: Battle Bus, Battle Balloon, Battle Shuttle, Battle Ship
    answer: "Battle Bus"},
    {9: "Question 9: The shrinking map in battle royale is called?",
    //options include: Poison, Storm, Hurricane, Death
    answer: "Storm"},
    {10: "Question 10: Which one of these is not a level of weapon?",
    //options include: Rare, Epic, Normal, Legendary
    answer: "Normal"}
]

//Pseudo Code:
//1. game starts onClick of the 'start' button
//2. Start button initializes the first question to generate & the timer to start for predetermined time
//3. once you answer the question the answer is shown and the screen moves you along to the next questions (no refresh)
//4. timer resets with new question and repeat step 3 until all questions are answered or timer is up
//5. once user answers all the questions, recap how many Q's they got correct / wrong / unanswered & display "restart" button

