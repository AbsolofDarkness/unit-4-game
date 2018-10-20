// REMEMBER: USE JQUERY
// OR ELSE
var wins = 0;
var loses = 0;
var userNum = 0;

preGame();

function preGame () {
    var randomNumber = Math.floor(Math.random() * (120 - 20)) + 19;
    var gemValues = {
        redGem : Math.floor(Math.random() * 12) + 1,
        blueGem : Math.floor(Math.random() * 12) + 1,
        orangeGem : Math.floor(Math.random() * 12) + 1,
        greenGem : Math.floor(Math.random() * 12) + 1
    };

    $("#redGem").attr("gemValue", gemValues.redGem);
    $("#blueGem").attr("gemValue", gemValues.blueGem);
    $("#orangeGem").attr("gemValue", gemValues.orangeGem);
    $("#greenGem").attr("gemValue", gemValues.greenGem);

    userNum = 0;

    $("#randNum").text(randomNumber);
    $("#scoreNum").text("");
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Loses: " + loses);

    //Debug
    console.log(gemValues);
    console.log("Are you cheating, or a dev?")

}

$("#redGem").on("click", function() {
    addValueAndCompare(parseInt($(this).attr("gemValue")), parseInt($("#randNum").text()));
});

$("#blueGem").on("click", function() {
    addValueAndCompare(parseInt($(this).attr("gemValue")), parseInt($("#randNum").text()));
});

$("#orangeGem").on("click", function() {
    addValueAndCompare(parseInt($(this).attr("gemValue")), parseInt($("#randNum").text()));
});

$("#greenGem").on("click", function() {
    addValueAndCompare(parseInt($(this).attr("gemValue")), parseInt($("#randNum").text()));
});

function addValueAndCompare (clickedGemValue, randomNumber) {
    console.log("Clicked Gem Value: " + clickedGemValue);

    userNum = userNum + clickedGemValue;
    $("#scoreNum").text(userNum);

    console.log("User Number: " + userNum);

    if (userNum > randomNumber) {
        alert("Game Over! You Lose!");
        loses++;
        preGame();
    }

    else if (userNum == randomNumber) {
        alert("You Win!");
        wins++;
        preGame();
    }

}