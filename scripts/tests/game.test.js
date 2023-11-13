/*@jest-environment jsdom*/
 
//Import game object from game.js
const { game, newGame, sum } = require("../game"); 

/**
 * beforeAll function
 * Load html file into Jests mock DOM
 * This sets up DOM before before all other tests run. 
 * Install the fs library - part of node's default 
 * standard library. 
 * Then open our document, write the file contents to it
 * Then close the document. 
 * In future will be exactly the same, just might need
 * to change the filename. 
 */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents); 
    document.close(); 
});

/**
 * Write first test - check if game object contains a key 
 * called score. ss
 * .toBe matcher
 * .toEqual matcher 
 */

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true); 
    });
    test("currentGame key exists", ()=> {
        expect("currentGame" in game).toBe(true); 
    });
    test("playerMoves key exists", ()=> {
        expect("playerMoves" in game).toBe(true); 
    });
    test("choices key exists", ()=> {
        expect("choices" in game).toBe(true); 
    });
    test("choices contain correct ids", ()=> {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

/**Test if the newGame function works. 
 * New block because this is not within the game object 
 * Use beforeAll function to set up fake values for game
 * To test if it resets the values correctly*/

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
});

// describe("function returns different values based on parameters", () => {
//     test('4 + 4 should equal 8', () => {
//         expect(sum(4, 3)).toBe(8);
//     });
// })