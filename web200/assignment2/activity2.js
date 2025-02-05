let ageInYears = parseFloat(prompt("Enter your age in years: "));

if (!isNaN(ageInYears) && ageInYears > 0) {
    let ageInMonths = ageInYears * 12;
    let ageInDays = ageInYears * 365;
    let ageInHours = ageInDays * 24;
    let ageInSeconds = ageInHours * 3600;

    document.write("<p>Age in Years: " + ageInYears + " year(s)</p>");
    document.write("<p>Age in Months: " + ageInMonths.toFixed(0) + " months</p>");
    document.write("<p>Age in Days: " + ageInDays.toFixed(0) + " days</p>");
    document.write("<p>Age in Hours: " + ageInHours.toFixed(0) + " hours</p>");
    document.write("<p>Age in Seconds: " + ageInSeconds.toFixed(0) + " seconds</p>");
} else {
    document.write("<p>Please enter a valid positive number for your age.</p>");
}