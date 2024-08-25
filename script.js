const clock = document.getElementById('clock');
const time = document.getElementById('time');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const is24Hour = urlParams.get('time') == '24';
const backgroundColor = urlParams.get('theme') == 'light' ? '#FFFFFF' : '#191919';
const fontColor = urlParams.get('theme') == 'light' ? '#37352F' : '#D4D4D4';

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.backgroundColor = backgroundColor;
  clock.style.color = fontColor;
  document.body.style.color = fontColor;
  updateTime();
});

// Helper function to add 0 to front if required
function formatWithZero(num) {
  return `${num < 10 ? '0' : ''}${num}`;
}

function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (!is24Hour) {
    hours = hours % 12 || 12;
    time.innerText = `${hours}:${formatWithZero(minutes)}`;
  } else {
    time.innerText = `${formatWithZero(hours)}:${formatWithZero(minutes)}`;
  }

  clock.style.color = fontColor;
  document.body.style.color = fontColor;
}

// Update time every minute
setInterval(updateTime, 60 * 1000);
