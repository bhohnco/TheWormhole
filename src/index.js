import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/rootReducer';
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
