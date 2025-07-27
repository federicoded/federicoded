
window.scrollTo(0, 0);
console.log(window.devicePixelRatio);


window.addEventListener('scroll', moverCartelConScroll);

function moverCartelConScroll() {
    const scrollPos = window.scrollY;

    const cartel = document.getElementById('cartel');

    const maxDesplazamiento = 1000;


    const desplazamiento = Math.min(scrollPos, maxDesplazamiento);

    const alturaMin = 85; 
    const alturaMax = 110; 
    const alturaActual = alturaMin + ((alturaMax - alturaMin) * (desplazamiento / maxDesplazamiento));
    cartel.style.height = `${alturaActual}vh`;

    cartel.style.transform = `translateX(${desplazamiento*2}px)`;

}

/*
const 

CARTEL = document.getElementById("cartel"),
WELCOME = document.getElementById("welcome"),
ABOUT_ME = document.getElementById("about_me"),
PRESENTATION = document.getElementById("presentation"),
CALLE = document.getElementById("calle"),
PAJAROS = document.getElementById("container_pajaritos");

const LINKS = document.querySelectorAll(".enlace");
LINKS.forEach(enlace => {
    enlace.addEventListener("click", abandonar);
});

async function abandonar(event) {
  event.preventDefault();
    window.removeEventListener('scroll', moverCartelConScroll);
  const href = event.currentTarget.href; 
  /// Aca va el overlay que tapa todo y se tiene que destapar cuando inicia cada pagina.

  setTimeout(() => {
    window.location.href = href;
  }, 2500);
}
*/


 