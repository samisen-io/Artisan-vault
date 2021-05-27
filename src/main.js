import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import shareIt from 'vue-share-it';
import axios from "axios"
import firebase from "firebase/app"
import Carousel3d from 'vue-carousel-3d';
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
Vue.use(VueSlickCarousel);
Vue.use(Carousel3d);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(shareIt);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
const firebaseConfig = {
    apiKey: "AIzaSyCgKxvrOiVkskd2qPqj96Y038fxXJ784z0",
    authDomain: "testingfacebook-54.firebaseapp.com",
    projectId: "testingfacebook-54",
    storageBucket: "testingfacebook-54.appspot.com",
    messagingSenderId: "856464148619",
    appId: "1:856464148619:web:e624010c330bc5adee2c8e",
    measurementId: "G-6K3ZB6CGZB"
};
firebase.initializeApp(firebaseConfig);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')