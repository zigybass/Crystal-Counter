$(document).ready(function () {


let counter = 0;
let wins = 0;
let losses = 0;
let gameOver = true;

let emerald = 0;
let ruby = 0;
let sapphire = 0;
let topaz = 0;
let targetNum = 0;

function gameReset() {
    // if (gameOver) {
    counter = 0;
    $("#counter").text(counter.toString());
    emerald = (Math.floor(Math.random() * 12 + 1));
    ruby = (Math.floor(Math.random() * 12 + 1));
    sapphire = (Math.floor(Math.random() * 12 + 1));
    topaz = (Math.floor(Math.random() * 12 + 1));
    targetNum = Math.floor(Math.random() * 101) + 20;
    $(".targetNum").text(targetNum.toString());
      //gameOver = false;
};
gameReset();

function winLoss () {
if ( counter == targetNum) {
    wins += 1;
    $("#wins span").text(wins.toString());
    console.log(wins);
    gameReset();
} else if ( counter > targetNum ) {
    losses += 1;
    $("#losses span").text(losses.toString());
    gameReset();
} else {
    console.log("done")
}
}

// Check for game Status
/* if (gameOver) {
    gameReset();
} else {
    return false;
} */
// $(".targetNum").text(targetNum.toString())

$("#emerald").on("click", function () {
    counter += emerald;
    $("#counter").text(counter.toString());
    winLoss();
    console.log(counter);
})
$("#ruby").on("click", function () {
    counter += ruby;
    $("#counter").text(counter.toString());
    winLoss();
    console.log(counter);
})
$("#sapphire").on("click", function () {
    counter += sapphire;
    $("#counter").text(counter.toString());
    winLoss();
    console.log(counter);
})
$("#topaz").on("click", function () {
    counter += topaz;
    $("#counter").text(counter.toString());
    winLoss();
    console.log(counter);
})






// rough draft code 
// -------------------------
/* while (gameOver) {
    if ( counter == targetNum) {
        wins += 1;
        $("#wins").text("hi");
        console.log(wins);
        gameReset();
}   else if ( counter > targetNum ) {
    losses += 1;
    $("#losses").text(losses.toString());
    gameReset();
} else {
    console.log("done") 

  if ( counter == targetNum) {
    wins += 1;
    $("#wins span").text("hi");
    console.log(wins);
    gameReset();
} else if ( counter > targetNum ) {
    losses += 1;
    $("#losses span").text(losses.toString());
    gameReset();
} else {
    console.log("done")
}  */


// reset game
// assign gems/target randoms
// listen for clicks on buttons
// create random target score
// add score when button is clicked
// compare target with counter:
//      if counter goes over, add loss, reset
//      if counter matches, add win, reset
// Create new random numbers when reset

});