//handle form submission and generate the multiplication list
function generateMultiplicationList() {
    //get input values
    const baseValue = document.getElementById('baseValue').value; //get the base value as a string
    const expressionCount = document.getElementById('expressionCount').value; //get the count as a string
    const base = parseInt(baseValue);
    const count = parseInt(expressionCount);

    
    if (isNaN(base) || isNaN(count) || count <= 0) {
        displayOutput('Please enter valid numbers for both fields.');
        return;
    }

    //create multiplication expressions using a for loop
    let output = '';
    for (let i = 1; i <= count; i++) {
        output += base + ' * ' + i + ' = ' + (base * i) + '<br>'; 
    }

    displayOutput(output);
}

function displayOutput(content) {
    document.getElementById('output').innerHTML = content; // Update the output div
}

window.onload = function () {
    document.getElementById('generateButton').onclick = generateMultiplicationList; // Call the function on button click
};