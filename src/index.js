import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LiveSearch from './LiveSearch';
import BookPage from './BookPage';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={LiveSearch} />
            <Route path="/book" component={BookPage} />
        </div>
    </Router>,
    document.getElementById('root')
);
