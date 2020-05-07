import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Store from "./store/StoreProvider";
import TodoApp from "./pages/Todo/Todo";

ReactDOM.render(
    <Store>
        <TodoApp />
    </Store>,
    document.querySelector('#root'));