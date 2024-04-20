// 步驟一 :引入
// import { createApp } from 'vue' // 引入vue
// import { createPinia } from 'pinia' // 引入pinia
import * as Vue from 'vue' // 引入vue
import * as Pinia from 'pinia' // 引入pinia
//
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
// import { createVuetify } from 'vuetify'
import * as Vuetify from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//自定義
import App from './App.vue'
import router from './router' // 引入Vue-router

// 步驟二: 創建
const vuetify = Vuetify.createVuetify({
    components,
    directives
})
const app = Vue.createApp(App)
// const app = createApp(App)

// 步驟三: 安裝
app.use(Pinia.createPinia()) //pinia
// app.use(createPinia()) //pinia
app.use(vuetify) // vuetify
app.use(router) // vue-router
app.mount('#app')