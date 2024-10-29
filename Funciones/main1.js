palabras = pedirPalabras();

//ordenamos alfabeticamente en español
palabras.sort((a, b) => b.localeCompare(a, 'es'));
console.log(palabras);

//usamos un set para eliminar repetidas
let palabrasSet = new Set(palabras);

//volvemos a convertir el set en array para mostrarlo
palabras = [...palabrasSet];
alert('Tus palabras ordenadas alfabéticamente de Z a A: ' + palabras);
