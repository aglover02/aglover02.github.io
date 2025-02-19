function mainShapeAreas() {
    //rectangle area
    let rectLength = prompt("Enter the length of the rectangle (in feet):");
    let rectWidth = prompt("Enter the width of the rectangle (in feet):");
    let rectangleArea = rectLength * rectWidth;
    document.write("The area of the rectangle is " + rectangleArea + " square feet.<br>")

    //triangle area
    let triBase = prompt("Enter the base of the triangle (in feet):");
    let triHeight = prompt("Enter the height of the triangle (in feet):");
    let triangleArea = 0.5 * triBase * triHeight;
    document.write("The area of the triangle is " + triangleArea + " square feet.<br>");

    //circle area
    let circleRadius = prompt("Enter the radius of the circle (in feet):");
    let circleArea = 3.14 * circleRadius * circleRadius;
    document.write("The area of the circle is " + circleArea + " square feet.<br>");
}

mainShapeAreas();