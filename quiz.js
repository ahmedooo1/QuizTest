const quizData = [  
  {
    image: "https://th.bing.com/th/id/R.94fe890b36f74cd5f76f31d928987ead?rik=y4yxRFsri1IXsQ&pid=ImgRaw&r=0",
    question: "The sun ____ in the east",
    choices: ["rises", "rised", "rise", "rising"],
    answer: "rises"
    },
    {
    image: "https://i.pinimg.com/736x/32/97/20/329720c8a65438eb1ebc80fdb64fd8ab--tennis.jpg",
    question: "She ____ tennis every Sunday.",
    choices: ["playes", "plays", "playing", "play"],
    answer: "plays"
    },
    {
    image: "https://th.bing.com/th/id/OIP.ANSZ6mA8VU8Om8dONPBRXgHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7",
    question: "I like _____ coffee in the morning",
    choices: ["drinking", "to drink", "would to drink", "drinking"],
    answer: "to drink"
    },
    {
    image: "https://th.bing.com/th/id/R.024faf7e7bae41c306d4fb96ff52d801?rik=c1m4vEFIrftrFw&riu=http%3a%2f%2fcontent.wtsp.com%2fphoto%2f2017%2f05%2f03%2fdogbarking_1493835039380_9365526_ver1.0.jpg&ehk=cGRo2whFUmFp33xO4MTUUEyZaJXcuXcPS9vtsY5oWfI%3d&risl=&pid=ImgRaw&r=0",
    question: "Dogs ___",
    choices: ["barks", "barking", "bark", "bark's"],
    answer: "bark"
    },
    {
    image: "https://cdn.images.dailystar.co.uk/dynamic/1/photos/686000/936x622/34686.jpg",
    question: "They ___ in London.",
    choices: ["lives", "will live", "would lives", "live"],
    answer: "live"
    },
    {
    image: "https://media.edutopia.org/styles/responsive_2880px_original/s3/masters/2018-11/iStock-1005285232_master.jpg",
    question: "He ___ as a teacher",
    choices: ["workes", "want to works", "works", "working"],
    answer: "works"
    },
    {
    image: "https://typeset-beta.imgix.net/rehost/2016/9/13/7db36bb8-2ab3-4223-a4e0-422b2a54d762.png?w=1200&h=630&auto=format&q=70&fit=crop&crop=faces",
    question: "We ___ to the gym three times a week",
    choices: ["are going", "going", "go", "will go"],
    answer: "go"
    },
      {
        image: "https://th.bing.com/th/id/OIP.ubL3G7vmfLwzLHxni0FgmQHaE8?pid=ImgDet&rs=1",
        question: "The train ____ at 9:00 AM",
        choices: ["arrived", "arriving", "arrive", "arrives"],
        answer: "arrives"
        },
        {
        image: "https://i.ytimg.com/vi/vhk6qihcFhU/maxresdefault.jpg",
        question: "My sister ____ Spanish fluently",
        choices: ["speaks", "speaking", "have to speaks", "will speaks"],
        answer: "speaks"
        },
        {
        image: "https://lh6.googleusercontent.com/proxy/OOHzUwljxZp2EOkdja3s-Yn2Gouai-g-V1JZXHNnwCNg-971HKB7I0DkhjeryUEdAYw73M8LBmX_x_9KMk-NcQE4RQ=s0-d",
        question: "The Earth ____ around the sun",
        choices: ["revolve", "revolvies", "revolves", "revolvesing"],
        answer: "revolves"
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
   
