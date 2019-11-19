// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    var com = Math.floor(Math.random() * 3);
    $("#userChoice").text($("#input").val());
    if(com === 0){
        $("#computerChoice").text("rock");
    }else if (com === 1) {
        $("#computerChoice").text("paper");
    }else{
        $("#computerChoice").text("scissors");
    }
    if($("#userChoice").text() === "rock" && $("#computerChoice").text() === "scissors"){
        $(".rockBeatsScissors").show();
        $("#result").text("You win");
    }else if ($("#userChoice").text() === "rock" && $("#computerChoice").text() === "rock") {
        $(".rockTie").show();
        $("#result").text("Issa tie");
    }else{
        $(".rockLosesPaper").show();
        $("#result").text("You lose");
    }
});


// DOCUMENT READY FUNCTION BELOW

