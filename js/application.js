$(document).ready(function(){

var firstNum;
var secondNum;
var points=0;
var $userInput = $("#solution-input")

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
    } else {
      $userInput.css({"border-width":"2px", "border-color":"red"});
    };
  }

function startGame(){
  $inputValue = parseInt($userInput.val());
  checkAddition(firstNum, secondNum, $inputValue)
}


function startListener (){
  $userInput.keyup(startGame);
}

numberGenerator(3);
startListener();

});

