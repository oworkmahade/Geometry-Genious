// Reusable function
// area calculation
function calculatePentagonArea() {
  const perimeter = getValueById("pentagon-perimeter");
  const apothem = getValueById("pentagon-apothem");
  area = 0.5 * perimeter * apothem;
  setArea("pentagon-area", area);
}
// get value
function getValueById(inputId) {
  const value = parseFloat(document.getElementById(inputId).value);
  return value;
}

// set value
function setArea(id, area) {
  document.getElementById(id).innerText = area;
}
