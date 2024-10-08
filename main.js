
function updateClock() {
    var currentTime = new Date();
     var currentHours = currentTime.getHours();
      var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();

      // Pad the minutes and seconds with leading zeros, if required
          currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
           currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

         // Choose either "AM" or "PM" as appropriate
             var timeOfDay = (currentHours < 12) ? "AM" : "PM";

          // Convert the hours component to 12-hour format if necessary
                   currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
                       currentHours = (currentHours == 0) ? 12 : currentHours;

          // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

      // Update the time display
    document.getElementById("clock").innerHTML = currentTimeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
//end clook



let startTime, elapsedTime = 0, timerInterval;
let isRunning = false;

function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateStopwatch() {
  const currentTime = new Date().getTime() - startTime + elapsedTime;
  document.getElementById('stopwatch').textContent = formatTime(currentTime);
}

document.getElementById('startStop').addEventListener('click', () => {
  if (!isRunning) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateStopwatch, 10);
    document.getElementById('startStop').textContent = 'Stop';
  } else {
    clearInterval(timerInterval);
    elapsedTime += new Date().getTime() - startTime;
    document.getElementById('startStop').textContent = 'Start';
  }
  isRunning = !isRunning;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  document.getElementById('stopwatch').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Start';
});


