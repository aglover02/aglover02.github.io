//handle form submission and calculate Pi
function calculatePi() {
    //get number of iterations from the input field
    const iterationsInput = document.getElementById('iterations').value; // Get input as a string

    //convert input to a number
    const iterations = parseInt(iterationsInput);

    //validate input
    if (isNaN(iterations) || iterations <= 0) {
        displayOutput('Please enter a valid positive number for iterations.');
        return;
    }

    const piApproximation = calculateNilakanthaPi(iterations);
    displayOutput('Approximation of Pi after ' + iterations + ' iterations: ' + piApproximation);
}

//calculate Pi using the Nilakantha series
function calculateNilakanthaPi(iterations) {
    let pi = 3; //starting value of Pi in the Nilakantha series
    let sign = 1; //alternates between addition and subtraction

    for (let i = 1; i <= iterations; i++) {
        const denominator = (2 * i) * (2 * i + 1) * (2 * i + 2); //calculate the denominator
        pi += sign * (4 / denominator); //add or subtract the term
        sign *= -1; //flip the sign
    }

    return pi;
}

function displayOutput(content) {
    document.getElementById('output').innerHTML = content; 
}

window.onload = function () {
    document.getElementById('calculateButton').onclick = calculatePi; 
};