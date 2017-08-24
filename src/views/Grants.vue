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
    <!-- <span class="btn-group" role="group">
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType === 'all'}"  value="all">ALL</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType === 'current'}"  value="current">CURRENT</button>
      <button type="button" class="btn btn-secondary btn-filter btn-sm " v-bind:class="{active: filterType === 'expired'}"  value="expired">EXPIRED</button>
    </span> -->


    <select v-model="filterType" v-on:change="changeFilter($event)" style="font-size: 13px; font-weight: 900" id="filterType">

      <!-- <option value="all">ALL</option> -->
      <option value="current">CURRENT</option>
      <option value="expired">EXPIRED</option>
    </select>



    <span class="control-panel control-panel-spacer">Sort by:&nbsp;</span>

    <select v-model="sort" v-on:change="changeSortBy($event)" style="font-size: 13px; font-weight: 900">

      <option value="title">TITLE</option>
      <option value="posted">POST DATE</option>
      <option value="expired">EXPIRATION DATE</option>
    </select>



      <select v-model="direction" v-on:change="changeSortDirection($event)" style="font-size: 13px; font-weight: 900">

        <option value="asc">ASC</option>
        <option value="desc">DESC</option>

      </select>












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

                     <div class="grant-date">
                       <span v-if="isItNew(grant.posted)"><span class="new">NEW!</span> | </span>Posted: {{grant.posted | moment}} |

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
    const description = `Grant Opportunities`
    const title = "Grant Opportunities"
    const created = '2017-03-26'
    const type = 'page'
    const status = 'live'
    import moment from 'moment'
    import utilities from '@/utilities'
    import PageHeader from '@/components/PageHeader'
    import Grantfeed from 'components/Grantfeed'

    export default {
        name: 'Grants',
        pageData: {
            created,
            description,
            title,
            type,
            status
        },
        metaInfo: {
            // title will be injected into parent titleTemplate
            title,
            meta: [{
                vmid: 'description',
                name: 'description',
                content: utilities.stripTags(description)
            }]
        },
        mounted() {
            this.filter(this.filterType)
                // $('#filterType').on('change', function(e) {
                //   console.log(e)
                // })

            let vm = this
            $(document).ready(function() {
                $('.btn-filter').click(function() {
                    var ft = $(this).val();
                    console.log('Filter choice', ft)
                    vm.filter(ft)
                });
            });




        },

        methods: {
            checkExpire(d) {
                if (d < this.now) {
                    return true
                }
            },
            changeFilter(event) {
                //console.log(event.target.value)
                this.filter(event.target.value)
            },
            isItExpired(d) {
                // if (d < this.now) {
                //   return true
                // }
                return d < this.now
            },
            isItNew(d) {
                let target = moment(d).add(this.weeksForNewBanner, 'weeks')
                return moment(target).isAfter(moment())
            },

            changeSortBy(event) {
                //console.log(event.target.value)
                this.sortFiltered(event.target.value)
            },
            changeSortDirection(event) {
                //console.log(event.target.value)
                this.sortDirection(event.target.value)
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
                    filtered = _.filter(this.$store.grants, function(o) {
                        return o.expired < self.now;
                    })

                } else if (filterType === 'current') {
                    filtered = _.filter(this.$store.grants, function(o) {
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
            moment: function(date) {
                return moment(date).format('MMMM Do YYYY');
            }
        },
        data() {
            return {
                title,
                grants: _.orderBy(this.$store.grants, 'title', 'asc'),
                now: moment().subtract(1, 'days'),
                warning: '',
                sort: 'posted',
                direction: 'desc',
                filtered: [],
                isActive: true,
                filterType: 'current',
                selectedButton: '',
                selected: 'A',
                weeksForNewBanner: 1
            }
        },
    }
</script>

<style lang="css">
    .btn-filter {
        font-size: 10px;
        font-weight: 900
    }
    
    .btn.active {
        background: #152c61;
        color: #fff
    }
    
    .grant-news {
        margin-bottom: 65px;
    }
    
    .control-panel {
        background: #fff;
        font-size: 14px;
        padding: 2px 0px 2px 0px;
        text-transform: uppercase;
        font-weight: 700
    }
    
    .control-panel-spacer {
        margin-left: 30px;
    }
</style>