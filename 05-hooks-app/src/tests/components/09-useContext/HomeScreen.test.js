import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name: "Francis",
        email: "francisferri@gmail.com"
    }
    
    /* Shallow solo renderiza el primer componente o lo shigh order por lo cual no permite obtener la informacion completa*/
    // Shallow renderiza unicamente el componente principal
    // Mount permite realizar pruebas mas complejas
    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    );
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});