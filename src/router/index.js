import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Crafts from '../components/Crafts.vue'
import Digital from '../components/Digital.vue'
import Drawing from '../components/Drawing.vue'
import Photography from '../components/Photography.vue'
import Sculpture from '../components/Sculpture.vue'
import TopArtist from "../components/TopArtist.vue"
import Login from '../components/Login.vue'
import Regiesterpage from '../components/Regiesterpage.vue'
import TopArtistsList from '../components/TopArtistsList.vue'
import TopArtistDetail from '../components/TopArtistDetail.vue'
import Testingfile from '../components/Testingfile.vue'
import ArtworkDetails from '../components/ArtworkDetails.vue'
import Patronhomepage from '../components/Patron/Patronhomepage.vue'
import FeaturedArtworksList from '../components/FeaturedArtworksList.vue'
import HighestPaidArtworksList from '../components/HighestPaidArtworksList.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/TopArtistDetail',
        component: TopArtistDetail
    }, {
        path: '/TopArtistsList',
        component: TopArtistsList
    }, {
        path: '/HighestPaidArtworksList',
        component: HighestPaidArtworksList
    }, {
        path: '/FeaturedArtworksList',
        component: FeaturedArtworksList
    },
    {
        path: '/Patronhomepage',
        component: Patronhomepage
    },

    {
        path: '/Regiesterpage',
        component: Regiesterpage
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/ArtworkDetails',
        name: 'ArtworkDetails',
        component: ArtworkDetails
    },
    {
        path: '/Testingfile',
        name: 'Testingfile',
        component: Testingfile

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
        path: '/TopArtist',
        name: 'Topartist',
        component: TopArtist
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