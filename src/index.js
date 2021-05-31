import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';

// REDUX
// import rootReducer from './reducers/rootReducer';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<App /> , document.getElementById('root')
);