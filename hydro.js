let totalWater = 0;
let dailyGoal = 2; // 2 Liters per day goal
let activities = [
  "Take a sip of water every hour! 🕒",
  "Drink a glass of water before each meal 🍽️",
  "Carry a reusable water bottle everywhere 🥤",
  "Drink a glass of water as soon as you wake up in the morning 🌅",
  "Refill your bottle if it's getting low 🔄"
];

// Get user's water intake from localStorage or default to 0
if (localStorage.getItem("totalWater")) {
  totalWater = parseFloat(localStorage.getItem("totalWater"));
  updateWaterDisplay();
}

// Log water
function logWater() {
  let waterAmount = parseFloat(document.getElementById("waterAmount").value);
  
  if (isNaN(waterAmount) || waterAmount <= 0) {
    alert("Please enter a valid number for the water amount.");
    return;
  }
  
  totalWater += waterAmount;
  localStorage.setItem("totalWater", totalWater);
  updateWaterDisplay();
}

// Update water display and progress
function updateWaterDisplay() {
  document.getElementById("totalWater").textContent = totalWater.toFixed(2) + " L";
  let progressPercent = (totalWater / dailyGoal) * 100;
  if (progressPercent > 100) progressPercent = 100; // Cap at 100%
  document.getElementById("progressBar").style.width = progressPercent + "%";
  
  // Show motivational message and activity suggestions
  showReminderMessage();
  showActivities();
}

// Show reminder message
function showReminderMessage() {
  let reminderMessage = "";
  if (totalWater < 0.5) {
    reminderMessage = "You haven't logged water in a while! Please stay hydrated!";
    document.getElementById("reminderMessage").style.color = "red";
  } else {
    reminderMessage = "Great job! Keep it up!";
    document.getElementById("reminderMessage").style.color = "green";
  }
  document.getElementById("reminderMessage").textContent = reminderMessage;
}

// Show hydration tips
function showActivities() {
  let activityList = document.getElementById("activityList");
  activityList.innerHTML = ""; // Clear previous list
  
  // Show tips based on water intake
  activities.forEach(function(activity) {
    let li = document.createElement("li");
    li.textContent = activity;
    activityList.appendChild(li);
  });
}
