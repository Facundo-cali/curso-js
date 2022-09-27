class Persona {
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    //la palabra this hace referencia a la clase.
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Facu", 21, true)
console.log(nueva_persona);

nueva_persona.saludo()


let numero = 60;//inicializar
let persona_2 = new Persona("Maria", 34, false) //instanciar

/* ----------------------------------------------------------------------------------------- */
console.log(typeof persona_2);//devuelve object

console.log(persona_2 instanceof Persona);// devuelve true
//instanceof -> similar a typeof pero para clases