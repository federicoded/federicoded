document.addEventListener('DOMContentLoaded', traducir);

function traducir() {
  const path = window.location.pathname;

  let 
    archivo = path.substring(path.lastIndexOf('/') + 1),
    ruta = "assets/translation/"
  ;

  archivo = archivo.replace('.html', '');

  if (path.includes("proyects")) {
    ruta="../assets/translation/";
  }

  const user_lang = navigator.language.slice(0, 2);
  if (user_lang == 'es') return;


  fetch(ruta+archivo+'_en.json').then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(elemento => {

        const clave = elemento.getAttribute('data-i18n');
        elemento.innerHTML = translations[clave];
      });
  });
}