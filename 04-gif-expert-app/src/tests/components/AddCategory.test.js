import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';

describe('Pruebas en ele componente', () => {
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })
    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe ede coambiar la caja de texto', () => {
        const input = wrapper.find("input");
        const value = "hola Mundo";
        input.simulate('change', {target:{value}});

        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test('no debe de postear la informacion onSubmit', () => {
        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCtegories y limpiar la caja de texto', () => {
        const value = "Hola Mundo!";
        // 1. simular el imput change
        const input = wrapper.find("input");
        input.simulate("change", {target: {value}});
        expect(wrapper.find("p").text().trim()).toBe(value);
        // 2. simular el submit
        wrapper.find("form").simulate("submit", {preventDefault(){}});
        // 3. setCateegories se debe de haber llamado
        // expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(2);
        // Para asegurarnos que se llame a una funcion
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // 4. el valor del input debe de estar ''
        expect(input.prop("value")).toBe("");
    })
    
    
    
})
