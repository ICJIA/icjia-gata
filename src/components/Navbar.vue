<template>
  <div id="myNav">

    <!-- TEMPLATE START -->
    <div class="collapse bg-about-icjia" id="navbarHeader">
       <div class="container">
         <div class="row">
           <div class="col-sm-8 py-4">
             <h4 class="text-white">About the ICJIA</h4>
             <p class="text-muted">Created in 1983, the <a href="http://www.icjia.state.il.us" target="_blank">Illinois Criminal Justice Information Authority</a> is a state agency dedicated to improving the administration of criminal justice.</p>

<p class="text-muted">The Authority brings together key leaders from the justice system and the public to identify critical issues facing the criminal justice system in Illinois, and to propose and evaluate policies, programs, and legislation that address those issues. The agency also works to ensure the criminal justice system in Illinois is efficient and effective. The Authority’s specific powers and duties are detailed in the <a href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5" target="_blank">Illinois Criminal Justice Information Act.</a></p>
           </div>
           <div class="col-sm-4 py-4">
             <h4 class="text-white">Contact</h4>
             <ul class="list-unstyled">
               <li><a href="http://www.icjia.state.il.us" class="text-white">Visit website</a></li>
               <li><a href="https://twitter.com/icjia_illinois?lang=en" class="text-white">Follow on Twitter</a></li>
               <li><a href="https://www.facebook.com/ICJIA/" class="text-white">Like on Facebook</a></li>
               <li><a href="https://www.youtube.com/channel/UCtZMzk8D3P4OixYTwsfPeKA" class="text-white">View on YouTube</a></li>
               <li><a href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D" class="text-white">Join mailing list</a></li>
               <li><a href="mailto: cja.irc@illinois.gov" class="text-white">Send email</a></li>
             </ul>
           </div>
         </div>
       </div>
     </div>


     <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <button class="hamburger hamburger--spin navbar-toggler-right"
  type="button"
  data-toggle="collapse"
  data-target="#navbarHeader" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <router-link to="/" class="navbar-brand">
      <span class="nav-a">ICJIA | GATA INFORMATION</span>
    </router-link>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style="margin-left: 25px;">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"
        href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link class="dropdown-item" to="/overview">General Overview</router-link>
          <router-link class="dropdown-item" to="/news" exact>News & Announcements</router-link>
          <!-- <router-link class="dropdown-item" to="/grant-information">Grant Information</router-link> -->
          <router-link class="dropdown-item" to="/contact">Contact</router-link>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Grant Opportunities
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
  <h6 class="dropdown-header">Current Grant Opportunities</h6>
          <div v-if="grants.length > 0">

          <span v-for="grant in grants">
              <router-link class="dropdown-item" :to="grant.path" exact>{{grant.title}}</router-link>
          </span>
        </div>
        <div v-else>
          <h6 class="dropdown-header" style="color: #bbb">There are no current grant opportunities</h6>
        </div>


          <div class="dropdown-divider"></div>
          <h6 class="dropdown-header">Archived Grant Opportunities</h6>
          <router-link class="dropdown-item" to="/grants" exact>View archive</router-link>

        </div>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/documents">Documents</router-link>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Training
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link class="dropdown-item" to="/webinars">Webinars & Presentations</router-link>
          <router-link class="dropdown-item" to="/faqs">FAQs</router-link>

        </div>
      </li>


    </ul>


  </div>


</nav>

    <!-- TEMPLATE END -->

  </div>
</template>

<script>
import routes from '@/routes.js'
import moment from 'moment';
export default {
    mounted() {

        // console.log(this.publicPath)
        $(document).ready(function() {
            $('.hamburger').click(function() {
                $(this).toggleClass('is-active');
            });
        });


        let dateNow = moment()

        let filtered = _.filter(this.$store.grants, function(o) {
            return o.expired > dateNow;
        })
        let grants = _.orderBy(filtered, 'title', 'asc')

        this.grants = grants




    },
    components: {

    },

    name: 'Navbar',
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
            grants: []
        }
    }
}
</script>


<style scoped>
#navbarHeader a {color: #fff;}
#navbarHeader a:hover {color: #aaa}
.hamburger {margin-top: 1px}
.nav-header {font-weight: 900; text-transform: uppercase; color: #444}
.nav-a {font-weight: 900;}

</style>
s
