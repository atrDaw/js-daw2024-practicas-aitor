let data = [
  { name: 'Nacho', telephoone: '966112233', age: 40 },
  { name: 'Ana', telephoone: '911223344', age: 35 },
  { name: 'Mario', telephoone: '611998877', age: 15 },
  { name: 'Laura', telephoone: '63363366', age: 17 },
];

data.push(
  { name: 'Pedro', telephone: '6119444444', age: 25 },
  { name: 'Julia', telephone: '633232323', age: 37 }
);

console.log('Original');
console.log(data);

data.sort(function (a, b) {
  return a.age - b.age;
});

console.log('Ordenado por edad');
console.log(data);

data.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

console.log('Ordenado por nombre');
console.log(data);

let data30 = [];

for (let element of data) {
  if (element.age > 30) {
    data30.push(element);
  }
}
console.log('Solo mayores de 30');
console.log(data30);
