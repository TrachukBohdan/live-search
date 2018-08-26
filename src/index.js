import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';

import { Provider } from 'react-redux'
import LiveSearchPage from './pages/LiveSearchPage';
import BookPage from './pages/BookPage';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={LiveSearchPage} />
                <Route path="/book/:id" component={BookPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
