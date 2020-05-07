import React, { Component } from "react";
import "./Todo.scss";

import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <h1 className="title">Todo</h1>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default Todo;