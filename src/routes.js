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
        component: require('./views/home.vue'),
        name: utilities.getName(require('./views/home.vue')),
        type: utilities.getType(require('./views/home.vue')),
        created: utilities.getCreated(require('./views/home.vue')),
        title: utilities.getTitle(require('./views/home.vue')),
        description: utilities.getDescription(require('./views/home.vue')),
        status: utilities.getStatus(require('./views/home.vue'))

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
