// Pomodoro Timer
let timerInterval;
let timeLeft = 25 * 60;

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);

// Function to generate options for the time picker
function generateOptions(id, range) {
    const select = document.getElementById(id);
    for (let i = 0; i <= range; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = String(i).padStart(2, '0'); // Ensure leading zeros
        select.appendChild(option);
    }
}

// Populate hours, minutes, and seconds
generateOptions('hours', 23);   // 0 to 23 hours
generateOptions('minutes', 59); // 0 to 59 minutes
generateOptions('seconds', 59); // 0 to 59 seconds

// Set timer based on user input
function setTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    timeLeft = hours * 3600 + minutes * 60 + seconds;
    updateTimerDisplay();
}

document.getElementById('hours').addEventListener('change', setTimer);
document.getElementById('minutes').addEventListener('change', setTimer);
document.getElementById('seconds').addEventListener('change', setTimer);

// Start the timer
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
            flipCards();
        } else {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('minutes-card').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds-card').textContent = String(seconds).padStart(2, '0');
}

// Flip card effect
function flipCards() {
    const minuteCard = document.getElementById('minutes-card');
    const secondCard = document.getElementById('seconds-card');

    // Apply flip animation
    minuteCard.classList.add('flip');
    secondCard.classList.add('flip');

    // Remove flip animation after it finishes
    setTimeout(() => {
        minuteCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 600);  // Animation duration (adjust if necessary)
}
