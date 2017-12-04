import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Home/>
                </div>
            </Router>
        );
    }
}

export default App;
