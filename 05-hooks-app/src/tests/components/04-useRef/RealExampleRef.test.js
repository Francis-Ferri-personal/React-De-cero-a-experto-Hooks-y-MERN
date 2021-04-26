import React from 'react';
import { render, shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Preubas en RealExampleRef', () => {
    const wrapper = shallow(<RealExampleRef />);
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    })

    test('debe mostrar el componente MultipleCustomHooks', () => {
        wrapper.find("button").simulate("click");
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);

        // const multipleCustomHooks = wrapper.find("MultipleCustomHooks");
        // expect(multipleCustomHooks).toMatchSnapshot();
    })
    
    
})
