
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/init.css'
import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import ar from './locales/ar.json'

let i18n = createI18n({
    legacy: false,
    locale: 'zh',
    globalInjection: true,
    fallbackLocale: 'zh',
    messages: {
        zh: zh,
        en: ar
    }
})
console.log(zh)
const app = createApp(App)
app.use(router).use(i18n);
app.mount('#app');
