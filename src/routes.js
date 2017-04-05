const utilities =  require('@/utilities')

const views = [
    {
        path: '/',
        component: require('./views/Home.vue')
    },
    {
        path: utilities.componentToRouterPath('./views/Overview.vue'),
        component: require('./views/Overview.vue')
    },
    {
        path: utilities.componentToRouterPath('./views/Contact.vue'),
        component: require('./views/Contact.vue')
    },
    {
        path: utilities.componentToRouterPath('./views/News.vue'),
        component: require('./views/News.vue'),
    },

    {
        path: utilities.componentToRouterPath('./views/GrantInformation.vue'),
        component: require('./views/GrantInformation.vue')
    },
    {
        path: utilities.componentToRouterPath('./views/Documents.vue'),
        component: require('./views/Documents.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/Webinars.vue'),
        component: require('./views/Webinars.vue')
    },
    {
        path: utilities.componentToRouterPath('./views/Faqs.vue'),
        component: require('./views/Faqs.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/news/Sample0.vue'),
        component: require('./views/news/Sample0.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/news/Sample1.vue'),
        component: require('./views/news/Sample1.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/news/Sample2.vue'),
        component: require('./views/news/Sample2.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/news/Sample3.vue'),
        component: require('./views/news/Sample3.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/Grants.vue'),
        component: require('./views/Grants.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/NofoVocaLegalAssist.vue'),
        component: require('./views/grants/NofoVocaLegalAssist.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/JagComprehensiveResponse.vue'),
        component: require('./views/grants/JagComprehensiveResponse.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/TestGrant.vue'),
        component: require('./views/grants/TestGrant.vue'),
    },
]


export default utilities.generateRoutes(views)
