import todosReducer from "../todos";
import { ADD_TODO, REMOVE_TODO } from "../../actions/todos";

describe("Reducers - TODO :", () => {

    it('handles actions of unknow types', () => {

        const newState = todosReducer([], {});

        expect(newState).toEqual([]);
    });

    it('handles actions of type ADD_TODO', () => {

        const action = {
            type: ADD_TODO,
            payload: {
                id: 1,
                content: "New Todo comment"
            }
        };

        const newState = todosReducer([], action);

        expect(newState[0].id).toEqual(1);
        expect(newState[0].content).toEqual("New Todo comment");
    });


    it('handles actions of type REMOVE_TODO', () => {

        const action = {
            type: REMOVE_TODO,
            payload: 1
        };

        const newState = todosReducer([{
            id: 1,
            content: "New Todo comment"
        }], action);

        expect(newState.length).toEqual(0);

    });

});

