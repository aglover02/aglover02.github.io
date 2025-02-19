function sockSize(shoeSize) {
    shoeSize = Math.ceil(shoeSize); // round half-sizes up to the next whole size

    if (shoeSize < 4) {
        return "Extra Small";
    } else if (shoeSize >= 4 && shoeSize <= 6) {
        return "Small";
    } else if (shoeSize >= 7 && shoeSize <= 9) {
        return "Medium";
    } else if (shoeSize >= 10 && shoeSize <= 12) {
        return "Large";
    } else {
        return "Extra Large";
    }
}
document.getElementById('sockButton').addEventListener('click', function() {
    const shoeSize = parseFloat(document.getElementById('shoeSize').value);
    if (!isNaN(shoeSize)) {
        const result = sockSize(shoeSize);
        document.getElementById('sockSize').textContent = 'Sock size: ' + result;
    } else {
        document.getElementById('sockSize').textContent = 'Please enter a valid shoe size.';
    }
});