'use strict';

//Section 7: JavaScript in the Browser: DOM and Events Fundamentals

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '22';
// console.log(document.querySelector('.guess').value);

// Guess My Number! Game logic
//Generate a random number between 1 and 20 and save it in the secretNumber variable
//set state variables and display functions
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

const displaySecretNumber = function (newNumber) {
  document.querySelector('.number').textContent = newNumber;
};

// add 'click' event listener to the 'check' button and when clicked run the function
//the user's guess is stored in the 'guess' variable

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage(' ⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displaySecretNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When player guesses wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 Game over!');
      displayScore(0);
      displaySecretNumber(secretNumber);
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayScore(score);
    displaySecretNumber('?');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
  });
});
