

//calculate area of a room in square yards
function calculateRoomArea(length, width) {
    const SQUARE_FEET_PER_SQUARE_YARD = 9; // 3 feet x 3 feet
    let areaInFeet = length * width; // Area in square feet
    let areaInYards = areaInFeet / SQUARE_FEET_PER_SQUARE_YARD; // Convert to square yards
    return areaInYards;
}

//get user input and display the area
function main() {
    let length = prompt("Enter the length of the room in feet:");
    let width = prompt("Enter the width of the room in feet:");
    
    //convert input to numbers and calculate area
    length = parseFloat(length);
    width = parseFloat(width);
    
    let area = calculateRoomArea(length, width);
    
    //display the result
    document.write("The area of the room is " + area.toFixed(2) + " square yards.");
}

//call main function
main();
