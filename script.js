// ---------------------- DIGITAL CLOCK ----------------------
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2,'0');
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();

// ---------------------- TIMER ----------------------
let timerInterval;

document.getElementById('startTimer').addEventListener('click', () => {
  clearInterval(timerInterval); // stop previous timer
  let time = parseInt(document.getElementById('timerInput').value);
  if (isNaN(time) || time <= 0) {
    alert('Please enter a positive number!');
    return;
  }

  function updateTimer() {
    const minutes = String(Math.floor(time / 60)).padStart(2,'0');
    const seconds = String(time % 60).padStart(2,'0');
    document.getElementById('timerDisplay').textContent = `${minutes}:${seconds}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      alert('⏰ Time’s up!');
    }
    time--;
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
});

// ---------------------- LIGHT/DARK MODE ----------------------
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
