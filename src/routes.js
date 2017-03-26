import utilities from '@/utilities'

// Pages
const home   = require('./views/Home.vue')
const overview = require('./views/about/overview.vue')
const documents = require('./views/documents/Documents.vue')
const webinars = require('./views/training/Webinars.vue')
const faqs = require('./views/training/Faqs.vue')

// News
const sample0 = require('./views/news/Sample0.vue')
const sample1 = require('./views/news/Sample1.vue')
const sample2 = require('./views/news/Sample2.vue')



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
        path: '/*',
        title: null,
        type: null,
        created: null,
        status: 'live',
        name: 'Redirect',
        redirect: '/'
    },

];
