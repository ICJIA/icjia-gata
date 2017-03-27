import utilities from '@/utilities'

// Pages
const Home   = require('./views/Home.vue')
const Overview = require('./views/About/Overview.vue')
const Documents = require('./views/Documents/Documents.vue')
const Webinars = require('./views/Training/Webinars.vue')
const Faqs = require('./views/Training/Faqs.vue')
const Contact = require('./views/About/Contact.vue')
const GrantInformation = require('./views/About/GrantInformation.vue')
const NewsAndAnnouncements = require('./views/About/NewsAndAnnouncements.vue')

// News
const Sample0 = require('./views/News/Sample0.vue')
const Sample1 = require('./views/News/Sample1.vue')
const Sample2 = require('./views/News/Sample2.vue')




export default [

    {
        path: '/',
        component: Home,
        name: utilities.getName(Home),
        type: utilities.getType(Home),
        created: utilities.getCreated(Home),
        title: utilities.getTitle(Home),
        description: utilities.getDescription(Home),
        status: utilities.getStatus(Home)

    },
    {
        path: '/overview',
        component: Overview,
        name: utilities.getName(Overview),
        type: utilities.getType(Overview),
        created: utilities.getCreated(Overview),
        title: utilities.getTitle(Overview),
        description: utilities.getDescription(Overview),
        status: utilities.getStatus(Overview)

    },
    {
        path: '/contact',
        component: Contact,
        name: utilities.getName(Contact),
        type: utilities.getType(Contact),
        created: utilities.getCreated(Contact),
        title: utilities.getTitle(Contact),
        description: utilities.getDescription(Contact),
        status: utilities.getStatus(Contact)

    },
    {
        path: '/news-and-announcements',
        component: NewsAndAnnouncements,
        name: utilities.getName(NewsAndAnnouncements),
        type: utilities.getType(NewsAndAnnouncements),
        created: utilities.getCreated(NewsAndAnnouncements),
        title: utilities.getTitle(NewsAndAnnouncements),
        description: utilities.getDescription(NewsAndAnnouncements),
        status: utilities.getStatus(NewsAndAnnouncements)

    },
    {
        path: '/grant-information',
        component: GrantInformation,
        name: utilities.getName(GrantInformation),
        type: utilities.getType(GrantInformation),
        created: utilities.getCreated(GrantInformation),
        title: utilities.getTitle(GrantInformation),
        description: utilities.getDescription(GrantInformation),
        status: utilities.getStatus(GrantInformation)

    },
    {
        path: '/documents',
        component: Documents,
        name: utilities.getName(Documents),
        type: utilities.getType(Documents),
        created: utilities.getCreated(Documents),
        title: utilities.getTitle(Documents),
        description: utilities.getDescription(Documents),
        status: utilities.getStatus(Documents)

    },
    {
        path: '/webinars',
        component: Webinars,
        name: utilities.getName(Webinars),
        type: utilities.getType(Webinars),
        created: utilities.getCreated(Webinars),
        title: utilities.getTitle(Webinars),
        description: utilities.getDescription(Webinars),
        status: utilities.getStatus(Webinars)

    },
    {
        path: '/faqs',
        component: Faqs,
        name: utilities.getName(Faqs),
        type: utilities.getType(Faqs),
        created: utilities.getCreated(Faqs),
        title: utilities.getTitle(Faqs),
        description: utilities.getDescription(Faqs),
        status: utilities.getStatus(Faqs)

    },

    {
        path: '/news/sample0',
        component: Sample0,
        name: utilities.getName(Sample0),
        type: utilities.getType(Sample0),
        created: utilities.getCreated(Sample0),
        title: utilities.getTitle(Sample0),
        description: utilities.getDescription(Sample0),
        status: utilities.getStatus(Sample0)

    },
    {
        path: '/news/sample1',
        component: Sample1,
        name: utilities.getName(Sample1),
        type: utilities.getType(Sample1),
        created: utilities.getCreated(Sample1),
        title: utilities.getTitle(Sample1),
        description: utilities.getDescription(Sample1),
        status: utilities.getStatus(Sample1)

    },
    {
        path: '/news/Sample2',
        component: Sample2,
        name: utilities.getName(Sample2),
        type: utilities.getType(Sample2),
        created: utilities.getCreated(Sample2),
        title: utilities.getTitle(Sample2),
        description: utilities.getDescription(Sample2),
        status: utilities.getStatus(Sample2)

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
