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

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

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
// ////////////////////// Custom Google Analytics injection. Modified from vue-ga
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
   ga.l = Number(new Date())
   ga('create', 'UA-10798495-20', 'auto')
 }

 let gaTitle = '(not set)'
 let gaTitlePrefix = 'ICJIA GATA | '

 router.afterEach(from  => {

   let x = router.options.routes
   for (var o = 0; o < x.length; o++){
     if (x[o].path === from.fullPath) {
       gaTitle = x[o].title
       //console.log(gaTitle)
     }
   }

  //  let pageTitle = lodash.filter(router.options.routes, function(o) {
  //   //  if (o.path === from.fullPath) {
  //   //    console.log(o.path,' === ',from.fullPath)
  //   //  }
  //    return o.path === from.fullPath
  //  });
   //console.log(router.options.routes)
  //  if (pageTitle.length > 0) {
  //    gaTitle = pageTitle[0].title
   //
  //  }
  //console.log('ga title: ', title)
  ga('set', 'page', from.fullPath)
  ga('set', 'title', gaTitlePrefix + gaTitle);
  ga('send', 'pageview')
  })
// //////////////////////// END custom Google Analytics injection





var vue = new Vue({
    el: '#app',
    router,
    // store the feeds in the vue-stash 'store' object
    data: { store },
    template: '<App/>',
    components: { App }
}).$mount('#app')
