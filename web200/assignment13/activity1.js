"use strict";

window.addEventListener("load", function () {
  const form = document.getElementById("userForm");
  const inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", inputFocus);
    inputs[i].addEventListener("input", inputInput);
  }

  form.addEventListener("submit", formSubmit);
  document.getElementById("firstName").focus();
});

//highlights the active element and updates button state.
function inputFocus() {
  document.activeElement.select();
  checkButtons();
}


//validates input on each entry and updates button state.
function inputInput() {
  const element = document.activeElement;

  if (!element.checkValidity()) {
    element.classList.add("invalid");
  } else {
    element.classList.remove("invalid");
  }

  checkButtons();
}

//enables or disables the submit button based on form validity
function checkButtons() {
  const form = document.getElementById("userForm");
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = !form.checkValidity();
}

//handles form submission
function formSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("userForm");
  const userData = getFormData(form);

  displayOutput(userData);
}

//extracts and returns form data as an object
function getFormData(form) {
  return {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    address: form.address.value.trim(),
    city: form.city.value.trim(),
    region: form.region.value.trim(),
    postalCode: form.postalCode.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    dob: form.dob.value
  };
}


//Renders submitted data into the output container.
function displayOutput(data) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Submitted Information";
  outputDiv.appendChild(heading);

  const list = document.createElement("ul");

  for (let key in data) {
    const item = document.createElement("li");
    item.textContent = `${formatLabel(key)}: ${data[key]}`;
    list.appendChild(item);
  }

  outputDiv.appendChild(list);
}

//converts camelCase keys to human-readable labels.

function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, str => str.toUpperCase());
}