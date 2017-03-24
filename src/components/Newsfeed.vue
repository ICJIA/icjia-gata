<template lang="html">

<div class="newsfeed">

  <div class="container">
    <div class="row" style="padding-bottom: 150px">
      <div class="col-md-12">
        <div class="">
          <ul id="newsfeed">
            <li v-for="item in newsItems">
              <div class="item-title">{{item.created | moment}} | {{ item.title }}</div>
              <div class="item-description">{{ item.description }}</div>
              <div class="item-readmore">
                <router-link :to="item.path">Read more >></router-link>
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
                if (value.type === 'news') {

                    let obj = {}
                    // remove 'X_' section identifiers from route name
                    obj.name = value.name
                    obj.path = value.path
                    obj.title = value.title
                    obj.created = value.created
                    obj.description = value.description

                    if (obj.name != 'direct' && obj.name != 'Redirect') {
                      newsItems.push(obj)
                    }
                }
            });
            this.newsItems = _.orderBy(newsItems, 'created','desc');
  },

  data: function () {
  return {
    newsItems: []
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
</style>
