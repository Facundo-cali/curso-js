//((((((((esto es aparte de los archivos index, carpeta logger, etc))))))))

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // return false

    throw new Error("El valor debe ser de tipo número")
    
}

// const elDoble = (miFuncion("ala"));

try {
    // Codigo que puede fallar
    console.log("Esta funcionando bien");
    const doble = miFuncion("asd")
    console.log(doble);
} catch (e) {
    // En caso de fallar, quiero que ejecute
    console.error(`El valor de e es: ${e}`); //la e es el throw error
    console.error("ERROR!");
} finally {
    console.log("Esto se va a ejecutar siempre");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// podemos visitar una pagina que se llama error javascript y salen todos los errores pre configurados de js