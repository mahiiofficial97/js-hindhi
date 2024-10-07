let randomnumber = parseInt(Math.random() * 100 + 1); // Fixed Math.random usage
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworhie = document.querySelector(".lowOrhi");
const startover = document.querySelector(".resultparas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a valid number`);
  } else if (guess > 100) {
    alert(`please enter a valid number`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(
      `Wahooo! You guessed correct! The correct number of guesses is=[ ${randomnumber}]`
    );
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomnumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = ``;
  guessslot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworhie.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h1 id="newgame">Start new Game</h1>';
  startover.appendChild(p);
  playGame = false;
  newGame(); // Call the newGame function after ending the current game
}

function newGame() {
  const newGameButton = document.querySelector("#newgame");

  newGameButton.addEventListener("click", function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1); // Reassign a new random number
    prevGuess = [];
    numGuess = 1; // Reset the number of guesses
    guessslot.innerHTML = ""; // Clear the guesses slot
    remaining.innerHTML = `${10 - numGuess}`;
    loworhie.innerHTML = ""; // Clear the message
    userInput.removeAttribute("disabled"); // Enable input again
    startover.removeChild(p); // Remove the 'Start new Game' button
    playGame = true;
  });
}
