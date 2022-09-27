//Casos muy especificos - break, continue

let lista = [1,2,3,4,5,6,7,8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue;  //el continue seria volver arriba 
    }

    console.log(lista[i]);
    
    if (lista[i] > 5){
        break;  //break seria cortar toda la ejecucion
    }
}

//Cual es el ambito de un bucle

console.log(i); //dice que no esta definido porque ya salio del bucle y la variable era let.Si hubiera sido var si se puede



