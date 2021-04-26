import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un TODO', () => {
        const newTodo = { 
            id:3,
            desc: "Aprender Express ",
            done: false
        };

        const action = {
            type: "add",
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de borarr un todo', () => {
        // action.payload = ID del TODO
        const todoId = 1;
        const action = {
            type: "delete",
            payload: todoId
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    })

    test('debe de hacer el TOGGLE del TODO', () => {
        // action.payload = ID del TODO
        const todoId = 1;
        const action = {
            type: "toggle",
            payload: todoId
        };

        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

        // const todo = demoTodos.find(todo => todo.id === todoId);
        // todo.done = !todo.done;
        // expect(state).toEqual(demoTodos);
    })
    
    
    
})
