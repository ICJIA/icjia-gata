// base pages
const home   = require('./views/Home.vue')
const overview = require('./views/about/overview.vue')
const documents = require('./views/documents/Documents.vue')
const webinars = require('./views/training/Webinars.vue')
const faqs = require('./views/training/Faqs.vue')
// News updates
const sample0 = require('./views/news/Sample0.vue')
const sample1 = require('./views/news/Sample1.vue')
const sample2 = require('./views/news/Sample2.vue')

//console.log('Lodash:',_.VERSION)

export default [

    {
        path: '/',
        name: 'Home',
        title: 'Home',
        type: 'page',
        created: new Date('03-24-2017'),
        component: home,
        status: 'live'

    },
    {
        path: '/overview',
        name: 'General Overview',
        title: 'Overview',
        type: 'page',
        created: new Date('03-24-2017'),
        component: overview,
        status: 'live'

    },
    {
        path: '/documents',
        name: 'Documents',
        title: 'Documents',
        type: 'page',
        created: new Date('03-24-2017'),
        component: documents,
        status: 'live'

    },
    {
        path: '/webinars',
        name: 'Webinars',
        title: 'Webinars',
        type: 'page',
        created: new Date('03-24-2017'),
        component: webinars,
        status: 'live'

    },
    {
        path: '/faqs',
        name: 'FAQs',
        title: 'FAQs',
        type: 'page',
        created: new Date('03-24-2017'),
        component: faqs,
        status: 'live'

    },
    {
        path: '/news/sample0',
        name: sample0.name,
        type:sample0.data().type,
        created: sample0.data().created,
        title: sample0.data().title,
        description: sample0.data().description,
        component: sample0,
        status: sample0.data().status

    },
    {
        path: '/news/sample1',
        name: sample1.name,
        type:sample1.data().type,
        created: sample1.data().created,
        title: sample1.data().title,
        description: sample1.data().description,
        component: sample1,
        status: sample1.data().status

    },
    {
        path: '/news/sample2',
        name: sample2.name,
        type:sample2.data().type,
        created: sample2.data().created,
        title: sample2.data().title,
        description: sample2.data().description,
        component: sample2,
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
