// Skills: Functions

// Write a function named getAreaOfCircle. It takes a radius parameter. It calculates and returns the area of a circle with that radius.
// Write a function named getCircumferenceOfCircle. It takes a radius parameter. It calculates and returns the circumference of a circle with that radius.
// Write a function named getAreaOfSquare. It takes a side parameter. It calculates and returns the area of a square with that side length.
// Write a function named getAreaOfTriangle. It takes two parameters: base and height. It calculates and returns the area of a triangle with that base and height.

// Call each of these functions and log the result to the console. (NOTE: None of these functions should use console.log within them. Instead, they must return the calculated value.)

function getAreaOfCircle(radius) {
  return Math.PI * (radius * radius);
}
console.log(getAreaOfCircle(14));

function getCircumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircumferenceOfCircle(20));

function getAreaOfSquare(side) {
  return side * side;
}
console.log(getAreaOfSquare(2));

function getAreaOfTriangle(base, height) {
  return (base * height) / 2;
}
console.log(getAreaOfTriangle(10, 5));
