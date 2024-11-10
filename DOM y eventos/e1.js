function addnumero() {
  let lista = document.querySelector('ul');
  let numero = Math.floor(Math.random() * 10);
  let nuevoElemento = document.createElement('li');
  nuevoElemento.textContent = numero;
  lista.appendChild(nuevoElemento);
}
