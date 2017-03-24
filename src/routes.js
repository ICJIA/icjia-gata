export default [

    {
        path: '/',
        name: 'Home',
        component: require('./views/Home.vue'),

    },
    {
        path: '/overview',
        name: 'General Overview',
        component: require('./views/about/overview.vue'),

    },

    {
        path: '/*',
        name: 'Redirect',
        redirect: '/'
    },

];
