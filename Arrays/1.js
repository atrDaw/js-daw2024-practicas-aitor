let paises = ['España', 'Francia', 'Alemania', 'Italia'];
for (let pais of paises) {
  console.log(pais);
}
console.log();
delete paises[0];
for (let pais in paises) {
  console.log(paises[pais]);
}
