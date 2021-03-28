// Variables y constantes
const nombre = "Francis";
const apellido = "Ferri";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true){
    // Solo existe deeste contexto
    const nombre = "Peter";
    let valorDado = 6;
    console.log(nombre, valorDado)
}
console.log(nombre, valorDado);