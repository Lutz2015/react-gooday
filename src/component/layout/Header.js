import React from 'react';
import {NavBar,Icon} from 'antd-mobile';

class Header extends React.Component {
    render() {
        return (
            <div style={{position: 'fixed',top: 0,width: '100%',zIndex: 100}}>
                <div>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                            <Icon key="1" type="ellipsis"/>,
                        ]}
                    >NavBar</NavBar>
                </div>
            </div>
        )
    }
}

export default Header;