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
        path: utilities.componentToRouterPath('./views/news/CatalogOfStateFinancialAssistance.vue'),
        component: require('./views/news/CatalogOfStateFinancialAssistance.vue'),
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
        path: utilities.componentToRouterPath('./views/grants/201704RsatNofo.vue'),
        component: require('./views/grants/201704RsatNofo.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/20170427VocaSA.vue'),
        component: require('./views/grants/20170427VocaSA.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/20170427VocaCACI.vue'),
        component: require('./views/grants/20170427VocaCACI.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/20170427VocaDV.vue'),
        component: require('./views/grants/20170427VocaDV.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/20170602UnmetNeeds.vue'),
        component: require('./views/grants/20170602UnmetNeeds.vue'),
    },
    {
        path: utilities.componentToRouterPath('./views/grants/20170620CommunityViolence.vue'),
        component: require('./views/grants/20170620CommunityViolence.vue'),
    },


]


export default utilities.generateRoutes(views)
