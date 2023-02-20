import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },路由配置与子路由配置
    //学生端
    {
      path: '/student',
      component: '@/layouts/stu_index',
      routes: [
        { path: '/student/home', component: '@/pages/home/index'},
        { path: '/student/kg', component: '@/pages/kg/index' },
        {
          path: '/student/analyse',
          routes: [
            {
              path: '/student/analyse/keywords',
              component: '@/pages/analyse/keywords/index',
            },
            {
              path: '/student/analyse/wordcloud',
              component: '@/pages/analyse/wordcloud/index',
            },
          ],
        },
        { path: '/student/question',
          routes: [
            {
              path: '/student/question/user',
              component: '@/pages/question/user/index',
            },
          ],
        },
        //主页
        {redirect :'/student/home'}
      ],
    },
    //教师端
    {
      path: '/teacher',
      component: '@/layouts/tea_index',
      routes: [
        { path: '/teacher/home', component: '@/pages/home/index' },
        { path: '/teacher/kg', component: '@/pages/kg/index' },
        {
          path: '/teacher/analyse',
          routes: [
            {
              path: '/teacher/analyse/keywords',
              component: '@/pages/analyse/keywords/index',
            },
            {
              path: '/teacher/analyse/wordcloud',
              component: '@/pages/analyse/wordcloud/index',
            },
          ],
        },
        { path: '/teacher/statistic', component: '@/pages/statistic/index' },
        { path: '/teacher/question',
          routes: [
            {
              path: '/teacher/question/user',
              component: '@/pages/question/user/index',
            },
            {
              path: '/teacher/question/teacher',
              component: '@/pages/question/teacher/index',
            },

          ],
        },
        {
            path: '/teacher/table',
            component: '@/pages/Table/index'
        },
        {redirect :'/teacher/home'}
      ],
    },
    //登录
    {
      path:'/',
      component: '@/layouts/index',
      routes: [
        { path: '/home', component: '@/pages/home/index' },
        { redirect :'/home'}
        ]
    },
      ],
  fastRefresh: {},
});
