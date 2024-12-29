const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
  const url = `${BASE_URL}${user}?delay=${numsecs}`;

  let id = document.querySelector('#id');
  let email = document.querySelector('#email');
  let status = document.querySelector('#status');

  let name = document.querySelector('#name');
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      status.textContent = response.status;
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      id.textContent = data.data.id;
      email.textContent = data.data.email;
      fetch(POSTMAN_URL, {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data.data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          name.textContent = data.json.first_name;
        });
    })
    .catch((error) => {
      console.error(error);
      status.textContent = error.message;
    });
}
