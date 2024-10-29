palabras = pedirPalabras();

//declaramos el map

//bucle que recorre el array comprobando si palabra existe en el map
function contarpalabras(palabras) {
  let palabrasMap = new Map();

  palabras.forEach((palabra) => {
    if (palabrasMap.has(palabra)) {
      //si existe suma 1 al valor(veces que aparece la palabra)
      palabrasMap.set(palabra, palabrasMap.get(palabra) + 1);
    } else {
      //si no existe la añade con valor 1
      palabrasMap.set(palabra, 1);
    }
  });
  console.log(palabrasMap);
  return palabrasMap;
}

palabras = Array.from(contarpalabras(palabras));
console.log(palabras)
alert('Estas son tus palabras y las veces que se repiten: \n' + palabras.join("\n"));
