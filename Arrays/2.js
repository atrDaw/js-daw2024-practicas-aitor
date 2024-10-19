let letras = [];
letras.unshift('A', 'B', 'C');
letras.push('D', 'E');
letras.shift();
letras.pop();

for (let letra of letras) {
  console.log(letra);
}
