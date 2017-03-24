<template>
<div>


<section id="section-0">



          <div class="hero-heading">
            <div class="text-center">

                    <h1 class="h3 section-title" style="text-transform: uppercase">ICJIA GATA Overview</h1>


            </div>
          </div>

          <div class="container-fluid" style="margin-left: 50px; margin-right: 50px;">
            <div class="row">
              <div class="col-md-12 spacerTop30">
                <p>The <a href="http://ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3559&ChapterID=7" target="_blank">Grant Accountability and Transparency Act</a>, also known as GATA, was passed by the Illinois Legislature in 2014.</p>

<p>GATA confirms <a href="/">ICJIA&#8217;s</a> commitment to the <a href="http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2cfr200_main_02.tpl">Federal Uniform Guidance 2 CFR 200</a>, which went into effect in December 2014.  The Uniform Guidance already applies to all federal grants and federal pass-through funds.
GATA also requires Illinois&#8217; state grants to follow these federal rules for grants which are state funded.
This landmark legislation will increase accountability and transparency in the use of grant funds.
Once fully implemented, it will unify processes and reduce administrative burdens for state agencies and grantees.</p>

<p>We will have specific information about ICJIA&#8217;s grants in the near future.
Also, as additional information becomes available
concerning changes in the grant/contracting process, we will post it to this website.</p>


              </div>
            </div>
          </div>
</section>

<section id="section-1">

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6" style="margin: 0; padding: 0; padding-right: 1px">
        <div class="hero-heading">
          <div class="text-center">

                  <h1 class="h4 section-title">GATA News & Information</h1>

          </div>
        </div>

        <newsfeed />
      </div>

      <div class="col-md-6" style="margin: 0; padding: 0; padding-left: 1px;">
        <div class="hero-heading">
          <div class="text-center">

                  <h1 class="h4 section-title">Current Grant Opportunities</h1>


          </div>
        </div>
        <grant-opportunities />
      </div>

    </div>

  </div>


</section>




</div>









</template>

<script>

    import Newsfeed from 'components/Newsfeed'
    import GrantOpportunities from 'components/GrantOpportunities'
    export default {
        name: 'Home',
        mounted () {

        },
        metaInfo() {
        return {
          title: this.title

        }
      },
        components: {

          Newsfeed,
          GrantOpportunities

        },
        data() {
            return {
              title: 'Home'
            }
        }
    }
</script>

<style scoped>
#section-0 {background-color: #fff; color: #444; padding-bottom: 60px;}

#section-1 {background-color: #eee; padding-top: 0px; padding-bottom: 60px;}

</style>
