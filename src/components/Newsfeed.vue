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
                <div class="item-title"><router-link :to="item.path">{{ item.title }}</router-link></div>
                <div class="item-date">Posted: {{item.created | moment}}</div>
                <div class="item-description" v-html="item.description"></div>
                <div class="item-readmore">
                  <router-link :to="item.path"
                  class="read-more-news btn btn-secondary btn-sm btn-readmore">Read more >>
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
import routes from '@/routes'
import moment from 'moment';
import utilities from '@/utilities'
export default {

  mounted () {

          let newsItems = _.orderBy(this.$store.news, 'created','desc')

           if (this.maxItems) {

             this.newsItems = newsItems.slice (0, Number(this.maxItems))

           } else {

             this.newsItems = newsItems

           }

          //  let self = this
          //  if (this.maxTitleSize) {
          //
          //  this.newsItems.forEach(function(element) {
          //     element.title = utilities.truncateString(element.title, self.maxTitleSize)
          //   });
          // }
          //
          //   if (this.maxDescriptionSize) {
          //     this.newsItems.forEach(function(element) {
          //       element.description = utilities.truncateString(element.description, self.maxDescriptionSize)
          //    });
          //  }




  },

  data: function () {
  return {
    newsItems: []
  }
},
props: {
  maxItems: {
    type: Number,
    required: false
  },
  // maxDescriptionSize: {
  //   type: Number,
  //   required: false
  // },
  // maxTitleSize: {
  //   type: Number,
  //   required: false
  // }
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
.item-readmore {margin-top: 5px;}

.item-title {font-weight: 900; padding-bottom: 10px; text-transform: uppercase;}
</style>
