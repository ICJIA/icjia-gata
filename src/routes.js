import utilities from '@/utilities'

// Pages
const home   = require('./views/home.vue')
const overview = require('./views/about/overview.vue')
const documents = require('./views/documents/documents.vue')
const webinars = require('./views/training/webinars.vue')
const faqs = require('./views/training/faqs.vue')
const contact = require('./views/about/contact.vue')
const grant_information = require('./views/about/grant-information.vue')
const news_and_announcements = require('./views/about/news-and-announcements.vue')

// News
const sample0 = require('./views/news/sample0.vue')
const sample1 = require('./views/news/sample1.vue')
const sample2 = require('./views/news/sample2.vue')
const sample3 = require('./views/news/sample3.vue')



export default [

    {
        path: '/',
        component: home,
        name: utilities.getName(home),
        type: utilities.getType(home),
        created: utilities.getCreated(home),
        title: utilities.getTitle(home),
        description: utilities.getDescription(home),
        status: utilities.getStatus(home)

    },
    {
        path: '/overview',
        component: overview,
        name: utilities.getName(overview),
        type: utilities.getType(overview),
        created: utilities.getCreated(overview),
        title: utilities.getTitle(overview),
        description: utilities.getDescription(overview),
        status: utilities.getStatus(overview)

    },
    {
        path: '/contact',
        component: contact,
        name: utilities.getName(contact),
        type: utilities.getType(contact),
        created: utilities.getCreated(contact),
        title: utilities.getTitle(contact),
        description: utilities.getDescription(contact),
        status: utilities.getStatus(contact)

    },
    {
        path: '/news-and-announcements',
        component: news_and_announcements,
        name: utilities.getName(news_and_announcements),
        type: utilities.getType(news_and_announcements),
        created: utilities.getCreated(news_and_announcements),
        title: utilities.getTitle(news_and_announcements),
        description: utilities.getDescription(news_and_announcements),
        status: utilities.getStatus(news_and_announcements)

    },
    {
        path: '/grant-information',
        component: grant_information,
        name: utilities.getName(grant_information),
        type: utilities.getType(grant_information),
        created: utilities.getCreated(grant_information),
        title: utilities.getTitle(grant_information),
        description: utilities.getDescription(grant_information),
        status: utilities.getStatus(grant_information)

    },
    {
        path: '/documents',
        component: documents,
        name: utilities.getName(documents),
        type: utilities.getType(documents),
        created: utilities.getCreated(documents),
        title: utilities.getTitle(documents),
        description: utilities.getDescription(documents),
        status: utilities.getStatus(documents)

    },
    {
        path: '/webinars',
        component: webinars,
        name: utilities.getName(webinars),
        type: utilities.getType(webinars),
        created: utilities.getCreated(webinars),
        title: utilities.getTitle(webinars),
        description: utilities.getDescription(webinars),
        status: utilities.getStatus(webinars)

    },
    {
        path: '/faqs',
        component: faqs,
        name: utilities.getName(faqs),
        type: utilities.getType(faqs),
        created: utilities.getCreated(faqs),
        title: utilities.getTitle(faqs),
        description: utilities.getDescription(faqs),
        status: utilities.getStatus(faqs)

    },

    {
        path: '/news/sample0',
        component: sample0,
        name: utilities.getName(sample0),
        type: utilities.getType(sample0),
        created: utilities.getCreated(sample0),
        title: utilities.getTitle(sample0),
        description: utilities.getDescription(sample0),
        status: utilities.getStatus(sample0)

    },
    {
        path: '/news/sample1',
        component: sample1,
        name: utilities.getName(sample1),
        type: utilities.getType(sample1),
        created: utilities.getCreated(sample1),
        title: utilities.getTitle(sample1),
        description: utilities.getDescription(sample1),
        status: utilities.getStatus(sample1)

    },
    {
        path: '/news/sample2',
        component: sample2,
        name: utilities.getName(sample2),
        type: utilities.getType(sample2),
        created: utilities.getCreated(sample2),
        title: utilities.getTitle(sample2),
        description: utilities.getDescription(sample2),
        status: utilities.getStatus(sample2)

    },
    {
        path: '/news/sample3',
        component: sample3,
        name: utilities.getName(sample3),
        type: utilities.getType(sample3),
        created: utilities.getCreated(sample3),
        title: utilities.getTitle(sample3),
        description: utilities.getDescription(sample3),
        status: utilities.getStatus(sample3)

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
