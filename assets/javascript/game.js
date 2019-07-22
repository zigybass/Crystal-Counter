$(document).ready(function () {


let counter = 0;
let wins = 0;
let losses = 0;
let gameOver = false;

let emerald = 0;
let ruby = 0;
let sapphire = 0;
let topaz = 0;
let targetNum = 0;

function gameReset () {
    counter = 0;
    emerald = (Math.floor(Math.random() * 12 + 1));
    ruby = (Math.floor(Math.random() * 12 + 1));
    sapphire = (Math.floor(Math.random() * 12 + 1));
    topaz = (Math.floor(Math.random() * 12 + 1));
    targetNum = Math.floor(Math.random() * 101) + 20;
    gameOver = false;
}

gameReset();

// Check for game Status
/* if (gameOver) {
    gameReset();
} else {
    return false;
} */


$("#emerald").on("click", function () {
    counter += emerald;
    console.log(counter);
})
$("#ruby").on("click", function () {
    counter += ruby;
    console.log(counter);
})
$("#sapphire").on("click", function () {
    counter += sapphire;
    console.log(counter);
})
$("#topaz").on("click", function () {
    counter += topaz;
    console.log(counter);
})

if ( counter === targetNum ) {
    wins++;
    gameReset();
} else if ( counter > targetNum ) {
    losses++;
    gameReset();
}


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