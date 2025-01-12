if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}

let cuenta = document.querySelector('#cuenta');

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mostrarNotificacion() {
  console.log('esperando...');
  let contador = 5;
  while (contador > 0) {
    cuenta.textContent = contador;
    contador--;
    await timeout(1000);
  }
  cuenta.textContent = 'FIN';
  console.log('han pasado 5 secs');
  new Notification('yeee');
}

mostrarNotificacion();
