import React, { Component } from 'react';
import './styles/pages/App.css';
import routes from './router/routes';
import {Route} from 'react-router-dom';
class Client extends Component {
  render() {
    return (
        <div style={{ display: 'flex',marginTop: '3rem',height: '400px',width:'100%'}}>
            <div style={{
                padding: '10px',
                width: '100%',
                background: '#f5f5f9'
            }}>
                {routes.map((route, index) => (
                <Route
                path={route.path}
                exact={route.exact}
                component={route.main}
                />))}
            </div>
        </div>
    );
  }
}

export default Client;
