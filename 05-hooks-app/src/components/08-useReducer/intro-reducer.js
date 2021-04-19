const initialState = [{
    id:1,
    todo: "Comprar pan",
    done: false
}];

const todoReducer = (state = initialState, action) => {
    // El ? significa => Si action existe 
    if(action?.type === "agregar"){
        return [...state, action.payload];
    };
    return state;
};


let todos = todoReducer();

const newTodo = {
    id:3,
    todo: "Comprar pan",
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo // El nombre payload es opcional pero se ha estandarizado
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)