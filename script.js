'use strict';

let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number((document.querySelector('.guess').value));
    // when there is no input
    if (!guess) {
        displayMessage('⛔ No number');
        // when player win
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number !');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // when guess is different to secret number
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }


});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 21);
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
})
