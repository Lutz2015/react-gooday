import React from 'react';

class Book extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            hidden: false
        };
    }
    render() {
        return (
            <div>Book</div>
        )}
}
export default Book;