
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 3243454,
        lat: 14.433,
        lng: 32.3243
    }
};

const persona2 = {...persona};
persona2.nombre = "Raul";


console.table(persona);
console.table(persona2);

