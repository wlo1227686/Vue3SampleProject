import { ref } from 'vue'
// step1:引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 根路由(Dashboard)
import Dashboard from '@/view/Dashboard.vue'
//
import Baseline from '@/view/sample/Baseline.vue'
import Constrained from '@/view/sample/Constrained.vue'
import ExtendedToolbar from '@/view/sample/ExtendedToolbar.vue'
import Inbox from '@/view/sample/Inbox.vue'
import ThreeColumn from '@/view/sample/ThreeColumn.vue'
import SideNavigation from '@/view/sample/SideNavigation.vue'
import SystemBar from '@/view/sample/SystemBar.vue'

console.log('VITE_ENV_PASSWORD=' + import.meta.env.VITE_ENV_PASSWORD)
console.log('ENV_PASSWORD=' + import.meta.env.ENV_PASSWORD)

const envBooleanTrue = import.meta.env.ENV_BOOLEAN_TRUE ? true : false
const envBooleanFalse = import.meta.env.ENV_BOOLEAN_FALSE ? true : false
const envPassword = import.meta.env.ENV_PASSWORD


const arrayKey = ['STAGE這是一串密碼(隱碼)', 'PROD這是一串密碼(隱碼)', 'DEV這是一串密碼(隱碼)', 'chenfu這是一串密碼(隱碼)'];
const key = import.meta.env.ENV_PASSWORD
console.log('key1=' + key)
console.log('envPassword=' + envPassword)

console.log('key2=' + ref(key).value)
console.log('key3=' + key)

console.log('ENV_BOOLEAN_TRUE=' + import.meta.env.ENV_BOOLEAN_TRUE)
console.log('envBooleanTrue=' + envBooleanTrue)

console.log('ENV_BOOLEAN_FALSE=' + import.meta.env.ENV_BOOLEAN_FALSE)
console.log('envBooleanFalse=' + envBooleanFalse)

// step2:創建路由器
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE), // 路由器工作模式
    routes: [
        // base
        { path: '/dashboard', component: Dashboard },
        // vuetify
        { path: '/baseline', component: Baseline },
        { path: '/constrained', component: Constrained },
        { path: '/extendedToolbar', component: ExtendedToolbar },
        { path: '/inbox', component: Inbox },
        { path: '/sideNavigation', component: SideNavigation },
        { path: '/systemBar', component: SystemBar },
        { path: '/threeColumn', component: ThreeColumn },

        // 非預期的路徑
        { path: "/:pathMatch(.*)*", redirect: '/dashboard' },

    ]
})

// step3:向外暴露
export default router