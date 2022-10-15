const boton = document.querySelector("#btn") 

console.log(boton);

boton.addEventListener("click", () => {
    //alert("Se ha hecho click") //nos manda un mensaje que nos dice que hicimos click en el boton
    //confirm("Estas de acuerdo?") && console.log("ok");// mensaje que pregunta si queremos confirmar y si confirmamos manda ok por consola
    confirm("Estas de acuerdo?") ? console.log("ok") : console.log("NOO!!");// si confirmamos manda ok y si no pone ok
})

//para hacer que nos solicite informacion podemos hacer esto

const botonInfo= document.querySelector("#info")

botonInfo.addEventListener("click", () => {
    const nombre = prompt("Cual es tu nombre?") //promp muestra un cuadro de dialogo para que lo rellenemos
    if (nombre) {
        console.log(nombre);
    } else {
        console.log("No introduciste nada");
    }
})


const lista = [{
    nombre: "Facu",
    edad: 34
},{
    nombre: "Julen",
    edad: 30
},{
    nombre: "Sofi",
    edad: 21
}]

console.table(lista);//el .table es como un console.log pero mas pro para mostrar listas