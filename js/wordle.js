var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt
var word;//word to be guess
var wordDefinition; //defination of the word
var gameOver = false;
let wordcount = 0;
var validationStatus;//check for validation true/false
var gameStatus = 0;
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
    randomWordGenerator();
    intialize();
    addKeyboardClicks();
}

//Random word generator
function randomWordGenerator(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://random-words5.p.rapidapi.com/getRandom?wordLength=5",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "random-words5.p.rapidapi.com",
            "x-rapidapi-key": "bba0d05dddmsh0a21940f54bd48cp1ba4c1jsn987d4ae1ffb1"
        }
    };
    
    $.ajax(settings).done(function (response) {
        word = response.toUpperCase();
        console.log(word);
        wordDictionaryCheck(word);
    });
    
}
//Word dictionary
function wordDictionaryCheck(guessWord){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${guessWord}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
            "x-rapidapi-key": "bba0d05dddmsh0a21940f54bd48cp1ba4c1jsn987d4ae1ffb1"
        }
    };
    if (gameStatus == 0){
        $.ajax(settings).done(function (response) {
            if (gameStatus == 0 ){
                wordDefinition = response.definition;//Get the definition of the word
                console.log(wordDefinition);
                gameStatus = 1;
            }
        })
    }
    else{
        $.ajax(settings).done(function (response) {
            if (response.valid == true){
                validationStatus = true;
                console.log(validationStatus);
                checkValidationStatus();   
            }
            
            else if(response.valid == false){
                validationStatus = false;
                console.log(validationStatus);
                checkValidationStatus();   
            }
        })
    }
}

//Combine letter into word
function guessWordGetter(){
    var letterarray = [];
    var to_string = '';
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        letterarray.push(currentTile.innerText);
        console.log(currentTile.innerText);
        }
    var guessWord = to_string.concat(letterarray[0],letterarray[1],letterarray[2],letterarray[3],letterarray[4])
    return guessWord;
}

function checkValidationStatus(){
    if (validationStatus){
        update();
        row += 1; //start new row
        col = 0; //start at 0 for new row
    }
    else{
        console.warn("Please enter a valid word");
    }
}

function intialize() {
    // Reset the game board
    document.getElementById("board").innerHTML = "";
    // Create the game board
    var tilecounter = 0;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            //<div>
            // <span id="0-0" class="tile">P</span>
            //</div>
            tilecounter+=1;
            var newDiv = document.createElement("div");
            newDiv.id = tilecounter;
            newDiv.classList.add("container-tile");
            document.getElementById("board").appendChild(newDiv);
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById(tilecounter).appendChild(tile);
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
                    wordcount += 1;
                }
            }
        }
        //If input is backspace
        else if (e.code == "Backspace" ) {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            currentTile.innerText = "";
            if(wordcount >0) {
                wordcount -= 1;
            }
        }
        //If input is enter
        else if (e.code == "Enter")
        {
            if (wordcount == 5){
                guessWord = guessWordGetter();
                console.log(guessWord);
                wordDictionaryCheck(guessWord)
            }
            else{
                console.warn("Must enter 5 letter");
            }
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    });
}
//In game Keyboard
function addKeyboardClicks() {
    const keys = document.querySelectorAll(".keyboard-row button");
    for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", ({ target }) => {
    const key = target.getAttribute("data-key");
    
        if (key !== "enter" && key !== "del"){
            if (col < width) {
                let currentTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = key.toUpperCase();
                    col += 1;
                    wordcount += 1;
                }
            }
        }
        else if (key =="del"){
            if (0 < col && col <= width) {
                col -=1;
            }
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            currentTile.innerText = "";
            if(wordcount > 0) {
                wordcount -= 1;
            }
        }
        else if (key == "enter"){
            if (wordcount == 5){
                guessWord = guessWordGetter();
                console.log(guessWord); 
                wordDictionaryCheck(guessWord);
            }
            else{
                console.warn("Must enter 5 letter");
            }
        }
        });
    }
}   

function update() {
    let correct = 0;
    wordcount = 0;
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

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currentTile.innerText;
        let currentKey = document.getElementById(letter.toLowerCase());
        console.log(currentKey);
        //Is it in the correct position?
        if (word[c] == letter) {
            if (currentKey.classList.contains("present")){
                currentKey.classList.remove("present");
                currentTile.classList.remove("present");
                console.log("remove1");
            }
            else if (currentKey.classList.contains("absent")){
                currentKey.classList.remove("absent");
                currentTile.classList.remove("absent");
                console.log("remove2");
            }
            currentKey.classList.add("correct");
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
        let currentKey = document.getElementById(letter.toLowerCase());
        // skip the letter if it has been marked correct
        if (!currentTile.classList.contains("correct")) {
            //Is it in the word?         //make sure don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currentTile.classList.add("present");
                currentKey.classList.add("present");  
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currentKey.classList.add("absent");
                currentTile.classList.add("absent");
            }
        }
    }
}