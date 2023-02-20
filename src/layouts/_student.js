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
    path: '/student',
    routes: [
      {
        path: '/student/home',
        name: '主页',
        icon: <HomeOutlined />,
      },
      {
        path: '/student/kg',
        name: '知识图谱',
        icon: <DesktopOutlined />,
      },
      {
        path: '/student/analyse',
        name: '数据分析',
        icon: <CloudOutlined />,
        routes: [
          {
            path: '/student/analyse/keywords',
            name: '关键词分析',
          },
          {
            path: '/student/analyse/wordcloud',
            name: '词云分析',
          }
        ],
      },
      {
        path: '/student/question',
        name: '知识问答',
        icon: <TabletOutlined />,
        routes: [
          {
            path: '/student/question/user',
            name: '问答助手',
          }
        ],
      },
    ],
  },
  location: {
    pathname: '/student',
  },
};
