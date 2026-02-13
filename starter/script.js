'use strict';

let number = Math.trunc(Math.random() * 20) + 1; // this will encourage to only have number 1 to 20

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//how to add addEventListerer

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // in very basic case if the user doesn't enter any number what should we say

  if (!guess) {
    // console.log(
    //   (document.querySelector('.message').textContent =
    //     'No,Enter a defined value'),
    // );

    displayMessage('NO Number!'); // here we refactor the code using a function
  } else if (guess === number) {
    // console.log(
    //   (document.querySelector('.message').textContent = 'yess Correct Answer'),
    // );

    displayMessage('Yess Correct Answer');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = number;

    //highscore
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (number !== guess) {
    if (score > 1) {
      // console.log(
      //   (document.querySelector('.message').textContent =
      //     number < guess ? 'Too big' : 'Too small'),
      // );

      displayMessage(number < guess ? 'Too big' : 'Too small');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // console.log(
      //   (document.querySelector('.message').textContent = 'you lost the game'),
      // );
      displayMessage('You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // case where number is greater then correct
  // else if (number > guess) {
  //   if (score > 1) {
  //     console.log(
  //       (document.querySelector('.message').textContent = 'Too! low '),
  //     );

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     console.log(
  //       (document.querySelector('.message').textContent = 'you lost the game'),
  //     );
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // where the answer is lesser then correct answer
  // } else {
  //   if (score > 1) {
  //     console.log(
  //       (document.querySelector('.message').textContent = 'Too! bigg'),
  //     );
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     console.log(
  //       (document.querySelector('.message').textContent = 'you lost the game'),
  //     );
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//implementing again button

//first select the element
// implement the addEventListerner
// add the event click and event handle function

document.querySelector('.again').addEventListener('click', function () {
  // number back to question mark
  // answer back to blank
  // score=0;
  // change of color #222;
  // width=15rem
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // console.log(
  //   (document.querySelector('.message').textContent = 'Start guessing...'),
  // );
  displayMessage('Start guessing');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
