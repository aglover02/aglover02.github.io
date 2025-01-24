let hoursPerWeek = 40; 
let ratePerHour = 20;  

let weeklyPay = hoursPerWeek * ratePerHour;
let monthlyPay = (weeklyPay * 52) / 12; 
let annualPay = weeklyPay * 52;        

document.write("Weekly Gross Pay: $" + weeklyPay.toFixed(2));
document.write("Monthly Gross Pay: $" + monthlyPay.toFixed(2));
document.write("Annual Gross Pay: $" + annualPay.toFixed(2));
