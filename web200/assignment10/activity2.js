"use strict";

window.addEventListener("load", function() {
  const inputElements = document.getElementsByTagName("input");
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener("focus", inputFocus);
    inputElements[i].addEventListener("input", inputHandler);
  }
  document.getElementById("submitBtn").addEventListener("click", handleSubmit);
  document.getElementById("title").focus();
});

function inputFocus() {
  document.getElementById("error").innerText = "Enter " + document.activeElement.id + " value.";
}

function inputHandler() {
  if (validateInputs()) {
    document.getElementById("error").innerText = "";
    updateCitation();
  }
}

function validateInputs() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = document.getElementById("year").value.trim();
  const publisher = document.getElementById("publisher").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  
  if (title === "" || author === "" || year === "" || publisher === "" || city === "" || state === "") {
    return false;
  }
  
  if (isNaN(year)) {
    document.getElementById("error").innerText = "Year must be a number!";
    return false;
  }
  
  return true;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateInputs()) {
    document.getElementById("error").innerText = "Please fill in all fields correctly.";
    document.getElementById("output").innerText = "";
    return;
  }
  updateCitation();
}

function updateCitation() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = document.getElementById("year").value.trim();
  const publisher = document.getElementById("publisher").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  
  const book = createBook(title, author, year, publisher, city, state);
  const citation = book.toAPA();
  document.getElementById("output").innerText = citation;
}

function loadTestData(event) {
  document.getElementById("title").value = "The Great Gatsby";
  document.getElementById("author").value = "F. Scott Fitzgerald";
  document.getElementById("year").value = "1925";
  document.getElementById("publisher").value = "Charles Scribner's Sons";
  document.getElementById("city").value = "New York";
  document.getElementById("state").value = "NY";
  document.getElementById("error").innerText = "";
  updateCitation();
}

function createBook(title, author, year, publisher, city, state) {
  return new Book(title, author, year, publisher, city, state);
}

function Book(title, author, year, publisher, city, state) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.publisher = publisher;
  this.city = city;
  this.state = state;
}

Book.prototype.toAPA = function() {
  const formattedAuthor = formatAuthor(this.author);
  return `${formattedAuthor} (${this.year}) ${this.title}. ${this.city}, ${this.state}: ${this.publisher}.`;
};

function formatAuthor(author) {
  const nameParts = author.trim().split(/\s+/);
  if (nameParts.length === 0) {
    return '';
  }
  const lastName = nameParts.pop();
  const initials = nameParts.map(name => name.charAt(0).toUpperCase() + '.').join(' ');
  return `${lastName}, ${initials}`;
}