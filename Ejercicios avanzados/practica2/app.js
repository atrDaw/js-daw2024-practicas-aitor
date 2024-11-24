function textoRetardado(ms) {
  return new Promise((resolve, reject) => {
    let cumplido = false;
    //simulo un fallo aleatorio para que a veces se ejecute reject
    const falloSimulado = Math.random() < 0.5;

    setTimeout(() => {
      if (!cumplido && !falloSimulado) {
        cumplido = true;
        resolve('Tiempo concluido');
      }
    }, ms);

    setTimeout(() => {
      if (!cumplido) {
        cumplido = true;
        reject('El timpo no va bien');
      }
    }, ms * 2);
  });
}

// textoRetardado(5000)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

async function probarTexto() {
  try {
    let texto = await textoRetardado(5000);
    console.log(texto);
    return texto;
  } catch (e) {
    console.log(e);
    return e;
  }
}

async function mostrarResultado() {
  let titulo2 = document.querySelector('h2');
  titulo2.textContent = await probarTexto();
}
