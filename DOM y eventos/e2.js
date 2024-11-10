window.onmousemove = function (event) {
  let x = event.clientX;
  let y = event.clientY;
  document.querySelector('#x').textContent = 'Posicion x: ' + x;
  document.querySelector('#y').textContent = 'Posicion y: ' + y;
};
