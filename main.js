let countdown = document.getElementById("countdown-details");
let timeElemnts = document.getElementsByClassName("timeContainer");

// Set the target date and time for the countdown
const targetDate = new Date(new Date().getTime() + 190000000).getTime();

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const remainingTime = targetDate - currentDate;
  if (remainingTime <= 0) {
    // If the countdown is over, display a message and clear the interval
    countdown.innerHTML = "Countdown Over!";
    clearInterval(countdownInterval);
  } else {
    // Convert remaining time to hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    timeElemnts[0].innerHTML = days;
    timeElemnts[1].innerHTML = hours;
    timeElemnts[2].innerHTML = minutes;
    timeElemnts[3].innerHTML = seconds;
  }
}
