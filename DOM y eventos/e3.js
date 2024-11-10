let elements = document.querySelectorAll('p');

elements.forEach((element) => {
  element.addEventListener('click', desaparecer);
});

elements.forEach((element) => {
  element.addEventListener('dblclick', eliminar);
});

function reaparecer() {
  elements.forEach((element) => (element.style.opacity = 1));
}
function eliminar() {
  this.remove();
}
function desaparecer() {
  this.style.opacity = 0;
}
