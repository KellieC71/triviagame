
(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "What year was Elvis born?",
        answers: {
          a: "1955",
          b: "1935",
          c: "1975",
          d: "1968"
        },
        correctAnswer: "b"
       },
      {
        question: "Where is Elvis Presly's Home,Graceland, located?",
        answers: {
          a: "Las Vegas",
          b: "Chicago",
          c: "Memphis"
        },
        correctAnswer: "c"
      },
      {
        question: "How many gold records does Elvis have?",
        answers: {
          a: "50",
          b: "200",
          c: "117"
        },
        correctAnswer: "c"
      },
      {
        question: "What year did Elvis Die?",
        answers: {
          a: "1971",
          b: "1980",
          c: "1977"
        },
        correctAnswer: "c"
      }
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener("click", showResults);
 


  var audio = new Audio("viv.mp3");

  
  setTimeout(oneMinute, 15000);
  setTimeout(thirtySeconds,  30000);
  setTimeout(timeUp, 60000);
  
  function oneMinute() {
    $("#time-left").append("<h2>About 1 minute Left!</h2>");
    console.log("30 seconds left");
  }
  
  function thirtySeconds() {
    // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
    // console log 5 seconds left
    $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
    console.log("5 seconds left");
  }
  
  function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }  

})();