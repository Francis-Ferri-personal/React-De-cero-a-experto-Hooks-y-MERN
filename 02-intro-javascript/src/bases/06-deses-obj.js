const persona = {
    nombre: "Tony",
    edad: 45,
    clave:"Ironman",
    rango: "Soldado"
};

const {nombre:nombre2, edad, clave} = persona;

/* console.log(nombre2)
console.log(edad)
console.log(clave) */

const touseContext = ({nombre, clave, edad, rango ="Capitan"}) => {
    console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = touseContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng );