import React, { Component } from "react";
import "./TodoList.scss";
import { connect } from "react-redux";
import { removeTodo } from "../../actions/todos";

class TodoList extends Component {
    renderTodos() {
        return this.props.todos.reverse().map(todo => {
            return <li key={todo.id}>
                <label>{todo.content}</label>
                <button onClick={() => { this.props.removeTodo(todo.id) }}>delete</button>
            </li>;
        });
    }
    render() {
        return (
            <div className="todo-list">
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps, {
    removeTodo
})(TodoList);