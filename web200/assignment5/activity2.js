function convertAge(ageInYears, unit) {
    switch (unit) {
        case 'Months':
            return ageInYears * 12; //months
        case 'Days':
            return ageInYears * 365; //days (ignoring leap years)
        case 'Hours':
            return ageInYears * 365 * 24; //hours
        case 'Seconds':
            return ageInYears * 365 * 24 * 3600; //seconds
        default:
            return null;
    }
}

document.getElementById('ageButton').addEventListener('click', function() {
    const ageInYears = parseInt(document.getElementById('ageInput').value, 10);
    const unit = document.getElementById('unitInput').value.toUpperCase();
    const result = convertAge(ageInYears, unit);

    if (result != null) {
        document.getElementById('ageResult').textContent = 'Your age in ' + unit + ' is ' result;
    } else {
        document.getElementById('ageResult').textContent = 'Invalid unit.';
    }
});