var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt
var word = "BERRY";
var gameOver = false;

// //Select difficulty
// document.getElementById("difficulty1").onclick = function(){
//     var wordListLevel1 = [
//         "KENNY",
//         "FUNNY",
//         "BERRY",
//         "CHAIR"
//     ]
//     height = 5;
//     width = 5;
//     word = wordListLevel1[Math.floor(Math.random() * wordListLevel1.length)];
//     console.log(word);
//     intialize();
// };
// document.getElementById("difficulty2").onclick = function(){
//     var wordListLevel2 = [
//         "ABROAD",
//         "ACCESS",
//         "ACCEPT",
//         "ACTING"
//     ]
//     height = 6;
//     width = 5;
//     word = wordListLevel2[Math.floor(Math.random() * wordListLevel2.length)];
//     console.log(word);
//     intialize();
// };
// document.getElementById("difficulty3").onclick = function(){
//     var wordListLevel3 = [
//         "ABILITY",
//         "ABSENCE",
//         "ACADEMY",
//         "ACCOUNT"
//     ]
//     height = 7;
//     width = 5;
//     word = wordListLevel3[Math.floor(Math.random() * wordListLevel3.length)];
//     console.log(word);
//     intialize();
// };

window.onload = function(){
    intialize();
}

function intialize() {
    // Reset the game board
    document.getElementById("board").innerHTML = "";
    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return; 

        //If input in range of Key A to Key Z
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currentTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        //If input is backspace
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            currentTile.innerText = "";
        }
        //If input is enter
        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            col = 0; //start at 0 for new row
        }


        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}


function update() {
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currentTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currentTile.classList.add("correct");
            correct += 1;
            letterCount[letter] -= 1; //deduct the letter count
        }

        if (correct == width) {
            gameOver = true;
        }
    }

    console.log(letterCount);
    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currentTile.innerText;

        // skip the letter if it has been marked correct
        if (!currentTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currentTile.classList.add("present");
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currentTile.classList.add("absent");
            }
        }
    }

}