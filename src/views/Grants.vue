<template lang="html">

<div>
<section class="page">
<page-header :header="title" />


  <div class="container">

	<div class="col-md-12">

<!-- <grantfeed
  showExpired="true"
  sortBy="title"
  sortDirection="asc"/> -->

  <div class="text-center" style="margin-bottom: 50px">
    <span class="btn-group" role="group">
      <button type="button" class="btn btn-secondary btn-filter" v-on:click="filter('all')">ALL</button>
      <button type="button" class="btn btn-secondary btn-filter" v-on:click="filter('current')">CURRENT</button>
      <button type="button" class="btn btn-secondary btn-filter" v-on:click="filter('expired')">EXPIRED</button>
    </span>
               </div>


               <ul id="grantFeed">
                 <li v-for="grant in grants">
                   <!--{{item.created | moment}} | -->
                   <div class="grant-news">

                   <router-link :to="grant.path" class="grant-title">{{ grant.title }}
                     </router-link>

                     <div class="grant-date">Posted: {{grant.created | moment}} |

                       <span v-if="checkExpire(grant.expired)" style="color: red; font-weight: 900">(EXPIRED)</span>
                       <span v-else class="grant-deadline">Deadline: {{grant.expired | moment}}</span>
                     </div>
                     <div class="grant-description" v-html="grant.description"></div>

                     <div class="grant-readmore">
                       <router-link :to="grant.path" class="read-more-news">Read more >>
                       </router-link>
                     </div>
                   </div>
                 </li>
               </ul>


	</div>
</div>





</section>
</div>



</template>

<script>
const description = `ICJIA GATA Grant Archive`
const title = "ICJIA GATA Grant Archive"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import moment from 'moment'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'
import Grantfeed from 'components/Grantfeed'

export default {
  name: 'Grants',
  pageData:  {
    created,
    description,
    title,
    type,
    status
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
    mounted () {
      //console.log(this.$store.grants[1].expired)
    },

  methods: {
    checkExpire(d) {
      if (d < this.now) {
        return true
      }
    },

    filter(filterType) {
      let self = this
      let filtered = []
      if (filterType === 'expired') {
      filtered =  _.filter(this.$store.grants, function(o) {
        return o.expired < self.now;
      })
    } else if (filterType === 'current') {
      filtered =  _.filter(this.$store.grants, function(o) {
        return o.expired > self.now;
      })
    } else {
      filtered = this.$store.grants
    }

    this.grants = _.orderBy(filtered, 'title', 'asc')



    }
  },
  components: {

    PageHeader,
    Grantfeed,

  },
  filters: {
     limit: function(arr, limit) {
       return arr.slice(0, limit)
    },
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  data () {
    return {
      title,
      grants: _.orderBy(this.$store.grants, 'title', 'asc'),
      now: moment()
    }
  },
}
</script>

<style lang="css">
.btn-filter {font-size: 12px; font-weight: 900}
.grant-news {margin-bottom: 65px;}
</style>
