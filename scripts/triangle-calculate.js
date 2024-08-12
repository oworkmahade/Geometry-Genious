/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step -01: get base value of the triangle
 * step -02: added the id in the base input field
 * step -03: use getElementById ton access the input field.
 * step -04: get value from the input field. (value is string now)
 * step -05: convert the value to a number. use parseFloat
 */

function calculateTriangleArea() {
  // get triangle base value
  const triangleBase = document.getElementById("triangle-base").value;
  const triBase = parseFloat(triangleBase);

  // get triangle height value
  const triangleHeight = document.getElementById("triangle-height").value;
  const triHeight = parseFloat(triangleHeight);

  // calculate triangle area
  const triArea = 0.5 * triBase * triHeight;

  //   display triangle area
  //   in case of input field we will use .value
  //   whereas for p, div, span, h1/h6, etc we will use .innerText

  const displayTriArea = document.getElementById("triangle-area");
  displayTriArea.innerText = triArea;
}
