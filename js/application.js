$(document).ready(function(){
  // your code here

  var num1 = 0;
  var num2 = 0;

  function generateNumbers () {
    var num1 = Math.floor((Math.random() * 10) + 1);
    var num2 = Math.floor((Math.random() * 10) + 1);
    $("#num1").text(num1);
    $("#num2").text(num2);
  }

  function clockCountdown () {
    var sec = 10;
    var timer = setInterval(function() {
      $("#secondsLeft").text(sec--);
        if (sec === 0) {
          $("#gameover-box").delay(1000).fadeIn(1000);
          $("#answer-box").hide(1000).fadeOut();
        }
      },1000);
    }


//function checkAnswer() {

//}


function init () {
  generateNumbers();
  clockCountdown();
}

init();

}); //end of document