document.addEventListener('keydown', function (event) {
  if (event.altKey && event.key === 'F12') {
    document.querySelector('#imagen').style.backgroundImage = `url('https://picsum.photos/1000/500?${Math.random()}')`;
    console.log('imagen cambiada');
  }
  console.log(event.key);
});
