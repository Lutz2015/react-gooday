import React from 'react';

class Group extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false
        };
    }
    render() {
        return (
            <div>Group</div>
        )}
}
export default Group;