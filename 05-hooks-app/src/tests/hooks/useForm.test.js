import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
describe('Pruebas en el Hook useForm', () => {
    const initialForm = {
        name: "Francis",
        email: "francisferri@gmail.com"
    };

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof(handleInputChange)).toBe("function");
        expect(typeof(reset)).toBe("function");
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        // llamar el handle input change
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        const newName =  "Goku";
        const e = {
            target: {
                name: "name",
                value: newName
            }
        }
        
        act(() => handleInputChange(e));

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name:newName});

    });
    
    test('debe de reestablecer el formulario con reset', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        const newName =  "Goku";
        const e = {
            target: {
                name: "name",
                value: newName
            }
        }
        
        act(() => {
            handleInputChange(e),
            reset()
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })
    
    


    

})
