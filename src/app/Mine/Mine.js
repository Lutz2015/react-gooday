import React from 'react';

class Mine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false
        };
    }
    render() {
        return (
            <div>Mine</div>
        )}
}
export default Mine;