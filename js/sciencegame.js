var organ_list = [
  "BRAIN",
  "HEART",
  "INTESTINES",
  "LUNGS",
  "STOMACH"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = organ_list[Math.floor(Math.random() * organ_list.length)];
  // wordDictionaryCheck(answer)
  updateOrganPicture();
}

// function generateButtons() {
//   let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
//     `
//       <button
//         class="key btn btn-lg btn-primary m-2"
//         id='` + letter + `'
//         onClick="handleGuess('` + letter + `')"
//       >
//         ` + letter + `
//       </button>
//     `).join('');

//   document.getElementById('keyboard').innerHTML = buttonsHTML;
// }

// function wordDictionaryCheck(guessWord){
//   const settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${guessWord}`,
//       "method": "GET",
//       "headers": {
//           "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
//           "x-rapidapi-key": "bba0d05dddmsh0a21940f54bd48cp1ba4c1jsn987d4ae1ffb1"
//       }
//   };
//     $.ajax(settings).done(function (response) {
//         wordDefinition = response.definition;//Get the definition of the word
//         document.getElementById("hint").onclick = function(){
//             console.log(wordDefinition);
//             $(".modal-body").html(`
//             <h1 class="my-4 text-left" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5; overflow:scroll; overflow-x:hidden;">${wordDefinition}</h1>`);
//             $(".modal").modal("toggle");
//             $(".modal-title").text("Hint");
//             $(".modal-body").css("background-color", "#f8f4e4");
//         };
//     })
//   }
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  $('#'+chosenLetter).addClass("disable");
  console.log(chosenLetter)
  //Maybe store the guessed word somewhere else?
  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    console.log(mistakes);
    updateMistakes();
    checkIfGameLost();
  }
}

function updateOrganPicture() {
  index = organ_list.indexOf(answer);
  document.getElementById('organPic').src = '../assets/biology_assets/human-anatomy/' + index + '.png';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    // document.getElementById('keyboard').innerHTML = 'You Won!!!';
    console.log("Won");
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    $(".modal-body").html(`
    <div class="my-4 text-center" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5;">
    <p>OH NO!! You ran out of chances!</p>
    <p>The correct name is:${answer.toLocaleLowerCase()}</p>
    </div>`);
    $(".modal").modal("toggle");
    $(".modal-title").text("End of game");
    $(".modal-title").css("color", "red");
    }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  location.reload();
}

window.onload = function(){
  document.getElementById('maxWrong').innerHTML = maxWrong;
  randomWord();
  guessedWord();
}

document.getElementById("instruction").onclick = function(){
  $(".modal-body").html(`
  <divclass="my-4 text-left" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5; overflow:scroll; overflow-x:hidden;">
  <p>1. Once you start the game, you will have to guess a random word, based on the picture.</p>
  <p>2. If you are unable to guess the correct alphabets for the word, you will cause a fail in the round. There will be a total of 6 fails.</p>
  <p>3. Each key will be disable and turn grey after pressed.</p>
  <p>4. Failure to guess the word before the 6th fail will cause you to lose the round.</p>
  <p>Goodluck and have fun!</p>
  </div>`);
  $(".modal").modal("toggle");
  $(".modal-title").text("Instruction");
  $(".modal-body").css("background-color", "#f8f4e4");
};
