import jquery from 'jquery'
import tether from 'tether'
import bootstrap from 'bootstrap'
import lodash from 'lodash';

// window._ = window.lodash = lodash;

import './scss/base.scss';

// Google tracking script in /static/google/ga.js
// import ga from 'vue-ga'



// import VueAnalytics from 'vue-analytics'
// Vue.use(VueAnalytics, {
//   id: 'UA-10798495-20'
// })

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
// ga(router, 'UA-10798495-20')

// router.beforeEach((to, from, next) => {
//   console.log(to.name, to.path)
//   next()
// })

function appendScript() {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.appendChild(script)
}
if (!window.ga) {
   appendScript()
   window.ga = window.ga || function () {
     (ga.q = ga.q || []).push(arguments)
   }
   //console.log(window.ga)
   ga.l = Number(new Date())
   ga('create', 'UA-10798495-20', 'auto')
 }


 router.afterEach(from  => {
   console.log(router)
    ga('set', 'page', from.fullPath)
    ga('set', 'title', 'ICJIA GATA | ' + String(from.name).replace(/([A-Z])/g, ' $1'));
    ga('send', 'pageview')
  })






var vue = new Vue({
    el: '#app',
    router,
    // store the feeds in the vue-stash 'store' object
    data: { store },
    template: '<App/>',
    components: { App }
}).$mount('#app')
