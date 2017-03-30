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
                <span class="grant-deadline">Deadline: {{grant.expired | moment}}</span></div>
                <div class="grant-description" v-html="grant.description"></div>

                <div class="grant-readmore">
                  <router-link :to="grant.path" class="read-more-news">Read more >>
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
import routes from '@/routes.js'
import moment from 'moment';
export default {

  mounted () {
    let grants = []
    let dateNow = moment()

    _.forOwn(routes, function(value, key) {
                //console.log(value.type);
                if (value.type === 'grant' && value.status === 'live' && dateNow < value.expired) {
                    if (dateNow < value.expired) {
                      console.log('true')
                    } else {
                      console.log('false')
                    }
                    let obj = {}
                    // remove 'X_' section identifiers from route name
                    obj.name = value.name
                    obj.path = value.path
                    obj.title = value.title
                    obj.created = value.created
                    if (String(obj.created) === 'Invalid Date') {
                      obj.created =  moment()
                    }
                    obj.expired = value.expired

                    obj.description = value.description
                    if (obj.name != 'direct' && obj.name != 'Redirect') {
                      grants.push(obj)
                    }
                }
            });
            grants = _.orderBy(grants, 'expired','asc')
            if (this.maxItems) {
              this.grants = grants.slice (0, Number(this.maxItems))
            } else {
              this.grants = grants
            }


  },

  data: function () {
  return {
    grants: []
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
ul#grantFeed {list-style: none;}
ul#grantFeed li {margin-bottom: 30px; }
.read-more-news {text-transform: uppercase; font-size: 14px;}
.grant-news {margin-top: 15px;}
.grant-date {margin-bottom: 10px; margin-top: 10px; color: #888}
.grant-readmore {margin-top: 5px; }
.grant-deadline {font-weight: 700; margin-top: 10px;margin-bottom: 10px;}
.grant-title {font-weight: 900; padding-bottom: 10px; text-transform: uppercase;}
</style>
