//calculate age 
function calculateAge(ageInYears) {
    const months = ageInYears * 12;
    const days = ageInYears * 365; 
    const hours = days * 24;
    const seconds = hours * 3600;

    return { months, days, hours, seconds };
}

//event listener for age calculation
function setupAgeCalculator() {
    const calculateAgeButton = document.getElementById('calculateAge');
    calculateAgeButton.addEventListener('click', () => {
        const ageInYears = parseFloat(document.getElementById('ageInYears').value);

        const monthsOldElement = document.getElementById('monthsOld');
        const daysOldElement = document.getElementById('daysOld');
        const hoursOldElement = document.getElementById('hoursOld');
        const secondsOldElement = document.getElementById('secondsOld');
        const errorElement = document.getElementById('ageError');

        if (isNaN(ageInYears) || ageInYears < 0) {
            errorElement.textContent = 'Please enter a valid positive number for your age.';
            monthsOldElement.style.display = 'none';
            daysOldElement.style.display = 'none';
            hoursOldElement.style.display = 'none';
            secondsOldElement.style.display = 'none';
            return;
        }

        const { months, days, hours, seconds } = calculateAge(ageInYears);

        errorElement.textContent = ''; 
        monthsOldElement.style.display = 'block';
        daysOldElement.style.display = 'block';
        hoursOldElement.style.display = 'block';
        secondsOldElement.style.display = 'block';

        monthsOldElement.textContent = `Months Old: ${months.toFixed(2)}`;
        daysOldElement.textContent = `Days Old: ${days.toFixed(2)}`;
        hoursOldElement.textContent = `Hours Old: ${hours.toFixed(2)}`;
        secondsOldElement.textContent = `Seconds Old: ${seconds.toFixed(2)}`;
    });
}

//initialize event listeners using the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    setupAgeCalculator();
});
