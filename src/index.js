import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/rootReducer';
const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
