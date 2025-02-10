//calculate weekly, monthly, and annual pay
function calculatePay(hoursPerWeek, ratePerHour) {
    const weeklyPay = hoursPerWeek * ratePerHour;
    const monthlyPay = weeklyPay * (52 / 12);
    const annualPay = weeklyPay * 52;

    return { weeklyPay, monthlyPay, annualPay };
} 

//event listener for pay calculation
function setupPayCalculator() {
    const calculatePayButton = document.getElementById('calculate');
    calculatePayButton.addEventListener('click', () => {
        const hoursPerWeek = parseFloat(document.getElementById('weekHours').value);
        const ratePerHour = parseFloat(document.getElementById('hourly').value);

        const weeklyPayElement = document.getElementById('weeklyPay');
        const monthlyPayElement = document.getElementById('monthlyPay');
        const annualPayElement = document.getElementById('annualPay');
        const errorElement = document.getElementById('payError');

        if (isNaN(hoursPerWeek) || isNaN(ratePerHour)) {
            errorElement.textContent = 'Please fill in all fields with valid numbers.';
            weeklyPayElement.textContent = 'Weekly Pay: ';
            monthlyPayElement.textContent = 'Monthly Pay: ';
            annualPayElement.textContent = 'Annual Pay: ';
            return;
        }

        const { weeklyPay, monthlyPay, annualPay } = calculatePay(hoursPerWeek, ratePerHour);

        errorElement.textContent = ''; //clear error message
        weeklyPayElement.textContent = `Weekly Pay: $${weeklyPay.toFixed(2)}`;
        monthlyPayElement.textContent = `Monthly Pay: $${monthlyPay.toFixed(2)}`;
        annualPayElement.textContent = `Annual Pay: $${annualPay.toFixed(2)}`;
    });
}

//initialize event listeners using the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    setupPayCalculator();
});
