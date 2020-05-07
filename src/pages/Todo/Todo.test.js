import React from "react";
import { shallow } from "enzyme";
import Todo from "./Todo";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";


describe('Todo :', () => {

    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<Todo />);
    });

    it('shows a Input box', () => {
        expect(wrapped.find(TodoInput).length).toEqual(1);
    });

    it('shows a Todo list', () => {
        expect(wrapped.find(TodoList).length).toEqual(1);
    });

})