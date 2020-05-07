import React from 'react';
import { mount } from 'enzyme';
import Store from '../../store/StoreProvider';
import TodoInput from './TodoInput';

describe("Todo Input :", () => {
    let wrapped;

    beforeEach(() => {

        wrapped = mount(
            <Store>
                <TodoInput />
            </Store>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('has a text area and a button', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    });

    describe('Textarea :', () => {

        beforeEach(() => {
            wrapped.find('textarea').simulate('change', {
                target: {
                    value: 'new todo comment'
                }
            });

            wrapped.update();
        });

        it('has a textarea that users can type in', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual('new todo comment');
        });

        it('when form is submitted, textarea gets emptied', () => {

            wrapped.find('form').simulate('submit');
            wrapped.update();
            expect(wrapped.find('textarea').prop('value')).toEqual('');
        });

    });

})