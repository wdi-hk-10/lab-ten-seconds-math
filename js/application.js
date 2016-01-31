$(document).ready(function(){
  // your code here

  var sec;
  var timer;
  var correctAnswer;
  var score = 0;

  function init () {
    //clockCountdown();
    generateNumbers();
    checkAnswer();
  }

  function generateNumbers () {
    var num1 = Math.floor((Math.random() * 10) + 1);
    var num2 = Math.floor((Math.random() * 10) + 1);
    $('#num1').text(num1);
    $('#num2').text(num2);
    correctAnswer = num1 + num2;
    return correctAnswer;
  }

  function clockCountdown () {
    console.log("Hello");
    sec = 10;
    timer = setInterval(function() {
    $('#secondsLeft').text(sec--);
      if (sec <= -1) { // why does this need to be -1, not 0.
        gameOver();
      }
    },1000);
  }

  function checkAnswer () {
    $('#solution-input').on('input', function() {
      clockCountdown();
      userAnswer = parseInt($('#solution-input').val());
      if (userAnswer === correctAnswer) {
        sec = sec + 10;
        score = score + 5;
        $('#solution-input').val('');
        $('#solution-input').css('border-color', 'white');
        bonusFeatures()
        generateNumbers();
      }
      else {
      $('#solution-input').css('border-color', 'red');
      }
    });
  }

  function bonusFeatures() {
    console.log("hello");
  }

  function gameOver () {
    $('#answer-box').addClass('hidden');//.fadeOut();//
    $('#gameover-box').removeClass('hidden');//.delay(1000).fadeIn(1000);/
    $('#score').text(score);
    restart();
  }

  function restart() {
    $('#restart-btn').on('click', function() {
      $('#answer-box').removeClass('hidden');
      $('#gameover-box').addClass('hidden');
      clearInterval(timer);
      $('#secondsLeft').text(10);
      generateNumbers();
      checkAnswer();
    });
  }

  init();

}); //end of document

// To show it: $("#myId").removeClass('hidden');
// To hide it: $("#myId").addClass('hidden');