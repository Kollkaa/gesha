import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from "redux";
import AppStore from './Storage/store'
import {Provider} from "react-redux";
import "@fortawesome/fontawesome-free/js/all.min"
import "@fortawesome/fontawesome-free/css/all.min.css"

const store = createStore(AppStore);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
