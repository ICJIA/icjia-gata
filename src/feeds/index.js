import routes from '@/routes.js'
import moment from 'moment';

let grants = []
let news = []
let pages = []
let types = ['grant','news','page']
let dateNow = moment()
for (let type of types) {

_.forOwn(routes, function(value, key) {
            //console.log(value.type);
            if (value.type === type && value.status === 'live') {
                // determine feed content from route object
                let obj = {}
                obj.name = value.name
                obj.path = value.path
                obj.title = value.title
                obj.status = value.status

                obj.created = value.created
                if (String(obj.created) === 'Invalid Date') {
                  obj.created =  moment()
                }
                obj.expired = value.expired
                if (String(obj.expired) === 'Invalid Date') {
                  obj.expired = moment(value.expired)
                }

                obj.description = value.description
                if (obj.name != 'direct' && obj.name != 'Redirect') {
                  if (type === 'news') {
                    news.push(obj)
                  }
                  if (type === 'grant') {
                    grants.push(obj)
                  }

                  if (type === 'page') {
                    pages.push(obj)
                  }


                }
            }
        });
      }

export default {
  grants,
  news,
  pages
}
