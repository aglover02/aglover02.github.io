//calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}
//calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

//calculate the area of a circle
function calculateCircleArea(radius) {
    const PI = Math.PI;
    return PI * radius * radius;
}

//prompt user input and display results 
function mainShapeAreas() {
    const rectLength = parseFloat(prompt("Enter the length of the rectangle (in feet):"));
    const rectWidth = parseFloat(prompt("Enter the width of the rectangle (in feet):"));
    alert(`The area of the rectangle is ${calculateRectangleArea(rectLength, rectWidth)} square feet.`);

    const triBase = parseFloat(prompt("Enter the base of the triangle (in feet):"));
    const triHeight = parseFloat(prompt("Enter the height of the triangle (in feet):"));
    alert(`The area of the triangle is ${calculateTriangleArea(triBase, triHeight)} square feet.`);

    const circleRadius = parseFloat(prompt("Enter the radius of the circle (in feet):"));
    alert(`The area of the circle is ${calculateCircleArea(circleRadius)} square feet.`);
}

//run the program
mainShapeAreas();