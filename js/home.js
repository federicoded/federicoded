
window.scrollTo(0, 0);

window.addEventListener('scroll', moverCartelConScroll);
window.addEventListener("load", actualizarSVG);
window.addEventListener("resize", actualizarSVG);


function moverCartelConScroll() {
  const desplazamiento = window.scrollY;
  const cartel = document.getElementById('cartel');
  const 
    maxDesplazamiento = 500, 
    alturaMin = 85, 
    alturaMax = 115
  ; 
  const altura_nueva = alturaMin + ((alturaMax - alturaMin) * (desplazamiento / maxDesplazamiento));
  cartel.style.height = `${altura_nueva}vh`;
  cartel.style.transform = `translateX(${desplazamiento*2}px)`;
  
  const altura_body = document.body.scrollHeight;
  if(desplazamiento > (altura_body*0.3)){
    cambiar_letras_header(false);
  }else{
    cambiar_letras_header(true);
  }
}


function cambiar_letras_header(opcion){
  const links = document.querySelectorAll('.header_link');
  let 
    color = "",
    clase_anterior="",
    clase_nueva =""
  ;
  if(opcion){
    color = "#F2F2F2";
    clase_anterior = "hover_fondo_claro";
    clase_nueva = "hover_fondo_oscuro";
  } else{
    color = "black";
    clase_anterior = "hover_fondo_oscuro";
    clase_nueva = "hover_fondo_claro";
  }
  links.forEach( enlace=> {
    enlace.style.color = color;
    enlace.classList.remove(clase_anterior);
    enlace.classList.add(clase_nueva);
  });
}


const ratio_de_smartphone = window.matchMedia('(max-aspect-ratio: 38/29)');

function actualizarSVG() {
  const relacion = window.innerWidth / window.innerHeight;
  const objeto_pajaritos = document.getElementById("pajaritos");

  if (relacion > 38/29) {
  objeto_pajaritos.style.width = "5.5vw";
  objeto_pajaritos.data = "assets/pajaritos.svg";

  } else {
  objeto_pajaritos.style.width = "3vw";
  objeto_pajaritos.data = "assets/plane.svg";
  }
}


