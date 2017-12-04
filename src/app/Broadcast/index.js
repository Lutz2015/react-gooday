import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
Link
} from 'react-router-dom';
import BroadCast from './Broadcast';
// const Child1 = () => {
//    return <div>c121hild1</div>
// };
// const Child2 = () => {
//     return <div>1212</div>
// };
{/*<ul>*/}
    {/*<li><Link to="/child1">child1</Link></li>*/}
    {/*<li><Link to="/child2">child2</Link></li>*/}

    {/*<Route path="/child1" component={Child1}/>*/}
    {/*<Route path="/child2" component={Child2}/>*/}
{/*</ul>*/}
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <BroadCast/>
                </div>
            </Router>
        );
    }
}

export default App;
