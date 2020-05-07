import React, { Component } from "react";
import { connect } from "react-redux";
import "./TodoInput.scss";

import { addTodo } from "../../actions/todos";

class TodoInput extends Component {
    state = {
        content: ''
    }

    handleChange = (event) => {
        this.setState({ content: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.addTodo({
            id: Math.floor(Math.random() * 1000),
            content: this.state.content
        });

        this.setState({ content: '' });
    }

    render() {
        return (
            <div className="todo-input">
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange} value={this.state.content} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {
    addTodo
})(TodoInput);