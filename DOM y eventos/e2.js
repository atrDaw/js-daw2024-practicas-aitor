window.onmousemove = function (event) {
  let x = event.clientX;
  let y = event.clientY;
  document.querySelector("p").textContent=x;
};
