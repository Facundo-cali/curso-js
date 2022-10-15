// primero debemos obtener todos los parrafos arrastrables
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const pepelera = document.querySelectorAll(".papelera")

// ahora debemos empezar a trabajar con EVENTOS

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { //dragstart:se activa cuando arrastramos un item arrastrable
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")//le cambiamos la clase al objeto que estamos moviendo asi podemos cambiarlo de color


        event.dataTransfer.setData("id", parrafo.id)//? 1- le damos un id a cada parrafo y una vez que lo movemos, los datos del parrafo se quedan guardados con este data.Transfer.setData(nombre, data)
    })

    parrafo.addEventListener("dragend", () => { //dragend:se activa cuando dejamos de arrastrar el item
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")//le quitamos la classe dragging cuando lo dejamos de mover y vuelve a su color originar
    })
})



secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => { //dragover:se activa mientras movemos un item
        event.preventDefault() //debemos hacer esto para poder usar el evento "drop" (el de abajo)
        // console.log("Drag over");
    })

    seccion.addEventListener("drop", event => {//drop:se activa cuando soltamos un elemento en algun lado
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id") //? 2- una vez que movimos el parrafo con los datos y lo soltamos en la otra seccion, tranferimos los datos con el get data

        const parrafo = document.getElementById(id_parrafo) //? 3 - aca obtenemos el parrafo que tranferimos 

        seccion.appendChild(parrafo)//? 4- finalmente se quedan guardamos los datos en la otra sección con esto.
    })
})


//*para conocer mas sobre las propiedades de dataTransfer podemos buscar su documentacion, se puede cambiar la imagen fantasma que se muestra al mover los objetos,etc.