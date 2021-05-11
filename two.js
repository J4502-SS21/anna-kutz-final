"use strict";

var allInputElements = document.getElementsByTagName('input');
var submitButton = document.getElementById("submit");
var answerElement = document.getElementById("answerTally");


var correctAnswers = ["False", "WWI and WWII", "MSW", "Trends", "All of the above"];
var numberOfCorrectAnswers;

var eachInput;

submitButton.addEventListener('click', function() {

  numberOfCorrectAnswers = 0;
  for (var i = 0; i < allInputElements.length; i++) {
      if (allInputElements[i].type === 'radio' && allInputElements[i].checked) {
          // get value, set checked flag or do whatever you need to
          if (correctAnswers.indexOf(allInputElements[i].value) > - 1) {
            console.log(allInputElements[i].value + " is correct");
            numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
          }
      }
  }

  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> correct!";

});
