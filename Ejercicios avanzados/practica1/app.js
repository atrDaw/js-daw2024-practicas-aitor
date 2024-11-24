let span = document.querySelector('span');

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function deleteCookie(cname) {
  document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}

if (getCookie('visitas') == '') {
  setCookie('visitas', 1, 30);
} else {
  let visitas = parseInt(getCookie('visitas'));
  visitas++;
  setCookie('visitas', visitas, 30);
}
if (parseInt(getCookie('visitas')) > 10) {
  deleteCookie('visitas');
  console.log('Se han superado 10 visitas');
}
span.textContent = getCookie('visitas') == '' ? 0 : getCookie('visitas');
