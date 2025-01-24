let hoursPerWeek = 40; 
let ratePerHour = 20;  

let weeklyPay = hoursPerWeek * ratePerHour;
let monthlyPay = (weeklyPay * 52) / 12; 
let annualPay = weeklyPay * 52;        

document.write("<p>Weekly Gross Pay: $" + weeklyPay.toFixed(2) + "</p>");

document.write("<p>Monthly Gross Pay: $" + monthlyPay.toFixed(2) + "</p>");

document.write("<p>Annual Gross Pay: $" + annualPay.toFixed(2) + "</p>");
