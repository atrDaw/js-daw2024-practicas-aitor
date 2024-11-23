function primeraTarea() {
  return new Promise(function (resolve, reject) {
    resolve(10);
  });
}
function segundaTarea(primeraTarea) {
  return new Promise(function (resolve, reject) {
    resolve(primeraTarea * 2);
  });
}
function terceraTarea(segundaTarea) {
  return new Promise(function (resolve, reject) {
    resolve(segundaTarea + 5);
  });
}

let resultado = primeraTarea()
  .then(function (resultadoPrimera) {
    return segundaTarea(resultadoPrimera);
  })
  .then(function (resultadoSegunda) {
    return terceraTarea(resultadoSegunda);
  })
  .then(function (resultadoFinal) {
    console.log(resultadoFinal);
  });
console.log(resultado);

// async function encadenarTareas() {
//   let resultado1 = await primeraTarea();
//   let resultado2 = await segundaTarea(resultado1);
//   let resultado3 = await terceraTarea(resultado2);
//   return resultado3;
// }

// async function probar() {
//   let resultado = await encadenarTareas();
//   console.log('Esto es probando async await ' + resultado);
// }
// probar();
async function encadenarTareas() {
  async function ejecutarTareas() {
    let resultado1 = await primeraTarea();
    let resultado2 = await segundaTarea(resultado1);
    let resultado3 = await terceraTarea(resultado2);
    return resultado3;
  }
  console.log(await ejecutarTareas())
}
encadenarTareas()