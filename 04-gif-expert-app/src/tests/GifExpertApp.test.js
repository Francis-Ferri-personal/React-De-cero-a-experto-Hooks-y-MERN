import React from 'react';
import GifExpertApp from "../GifExpertApp"
import {shallow} from 'enzyme';

describe('Pruebas del componnete <GifExpertApp />', () => {
    
    test('debe mostarse correctamente', () => {
        const wrapper = shallow( <GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories =["One Punch", "Dragon Ball"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    })
    
    
})
