// area calculate
function calculateEllipseArea() {
  // function created in pentagon part
  const majorAxes = getValueById("ellipse-major-axes");
  const minorAxes = getValueById("ellipse-minor-axes");
  const ellipseArea = 3.1416 * majorAxes * minorAxes;
  const ellArea = setArea("ellipse-area", ellipseArea);
}
