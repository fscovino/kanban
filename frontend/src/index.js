import React from 'react';
import ReactDOM from 'react-dom';

// Main imports for redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers' // import the index from reducers combined

// Components and Style imports
import './index.css';
import App from './App';

// Create Redux Store
const store = createStore(reducers, compose(applyMiddleware(thunk)));


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

