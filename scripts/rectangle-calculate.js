// calculate area of rectangle
function calculateRectangleArea() {
  // get width of rectangle
  const rectangleWidth = document.getElementById("rectangle-width").value;
  const rectWidth = parseFloat(rectangleWidth);

  //   get length of rectangle
  const rectangleLength = document.getElementById("rectangle-length").value;
  const rectLength = parseFloat(rectangleLength);

  //   display area of rectangle
  const rectArea = rectWidth * rectLength;
  const displayRectangleArea = document.getElementById("rectangle-area");
  displayRectangleArea.innerText = rectArea;
  console.log((displayRectangleArea.innerText = rectArea));
}
