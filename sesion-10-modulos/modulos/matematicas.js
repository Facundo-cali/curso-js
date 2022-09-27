function suma(a,b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    //factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i      
    }
    return factorial;
}

//Vamos a indicarle que debe exportar estas funciones para que puedan usarse en otros archivos

module.exports = {
    suma,
    multiplicar,
    eleva,
    factorial
} 


