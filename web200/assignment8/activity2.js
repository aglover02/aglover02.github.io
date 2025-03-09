const GRADE_INPUT_ID = "gradeInput";
const GRADES_LIST_ID = "gradesList";
const AVERAGE_OUTPUT_ID = "averageOutput";
const CALCULATE_BUTTON_ID = "calculateButton";

//array to hold grades
let grades = [];

document.getElementById(CALCULATE_BUTTON_ID).addEventListener("click", () => handleCalculateClick());
document.getElementById(GRADE_INPUT_ID).addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleAddGrade();
    }
});

function handleAddGrade() {
    const gradeInput = document.getElementById(GRADE_INPUT_ID);
    const gradeValue = gradeInput.value.trim();

    if (gradeValue === "") {
        return;
    }

    const gradeNumber = parseFloat(gradeValue);
    if (isNaN(gradeNumber) || gradeNumber < 0 || gradeNumber > 100) {
        alert("Please enter a valid grade between 0 and 100.");
        gradeInput.value = "";
        return;
    }

    //add the valid grade to the grades array
    grades.push(gradeNumber);

    //update the displayed list of grades
    updateGradesList();

    //clear the input field
    gradeInput.value = "";
}

function updateGradesList() {
    const gradesList = document.getElementById(GRADES_LIST_ID);
    gradesList.innerHTML = "";  

    // Add new grades to the list
    grades.forEach((grade) => {
        const listItem = document.createElement("li");
        listItem.textContent = grade;
        gradesList.appendChild(listItem);
    });
}

// Calculate and display the average grade
function handleCalculateClick() {
    const average = calculateAverage();

    const averageOutput = document.getElementById(AVERAGE_OUTPUT_ID);
    averageOutput.textContent = grades.length === 0 ? "N/A" : average.toFixed(2);
}

// Calculate the average of an array of grades
function calculateAverage() {
    if (grades.length === 0) {
        return 0;
    }

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}
