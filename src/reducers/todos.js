import { ADD_TODO, REMOVE_TODO } from "../actions/todos";

export default (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:
            return [...state, action.payload];

        case REMOVE_TODO:
            const cloneTodos = [...state];
            state.some((todo, i) => {
                if (todo.id === action.payload) {
                    cloneTodos.splice(i, 1);
                    return true;
                }
            });
            return cloneTodos;

        default:
            return state;
    }
};