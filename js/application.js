$(document).ready(function(){

var rightAnswer = 0;
var secLeft = 10;
var timer;
var playerInput = $('#solution-input');
var clock = $('#secondsLeft');
var playerScore = 0;

var randomGen = function () {
  return Math.round((Math.random() * 10));
}

var term1 = randomGen();
var term2 = randomGen();
var genEqn = function () {
  $('#num1').text(term1);
  $('#num2').text(term2);
}


timer = setInterval(keepTime, 1000);

function keepTime() {
  clock.text(secLeft);
  secLeft --;
  clearInterval(timer);
  if (secLeft < 1) {
    endGame();
  }
}


function chkAnswer() {
  var answer = playerInput.val();
  if ((term1+term2) == answer) {
    secLeft += 10;
    rightAnswer ++;
    playerInput.css({'border-color':'blue'});
    genEqn();
  } else {
    playerInput.css({'border-color':'red'});
  };
}

function endGame() {
  $('#gameover-box').removeClass('hide');
  $('#answer-box').hide();
  clearInterval(timer);

}

genEqn();
playerInput.keyup(chkAnswer);


});
