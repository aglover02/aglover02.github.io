"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTags");
  button.addEventListener("click", displayAllTags);
});

function displayAllTags() {
  const tagListElement = document.getElementById("tagList");
  tagListElement.innerHTML = ""; //clear previous results

  //get a static list of all elements using querySelectorAll.
  const allElements = document.querySelectorAll("*");
  for (let element of allElements) {
    const listItem = document.createElement("li");
    listItem.textContent = element.tagName;
    tagListElement.appendChild(listItem);
  }
}
