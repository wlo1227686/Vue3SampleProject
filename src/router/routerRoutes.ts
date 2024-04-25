import type { RouteRecordRaw } from 'vue-router'

const Baseline = () => import('@/view/Baseline/Baseline.vue')

const BaselineAccount = () => import('@/view/Baseline/Account.vue')
const BaselineAdmin = () => import('@/view/Baseline/Admin.vue')
const BaselineDashboard = () => import('@/view/Baseline/Dashboard.vue')

const Constrained = () => import('@/view/sample/Constrained.vue')
const Dashboard = () => import('@/view/Dashboard.vue')
const ExtendedToolbar = () => import('@/view/sample/ExtendedToolbar.vue')
const Inbox = () => import('@/view/sample/Inbox.vue')
const ThreeColumn = () => import('@/view/sample/ThreeColumn.vue')
const SideNavigation = () => import('@/view/sample/SideNavigation.vue')
const SystemBar = () => import('@/view/sample/SystemBar.vue')

const routerRoutes: Readonly<RouteRecordRaw[]> = [
    // 根目錄
    { path: '/dashboard', component: Dashboard , name:'homePage'},
    /** baseline */
    // { path: '/baseline/*', redirect: 'baseline' },
    {
        path: '/baseline', component: Baseline,
        children: [
            { path: '/baseline/account', component: BaselineAccount },
            { path: 'admin', component: BaselineAdmin },
            { path: 'dashboard', component: BaselineDashboard },
        ]
    },



    { path: '/constrained', component: Constrained },
    { path: '/extendedToolbar', component: ExtendedToolbar },
    { path: '/inbox', component: Inbox },
    { path: '/sideNavigation', component: SideNavigation },
    { path: '/systemBar', component: SystemBar },
    { path: '/threeColumn', component: ThreeColumn },

    /** 非預期路由,導轉至 主畫面(homePage) 由 路由守衛 決定後續 */
    // { path: '/:path*', redirect: { name: 'homePage', params: {} } },
]

export default routerRoutes