function simulaProceso(exito) {
  return new Promise(function (resolve, reject) {
    if (exito) {
      resolve('Proceso exitoso');
    } else {
      reject('Hubo un error');
    }
  });
}

//probando con then-catch
let promesa = simulaProceso(true);
promesa
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

let promesa2 = simulaProceso(false);
promesa2
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//probando con async-await
async function probarSimulacion() {
  try {
    let exito = await simulaProceso(true);
    console.log(`Estoy probando async, y esto seria el exito: ${exito}`);
  } catch (rechazo) {
    console.log(rechazo);
  }

  try {
    let fracaso = await simulaProceso(false);
    console.log(
      `esto es fracaso no fracasando y mandando su mensaje: ${fracaso}`
    );
  } catch (rechazo) {
    console.log(`ahora si que esta fracasando con su mensaje: ${rechazo}`);
  }
}
probarSimulacion();
