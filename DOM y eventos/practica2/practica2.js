const mailExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{3}$/;
const passExp = /^[a-z]{8,10}$/;
//valores de los inputs
let mailValue=document.querySelector("#mail")
let passValue=document.querySelector("#password")

let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('blur', validar);
  input.addEventListener('focus', ocultarError);
  input.addEventListener('input', actualizarBotonEnviar);
  
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

function actualizarBotonEnviar(e) {
  if (mailExp.test(mailValue.value)&&passExp.test(passValue.value)) {
    document.querySelector('#boton').disabled = false;
  } else {
    document.querySelector('#boton').disabled = true;
  }
}
