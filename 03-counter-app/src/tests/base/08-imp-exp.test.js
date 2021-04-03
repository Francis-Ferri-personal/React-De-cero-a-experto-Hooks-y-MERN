import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";



describe('Pruebas en funciones de heroes', () => {
    test('debe de retornar un heroe por id ', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar undefined si heroe no existe ', () => {

        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe( undefined );
    });


    // debe de retornar un arreglo con los heroes de DC
    // owner
    // toEqual al arreglo filtrado

    test('debe de retornar un arreglo con los heroes de DC', () => {
        const owner = "DC";
        const heroesDC = heroes.filter(heroe => heroe.owner === owner);

        const heroesResp = getHeroesByOwner(owner);
        
        expect(heroesResp).toEqual(heroesDC);
    })
    

    // debe de retornar un arreglo con los heroes de Marvel
    // length = 2 // toBe

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = "Marvel";
        // const heroesMarvel = heroes.filter(heroe => heroe.owner===owner);

        const heroesResp = getHeroesByOwner(owner);

        expect(heroesResp.length).toBe(2);
    })
    
    
});
