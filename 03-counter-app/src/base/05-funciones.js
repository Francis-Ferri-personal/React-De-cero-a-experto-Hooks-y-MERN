
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )


const getUser = () => ({
    uid: 'ABC567',
    username: 'El_Papi1502'
});


// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

export {getUser,getUsuarioActivo};


