
const quizData = [  
  {
    image: "https://th.bing.com/th/id/R.7dd46fe88523aa8b11ca28348831833c?rik=dw88SfJStVOT1w&pid=ImgRaw&r=0",
    question: "In which city is the Eiffel Tower located?",
    choices: ["Marseille", "Lyon", "Paris", "Bordeaux"],
    answer: "Paris"
    },
    {
    image: "https://th.bing.com/th/id/R.9af490070ca77698bf4a623050b78cad?rik=KDW%2bJKSgb4lSKg&pid=ImgRaw&r=0",
    question: "In which palace is the Hall of Mirrors located?",
    choices: ["The Louvre", "The Royal Palace", "The Palace of the Popes", "The Palace of Versailles"],
    answer: "The Palace of Versailles"
    },
    {
    image: "https://i0.wp.com/snagfilms-a.akamaihd.net/73/6f/225c99c94cc288e917ffb4bf0b76/8220-lec38-1536x865.jpg",
    question: "Which monument commemorates the victories of Napoleon Bonaparte?",
    choices: ["The Sacré-Cœur", "Place Vendôme", "The Arc de Triomphe", "The Pyramid of the Louvre"],
    answer: "The Arc de Triomphe"
    },
    {
    image: "https://static.cnews.fr/sites/default/files/catacombes_0.jpg",
    question: "What is the name of the underground ossuary that contains the remains of six million people?",
    choices: ["The Catacombs", "The Metro", "The Sewers", "The Louvre"],
    answer: "The Catacombs"
    },
    {
    image: "https://cdn.britannica.com/85/83885-050-9CDCFEA9/Notre-Dame-de-Paris-France.jpg",
    question: "What is the name of the cathedral located on the Île de la Cité in Paris?",
    choices: ["Notre-Dame", "Saint-Paul", "Saint-Sulpice", "Sacré-Cœur"],
    answer: "Notre-Dame"
    },
    {
    image: "https://i.pinimg.com/originals/5c/99/1d/5c991d5fefce332ede3f12f7acee9710.jpg",
    question: "In which city is the largest royal fortress in France located?",
    choices: ["Vincennes", "Fontainebleau", "Blois", "Chambord"],
    answer: "Vincennes"
    },
    {
    image: "https://th.bing.com/th/id/R.3b80835fd54c85499475bad42a617122?rik=U0cImBADtZohYg&pid=ImgRaw&r=0",
    question: "In which museum is Leonardo da Vinci's Mona Lisa located?",
    choices: ["The Musée d'Orsay", "The Centre Pompidou", "The Louvre", "The Musée Rodin"],
    answer: "The Louvre"
    },
      {
        image: "https://www.francetvinfo.fr/image/75ncrjyhu-b1b4/578/325/19185807.jpg",
        question: "In which château is a double-revolution staircase attributed to Leonardo da Vinci located?",
        choices: ["Chenonceau", "Amboise", "Azay-le-Rideau", "Chambord"],
        answer: "Chambord"
        },
        {
        image: "https://th.bing.com/th/id/R.a4f485be1e7ae25ff17a0450391abd20?rik=gZWWIBcoHX0m7A&pid=ImgRaw&r=0",
        question: "In which French region is Mont-Saint-Michel located?",
        choices: ["Brittany", "Normandy", "Pays de la Loire", "Centre-Val de Loire"],
        answer: "Normandy"
        },
        {
        image: "https://i0.wp.com/www.playingtheworld.com/wp-content/uploads/2020/07/%C2%A9playingtheworld-chateau-loire-chenonceau-voyage-5.jpg?w=2160&ssl=1",
        question: "In which château of the Loire Valley is a gallery built over the Cher river located?",
        choices: ["Azay-le-Rideau", "Chenonceau", "Amboise", "Blois"],
        answer: "Chenonceau"
        }
  ];
  
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
    questionEl.innerHTML = `you can do better !`;
    imageEl.innerHTML = "";
    choicesEl.innerHTML = "";
    nextBtn.style.display='none';
    celebrate();
    if(score > 5){
      questionEl.innerHTML = `CONGRATS !`;
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
   
