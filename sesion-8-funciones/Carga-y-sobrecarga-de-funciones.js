// Carga y sobrecarga de funciones
function saludar(params) {
    hola()
}

function hola() {
    console.log("Hola! Soy la funcion hola()");
}
saludar()

// 1. carga la funcion global()
// 2. saludar() por encima de global()
// 3. hola() saludar() global()
// 4. saludar() global()
// 5. global()

function recursivo() {
    recursivo()
}

recursivo() // stack over flow, error! 