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

//console.log('Lodash:',_.VERSION)

export default [

    {
        path: '/',
        component: home,
        name: home.name,
        type:home.data().type,
        created: home.data().created,
        title: home.data().title,
        description: home.data().description,
        status: home.data().status

    },
    {
        path: '/overview',
        component: overview,
        name: overview.name,
        type:overview.data().type,
        created: overview.data().created,
        title: overview.data().title,
        description: overview.data().description,
        status: overview.data().status

    },
    {
        path: '/documents',
        component: documents,
        name: documents.name,
        type:documents.data().type,
        created: documents.data().created,
        title: documents.data().title,
        description: documents.data().description,
        status: documents.data().status

    },
    {
        path: '/webinars',
        component: webinars,
        name: webinars.name,
        type:webinars.data().type,
        created: webinars.data().created,
        title: webinars.data().title,
        description: webinars.data().description,
        status: webinars.data().status

    },
    {
        path: '/faqs',
        component: faqs,
        name: faqs.name,
        type:faqs.data().type,
        created: faqs.data().created,
        title: faqs.data().title,
        description: faqs.data().description,
        status: faqs.data().status

    },
    {
        path: '/news/sample0',
        component: sample0,
        name: sample0.name,
        type:sample0.data().type,
        created: sample0.data().created,
        title: sample0.data().title,
        description: sample0.data().description,
        status: sample0.data().status

    },
    {
        path: '/news/sample1',
        component: sample1,
        name: sample1.name,
        type:sample1.data().type,
        created: sample1.data().created,
        title: sample1.data().title,
        description: sample1.data().description,
        status: sample1.data().status

    },
    {
        path: '/news/sample2',
        component: sample2,
        name: sample2.name,
        type:sample2.data().type,
        created: sample2.data().created,
        title: sample2.data().title,
        description: sample2.data().description,
        status: sample2.data().status

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
