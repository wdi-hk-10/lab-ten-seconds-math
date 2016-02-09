$(document).ready(function(){
  // your code here

  var $num1 = $('#num1');
  var $num2 = $('#num2');
  var $solution = $('#solution-input');
  var $secondsLeft = $('#secondsLeft');
  var $gameOverBox = $('#gameover-box');
  var $answerBox = $('#answer-box');
  var $restartButton = $('#restart-btn');
  var $score = $('#score');

  var clockId;
  var correctAnswer;
  var points = 0;

  function init () {
    // clockCountdown();
    generateRandomNumbers();
    checkAnswer();
  }

  function startClock () {
    clockId = setInterval(updateSecondsLeft, 1000, -1);
  };

  function updateSecondsLeft (seconds) {
    var timer = parseInt($secondsLeft.text()) + seconds;
    $secondsLeft.text(timer);
    if (timer === 0) {
      gameOver();
    }
  };

  function generateRandomNumbers () {
    var random1 = Math.floor((Math.random() * 10) + 1);
    var random2 = Math.floor((Math.random() * 10) + 1);
    $num1.text(random1);
    $num2.text(random2);
    correctAnswer = random1 + random2;
    return correctAnswer;
  }

  function checkAnswer () {
    $solution.on('input', function() {
      var userAnswer = parseInt($solution.val());
      if (!clockId) {
        startClock();
      }
      if (userAnswer === correctAnswer) {
        points = points + 5;
        updateSecondsLeft(2);  // intentionally reduced from 10 to 2
        $solution.val('');
        $solution.css('border-color', 'white');
        // bonusFeatures()
        generateRandomNumbers();
      }
      else {
        $solution.css({
          outline: 'none',
          border: '1px solid red'
        });
      }
    });
  }

  //function bonusFeatures() {
  //  console.log("hello");
  // }

  function gameOver () {
    clearInterval(clockId);
    clockId = undefined;
    $answerBox.addClass('hidden');//.fadeOut();//
    $gameOverBox.removeClass('hidden');//.delay(1000).fadeIn(1000);/
    $score.text(points);
    restart();
  }

  function restart() {
    $restartButton.on('click', function() {
      $answerBox.removeClass('hidden');
      $gameOverBox.addClass('hidden');
      $secondsLeft.text(10);
      generateRandomNumbers();
      checkAnswer();
      $score.text("");
      points = 0;
    });
  }

  init();

}); // end of document

// To show it: $("#myId").removeClass('hidden');
// To hide it: $("#myId").addClass('hidden');