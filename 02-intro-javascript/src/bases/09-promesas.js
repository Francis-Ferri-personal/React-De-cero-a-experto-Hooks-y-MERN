import { getHeroeById } from "./bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('Tres segundos despues');
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject("No se pudo encontrar el heroe"); 
    }, 3000);
});

promesa.then((heroe) => {
    console.log(heroe)
})
.catch((err) => {console.error(err)}); */

const getHeroeByIdAsync = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe){
                res(heroe);
            } else {
                rej("no se encontró el heroe");
            }
        }, 2000);
    });
};

/* getHeroeByIdAsync(2)
    .then(heroe => console.log(heroe))
    .catch(err => console.error(err)); */

    getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.error);