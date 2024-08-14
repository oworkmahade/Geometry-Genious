// ordinary way

// ***calculate area of parallelogram
// function calculateParallelogramArea() {
//   const base = getParallelogramBase();
//   const height = getParallelogramHeight();
// }

// ***get base of parallelogram
// function getParallelogramBase() {
//   const parallelogramBase = document.getElementById("parallelogram-base").value;
//   const paralleloBase = parseFloat(parallelogramBase);
//   return paralleloBase;
// }

//  ***get height of parallelogram
// function getParallelogramHeight() {
//   const parallelogramHeight = document.getElementById(
//     "parallelogram-height"
//   ).value;
//   const paralleloHeight = parseFloat(parallelogramHeight);
//   return paralleloHeight;
// }

// reusable function way
// area of parallelogram
function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");
  const area = base * height;
  setInnertextById("parallelogram-area", area);
}

// get value by ID
function getInputValueById(inputFieldId) {
  const inputValue = parseFloat(document.getElementById(inputFieldId).value);
  return inputValue;
}

// set value by ID
function setInnertextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
