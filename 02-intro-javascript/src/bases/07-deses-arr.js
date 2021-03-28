const personajes = ["Goku", "Vegeta", "Trunks"];

const [p1] = personajes;
console.log(p1)
const [,p2] = personajes;//Ignora el primero
console.log(p2);
const [,,p3] = personajes;// Ignora el primero y el segundo
console.log(p3);

const retornnarArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornnarArreglo();
console.log(letras, numeros);

// Tarea

// 1. EL primer valor del arreglo se llamará nombre, el segundo se llamara et nombre
const toUseState = (valor) => [valor, () => {console.log("Hola mundo")}];
const [nombre, setNombre] = toUseState("Goku");
console.log(nombre);
setNombre();