// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.

// create a 30 second countdown timer
var myTimer = 30;

myTimerCountdown = setInterval(function () {
    myTimer = myTimer - 1;

    if (myTimer == 0) {
        clearInterval(myTimerCountdown);
        // alert("Your time is up!");
    }
    // console.log(myTimer);
}, 1000);

// TODO: add functionality that displays user score when the time has expired and resets the game


$(function(){

    // FIRST ATTEMPT. DOESN'T WORK

    // // initially hide the rows containing the questions
    // $(".question").css("display", "none");

    // // when the button is clicked, show the hidden rows. 
    // // Doesn't work.

    // $("button#startGame").on("click", function() {
    //     $(".question").css("display", "visible");
    //      console.log("The button click was registered. Why didn't it change the visibility of the .question rows?");
    // });

    $("button#startGame").on("click", function() {
        $(".question").show();
        // $(".question").toggle();
        // console.log("button click registered");
        $("button#startGame").hide();

    })
});