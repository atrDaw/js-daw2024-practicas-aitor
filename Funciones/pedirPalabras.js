function pedirPalabras() {
  let palabra = '';
  let palabras = [];

  do {
    palabra = prompt('Introduce una palabra: (cancelar o dejar en blanco para salir) ');
    if (palabra) {
      palabras.push(palabra);
    }
  } while (palabra);
  return palabras;
}
