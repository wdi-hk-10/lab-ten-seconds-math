$(document).ready(function(){

  // timer
  var counter;
  var count          = 10;
  var $solutionInput = $('#solution-input');

  // equation
  var answer;
  var $num1          = $('#num1');
  var $num2          = $('#num2');
  var $secondsLeft   = $('#secondsLeft');

  // checkAnswer
  var score          = 0;

  // start the game
  $solutionInput.one('keydown', function() {
    counter = setInterval(time, 1000);
    getEquation();
    checkAnswer();
  });

  // counter
  function time() {
    count--;
    $secondsLeft.text(count);
    if (count <= 0) {
      clearInterval(counter);
      gameOver();
    }
  };

  // set math problem
  function getEquation(number) {
    var one = Math.floor(Math.random() * (11 - 1));
    var two = Math.floor(Math.random() * (11 - 1));
    $num1.text(one);
    $num2.text(two);

    answer = one + two;
  };

  function checkAnswer() {
    $solutionInput.keyup(function() {
      var input = parseInt($(this).val());
      if (input === answer) {
        correctAnswer();
      } else {
        $solutionInput.css('border', 'solid red 1px');
      }
    });
  };

  function correctAnswer() {
    score += 5;
    $('#score').text(score);
    count += 10;
    $solutionInput.val("");
    getEquation();
  };

  function gameOver() {
    $solutionInput.css('display', 'none');
    $('#gameover-box').removeClass("hide");
  };

});
