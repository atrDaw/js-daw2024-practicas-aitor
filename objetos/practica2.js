//creo el metodo en el prototype de Array
Array.prototype.media = function () {
  let suma = this.reduce((acu, valor) => acu + valor, 0);
  return suma / this.length;
};

//console.log(Array.prototype)

let miArray = new Array(23,45,667,12,1,323);
let mediaArray = miArray.media();

console.log('Media prototype: ' + mediaArray);

//hago la media con un bucle para comprobar
let suma = 0;
for (const element of miArray) {
  suma += element;
}
let mediaBucle = suma / miArray.length;

console.log('Media bucle: ' + mediaBucle);
