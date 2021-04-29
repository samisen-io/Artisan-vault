import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import shareIt from 'vue-share-it';

Vue.use(shareIt);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.component("Navbar", require('./components/Navbar.vue'))
Vue.component("Footer", require('./components/Footer.vue'))
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')