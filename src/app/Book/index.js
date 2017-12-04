import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
Link
} from 'react-router-dom';
import Book from './Book';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Book/>
                </div>
            </Router>
        );
    }
}

export default App;
