const nombre = "Francis";
const apelldo = "Ferri";
const nombreCompleto = `
${nombre} 
${apelldo}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return "Hola mundo " + nombre; 
}

console.log(`${getSaludo(nombre)}`);