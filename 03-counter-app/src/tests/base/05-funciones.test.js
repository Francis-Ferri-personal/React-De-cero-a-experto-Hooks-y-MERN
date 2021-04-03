import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        };
    
        const user = getUser();
        console.log(user)
        expect(user).toEqual(userTest);
    });

    // getUsarioActivo
    test('getUsuarioActivo debe retornar un objeto ', () => {
        const username = "Pepe";
        const usuarioTest = {
            uid: 'ABC567',
            username
        };

        const usuarioActivo = getUsuarioActivo(username);

        expect(usuarioActivo).toEqual(usuarioActivo);
    })
    
    
});
