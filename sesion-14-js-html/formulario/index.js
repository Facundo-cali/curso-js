const f = document.getElementById("form");

console.log(f);

f.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault()
}) /* aca lo que hacemos es decirle que una vez que se produzca un "submit", primero nos pase por pantalla la informacion de ese evento y despues EVITE que se ejecute el comportamiento por defecto */


