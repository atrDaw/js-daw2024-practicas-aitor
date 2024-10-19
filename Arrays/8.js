let frecuencias = new Array(11);

frecuencias.fill(0);
let contador = 10000;
while (contador > 0) {
  frecuencias[Math.floor(Math.random() * 10 + 1)] += 1;
  contador--;
}
console.log('FRECUENCIAS:');
for (const key in frecuencias) {
  if (key != 0) {
    console.log(`Número ${key}: ${frecuencias[key]}`);
  }
}
