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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
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
    }
  ],
})

export default router
