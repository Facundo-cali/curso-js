// Funciones generadoras

function* generaId() {
    let id = 0;
    while (true) {
        id++
        if (id === 10){
            return
        }
        yield id // Espera hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next());//devuelve objeto { value: 1, done: false}
console.log(gen.next().value);//2
console.log(gen.next().value);//3
console.log(gen.next().value);//4
console.log(gen.next().value);//5
console.log(gen.next().value);//6
console.log(gen.next().value);//7
console.log(gen.next().value);//8
console.log(gen.next().value);//9
console.log(gen.next().value);//undefined ya que le dijimos que termine en 10