//Question
var organ_list = [
  "BRAIN",
  "HEART",
  "INTESTINES",
  "LUNGS",
  "STOMACH"
];
let answer = '';
let maxWrong = 6; //Maximum number of wrong
let mistakes = 0; //Always set mistakes make to 0
let guessed = [];
let wordStatus = null;
var correct;

//Get a random word from organ_list
function randomWord() {
  answer = organ_list[Math.floor(Math.random() * organ_list.length)];
  updateOrganPicture();
}

//Check for the letter input
function handleGuess(chosenLetter) {
  if(mistakes!==maxWrong && correct!== maxWrong){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true); 
    $('#'+chosenLetter).addClass("disable"); //Disable the letter
    //If letter input in the word
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
      checkIfGameWon(); 

    //If not in the word
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      console.log(mistakes);
      updateMistakes();
      checkIfGameLost();
    } 
  }
  
  //Call reset if end of game prevent from more input
  else{
    reset();
  }
}

//Get the picture that related to the word chosen
function updateOrganPicture() {
  index = organ_list.indexOf(answer);
  $("#organPicContainer").append(`<img id='organPic' src="./assets/biology_assets/human-anatomy/${index}.png" alt="science game pics">`);
}

//Check if won when input correct letter
function checkIfGameWon() {
  //If win show end game pop up
  if (wordStatus === answer) {
    correct = 6;
    $(".modal-body").html(`
    <div class="my-4 text-center" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5;">
    <p>You're a genius!</p>
    <p>The correct name of the picture is: ${answer}</p>
    <p>Press reset button to start new round!</p>
    </div>`);
    $(".modal").modal("toggle");
    $(".modal-title").text("CONGRATSS!!");
    $(".modal-title").css("color", "Green");
    }
}

//Check if lose when input wrong letter
function checkIfGameLost() {
  //If lose show end game pop up
  if (mistakes === maxWrong) {
    $(".modal-body").html(`
    <div class="my-4 text-center" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5;">
    <p>Seem like you ran out of chances.. :( </p>
    <p>The correct name of the picture is: ${answer}</p>
    <p>Press reset button to start new round!</p>
    </div>`);
    $(".modal").modal("toggle");
    $(".modal-title").text("Better luck next time!");
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
  $(".modal-body").html(`
  <divclass="my-4 text-left" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5; overflow:scroll; overflow-x:hidden;">
  <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close" style="position:absolute;top:0;right:0;"></button>
  <p>1. Once you start the game, you will have to guess a random word, based on the picture.</p>
  <p>2. If you are unable to guess the correct alphabets for the word, you will cause a fail in the round. There will be a total of 6 fails.</p>
  <p>3. Each key will be disable and turn grey after pressed.</p>
  <p>4. Failure to guess the word before the 6th fail will cause you to lose the round.</p>
  <p class="text-center">Good luck and have fun!</p>
  </div>`);
  $(".modal").modal("toggle");
  $(".modal-title").text("Instruction");
  $(".modal-body").css("background-color", "#f8f4e4");
};

document.getElementById("instruction").onclick = function(){
  $(".modal-body").html(`
  <divclass="my-4 text-left" style="font-size:18px; font-family:Verdana, Geneva, Tahoma, sans-serif;max-height:40vh;line-height:1.5; overflow:scroll; overflow-x:hidden;">
  <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close" style="position:absolute;top:0;right:0;"></button>
  <p>1. Once you start the game, you will have to guess a random word, based on the picture.</p>
  <p>2. If you are unable to guess the correct alphabets for the word, you will cause a fail in the round. There will be a total of 6 fails.</p>
  <p>3. Each key will be disable and turn grey after pressed.</p>
  <p>4. Failure to guess the word before the 6th fail will cause you to lose the round.</p>
  <p class="text-center">Good luck and have fun!</p>
  </div>`);
  $(".modal").modal("toggle");
  $(".modal-title").text("Instruction");
  $(".modal-body").css("background-color", "#f8f4e4");
};
