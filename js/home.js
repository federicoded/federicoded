
window.scrollTo(0, 0);

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    const cartel = document.getElementById('cartel');

    // Cuánto se va a mover como máximo (en px)
    const maxDesplazamiento = 1000;

    // Factor de movimiento (cuánto se desplaza por pixel de scroll)

    const desplazamiento = Math.min(scrollPos, maxDesplazamiento);

    const alturaMin = 85; // en vh
    const alturaMax = 110; // en vh
    const alturaActual = alturaMin + ((alturaMax - alturaMin) * (desplazamiento / maxDesplazamiento));
    cartel.style.height = `${alturaActual}vh`;
    console.log(window.scrollY);
    console.log("desplazamiento:"+desplazamiento);

    // Se mueve hacia la izquierda (negativo)
    cartel.style.transform = `translateX(${desplazamiento*2}px)`;


});
