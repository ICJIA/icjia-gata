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

  <div class="text-center" style="margin-bottom: 80px">
    <span class="control-panel">Display:&nbsp;</span>
    <span class="btn-group" role="group">
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType == 'all'}" v-on:click="filter('all')">ALL</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType == 'current'}" v-on:click="filter('current')">CURRENT</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType == 'expired'}" v-on:click="filter('expired')">EXPIRED</button>
    </span>


    <span class="control-panel control-panel-spacer">Sort by:&nbsp;</span>
    <span class="btn-group" role="group">
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: sort == 'title'}" v-on:click="sortFiltered('title')">TITLE</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: sort == 'created'}" v-on:click="sortFiltered('created')">POSTED</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: sort == 'expired'}" v-on:click="sortFiltered('expired')">EXPIRATION</button>
    </span>

<!-- <span class="control-panel control-panel-spacer">Direction:&nbsp;</span>
    <span class="btn-group" role="group">
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-on:click="sortDirection('asc')">ASC</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-on:click="sortDirection('desc')">DESC</button>
      </span> -->









               </div>

               <span class="text-center">
               <h4>{{warning}}</h4>
             </span>
               <ul id="grantFeed">
                 <li v-for="grant in grants">
                   <!--{{item.created | moment}} | -->
                   <div class="grant-news">

                   <router-link :to="grant.path" class="grant-title">{{ grant.title }}
                     </router-link>

                     <div class="grant-date">Posted: {{grant.created | moment}} |

                       <span v-if="checkExpire(grant.expired)" style="color: red; font-weight: 900">{{grant.expired | moment }}&nbsp;(EXPIRED)</span>
                       <span v-else class="grant-deadline">Deadline: {{grant.expired | moment}}</span>
                     </div>
                     <div class="grant-description" v-html="grant.description"></div>

                     <div class="grant-readmore">
                       <router-link :to="grant.path" class="read-more-news btn btn-secondary btn-sm
                       btn-readmore">Read more >>
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
const description = `ICJIA GATA Grant Opportunities`
const title = "ICJIA GATA Grant Opportunities"
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

    sortDirection(s) {
      this.direction = s;
      this.grants = _.orderBy(this.grants, this.sort, this.direction)

    },



    sortFiltered(s) {
      this.sort = s;
      this.grants = _.orderBy(this.grants, this.sort, this.direction)


    },

    filter(filterType) {
      let self = this
      let filtered = []
      this.filterType = filterType
      this.warning = '';
      // TODO: Try/Catch here
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

    this.filtered = filtered
    this.grants = _.orderBy(this.filtered, this.sort, this.direction)

    if (this.grants.length === 0) {
      this.warning = 'There are no ' + filterType + ' grants to display.'
    }





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
      now: moment().subtract(1,'days'),
      warning: '',
      sort: 'title',
      direction: 'asc',
      filtered: [],
      isActive: true,
      filterType: 'all',
      selectedButton:''
    }
  },
}
</script>

<style lang="css">
.btn-filter {font-size: 10px; font-weight: 900}
.btn.active {background: #152c61; color: #fff}
.grant-news {margin-bottom: 65px;}
.control-panel {background: #fff; font-size: 14px; padding: 2px 0px 2px 0px; text-transform: uppercase; font-weight: 700}
.control-panel-spacer {margin-left: 30px;}
</style>
