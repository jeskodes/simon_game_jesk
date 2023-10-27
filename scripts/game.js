/**Let game = a new object. The key of score is zero. 
 * Add currentGame to game object - is an array.*/

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}



/**Need to export game and import into test file
 * In curly braces because will be exporting more than 
 * one object and function to the tests
 */
module.exports = { game }