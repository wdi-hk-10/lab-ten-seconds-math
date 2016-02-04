$(document).ready(function(){
  // Variables
  var keyTrigger = 0;
  var num1 = $('#num1');
  var num2 = $('#num2');
  var timeout = null;
  var timer = null;
  var scoreTracker = 1;

  // Functions

  var startCountdown = function(time, pause, callback){
    timer = time;
    if (time==0)
      timesUp();
    else {
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        startCountdown(time-1, pause, callback)
      }, pause);
    }
    $('#secondsLeft').html(timer);
  }

  var timesUp = function(){
    console.log ('timesUp');
    clearTimeout;
    $('#score').html(scoreTracker);
    // 1. #answerbox will disappear
    $('#answer-box').addClass('hide');
    // 2. Hidden divs will become visible
    $('#gameover-box').removeClass('hide');
    // 3. #score will be displayed
    // Actions that occur when timer hits zero:

  }
  var correctAnswer = function(){
    // What happens if answer is correct.
    // 1. Adds 1 second to timer
    console.log ("correct")
    timer+=1;
    console.log(timer);
    clearTimeout();
    startCountdown(timer, 1000, timesUp);
    // 2. Loads random numbers into #num1 and #num2
    num1.html(Math.floor((Math.random()* 20) +1));
    num2.html(Math.floor((Math.random()* 20) +1));
    // 3. Clears the solution input
    $('#solution-input').val('');
    // 4. Adds 1 point to the score tracker
    scoreTracker+=5;
  }



  var checkForAnswer = function(){
      // 1. If keyTrigger = 1, start timer;
    var solutionInput = parseInt($('#solution-input').val());
    var $num1 = parseInt(num1.html());
    var $num2 = parseInt(num2.html());
    console.log(keyTrigger);
    keyTrigger++;
    if (keyTrigger===1) {
      startCountdown(10, 1000, timesUp);
      $('#solution-input').val('');
      num1.html(Math.floor((Math.random()* 25) +1));
      num2.html(Math.floor((Math.random()* 25) +1));
    } // 2. Check if #solutioninput = num1 + num2
    if ((keyTrigger > 1)&&($num1 + $num2 === solutionInput)){
      // 3. If true, apply correctAnswer function
      correctAnswer();
    }
  }

  var playAgain = function(){
    // 1. Resets timer.
    startCountdown(10, 1000, timesUp);
    // 2. Resets score.
    scoreTracker = 0;
    // 3. Hides gameoverBox & shows answer-box.
    $('#answer-box').removeClass('hide');
    $('#gameover-box').addClass('hide');
    // 4. Play game()
  }

  // Event listeners
  // 1. #solutioninput listener -

  $('#solution-input').on("keyup",checkForAnswer);

  // 2. Play again button - check if clicked
  $('#restart-btn').on("click",playAgain);


});
