//para acceder a informacion del localStorage o guardarla.

localStorage.setItem("nombre", "Gorka")//guardamos en localStorage( key, value)
console.log(localStorage.getItem("nombre"))//pedimos el item


//cuando es un objeto es distinto
localStorage.setItem("persona", JSON.stringify({nombre: "Miguel", edad: 32}))//asi guardamos un objeto
console.log(JSON.parse(localStorage.getItem("nombre")));//pedimos la informacion

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a traves de stringify en un objeto de Javascript

localStorage.removeItem("nombre")//para eliminar usamos esto con la key entre parentesis

//Para acceder al sessionStorage es lo mismo que localStorage solo que cambiando esta palabra clave(sessionStorage)



//*Cookies

console.log(document.cookie)// accedemos a todas las cookies del dominio
document.cookie = "nombreCookie=GorkaCookie" //asi creamos una nueva cookie


// para darle una caducidad a una cookie podemos hacer 
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2021, 0, 1).toUTCString()
