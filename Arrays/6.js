let edades = new Map();
edades.set('Jose', 31);
edades.set('Maria', 45);
edades.set('Paco', 16);
edades.set('Sara', 96);

console.log(edades);

//actualizar edad de uno
edades.set('Paco', 26);

for (let [clave, valor] of edades) {
  console.log(`Nombre: ${clave} tiene ${valor} años`);
}
