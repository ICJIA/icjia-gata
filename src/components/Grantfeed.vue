<template lang="html">

<div class="newsfeed">

  <div class="container">
    <div class="row" style="">
      <div class="col-md-12">
        <div class="">
          <div v-if="grants.length > 0">
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
                  <router-link :to="grant.path"
                  class="read-more-news read-more-news btn btn-secondary btn-sm
                  btn-readmore">Read more >>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div v-else class="text-center">
          <h2 class="h4 text-muted">There are no current grant opportunities.</h2>
          </div>

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

    let dateNow = this.now
    let filtered = []
    let showExpired = utilities.parseBool(this.showExpired)
    if (!showExpired) {
        filtered = _.filter(this.$store.grants, function(o) {
          return o.expired > dateNow;
        })
      } else {
        filtered = this.$store.grants
      }

    let grants = _.orderBy(filtered, this.sortBy, this.sortDirection)
    this.grants = grants

    let self = this

    //console.log(self.maxDescriptionSize)
  //   if (this.maxTitleSize > 0) {
   //
  //   this.grants.forEach(function(element) {
  //      element.title = utilities.truncateString(element.title, self.maxTitleSize)
  //    });
  //  }
   //
  //    if (this.maxDescriptionSize > 0) {
  //      this.grants.forEach(function(element) {
  //        element.description = utilities.truncateString(element.description, self.maxDescriptionSize)
  //     });
  //   }

  },

  data: function () {
  return {
    grants: [],
    now: moment().subtract(1,'days')
  }
},
props: {
  showExpired: {
    type: String,
    default: 'false'
  },
  sortBy: {
    type: String,
    default: 'expired'
  },
  sortDirection: {
    type: String,
    default: 'asc'
  },
  // maxDescriptionSize: {
  //   type: Number,
  //   required: false,
  //   default: 0
  // },
  // maxTitleSize: {
  //   type: Number,
  //   required: false,
  //   default: 0
  // }
},
methods: {
  checkExpire(d) {
    if (d < this.now) {
      return true
    }
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
ul#grantFeed {list-style: none;}
ul#grantFeed li {margin-bottom: 30px; }
.read-more-news {text-transform: uppercase; font-size: 14px;}
.grant-news {margin-top: 15px;}
.grant-date {margin-bottom: 10px; margin-top: 10px; color: #888}
.grant-readmore {margin-top: 15px; }
.grant-deadline {font-weight: 900; color: #555; margin-top: 10px;margin-bottom: 10px;}
.grant-title {font-weight: 900; padding-bottom: 10px; text-transform: uppercase;}
</style>
