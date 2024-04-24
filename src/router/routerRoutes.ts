import type { RouteRecordRaw } from 'vue-router'

const Baseline = () => import('@/view/Baseline/Baseline.vue')
const Constrained = () => import('@/view/sample/Constrained.vue')
const Dashboard = () => import('@/view/Dashboard.vue')
const ExtendedToolbar = () => import('@/view/sample/ExtendedToolbar.vue')
const Inbox = () => import('@/view/sample/Inbox.vue')
const ThreeColumn = () => import('@/view/sample/ThreeColumn.vue')
const SideNavigation = () => import('@/view/sample/SideNavigation.vue')
const SystemBar = () => import('@/view/sample/SystemBar.vue')

const routerRoutes: Readonly<RouteRecordRaw[]> = [
    // base
    { path: '/dashboard', component: Dashboard },
    // vuetify
    /** baseline */
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

export default routerRoutes