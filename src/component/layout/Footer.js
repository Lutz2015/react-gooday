import React from 'react';
import {TabBar} from 'antd-mobile';
import {Link} from 'react-router-dom';
import routes from '../../router/routes';
class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:  window.location.href.split('3000/')[1],
            hidden: false
        };
    }
    render() {
        return (
        <div style={{ position: 'fixed', height: 'auto', width: '100%', bottom: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                {routes.map((route, index) => (
                    <TabBar.Item
                        title={route.title}
                        key={route.key}
                        icon={<Link to={route.path} style={{
                            display: 'block',
                            width: '22px',
                            height: '22px',
                            background: `url(${route.icon}) center center /  21px 21px no-repeat`}}
                        />}
                        selectedIcon={<Link to={route} style={{
                            display: 'block',
                            width: '22px',
                            height: '22px',
                            background: `url(${route.activeIcon}) center center /  21px 21px no-repeat`}}
                        />}
                        selected={this.state.selectedTab === route.key}
                        badge={route.badge}
                        onPress={() => {
                            this.setState({
                                selectedTab: window.location.href.split('3000/')[1],
                            });
                        }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>
        </div>
        );
    }
}
export default Footer;