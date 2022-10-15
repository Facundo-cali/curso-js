//$(selector).acción() <-- asi es el funcionamiento de JQuery

// $("h1").hide() // aca le decimos que esconda los h1

// $(document).ready(() =>{ ... }) <--seria lo ideal hacer todo dentro de esto poara que no de errores
$(() => {
    

    $(".hide-btn").click(() => {
        //$("h1").hide()//esconde el h1
        $("h1").fadeOut()//esconde el h1 mas suavemente
    })
    $(".show-btn").click(() => {
        //$("h1").show()//muestra el h1
        $("h1").fadeIn()//muestra el h1 mas suavemente
    })

    $("li").dblclick(() => { //con el doble click cambia el h1 de color
        $("h1").css({ color: "red" })
    })

    

    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>")// añade un nuevo elemento al final de la lista
        $("ul").prepend("<li>New Element</li>")// añade un nuevo elemento al principio de la lista
    })

    //vamos a hacer que cuando pasemos el raton por encima de algun elemento se cambie a blue y cuando saquemos el mouse vuelve a color negro, (no funciona para elementos nuevos porque se generan despues de haberse inicializado esta funcion que cambia los colores)
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})