//this displays the selected date's year, month, and day.

'use strict';

window.addEventListener("load", () => {
  //add event listener for date picker
  const datePicker = document.getElementById("date");
  datePicker.addEventListener("input", displaySelectedDate);
});

function displaySelectedDate() {
  const dateInput = document.getElementById("date").value;

  if (!dateInput) return;

  const selectedDate = new Date(dateInput);
  document.getElementById("selected-year").textContent = selectedDate.getUTCFullYear();
  document.getElementById("selected-month").textContent = selectedDate.getUTCMonth() + 1; // Months are 0-based
  document.getElementById("selected-day").textContent = selectedDate.getUTCDate();
}
