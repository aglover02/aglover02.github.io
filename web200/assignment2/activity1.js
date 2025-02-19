let hoursPerWeek = prompt("Enter the number of hours you work per week: ");
let ratePerHour = prompt("Enter your hourly rate: ");

if (!isNaN(hoursPerWeek) && !isNaN(ratePerHour)) {
    let weeklyPay = hoursPerWeek * ratePerHour;
    let monthlyPay = (weeklyPay * 52) / 12;
    let annualPay = weeklyPay * 52;

    document.write("<p>Weekly Gross Pay: $" + weeklyPay.toFixed(2) + "</p>");
    document.write("<p>Monthly Gross Pay: $" + monthlyPay.toFixed(2) + "</p>");
    document.write("<p>Annual Gross Pay: $" + annualPay.toFixed(2) + "</p>");
} else {
    document.write("<p>Please enter valid numbers for hours and rate.</p>");
}