// Funciones en JS
const saludar = function (nombre){
    return `Hola ${nombre}`;
};

const saludar2 =  (nombre) =>{
    return `Hola ${nombre}`;
};
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar("Paulina"));
console.log(saludar2("Paulina"));
console.log(saludar3("Paulina"));
console.log(saludar4());

const getUser = () => ({
    uid: "ABC123",
    username: "Elpapi02"
})

console.log(getUser());

function getUSuarioActivo(nombre){
    return {
        uid: "AED123",
        username: nombre
    }
};
const usuarioActivo = getUSuarioActivo("Francis");
console.log(usuarioActivo);
const getUSuarioActivo2 = (nombre) => ({
    uid: "AED123",
    username: nombre
});

console.log(getUSuarioActivo2("Francis Ferri"));