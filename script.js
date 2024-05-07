'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent =11;
document.querySelector('.score').textContent =11;

document.querySelector('.number').textContent =11;

document.querySelector('.guess').value =110;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

/*
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
*/


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number!!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'you picked the correct number';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;   
        }
    }
    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'your number is too high' : 'Your number is too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})