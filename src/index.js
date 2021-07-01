import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import allReducers from './reducers/rootReducer';
import thunk from 'redux-thunk';
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);