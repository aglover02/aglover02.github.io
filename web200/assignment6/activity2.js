        //constants for HTML element IDs
        const GRADE_INPUT_ID = "gradeInput";
        const GRADES_LIST_ID = "gradesList";
        const AVERAGE_OUTPUT_ID = "averageOutput";
        const CALCULATE_BUTTON_ID = "calculateButton";

        document.getElementById(CALCULATE_BUTTON_ID).addEventListener("click", calculateAverage);

        document.getElementById(GRADE_INPUT_ID).addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addGrade();
            }
        });

        //add a grade to a list
        function addGrade() {
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

            const gradesList = document.getElementById(GRADES_LIST_ID);
            const listItem = document.createElement("li");
            listItem.textContent = gradeNumber;
            gradesList.appendChild(listItem);

            gradeInput.value = "";
        }

        //calculate and display the average
        function calculateAverage() {
            const gradesList = document.getElementById(GRADES_LIST_ID);
            const gradeItems = gradesList.getElementsByTagName("li");

            let total = 0;
            let count = 0;
            let index = 0;

            do {
                if (index < gradeItems.length) {
                    const grade = parseFloat(gradeItems[index].textContent);
                    total += grade;
                    count++;
                }
                index++;
            } while (index <= gradeItems.length);

            const average = count === 0 ? 0 : total / count;

            const averageOutput = document.getElementById(AVERAGE_OUTPUT_ID);
            averageOutput.textContent = count === 0 ? "N/A" : average.toFixed(2);
        }