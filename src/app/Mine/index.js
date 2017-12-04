import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Mine from './Mine';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Mine/>
                </div>
            </Router>
        );
    }
}

export default App;
