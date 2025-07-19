function verificar(){
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        console.log(position);
    });
}


console.log(navigator.language); // Ej: "es-AR", "en-US"
verificar();