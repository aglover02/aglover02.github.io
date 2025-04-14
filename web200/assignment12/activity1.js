"use strict";

function generateExpressions(multiplier, count) {
  const results = []; //array to hold multiplication results
  //loop to populate the results array
  for (let i = 1; i <= count; i++) {
    results.push(multiplier * i);
  }
  return results;
}


function displayResults(multiplier, results) {
  //get the output container element
  const outputContainer = document.getElementById("output");
  //clear any previous results
  outputContainer.innerHTML = "";

  //loop over each result and create a paragraph element to display the expression
  results.forEach((result, index) => {
    const expressionElement = document.createElement("p");
    expressionElement.textContent = `${multiplier} * ${index + 1} = ${result}`;
    outputContainer.appendChild(expressionElement);
  });
}

function generateClick() {
  //get input values as strings
  const multiplierInput = document.getElementById("multiplier").value;
  const countInput = document.getElementById("count").value;

  //convert inputs to numbers
  const multiplier = parseInt(multiplierInput, 10);
  const count = parseInt(countInput, 10);

  //validate the inputs
  if (isNaN(multiplier) || isNaN(count) || multiplier <= 0 || count <= 0) {
    document.getElementById("output").innerHTML = "Please enter valid positive numbers.";
    return;
  }

  //generate the multiplication expressions array
  const results = generateExpressions(multiplier, count);
  //display the results using newly created HTML elements
  displayResults(multiplier, results);
}

//add an event listener to the Generate button after the DOM is fully loaded
window.addEventListener("load", function () {
  const generateButton = document.getElementById("generateButton");
  if (generateButton) {
    generateButton.addEventListener("click", generateClick);
  }
});
