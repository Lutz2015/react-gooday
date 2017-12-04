import React, { Component } from 'react';
import './styles/pages/App.css';
import Header from './component/layout/Header';
import Client from './Client';
import Footer from './component/layout/Footer';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Router>
              <div>
                  <Client/>
                  <Footer/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
