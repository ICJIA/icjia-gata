<template lang="html">

<div class="newsfeed">

  <div class="container">
    <div class="row" style="">
      <div class="col-md-12">
        <div class="">
          <ul id="newsfeed">
            <li v-for="item in newsItems">
              <!--{{item.created | moment}} | -->
              <div class="item-news">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-date">Posted: {{item.created | moment}}</div>
                <div class="item-description" v-html="item.description"></div>
                <div class="item-readmore">
                  <router-link :to="item.path" class="read-more-news">Read more >>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>

        </div>


      </div>
    </div>

  </div>


</div>

</template>

<script>
import routes from '@/routes.js'
import moment from 'moment';
export default {

  mounted () {
    let newsItems = []
    _.forOwn(routes, function(value, key) {
                //console.log(value.type);
                if (value.type === 'news' && value.status === 'live') {

                    let obj = {}
                    // remove 'X_' section identifiers from route name
                    obj.name = value.name
                    obj.path = value.path
                    obj.title = value.title
                    obj.created = value.created
                    if (String(obj.created) === 'Invalid Date') {
                      obj.created =  moment()
                    }
                    obj.description = value.description
                    if (obj.name != 'direct' && obj.name != 'Redirect') {
                      newsItems.push(obj)
                    }
                }
            });
            newsItems = _.orderBy(newsItems, 'created','desc')
            if (this.maxItems) {
              this.newsItems = newsItems.slice (0, Number(this.maxItems))
            } else {
              this.newsItems = newsItems
            }


  },

  data: function () {
  return {
    newsItems: []
  }
},
props: {
  maxItems: {
    type: String,
    required: false
  }
},
filters: {
   limit: function(arr, limit) {
     return arr.slice(0, limit)
  },
  moment: function (date) {
    return moment(date).format('MMMM Do YYYY');
  }
}



}
</script>

<style lang="css">
ul#newsfeed {list-style: none;}
ul#newsfeed li {margin-bottom: 30px; }
.read-more-news {text-transform: uppercase; font-size: 14px;}
.item-news {margin-top: 15px;}
.item-date {margin-bottom: 10px; margin-top: -5px; color: #888}
.item-readmore {margin-top: 5px; }
.item-title {font-weight: 900; padding-bottom: 10px; text-transform: uppercase;}
</style>
