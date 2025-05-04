function startQuiz() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
      alert("Please enter your name!");
      return;
    }
    localStorage.setItem("username", username);
    window.location.href = "quiz.html";
  }
  
  function navigateTo(page) {
    window.location.href = `${page}.html`;
  }
  
  let currentQuestion = 0;
  let userScore = 0;
  
  const questions = [
    {
      question: "How many servings of fruits and vegetables do you eat daily?",
      options: ["Less than 3", "3 to 5", "More than 5"],
      answers: [1, 2, 3] // 1 is least healthy, 3 is most healthy
    },
    {
      question: "How often do you engage in physical activity (exercise)?",
      options: ["Rarely", "1-3 times a week", "4-5 times a week"],
      answers: [1, 2, 3]
    },
    {
      question: "Do you have a balanced diet that includes protein, carbs, and fats?",
      options: ["No", "Sometimes", "Yes"],
      answers: [1, 2, 3]
    },
    {
      question: "How many hours of sleep do you get on average per night?",
      options: ["Less than 6", "6 to 8", "More than 8"],
      answers: [1, 2, 3]
    },
    {
      question: "How often do you drink water throughout the day?",
      options: ["Rarely", "Occasionally", "Regularly"],
      answers: [1, 2, 3]
    },
    {
      question: "How often do you eat junk food like chips, pizza, or sweets?",
      options: ["Often", "Sometimes", "Rarely"],
      answers: [1, 2, 3]
    },
    {
      question: "Do you take time to relax or meditate?",
      options: ["No", "Occasionally", "Regularly"],
      answers: [1, 2, 3]
    },
    {
      question: "How often do you check in with your mental health (stress, mood)?",
      options: ["Rarely", "Sometimes", "Regularly"],
      answers: [1, 2, 3]
    },
    {
      question: "Do you often feel fatigued or low energy?",
      options: ["Yes", "Sometimes", "No"],
      answers: [1, 2, 3]
    },
    {
      question: "Do you have a consistent morning or night routine for self-care?",
      options: ["No", "Sometimes", "Yes"],
      answers: [1, 2, 3]
    }
  ];
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    document.querySelector('.question').textContent = question.question;
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
      button.textContent = question.options[index];
    });
  }
  
  function nextQuestion(answer) {
    userScore += answer;
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }
  
  function displayResult() {
    let remark = "";
    let bgColor = "";
  
    if (userScore >= 25) {
      remark = "You're a health hero! Keep it up! 💪";
      bgColor = "w3-pale-green";
    } else if (userScore >= 18) {
      remark = "You're doing okay, but there's room for improvement 🌿";
      bgColor = "w3-pale-yellow";
    } else {
      remark = "Time to take your health seriously! 🍔➡️🥗";
      bgColor = "w3-pale-red";
    }
  
    document.getElementById("quiz-container").innerHTML = `
      <div class="w3-container ${bgColor} w3-padding-large w3-round-large">
          <h2>Your Health Personality:</h2>
          <p>${remark}</p>
          <button class="w3-button w3-teal w3-margin-top" onclick="goHome()">🏠 Back to Home</button>
      </div>
      <div class="w3-bar w3-dark-grey w3-bottom w3-center">
        <a href="index.html" class="w3-bar-item w3-button">🏠 Home</a>
        <a href="food.html" class="w3-bar-item w3-button">🍽️ Aaj Kya Khayein</a>
        <a href="mini_monk.html" class="w3-bar-item w3-button">🧘 Mini Monk</a>
        <a href="hydro.html" class="w3-bar-item w3-button">💧 Hydro Buddy</a>
        <a href="exercise.html" class="w3-bar-item w3-button">🤸 Exercise</a>
        <a href="sleep.html" class="w3-bar-item w3-button">🌙 Sleep</a>
      </div>
    `;
  }
  
  function goHome() {
    window.location.href = "index.html"; // Change this to your actual homepage file
  }
  
  
  // Initial load
  loadQuestion();
  
  
  // Load username
  window.onload = function() {
    const user = localStorage.getItem("username") || "Friend";
    const greeting = document.getElementById("greeting");
    if (greeting) greeting.innerText = `Hello, ${user}! Ready for the quiz?`;
  
    if (document.getElementById("quiz-box")) {
      showQuestion();
    }
  };  

  // Global variable to store selected emoji
// Global variable to store selected emoji
let selectedEmoji = '';

// Function to set the selected emoji and display it
function setEmoji(emoji) {
  selectedEmoji = emoji;
  document.getElementById('mood-display').innerText = `Your Mood: ${selectedEmoji}`;
}

// Function to save journal entry as a text file
function saveJournalEntry() {
  const journalEntry = document.getElementById('journal-entry').value;
  if (journalEntry.trim() === "") {
    alert("Please write something in your journal!");
  } else {
    const fileContent = `Mood: ${selectedEmoji}\n\nJournal Entry: \n${journalEntry}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `journal_${new Date().toISOString().split('T')[0]}.txt`; // Download file with current date as filename
    link.click();

    // Clear the journal entry field and emoji display after saving
    document.getElementById('journal-entry').value = "";
    document.getElementById('mood-display').innerText = "";
    alert("Your journal has been saved!");
  }
}

// Function to navigate to other pages (e.g., bedtime story)
function navigateTo(page) {
  window.location.href = `${page}.html`;
}
