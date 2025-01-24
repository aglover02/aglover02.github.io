let hoursPerWeek = 40; 
let ratePerHour = 20;  

let weeklyPay = hoursPerWeek * ratePerHour;
let monthlyPay = (weeklyPay * 52) / 12; 
let annualPay = weeklyPay * 52;        

console.log("Weekly Gross Pay: $" + weeklyPay.toFixed(2));
console.log("Monthly Gross Pay: $" + monthlyPay.toFixed(2));
console.log("Annual Gross Pay: $" + annualPay.toFixed(2));
