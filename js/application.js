$(document).ready(function(){

  var firstNum;
  var secondNum;
  var points=0;
  var $userInput = $("#solution-input");
  var $timeNode = $("#secondsLeft");
  var startTimer;

  function numberGenerator (x){
    firstNum = parseInt((Math.random()*x+1));
    secondNum = parseInt((Math.random()*x+1));
    $("#num1").text(firstNum);
    $("#num2").text(secondNum);
  }

  function checkAddition(first, second, input){
    var solution = first+second;
    if (input==solution){
      $userInput.css({"border-color":"blue"});
      $userInput.val('');
      points = points+5;
      numberGenerator(10);
      increaseTimeByTenSecond();
    } else {
      $userInput.css({"border-color":"red"});
    };
  }

  function startGame(){
    $inputValue = parseInt($userInput.val());
    clearInterval(startTimer);
    startClock();
    checkAddition(firstNum, secondNum, $inputValue)
  }

  function startListener (){
    $userInput.keyup(startGame);
  }

  function reduceTimeByOneSecond() {
    var holder = parseInt($timeNode.text()) -1;
    if (holder <=-1) {
      gameOver();
    } else {
      $timeNode.text(holder);
    }
  }

  function increaseTimeByTenSecond() {
    var holder = parseInt($timeNode.text()) +10;
    $timeNode.text(holder);
    }

  function startClock() {
    startTimer = setInterval(reduceTimeByOneSecond, 1000);
  };

  function gameOver(){
    clearInterval(startTimer);
    $userInput.hide();
    $("#gameover-box").removeClass("hide");
    $("#score").text(points);
    $("#restart-btn").on("click", function(){
      $("#gameover-box").addClass("hide");
      $userInput.show();
      $timeNode.text(10);
      points = 0;
      numberGenerator(3);
      startListener();
    })
  }

  numberGenerator(3);
  startListener();

});

