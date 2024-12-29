// import * as tempo from './modulos/temporizador.js';
import * as tempo from '../modulos/temporizador.js';

let p1 = document.querySelector('#parrafo1');
let p2 = document.querySelector('#parrafo2');

tempo.cuenta(6, p1, 1000, () => {
  p1.textContent = 0;
});
tempo.cuenta(60, p2, 100, () => {
  p2.textContent = 'FIN';
});
