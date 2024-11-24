export function textoRetardado(ms) {
  return new Promise((resolve, reject) => {
    let cumplido = false;
    //simulo un fallo aleatorio para que a veces se ejecute reject
    //const falloSimulado = Math.random() < 0.5;

    setTimeout(() => {
      if (!cumplido) {
        cumplido = true;
        resolve('FIN');
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

export async function cuenta(inicio, elemento = 'body', intervalo = 1000,funcion) {
  let start = inicio;
  let intervaloId = setInterval(() => {
    elemento.textContent = start;
    start--;
    if (start < 0) {
      clearInterval(intervaloId);
      funcion()
    }
  }, intervalo);
}
