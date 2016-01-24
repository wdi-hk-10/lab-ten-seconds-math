$(document).ready(function(){

var firstNum = parseInt((Math.random()*10+1));
var secondNum = parseInt((Math.random()*10+1));
var $userInput = $("#solution-input").val();

  function numberGenerator (){
    firstNum = parseInt((Math.random()*10+1));
    secondNum = parseInt((Math.random()*10+1));
    $("#num1").text(firstNum);
    $("#num2").text(secondNum);

  }

  function checkAddition(first, second, input){
    var solution = first+second;
    if (input===solution){
      console.log("true");
    } else console.log("false");
  }

numberGenerator();

checkAddition(firstNum, secondNum, $userInput);



});
