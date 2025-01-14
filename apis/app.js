//variables
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
  let n = new Notification('Nuevo video publicado!', {
    body: 'Haz click para verlo.',
    icon: 'resources/icon.png',
  });
  n.addEventListener('click', () => {
    window.open('./video.html');
  });
}

if (Notification.permission == 'default') {
  Notification.requestPermission().then((resp) => {
    if (resp == 'granted') mostrarNotificacion();
  });
} else if (Notification.permission == 'granted') {
  mostrarNotificacion();
}
