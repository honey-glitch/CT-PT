/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

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
        //answerContainers[questionNumber].style.color = "lightgreen";
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
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What is current transformer (CT) and potential transformer (PT)?",  ///// Write the question inside double quotes
      answers: {
        a: " Used for measurement of high current and high voltage.",                  ///// Write the option 1 inside double quotes
        b: "Used for measurement of low current and high voltage.",                  ///// Write the option 2 inside double quotes
        c: "Used for measurement of high current and low voltage.",                  ///// Write the option 3 inside double quotes
        d: "Used for measurement of low current and low voltage."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "Name the principle on which transformer works and explain briefly?",  ///// Write the question inside double quotes
      answers: {
        a: "Self induction.",                  ///// Write the option 1 inside double quotes
        b: "Mutual induction.",                  ///// Write the option 2 inside double quotes
        c: "Electromechanical energy conversion.",                  ///// Write the option 3 inside double quotes
        d: "Faraday’s law of motion."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },  
    
    {
      question: "What is the use of CT and PT? Why they came into existence?",  ///// Write the question inside double quotes
      answers: {
        a: "for measurement of high current and high voltage.",                  ///// Write the option 1 inside double quotes
        b: "for measurement of low current and high voltage.",                  ///// Write the option 2 inside double quotes
        c: "for measurement of high current and low voltage.",                  ///// Write the option 3 inside double quotes
        d: "for measurement of low current and low voltage."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
    
    {
      question: "What do you mean by multiplying factor of the wattmeter?",  ///// Write the question inside double quotes
      answers: {
        a: "multiplying factor gives the actual reading of a meter.",                  ///// Write the option 1 inside double quotes
        b: "multiplying factor used for measurement of high current and voltage.",                  ///// Write the option 2 inside double quotes
        c: "multiplying factor used to determine the reactive power of load.",                  ///// Write the option 3 inside double quotes
        d: "multiplying factor used to determine the active power of load."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
