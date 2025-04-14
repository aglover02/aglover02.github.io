(function () {
    "use strict";
  
    const GRADE_INPUT_ID = "gradeInput";
    const GRADES_LIST_ID = "gradesList";
    const AVERAGE_OUTPUT_ID = "averageOutput";
    const CALCULATE_BUTTON_ID = "calculateButton";
  
    function init() {
      //local array to hold the grade values
      let grades = [];
  
      document
        .getElementById(CALCULATE_BUTTON_ID)
        .addEventListener("click", function () {
          handleCalculateClick(grades);
        });
  
      document
        .getElementById(GRADE_INPUT_ID)
        .addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            handleAddGrade(grades);
          }
        });
    }
  
    function handleAddGrade(grades) {
      const gradeInputElement = document.getElementById(GRADE_INPUT_ID);
      const gradeValue = gradeInputElement.value.trim();
  
      if (gradeValue === "") {
        return;
      }
  
      //convert the input to a number
      const gradeNumber = parseFloat(gradeValue);
  
      //validate the input 
      if (isNaN(gradeNumber) || gradeNumber < 0 || gradeNumber > 100) {
        alert("Please enter a valid grade between 0 and 100.");
        gradeInputElement.value = "";
        return;
      }
  
      //add the valid grade to the grades array
      grades.push(gradeNumber);
  
      //update the displayed list of grades
      updateGradesList(grades);
  
      //clear the input field
      gradeInputElement.value = "";
    }
  
    function updateGradesList(grades) {
      const gradesListElement = document.getElementById(GRADES_LIST_ID);
  
      //clear any existing list items
      gradesListElement.innerHTML = "";
  
      //create and append a list item for each grade
      grades.forEach((grade) => {
        const listItem = document.createElement("li");
        listItem.textContent = grade;
        gradesListElement.appendChild(listItem);
      });
    }
  
    function handleCalculateClick(grades) {
      const average = calculateAverage(grades);
      const averageOutputElement = document.getElementById(AVERAGE_OUTPUT_ID);
  
      //displays "N/A" if no grades are entered, otherwise displays the computed average
      averageOutputElement.textContent = grades.length === 0 ? "N/A" : average.toFixed(2);
    }
  
    function calculateAverage(grades) {
      if (grades.length === 0) {
        return 0;
      }
  
      //sum all the grades and divide by the number of grades
      const total = grades.reduce((sum, grade) => sum + grade, 0);
      return total / grades.length;
    }
  
    //attach initialization function to window load to ensure the DOM is fully loaded
    window.addEventListener("load", init);
  })();
  