
window.scrollTo(0, 0);

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    const cartel = document.getElementById('cartel');

    const maxDesplazamiento = 1000;


    const desplazamiento = Math.min(scrollPos, maxDesplazamiento);

    const alturaMin = 85; 
    const alturaMax = 110; 
    const alturaActual = alturaMin + ((alturaMax - alturaMin) * (desplazamiento / maxDesplazamiento));
    cartel.style.height = `${alturaActual}vh`;

    cartel.style.transform = `translateX(${desplazamiento*2}px)`;

});
