import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp />);

    beforeEach(() => wrapper = shallow( <CounterApp />));

    test('debe mostarr <COunterApp /> correctamente (hacer match con un snapshot)', () => {
       
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostar eñ valor por defecto de 100', () => {
        const wrapper = shallow( <CounterApp value={100}/>);
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("100");
    });

    test('debe de incrementar con el botón de +1', () => {
        wrapper.find("button").at(0).simulate("click");
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("11");
    });

    // Se cuidadsos como laspruebas se ejecutan en secuencia los valores del wrapper ya no son los que estan por defecto
    test('debe de incrementar con el botón de -1', () => {
        wrapper.find("button").at(2).simulate("click");
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("9");
    });
    
    test('debe de colocar el valor por defevto con el btnm reset', () => {
        const wrapper = shallow( <CounterApp value={105}/>);
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("105");

    })
    
    
})
