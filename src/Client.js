import React, { Component } from 'react';
import './styles/pages/App.css';
import { Router, Route,Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();
history.listen(location => {
    console.log('path:',location.pathname) // /home
})
function Friend() {
    return <div>Friend</div>
}
function Kou() {
    return <div>Kou</div>
}
function Life() {
    return <div>Life</div>
}
function My() {
    return <div>My</div>
}
function scrollToTop() {
    window.scrollTo(0, 0);
}
class Client extends Component {
  render() {
    return (
    <Router onUpdate={scrollToTop} history={history}>
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked  tab， show information</div>
            <Switch>
                <Route path="/friend" component={Friend} />
                <Route path="/koubei" component={Kou} />
                <Route path="/my" component={My} />
                <Route path="/Life" component={Life} />
            </Switch>
        </div>
    </Router>
    );
  }
}

export default Client;
