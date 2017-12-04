import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Group from './Group';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Group/>
                </div>
            </Router>
        );
    }
}

export default App;
