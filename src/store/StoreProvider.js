import React from "react";
import reduxPromise from "redux-promise";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./rootReducer";

const middleWare = applyMiddleware(reduxPromise);

const initStore = initialState => createStore(reducers, initialState, middleWare);

export default ({ children, initialState = {} }) => {
    const store = initStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
