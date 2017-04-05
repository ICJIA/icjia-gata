<template>
<div>


<section id="section-0" class="page">



          <page-header :header="title" />

          <div class="container-fluid" style="margin-left: 50px; margin-right: 50px;">
            <div class="row">
              <div class="col-md-12 spacerTop30">


<p><a href="http://ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3559&ChapterID=7">The Grant Accountability and Transparency Act (GATA), 30 ILCS 708/1 et seq.</a>, is landmark
legislation initiated in 2014 that increases accountability and transparency in the use of grant
funds and reduces the administrative burden on both State agencies and grantees through
adoption of the federal grant guidance and regulations.</p>
<p>Pursuant to this Act, the Grant Accountability and Transparency Unit (GATU) has been established
in the <a href="https://www.illinois.gov/gov/budget/Pages/GrantAccountability.aspx">Governor’s Office of Management and Budget</a>; GATU is charged with implementation of the
Act in coordination with State grant-making agencies and nonprofit organizations in Illinois.
GATA requires grants awarded from state agencies to be competitive bid and have require all
applicants to follow a registration and pre-award screening process.
<p>
<strong>This competitive grant award process is initiated with a Notice of
  Funding opportunity formally referenced as a NOFO.</strong></p>


</p>

<h3 class="h4" style="margin-top: 30px; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 25px">ICJIA’s Grant Award Process</h3>

<p>A NOFO (Notice of Funding Opportunity) document is similar to an Request for Proposal (RFP) and requires the applicant to concisely
address a specified scope of work, provide a program budget detailing personnel/equipment needs and
qualify their experience to implement the program scope of services. NOFO applications are
competitively reviewed and scored.</p>
<!--<p>All NOFO applicants must :</p>
<ul>
  <li>Register on the <a href="https://www.illinois.gov/gov/budget/Pages/GrantAccountability.aspx">State of Illinois Grant Accountability and
    Transparency Act (GATA) web portal</a></li>
<li>Submit pre-qualification information – DUNS, SAMS, Secretary of State</li>
<li>Complete the Internal Control Questionnaire (ICQ)</li>
</ul>
Once a grant award is given to an applicant they must submit to ICJIA a grant packet that includes an ICJIA
approved:
<ul>
  <li>Fully executed agreement</li>
<li>Scope of Work / Program Budget/ Programmatic Risk Assessment</li>
</ul>-->

<div class="text-center" style="margin-top: 40px">
  <router-link to="/overview" class="btn btn-secondary read-more">
  Read full overview&nbsp;&raquo;</router-link>
</div>

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

                  <h1 class="h4 section-title">
                    <router-link to="/news">News & Announcements</router-link>
                  </h1>

          </div>
        </div>

        <newsfeed
          :maxItems="2"
          />

        <!-- <div class="text-center" style="margin-top: 30px; margin-bottom: 50px">
          <router-link to="/news" class="btn btn-secondary read-more">
          News Archive&nbsp;&raquo;</router-link>
        </div> -->
      </div>

      <div class="col-md-6" style="margin: 0; padding: 0; padding-left: 1px;">
        <div class="hero-heading">
          <div class="text-center">

                  <h1 class="h4 section-title">
                    <router-link to="/grants">
                      Grant Opportunities
                    </router-link></h1>


          </div>
        </div>

        <grantfeed
          showExpired="false"
          sortBy="expired"
          sortDirection="asc"
          />



        <div class="" style="float: right; margin-top: 0px; margin-right: 35px; margin-bottom: 30px">
          <router-link to="/grants" class="read-more" style="font-size: 14px;">
          Grant Archive&nbsp;&raquo;</router-link>
        </div>
      </div>

    </div>

  </div>


</section>




</div>









</template>

<script>


    const description = `Home`
    const title = "Grant Accountability and Transparency at ICJIA"
    const created = '2017-03-26'
    const type  = 'page'
    const status = 'live'


    import utilities from '@/utilities'
    import Newsfeed from 'components/Newsfeed'
    import Grantfeed from 'components/Grantfeed'
    import PageHeader from 'components/PageHeader'
    export default {
      name: 'Home',
      pageData:  {
        created,
        description,
        title,
        type,
        status
      },
      metaInfo: {
          title: title,
          meta: [
            { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
        ]
      },
        components: {
          PageHeader,
          Newsfeed,
          Grantfeed

        },
        data () {
          return {
            title
          }
        },
    }
</script>

<style scoped>
#section-0 {background-color: #fff; color: #444; padding-bottom: 10px;}

#section-1 {background-color: #eee; padding-top: 0px; padding-bottom: 50px;}

.section-title a {color: #fff}
.section-title a:hover {text-decoration: none; color: #aaa}

</style>
