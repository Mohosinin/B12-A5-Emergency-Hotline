// Counter states
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
const MIN_COINS_REQUIRED = 20;

// DOM elements for counters and history
const heartCountEl = document.getElementById("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");
const historyListEl = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");

// Get current time string
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// HEART ICON CLICK EVENT HANDLER
function handleHeartClick(event) {
  const icon = event.target;
  if (icon.classList.contains("clicked")) return;
  heartCount++;
  heartCountEl.textContent = heartCount;
  // Change icon style to solid red heart
  icon.classList.remove("fa-regular");
  icon.classList.add("fa-solid", "text-red-500", "clicked");
}

function initHeartIcons() {
  const icons = document.querySelectorAll(".fa-heart");
  for (const icon of icons) {
    icon.style.cursor = "pointer";
    icon.addEventListener("click", handleHeartClick);
  }
}

// COPY BUTTON CLICK EVENT HANDLER
function handleCopyClick(event) {
  const btn = event.currentTarget;
  // Find the number inside this card
  const card = btn.closest(".bg-white");
  if (!card) return;
  const numberEl = card.querySelector("h2.card-title + h2.card-title, h2.card-title + h2, h3");
  if (!numberEl) return;
  const number = numberEl.textContent.trim();
  if (!number) return;
  navigator.clipboard.writeText(number).then(function() {
    alert("Number copied: " + number);
    copyCount++;
    copyCountEl.textContent = copyCount;
  }).catch(function() {
    alert("Unable to copy. Please copy manually.");
  });
}

function initCopyButtons() {
  const buttons = document.querySelectorAll("button");
  for (const btn of buttons) {
    if (btn.querySelector(".fa-copy")) {
      btn.addEventListener("click", handleCopyClick);
    }
  }
}

// CALL BUTTON CLICK EVENT HANDLER
function handleCallClick(event) {
  const btn = event.currentTarget;
  if (coinCount < MIN_COINS_REQUIRED) {
    alert("Insufficient coins to make a call.");
    return;
  }
  const card = btn.closest(".bg-white");
  if (!card) return;
  const serviceTitleEl = card.querySelector("h2.card-title");
  const numberEl = card.querySelector("h2.card-title + h2.card-title, h2.card-title + h2, h3");
  if (!serviceTitleEl || !numberEl) return;
  const serviceName = serviceTitleEl.textContent.trim();
  const number = numberEl.textContent.trim();
  alert("Calling " + serviceName + ": " + number);
  coinCount -= MIN_COINS_REQUIRED;
  coinCountEl.textContent = coinCount;
  addToHistory(serviceName, number);
}

function initCallButtons() {
  const buttons = document.querySelectorAll("button");
  for (const btn of buttons) {
    if (btn.querySelector(".fa-phone")) {
      btn.addEventListener("click", handleCallClick);
    }
  }
}

// Add call record to history
function addToHistory(serviceName, number) {
  const time = getCurrentTime();
  const li = document.createElement("li");
  li.className = "p-4 flex justify-between bg-[#fafafa] mt-2 rounded";
  li.innerHTML = '<span><strong>' + serviceName + '</strong><br><small><span class="text-gray-600">' + number + '</span></small></span><span class="text-xs text-gray-600">' + time + '</span>';
  historyListEl.insertBefore(li, historyListEl.firstChild);
}

// Clear history button event
function initClearHistoryButton() {
  clearHistoryBtn.addEventListener("click", function() {
    historyListEl.innerHTML = "";
  });
}

// Initialize all event listeners
function init() {
  initHeartIcons();
  initCopyButtons();
  initCallButtons();
  initClearHistoryButton();
}

// Run initialization after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
  init();
});
