import React from 'react';

class Broadcast extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false
        };
    }
    render() {
        return (
            <div>Broadcast</div>
        )}
}
export default Broadcast;