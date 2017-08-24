import routes from '@/routes.js'
import moment from 'moment';

let grants = []
let news = []
let pages = []
let types = ['grant', 'news', 'page']
let dateNow = moment().format()

for (let type of types) {

    _.forOwn(routes, function(value, key) {

        if (value.type === type && value.status === 'live') {

            //console.log(value.name, dateNow < moment(value.posted).format())

            // determine feed content from route object
            let obj = {}
            obj.name = value.name
            obj.path = value.path
            obj.title = value.title
            obj.status = value.status
            obj.posted = value.posted

            obj.created = value.created
            if (String(obj.created) === 'Invalid Date') {
                obj.created = moment().format()
            }
            obj.expired = value.expired
            if (String(obj.expired) === 'Invalid Date') {
                obj.expired = moment(value.expired).format()
            }

            obj.posted = value.posted
            if (String(obj.expired) === 'Invalid Date') {
                obj.posted = moment(value.posted).format()
            }



            obj.description = value.description



            if (obj.name != 'direct' && obj.name != 'Redirect') {
                if (type === 'news') {
                    news.push(obj)
                }
                if (type === 'grant') {
                    // is the grant post-dated?
                    const pushToArray = dateNow > moment(value.posted).format()

                    if (pushToArray) {
                        grants.push(obj)
                    }
                }

                if (type === 'page') {
                    pages.push(obj)
                }


            }
        }
    });
}

//console.table(grants)

export default {
    grants,
    news,
    pages
}