import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

import academic from '@/views/academic.vue'
import academic2 from '@/views/academic2.vue'
import original from '@/views/original.vue'
import news from '@/views/news.vue'
import scenicspot from '@/views/scenicspot.vue'
import literature from '@/views/literature.vue'
import culturaltravel from '@/views/culturaltravel.vue'
import talents from '@/views/talents.vue'
import partner from '@/views/partner.vue'
import pageDateil from '@/views/dateil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/pageDateil',
      name: '新闻详情',
      component: pageDateil
    },
    {
      path: '/original',
      name: '中心原创',
      component: original
    },
    {
      path: '/academic2',
      name: '学术中心',
      component: academic2
    },

    {
      path: '/news',
      name: '新闻资讯',
      component: news
    },
    {
      path: '/academic',
      name: '中心动态',
      component: academic
    },
    {
      path: '/scenicspot',
      name: '热门景点',
      component: scenicspot
    },
    {
      path: '/literature',
      name: '文献中心',
      component: literature
    },
    {
      path: '/culturaltravel',
      name: '文旅动态',
      component: culturaltravel

    },
    {
      path: '/talents',
      name: '人才发展',
      component: talents
    },
    {
      path: '/partner',
      name: '合作伙伴',
      component: partner
    },
    {
      path: '/dateil',
      name: '页面详情',
      component: pageDateil
    }
  ],
})
router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  let menus = JSON.parse(localStorage.getItem('menuList'))
  if (menus && menus.length > 0) {
    menus.forEach(item => {
      if (to.path === item.urlname) {
        localStorage.setItem("activeMenu", JSON.stringify(item));
      }
    })
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
