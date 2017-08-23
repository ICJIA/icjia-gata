import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';
window._ = window.lodash = lodash;

import './scss/base.scss';

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

// create site feeds for grants and news
import store from '@/feeds';
import VueStash from 'vue-stash';
Vue.use(VueStash)

// import VueScrollTo from 'vue-scrollto';
// Vue.use(VueScrollTo)

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import Vue from 'vue'
import App from './App'

////////////////////////////////////////////////////////////////////////////////////
// Init router
////////////////////////////////////////////////////////////////////////////////////
const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})


////////////////////////////////////////////////////////////////////////////////////
// Custom Google Analytics injection. Modified from vue-ga
////////////////////////////////////////////////////////////////////////////////////
import googleAnalytics from './googleAnalytics.js'
window['NODE_ENV'] = process.env.NODE_ENV
if (NODE_ENV === 'production') {
    googleAnalytics('UA-10798495-20', 'ICJIA GATA | ', router)
}


////////////////////////////////////////////////////////////////////////////////////
// Instantiate Vue instance
////////////////////////////////////////////////////////////////////////////////////
var vue = new Vue({
    el: '#app',
    router,
    // store the feeds in the vue-stash 'store' object
    data: { store },
    template: '<App/>',
    components: { App }
}).$mount('#app')