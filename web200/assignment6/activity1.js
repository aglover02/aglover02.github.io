//to generate multiplication expressions
function generateExpressions(multiplier, count) {
    let result = "";
    let i = 1;

    while (i <= count) {
        const expression = multiplier + " * " + i + " = " + (multiplier * i) + "<br>";
        result = result + expression;
        i++;
    }

    return result;
}

//to handle user input and display the results
function generateClick() {
    const multiplierInput = document.getElementById('multiplier').value;
    const countInput = document.getElementById('count').value;

    //validate inputs
    const multiplier = parseInt(multiplierInput, 10);
    const count = parseInt(countInput, 10);

    if (isNaN(multiplier) || isNaN(count) || multiplier <= 0 || count <= 0) {
        document.getElementById('output').innerHTML = "Please enter valid positive numbers.";
        return;
    }

    //generate and display the results
    const result = generateExpressions(multiplier, count);
    document.getElementById('output').innerHTML = result;
}

//attach event listener to the button
window.onload = function () {
    document.getElementById('generateButton').addEventListener('click', generateClick);
};