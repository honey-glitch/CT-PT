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
      question: "For which combinations of the input variables Wattmeter reading shows the maximum value?",  ///// Write the question inside double quotes
      answers: {
        a: "CT Ratio- 4:1, PT Ratio-440/220, Multiplying Factor- 4, and Load Selector Switch- 500W",                  ///// Write the option 1 inside double quotes
        b: "CT Ratio- 2:1, PT Ratio-440/110, Multiplying Factor- 4, and Load Selector Switch- 500W",                  ///// Write the option 2 inside double quotes
        c: "CT Ratio- 4:1, PT Ratio-440/110, Multiplying Factor- 4, and Load Selector Switch- 1000W",                  ///// Write the option 3 inside double quotes
        d: "CT Ratio- 2:1, PT Ratio-440/220, Multiplying Factor- 2, and Load Selector Switch- 1000W"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "What is the formula for calculating the total power consumed by load?",  ///// Write the question inside double quotes
      answers: {
        a: "VACosΦ",                  ///// Write the option 1 inside double quotes
        b: "3VACosΦ",                  ///// Write the option 2 inside double quotes
        c: "√3VACosΦ",                  ///// Write the option 3 inside double quotes
        d: "4VACosΦ"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
    {
      question: "What is the formula for calculating the %error?",  ///// Write the question inside double quotes
      answers: {
        a: "percent error = [experimental value - theoretical value] / theoretical value x 100%",                  ///// Write the option 1 inside double quotes
        b: "percent error = [theoretical value - experimental value] / theoretical value x 100%",                  ///// Write the option 2 inside double quotes
        c: "percent error = [theoretical value - experimental value] /experimental value x 100%",                  ///// Write the option 3 inside double quotes
        d: "percent error =[calculated value- observed value]/ observed value x 100%"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
    
        {
      question: "What is the maximum value of 3-phase 2 element wattmeter reading by the simulator?",  ///// Write the question inside double quotes
      answers: {
        a: "62",                  ///// Write the option 1 inside double quotes
        b: "125",                  ///// Write the option 2 inside double quotes
        c: "150",                  ///// Write the option 3 inside double quotes
        d: "200"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

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
