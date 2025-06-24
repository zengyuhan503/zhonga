
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/init.css'
import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import ar from './locales/ar.json'

let lang = localStorage.getItem('zhong-lang') || 'zh'
let i18n = createI18n({
    legacy: false,
    locale: lang,
    globalInjection: true,
    fallbackLocale: 'zh',
    messages: {
        zh: zh,
        ar: ar
    }
})
const app = createApp(App)
app.use(router).use(i18n);
app.mount('#app');
