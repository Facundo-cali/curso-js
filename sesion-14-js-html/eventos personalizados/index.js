const hTexto = document.getElementById("h-texto")

console.log(hTexto);

/* 1-  addEventListener sirve para VINCULAR un elemento a un evento, para esto toma como primer parametro el nombre del evento que creamos ("cambioTexto") y despues el evento (que debemos crear despues); */
hTexto.addEventListener("cambioTexto", evento => {
    hTexto.innerText = evento.detail.texto // 4- con innerText le decimos que queremos trabajar sobre el Texto de hTexto. 
    hTexto.style.color = evento.detail.color // 4- con style.color le decimos que queremos trabajar sobre el color de hTexto.
})

/* 2- vamos a crear un evento que cambie el texto y cambie el color del texto */
function cambiarTexto(nuevoTexto, color) {
    /* 3- aca creamos el evento con CustomEvent, toma como primer valor el nombre del evento (que TIENE QUE SER EL MISMO que usamos en el addEventListener ya que asi se vinculan), y como segundo valor le pasamos un objeto detail que nos servira para establecer los cambios */
    const evento = new CustomEvent("cambioTexto", { 
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento) // le decimos que queremos lanzar este evento sobre el elemento hTexto
}

/* 5- Finalmente si ejecutamos cambiarTexto("Este es el nuevo texto", "blue") en el navegador (obviamente dentro de la pestaña localhost:8080/eventos/) se ejecuta el evento y veremos como cambia el texto y el color */