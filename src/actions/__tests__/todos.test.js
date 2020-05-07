import { ADD_TODO, REMOVE_TODO, addTodo, removeTodo } from "../todos"

describe('Actions - Todo :', () => {

    describe("Add Todo :", () => {
        it('returns right action type', () => {
            const action = addTodo();
            expect(action.type).toEqual(ADD_TODO);
        })

        it('returns right action payload', () => {
            const action = addTodo({ id: 1, content: "Add todo content" });
            expect(action.payload).toEqual({ id: 1, content: "Add todo content" });
        })
    });
    describe("Remove Todo :", () => {
        it('returns right action type', () => {
            const action = removeTodo();
            expect(action.type).toEqual(REMOVE_TODO);
        })

        it('returns right action payload', () => {
            const action = removeTodo(1);
            expect(action.payload).toEqual(1);
        })
    });

}); 