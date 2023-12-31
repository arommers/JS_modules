'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🥳 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const   displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //  when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = ' ⛔️ No Input';
        displayMessage(' ⛔️ No Input');
    }
    // when the guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = ' 🥳 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1)  {
            document.querySelector('.message').textContent = 
            guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = ' 💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    

    // when guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1)  {
    //         score--;
    //         document.querySelector('.message').textContent = ' 📈 Too high';
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = ' 💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    // when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.message').textContent = ' 📉 Too low';
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = ' 💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.guess').value = '';
});