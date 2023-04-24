import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import blog1 from '@/components/blog1'
import blog2 from '@/components/blog2'
import blog3 from '@/components/blog3'
import blog4 from '@/components/blog4'
import blog5 from '@/components/blog5'
import blog6 from '@/components/blog6'
import blog7 from '@/components/blog7'
import blog8 from '@/components/blog8'
import blog9 from '@/components/blog9'
import blog10 from '@/components/blog10'
import blog11 from '@/components/blog11'
import blog12 from '@/components/blog12'
import blog13 from '@/components/blog13'
import services from '@/components/services'
import contact from '@/components/contact'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/blog1',
      name: 'blog1',
      component: blog1
    },
    {
      path: '/blog2',
      name: 'blog2',
      component: blog2
    },
    {
      path: '/blog3',
      name: 'blog3',
      component: blog3
    },
    {
      path: '/blog4',
      name: 'blog4',
      component: blog4
    },
    {
      path: '/blog5',
      name: 'blog5',
      component: blog5
    },
    {
      path: '/blog6',
      name: 'blog6',
      component: blog6
    },
    {
      path: '/blog7',
      name: 'blog7',
      component: blog7
    },
    {
      path: '/blog8',
      name: 'blog8',
      component: blog8
    },
    {
      path: '/blog9',
      name: 'blog9',
      component: blog9
    },
    {
      path: '/blog10',
      name: 'blog10',
      component: blog10
    },
    {
      path: '/blog11',
      name: 'blog11',
      component: blog11
    },
    {
      path: '/blog12',
      name: 'blog12',
      component: blog12
    },
    {
      path: '/blog13',
      name: 'blog13',
      component: blog13
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
