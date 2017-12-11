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
        badge:'.',
        main: () => <Home/>
    },
    { path: '/book',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        activeIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
        key: 'book',
        badge:false,
        title: '书影音',
        main: () => <Book/>
    },
    { path: '/group',
        icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
        key: 'group',
        badge:false,
        title: '小组',
        main: () => <Group/>
    },
    { path: '/mine',
        icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        activeIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
        key: 'mine',
        badge:'3',
        title: '我的',
        main: () => <Mine/>
    }
]
export default routes;