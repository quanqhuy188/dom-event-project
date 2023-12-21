'use strict';
// let message = document.querySelector('.message').textContent;

// document.querySelector('.message').textContent = '🥳 Correct Number!';
// console.log(message);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 20;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
displayScore(score);
document.querySelector('.check').addEventListener('click', event => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    displayMessage('🚫 No Number!');
  } else if (guess === number) {
    displayMessage('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.high-score').textContent = hightScore;
    }
  } else {
    if (score > 2) {
      score = score - 2;
      displayScore(score);
      displayMessage(guess > number ? '😒 Too high' : '😒 Too low');
    } else {
      displayMessage('💥 You lose the Game');
      displayScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
