import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';

// window._ = window.lodash = lodash;

import './scss/base.scss';
import ga from 'vue-ga'

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

import Meta from 'vue-meta'
Vue.use(Meta)

// create site feeds for grants and news
import store from '@/feeds';
import VueStash from 'vue-stash';
Vue.use(VueStash)

import Vue from 'vue'
import App from './App'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})

// Google tracking script in /static/google/ga.js
// ga(router, 'UA-10798495-20')




var vue = new Vue({
    el: '#app',
    router,
    // store the feeds in the vue-stash 'store' object
    data: { store },
    template: '<App/>',
    components: { App }
}).$mount('#app')
