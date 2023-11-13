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
    showScore(); 
    addTurn();
}

/**add turn function needs to: 
 * Clear the playerMoves array because start of new turn. 
 * Randomly select one of the choices from game.choices
 * Push the random game.choices into currentGame array. 
 * Call the showTurns function
 */
function addTurn(){
    game.playerMoves = [];
    
}

function showScore(){
    document.getElementById("score").innerText = game.score; 
}


/**Need to export game and import into test file
 * In curly braces because will be exporting more than 
 * one object and function to the tests
 */
module.exports = { game, newGame, showScore };