const mailExp = /^[a-z]{4}@[a-z]{4}\.[a-z]{4}$/;
const passExp = /^[a-z]{8,10}$/;

let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', validar);
  input.addEventListener('focus', ocultarError);
});

function validar(e) {
  switch (e.target.name) {
    case 'mail':
      if (mailExp.test(e.target.value)) {
        document.querySelector('#errorMail').hidden = true;
      } else {
        document.querySelector('#errorMail').hidden = false;
      }
      actualizarBotonEnviar();
      break;
    case 'password':
      if (passExp.test(e.target.value)) {
        document.querySelector('#errorPassword').hidden = true;
      } else {
        document.querySelector('#errorPassword').hidden = false;
      }
      actualizarBotonEnviar();
      break;
  }
}

function ocultarError(e) {
  switch (e.target.name) {
    case 'mail':
      document.querySelector('#errorMail').hidden = true;
      break;
    case 'password':
      document.querySelector('#errorPassword').hidden = true;
      break;
  }
}

function actualizarBotonEnviar() {
  if (document.querySelector('#errorMail').hidden && document.querySelector('#errorPassword').hidden) {
    document.querySelector('#boton').disabled = false;
  } else {
    document.querySelector('#boton').disabled = true;
  }
}
