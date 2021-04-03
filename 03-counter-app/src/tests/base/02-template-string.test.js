import '@testing-library/jest-dom';

import {getSaludo} from '../../base/02-template-string';
describe('Pruebas en 02-template-strings', () => {
    test('getSaludo debe retornr Hola fernando!', () => {
        
        const nombre = "fernando";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + "!");
    });

    // getSaludo debe retornar Hola Carlos! si no hay argumento en nombre
    test('getSaludo debe retornar Hola Carlos! si no hay argumento en nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    });

    
})
