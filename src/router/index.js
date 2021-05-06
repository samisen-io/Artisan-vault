import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../components/Mainpage.vue'
import Crafts from '../components/Crafts.vue'
import Digital from '../components/Digital.vue'
import Drawing from '../components/Drawing.vue'
import Photography from '../components/Photography.vue'
import Sculpture from '../components/Sculpture.vue'
import Login from '../components/Login.vue'
import Testjson from '../components/Testjson.vue'
import Regiesterpage from '../components/Regiesterpage.vue'
import Artwork from '../components/Artwork.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Mainpage',
        component: Mainpage
    },
    {
        path: '/Artwork',
        name: 'Artwork',
        component: Artwork
    }, {
        path: '/Testjson',
        name: 'Testjson',
        component: Testjson

    },
    {
        path: '/Crafts',
        name: 'Crafts',
        component: Crafts
    },
    {
        path: '/Digital',
        name: 'Digital',
        component: Digital
    },
    {
        path: '/Drawing',
        name: 'Drawing',
        component: Drawing
    },
    {
        path: '/Photography',
        name: 'Photography',
        component: Photography
    },
    {
        path: '/Sculpture',
        name: 'Sculpture',
        component: Sculpture
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Regiesterpage',
        name: 'Regiesterpage',
        component: Regiesterpage
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router