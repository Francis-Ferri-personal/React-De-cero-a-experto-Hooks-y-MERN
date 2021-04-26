import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    );

    test('debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).not.toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledTimes(0); // Hace lo mismo
    });
    
    test('debe de llamar la funcion handleAddTodo', () => {
        const value = "Aprender a cocinar";
        const input = wrapper.find("input").simulate(
            "change", 
            {target: {value, name: "description"}}
        );
        const formSubmit = wrapper.find("form").prop("onSubmit");
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);

        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // {}
        // Cuando los valores son depenedientes de um proceso internpo puedes utilizar expect any para comprobar el tipo de dato
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find("input").prop("value")).toBe("");

    });
});