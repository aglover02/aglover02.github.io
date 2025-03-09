//function to generate multiplication expressions and store values in an array
function generateExpressions(multiplier, count) {
    const results = []; //array to hold multiplication results
    let i = 1;

    while (i <= count) {
        results.push(multiplier * i); //store values in the array
        i++;
    }

    return results;
}

//function to format results from the array and return as HTML
function formatResults(multiplier, results) {
    let resultHTML = "";
    for (let i = 0; i < results.length; i++) {
        resultHTML += `${multiplier} * ${i + 1} = ${results[i]}<br>`;
    }
    return resultHTML;
}

function generateClick() {
    const multiplierInput = document.getElementById('multiplier').value;
    const countInput = document.getElementById('count').value;

    const multiplier = parseInt(multiplierInput, 10);
    const count = parseInt(countInput, 10);

    if (isNaN(multiplier) || isNaN(count) || multiplier <= 0 || count <= 0) {
        document.getElementById('output').innerHTML = "Please enter valid positive numbers.";
        return;
    }

    const results = generateExpressions(multiplier, count);
    const formattedResults = formatResults(multiplier, results);
    document.getElementById('output').innerHTML = formattedResults;
}

window.onload = function () {
    document.getElementById('generateButton').addEventListener('click', generateClick);
};
