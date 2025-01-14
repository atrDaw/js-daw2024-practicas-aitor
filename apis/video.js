let video = document.querySelector('video');
let texto = document.querySelector('#minutos');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

video.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let segundos = Math.trunc(video.duration);
  let minutos = Math.trunc(segundos / 60);
  let segundosRestantes = segundos % 60;

  //ajustar segundos para mantener el formato mm:ss
  segundosRestantes = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;

  texto.textContent = 'Duración: ' + minutos + ':' + segundosRestantes;
});
