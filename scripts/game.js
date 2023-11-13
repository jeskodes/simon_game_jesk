/**Let game = a new object. The key of score is zero. 
 * Add currentGame to game object - is an array.*/

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

/**Change game.score number to test
 * To fully reset game need to call functions: 
 * showScore()
 * addTurn()
 */
function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
}

// let a = 4
// let b = 3

// function sum(a, b) {
//     return a + b;
// }
/**Need to export game and import into test file
 * In curly braces because will be exporting more than 
 * one object and function to the tests
 */
module.exports = { game, newGame };