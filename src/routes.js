export default [{
        path: '/',
        name: 'GATA_Home',
        component: require('./views/Home.vue'),

    },

    {
        path: '/*',
        name: 'Redirect',
        redirect: '/'
    },

];
