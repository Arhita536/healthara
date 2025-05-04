let selectedMood = "";
let timerInterval;

function setMood(mood) {
  selectedMood = mood;
  updateMusicSuggestions();
  updateActivitySuggestions();
}

function updateMusicSuggestions() {
  const musicList = document.getElementById("music-list");
  musicList.innerHTML = "";  // Clear previous music suggestions

  let musicSuggestions = [];
  if (selectedMood === 'calm') {
    musicSuggestions = ["Soft Rain Sounds", "Nature Walk", "Gentle Ocean Waves"];
  } else if (selectedMood === 'stressed') {
    musicSuggestions = ["Calming Meditation Music", "Guided Breathing", "Relaxing Soundscapes"];
  } else if (selectedMood === 'happy') {
    musicSuggestions = ["Upbeat Instrumentals", "Positive Energy Music", "Cheerful Tunes"];
  } else if (selectedMood === 'anxious') {
    musicSuggestions = ["Deep Breathing Sounds", "Soothing Piano", "Slow Rhythmic Music"];
  } else if (selectedMood === 'tired') {
    musicSuggestions = ["Soft Sleep Music", "Lullaby Sounds", "Calm Night Tunes"];
  } else if (selectedMood === 'excited') {
    musicSuggestions = ["Energetic Beats", "Motivational Music", "Exciting Tunes"];
  } else if (selectedMood === 'bored') {
    musicSuggestions = ["Chill Vibes", "Ambient Soundscapes", "Relaxing Background Music"];
  }

  musicSuggestions.forEach((music) => {
    const li = document.createElement("li");
    li.textContent = music;
    musicList.appendChild(li);
  });
}

function updateActivitySuggestions() {
  const activityList = document.getElementById("activity-list");
  activityList.innerHTML = "";  // Clear previous activity suggestions

  let activities = [];
  if (selectedMood === 'calm') {
    activities = ["Mindful Breathing", "Gentle Yoga", "Walking Meditation"];
  } else if (selectedMood === 'stressed') {
    activities = ["Progressive Muscle Relaxation", "Deep Breathing", "Visualization Techniques"];
  } else if (selectedMood === 'happy') {
    activities = ["Gratitude Journal", "Stretching", "Creative Writing"];
  } else if (selectedMood === 'anxious') {
    activities = ["Box Breathing", "Sipping Herbal Tea", "Guided Meditation"];
  } else if (selectedMood === 'tired') {
    activities = ["Power Nap", "Gentle Stretches", "Mindful Breathing"];
  } else if (selectedMood === 'excited') {
    activities = ["Goal Setting", "Jumping Jacks", "Motivational Quotes"];
  } else if (selectedMood === 'bored') {
    activities = ["Listen to Music", "Watch a Short Video", "Take a Walk"];
  }

  activities.forEach((activity) => {
    const li = document.createElement("li");
    li.textContent = activity;
    activityList.appendChild(li);
  });
}

function startTimer(minutes) {
    let timeLeft = minutes * 60;
    const timerElement = document.getElementById("timer");
    const sound = document.getElementById("endSound");
  
    clearInterval(timerInterval);  // Clear any existing timer
    timerInterval = setInterval(function () {
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      timerElement.textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        sound.play();  // Play the bell sound
        alert("Time's up! Take a moment to reflect.");
      }
      timeLeft--;
    }, 1000);
  }
   

// Drawing Pad Functionality
const canvas = document.getElementById('drawing-pad');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.width = 500;
canvas.height = 300;

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});

canvas.addEventListener('mouseout', () => {
  drawing = false;
});

// Ask if the user wants to draw
function askToDraw() {
    const response = confirm("Would you like to draw?");
    if (response) {
      window.location.href = "canvas.html"; // Ensure this file exists!
    }
  }
  