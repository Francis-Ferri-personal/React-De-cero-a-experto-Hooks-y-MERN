
import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe('Pruebas en MultipleCUstomHooks', () => {

    

    test('debe de mostrarse correctamente', () => {

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostarr la informacion', () => {

        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
        
        useFetch.mockReturnValue({
            data: [{
                author: "Francis",
                quote: "Hola Mundo"
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe("Hola Mundo");
        expect(wrapper.find('footer').text().trim()).toBe("Francis");
        // console.log(wrapper.html());



    })
    
    
})
