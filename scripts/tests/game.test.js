/*@jest-environment jsdom*/
 
//Import game object from game.js
const { game } = require("../game"); 

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
 * Write first test - check is game object contains a key 
 * called score. ss
 */

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true); 
    });
    test("currentGame key exists", ()=> {
        expect("currentGame" in game).toBe(true); 
    });
});