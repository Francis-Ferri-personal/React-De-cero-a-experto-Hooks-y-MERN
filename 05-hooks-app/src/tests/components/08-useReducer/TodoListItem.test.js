import React from 'react';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { shallow } from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const todo = demoTodos[0];
    const idx = 0;

    const wrapper = shallow(<TodoListItem 
        todo={todo} 
        idx={idx}
        handleDelete={handleDelete} 
        handleToggle={handleToggle}
    /> );



    test('debed e mostarse correctamente', () => {
        // snapshot
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la funcion handleDelete', () => {
        // jest.fn()???
        // toHaveBeenCalledWith
        wrapper.find("button").simulate("click");
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
        
    });
    
    test('debe de llamar la handleToggle ', () => {
        // jest.fn()???
        // toHaveBeenCalledWith
        wrapper.find("p").simulate("click");
        expect(handleToggle).toHaveBeenCalledWith(todo.id);
    });

    test("debe de mostar el texto correctamente", () => {
        // contenido del pararfo
        const expected = `${idx+1}. ${todo.desc}`;
        
        const text = wrapper.find("p").text().trim();

        expect(text).toBe(expected);
    })

    test("debe de tener la classe compelete si el TODO.done = true", () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem 
            todo={todo} 
        /> );

        expect(wrapper.find("p").hasClass("complete")).toBe(true);

    })
    
    




    
    
})
