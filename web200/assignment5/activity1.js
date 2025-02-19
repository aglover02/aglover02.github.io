function determineSockSize(shoeSize) {
    shoeSize = Math.ceil(shoeSize); // Round half-sizes up to the next whole size

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
