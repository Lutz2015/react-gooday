import React from 'react';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false
        };
    }
    render() {
        return (
            <div>Home</div>
        )}
}
export default Home;