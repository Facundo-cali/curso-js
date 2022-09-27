const persona = {
    nombre:"Facu",
    edad:21,
    isDeveloper:true,
    saludo: function () {
        console.log('Hola');
    }
}

//console.log(persona);
persona.saludo();

const otra_persona = {
    nombre:"Poti",
    edad:21,
    isDeveloper:false,
    saludo: function () {
        console.log('Hola');
    }
}



//Function factory --> es una funcion que crea un objeto
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello');
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)//utilizo la funcion para crear la persona
console.log(nueva_persona); 
