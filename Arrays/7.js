let cuantas = 50;
while (cuantas > 0) {
  console.log('Combinación Nº: ' + cuantas);
  let loteria = new Set();
  while (loteria.size < 6) {
    loteria.add(Math.floor(Math.random() * 50)+1);
  }

  let combi = [...loteria];
  console.log(combi.join('-'));
  cuantas--;
}
