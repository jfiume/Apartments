import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
// Comment out logger when not debugging
// import logger from 'redux-logger';

import RootReducer from "./reducers/root_reducer";
import App from "./App";
const store = createStore(RootReducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  )
})
