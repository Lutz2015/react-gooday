import React from 'react';
import Broadcast from '../app/Broadcast';
import Group from '../app/Group';
import Mine from '../app/Mine';
import Home from '../app/Home';
import Book from '../app/Book';

const routes = [
    { path: '/home',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        key: 'home',
        title: '首页',
        main: () => <Home/>
    },
    { path: '/book',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        key: 'book',
        title: '书影音',
        main: () => <Book/>
    },
    { path: '/broadcast',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        key: 'broadcast',
        title: '广播',
        main: () => <Broadcast/>
    },
    { path: '/group',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        key: 'group',
        title: '小组',
        exact: true,
        main: () => <Group/>
    },
    { path: '/mine',
        icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
        key: 'mine',
        title: '我的',
        exact: true,
        main: () => <Mine/>
    }
]
export default routes;