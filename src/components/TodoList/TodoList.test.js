import React from 'react';
import { mount } from 'enzyme';

import Store from '../../store/StoreProvider';
import TodoList from './TodoList';

let wrapped;

beforeEach(() => {
    const initialState = {
        todos: [
            { id: 1, contnet: "New Todo comment 1" },
            { id: 2, contnet: "New Todo comment 2" }
        ]
    };

    wrapped = mount(
        <Store initialState={initialState}>
            <TodoList />
        </Store>
    );
})

it('creates onw LI per Todo comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});
