export const routes = [
    {
        path: '/',
        component: () => import("@/page/Main.vue"),
        children: [
            { path: '/home', component: () => import('@/page/Home.vue') },
            { path: '/tags', component: () => import('@/page/Tags.vue') },
            { path: '/archives', component: () => import('@/page/Archives.vue') },
            { path: '/about', component: () => import("@/page/About.vue") }
        ]
    },

]