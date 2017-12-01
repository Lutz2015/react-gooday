import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/pages/App.css';
import Header from './component/layout/Header';
import Client from './Client';
import Footer from './component/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer><Client/></Footer>
      </div>
    );
  }
}

export default App;
