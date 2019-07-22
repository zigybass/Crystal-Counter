$(document).ready(function () {


let counter = 0;
let wins = 0;
let losses = 0;
let gameWin = false;

let emerald = 0;
let ruby = 0;
let sapphire = 0;
let topaz = 0;
let targetNum = 0;

function gameReset () {
    counter = 0;
    let emerald = (Math.floor(Math.random() * 12 + 1));
    let ruby = (Math.floor(Math.random() * 12 + 1));
    let sapphire = (Math.floor(Math.random() * 12 + 1));
    let topaz = (Math.floor(Math.random() * 12 + 1));
    console.log(emerald, ruby, sapphire, topaz)
    gameWin = false;
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