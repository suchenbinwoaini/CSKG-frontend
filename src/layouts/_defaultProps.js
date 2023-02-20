import React from 'react';
import {
  HomeOutlined,
  DesktopOutlined,
  CloudOutlined,
  SmileOutlined,
  CrownOutlined,
  SoundOutlined,
  TabletOutlined,
  AntDesignOutlined,
  SisternodeOutlined,
} from '@ant-design/icons';

//路由
export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '主页',
        icon: <HomeOutlined />,
      },
    ]
  },
  location: {
    pathname: '/',
  },
};
