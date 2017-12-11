import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import Profile from '@/page/profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      // 二级路由 对应App.vue
      children: [
        // 首页重定向
        {
          path: '',
          redirect: '/home'
        },
        // 首页城市列表页
        {
          path: '/home',
          component: Home
        },
        // 登录注册页
        {
          path: '/login',
          component: Login
        },
        // 个人信息页
        {
          path: '/profile',
          component: Profile
        }
      ] // 二级路由
    } // routes
  ] // routes
})
