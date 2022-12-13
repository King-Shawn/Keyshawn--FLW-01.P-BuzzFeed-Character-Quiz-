document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");

  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
  let userInput1 = q1.value;
  let userInput2 = q2.value;
  let userInput3 = q2.value;
    
    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
  if (userInput1 === "Summer"){
    q1Score = 1;
  } 
  else if (userInput1 === "Winter"){
    q1Score = 2;
  }
  else if (userInput1 === "Fall"){
    q1Score = 3;
    }
  else if (userInput1 === "Spring"){
    q1Score = 4;
    }

    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
    if (userInput2 === "Country"){
      q2Score = 1;
    }
    else if (userInput2 === "City"){
      q2Score = 2;
    }
    else if (userInput2 === "Suburb"){
      q2Score = 3;
    }
  
    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
    if (userInput3 === "A little"){
      q3Score = 1;
    }
    else if (userInput3 === "Alot"){
      q3Score = 2;
    }
    else if (userInput3 === "Good amount"){
      q3Score = 3;
    }

    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let totalScore = q1Score + q2Score + q3Score

    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore <= 4){
      displayResult.innerHTML = "Indiana bests fits you"; 
      imgSrc.src = "https://www.factmonster.com/sites/infoplease.com/files/inline-images/mindiana.gif";
    }
    else if (totalScore <= 6){
      displayResult.innerHTML = "Minnesota bests fits you";
      imgSrc.src = "https://besthotelshome.com/wp-content/uploads/2021/02/Tourist-Map-of-Minnesota.-Travel-and-Attractions.jpg";
    }
    else if (totalScore <= 8){
      displayResult.innerHTML = "New York bests fits you";
      imgSrc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/New_York_regions_map.png/1200px-New_York_regions_map.png";
    }
    else if (totalScore <= 10){
      display.Result.innerHTML = "Maryland bests fits you"; 
      imgSrc.src = "https://saddlemt.com/assets/images/715dtrvyaol_sl1500_.jpg";
    }
  };
}