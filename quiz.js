import quizData from 'quizData.js'

  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  
  // Get DOM elements
  const questionEl = document.getElementById("question");
  const imageEl = document.getElementById("image");
  const choicesEl = document.getElementById("choices");
  const nextBtn = document.getElementById("next-btn");
  const scoreN = document.getElementById("scoreN");
  
  // Display the current question, image and choices
  function showQuestion() {
    questionEl.innerHTML = quizData[currentQuestion].question;
    imageEl.innerHTML = `<img src="${quizData[currentQuestion].image}">`;
    choicesEl.innerHTML = "";
    quizData[currentQuestion].choices.forEach((choice) => {
      const choiceEl = document.createElement("div");
      choiceEl.classList.add("choice");
      choiceEl.innerHTML = choice;
      choiceEl.addEventListener("click", checkAnswer);
      choicesEl.appendChild(choiceEl);
    });
  }
  
  // Check if the user's answer is correct
  function checkAnswer(event) {
    const selectedChoice = event.target.innerHTML;
    if (selectedChoice === quizData[currentQuestion].answer) {
      event.target.classList.add("correct");
      event.target.classList.add("correct");
      score++;
    } else {
      event.target.classList.add("incorrect");
    }
    scoreN.innerHTML = `You scored ${score} out of ${quizData.length} !`;

    // Disable clicking on choices
    choicesEl.querySelectorAll(".choice").forEach((choiceEl) => {
      choiceEl.removeEventListener("click", checkAnswer);
    });
    // Disable clicking on Next button until a choice is selected
    nextBtn.disabled = false;
  }
  
  // Go to the next question or end the quiz
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
      nextBtn.disabled = true;
    } else {
      endQuiz();
    }
  }
  



  // Display the final score and disable the Next button
  function endQuiz() {
   
    imageEl.innerHTML = "";
    choicesEl.innerHTML = "";
    nextBtn.style.display='none';
    celebrate();
    if(score > 5){
      questionEl.innerHTML = `CONGRATS !`;
    }else{
      questionEl.innerHTML = `you can do better !`;
    }
  }

  function celebrate() {
    const containerEl = document.getElementById("container");
    containerEl.classList.add("celebration");
    for (let i = 0; i < 100; i++) {
      const confettiEl = document.createElement("div");
      confettiEl.classList.add("confetti");
      containerEl.appendChild(confettiEl);
    }
  }
  
   // Start the quiz by displaying the first question
   showQuestion();
   nextBtn.disabled = true;
   
   // Add event listener to Next button
   nextBtn.addEventListener("click", nextQuestion);
   
