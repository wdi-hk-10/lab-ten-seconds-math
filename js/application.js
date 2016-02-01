$(document).ready(function(){
  var $num1 = $('#num1');
  var $num2 = $('#num2');
  var $solution = $('#solution-input');
  var $secondsLeft = $('#secondsLeft');
  var $gameOverBox = $('#gameover-box');
  var $answerBox = $('#answer-box');
  var $restartButton = $('#restart-btn');
  var $score = $('#score');

  var answer;
  var points = 0;
  var clockId;

  var startClock = function() {
    clockId = setInterval(updateSecondsLeft, 1000, -1);
  };

  var updateSecondsLeft = function(s) {
    var t = parseInt($secondsLeft.text()) + s;
    $secondsLeft.text(t);
    if (t === 0) {
      gameOver();
    }
  };

  var generateRandomInt = function(max) {
    return Math.floor(Math.random() * max);
  };

  var generateEquation = function() {
    var r1= generateRandomInt(10);
    var r2 = generateRandomInt(10);
    $num1.text(r1);
    $num2.text(r2);
    answer = r1 + r2;
  };

  var checkInput = function() {
    var e = $(this);
    if (!clockId) {
      startClock();
    }

    if (parseInt(e.val()) == answer) {
      points += 5;
      updateSecondsLeft(1);
      e.val('');
      generateEquation();
    }
  };

  var gameOver = function() {
    clearInterval(clockId);
    clockId = undefined;
    $score.text(points);
    $gameOverBox.removeClass('hide');
    $answerBox.addClass('hide');
  };

  var restart = function() {
    $solution.val('');
    $secondsLeft.text(10);
    generateEquation();
    $gameOverBox.addClass('hide');
    $answerBox.removeClass('hide');
    $score.text('');
    points = 0;
  }

  var initialize = function() {
    $solution.on('keyup', checkInput);
    $restartButton.on('click', restart);
    // Get rid of the annoying blue glow and set my border
    $solution.css({
      outline: 'none',
      border: '1px solid red'
    });
  };

  initialize();
  generateEquation();
});
