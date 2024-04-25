// 步驟一 :引入
import * as Vue from 'vue' // 引入vue
import * as Pinia from 'pinia' // 引入pinia


/** 
 * material-icons 
 * https://marella.me/material-icons/demo/ 
 */
import 'material-icons/iconfont/material-icons.css'

import vuetify from '@/script/vuetify'

//自定義
import App from './App.vue'
import router from './router' // 引入Vue-router

const app = Vue.createApp(App)

// 步驟三: 安裝
app.use(Pinia.createPinia()) //pinia
app.use(vuetify) // vuetify
app.use(router) // vue-router
app.mount('#app')