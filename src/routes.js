import utilities from '@/utilities'

// Pages
// const home   = require('views/home.vue')
// const overview = require('views/about/overview.vue')
// const documents = require('views/documents/documents.vue')
// const webinars = require('views/training/webinars.vue')
// const faqs = require('views/training/faqs.vue')
// const contact = require('views/about/contact.vue')
// const grant_information = require('views/about/grant-information.vue')
// const news_and_announcements = require('views/about/news-and-announcements.vue')

// News
// const sample0 = require('views/news/sample0.vue')
// const sample1 = require('views/news/sample1.vue')
// const sample2 = require('views/news/sample2.vue')
// const sample3 = require('views/news/sample3.vue')


export default [

    {
        path: '/',
        component: require('./views/Home.vue'),
        name: utilities.getName(require('./views/Home.vue')),
        type: utilities.getType(require('./views/Home.vue')),
        created: utilities.getCreated(require('./views/Home.vue')),
        title: utilities.getTitle(require('./views/Home.vue')),
        description: utilities.getDescription(require('./views/Home.vue')),
        status: utilities.getStatus(require('./views/Home.vue'))

    },


    {
        path: '/*',
        title: null,
        type: null,
        created: null,
        status: 'live',
        name: 'Redirect',
        redirect: '/'
    },

];
