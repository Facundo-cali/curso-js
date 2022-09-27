//Asi exportamos con ES6 (tambien debemos cambiarlo en el package.json)
export function suma(a,b) {
    return a + b
}

export function multiplicar(a, b) {
    return a * b
}

export function eleva(a, b) {
    return a ** b
}

export function factorial(a) {
    //factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i      
    }
    return factorial;
}

