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
    path: '/teacher',
    routes: [
      {
        path: '/teacher/home',
        name: '主页',
        icon: <HomeOutlined />,
      },
      {
        path: '/teacher/kg',
        name: '知识图谱',
        icon: <DesktopOutlined />,
      },
      {
        path: '/teacher/analyse',
        name: '数据分析',
        icon: <CloudOutlined />,
        routes: [
          {
            path: '/teacher/analyse/keywords',
            name: '关键词分析',
          },
          {
            path: '/teacher/analyse/wordcloud',
            name: '词云分析',
          }
        ],
      },
      {
        path: '/teacher/question',
        name: '知识问答',
        icon: <TabletOutlined />,
        routes: [
          {
            path: '/teacher/question/user',
            name: '问答助手',
          },
          {
            path: '/teacher/question/teacher',
            name: '教师解答',
          }
        ],
      },
      {
        path: '/teacher/statistic',
        name: '数据总览',
        icon: <SmileOutlined />,
      },
      {
        path: '/teacher/table',
        name: '疑问解答',
        icon: <CrownOutlined />,
      },
    ],
  },
  location: {
    pathname: '/teacher',
  },
};
