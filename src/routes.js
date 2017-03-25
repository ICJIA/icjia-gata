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
        name: 'Sample0',
        type: sample0.metaInfo.type,
        created: new Date('02-22-2017'),
        title: 'This is the title for Sample 0',
        description: sample0.metaInfo.meta[0].content,
        component: sample0,
        status: 'live'

    },
    {
        path: '/news/sample1',
        name: 'Sample1',
        type: sample1.metaInfo.type,
        created: new Date('03-24-2017'),
        title: 'This is the title for Sample 1',
        description: sample1.metaInfo.meta[0].content,
        component: sample1,
        status: 'live'

    },
    {
        path: '/news/sample2',
        name: 'Sample2',
        type: sample2.metaInfo.type,
        created: new Date('03-22-2017'),
        title: 'This is the title for Sample 2',
        description: sample2.metaInfo.meta[0].content,
        component: sample2,
        status: 'live'

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
