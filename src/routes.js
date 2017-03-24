export default [

    {
        path: '/',
        name: 'Home',
        title: 'Home',
        type: 'page',
        created: new Date('03-24-2017'),
        component: require('./views/Home.vue'),
        status: 'live'

    },
    {
        path: '/overview',
        name: 'General Overview',
        title: 'Overview',
        type: 'page',
        created: new Date('03-24-2017'),
        component: require('./views/about/overview.vue'),
        status: 'live'

    },
    {
        path: '/documents',
        name: 'Documents',
        title: 'Documents',
        type: 'page',
        created: new Date('03-24-2017'),
        component: require('./views/documents/Documents.vue'),
        status: 'live'

    },
    {
        path: '/webinars',
        name: 'Webinars',
        title: 'Webinars',
        type: 'page',
        created: new Date('03-24-2017'),
        component: require('./views/training/Webinars.vue'),
        status: 'live'

    },
    {
        path: '/faqs',
        name: 'FAQs',
        title: 'FAQs',
        type: 'page',
        created: new Date('03-24-2017'),
        component: require('./views/training/Faqs.vue'),
        status: 'live'

    },
    {
        path: '/news/sample0',
        name: 'Sample0',
        type: 'news',
        created: new Date('02-22-2017'),
        title: 'This is the title for Sample 0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis quam .',
        component: require('./views/news/Sample0.vue'),
        status: 'live'

    },
    {
        path: '/news/sample1',
        name: 'Sample1',
        type: 'news',
        created: new Date('03-24-2017'),
        title: 'This is the title for Sample 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis quam .',
        component: require('./views/news/Sample1.vue'),
        status: 'live'

    },
    {
        path: '/news/sample2',
        name: 'Sample2',
        type: 'news',
        created: new Date('03-22-2017'),
        title: 'This is the title for Sample 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis quam .',
        component: require('./views/news/Sample2.vue'),
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
