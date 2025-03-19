//this updates the current date and time display.

'use strict';

window.addEventListener("load", () => {
  setInterval(updateCurrentTime, 1000);
});



function updateCurrentTime() {
  const now = new Date();

  document.getElementById("year").textContent = now.getFullYear();
  document.getElementById("month").textContent = now.getMonth() + 1; //months are 0-based
  document.getElementById("day").textContent = now.getDate();
  document.getElementById("hour").textContent = now.getHours();
  document.getElementById("minute").textContent = now.getMinutes();
  document.getElementById("second").textContent = now.getSeconds();
}