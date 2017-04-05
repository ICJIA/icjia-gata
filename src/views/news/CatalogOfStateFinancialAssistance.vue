<template lang="html">
<div>
  <section class="page">
    <page-header header="News & Announcements" />
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <h1 class="h4 grant-main-head text-center">
            IMPORTANT ANNOUNCEMENT TO ALL STATE AGENCIES AND GRANTEE ORGANIZATIONS

          </h1>

          <p style="margin-bottom: 40px;">Announcing the public release of the Catalog of State Financial Assistance (CSFA) and the Grantee Compliance Enforcement System</p>

          <h2 class="h5 news-section-head first" >Catalog of State Financial Assistance</h2>

<p>The CSFA is required by GATA and provides a single, authoritative, statewide, comprehensive source of financial assistance program information. State agencies have populated the CSFA with federal, federal pass-through and state awards received.  The CSFA also records grantee awards under each CSFA number.
</p>
<p>The public can search the CSFA for agencies with active grant programs,
  currently funded grants, current funding opportunities,
  and registered grantees.  Use the CSFA tab of this website or the
  following link to access the public-facing CSFA:
  <a href="https://www.illinois.gov/sites/GATA/Grants/SitePages/CSFA.aspx">https://www.illinois.gov/sites/GATA/Grants/SitePages/CSFA.aspx.</a>
</p>


<h2 class="h5 news-section-head">Grantee Compliance Enforcement System</h2>

<p>
Illinois is utilizing a federal framework for the Grantee Compliance Enforcement System to drive grantee compliance with grant requirements.  This system promotes cross-agency information sharing to improve risk assessment processes and enhance fiscal management transparency.
</p>

<p>
GATA requires the maintenance of a list of individuals and entities temporarily or permanently ineligible to receive grant funds.
This list called the Illinois Stop Payment List
(initially introduced in December 2015),
is a component of the Grantee Compliance Enforcement System.
The Grantee Compliance Enforcement System was implemented January 1, 2017.

</p>

<p>For full information and links, please see: <a href="https://www.illinois.gov/sites/GATA/Pages/default.aspx">https://www.illinois.gov/sites/GATA/Pages/default.aspx</a></p>


        </div>

      </div>

    </div>

  </section>
</div>
</template>

<script>
const description =
`
<p>Announcing the public release of the Catalog of State Financial Assistance (CSFA) and the Grantee Compliance Enforcement System.</p>
<p>
<strong>The Catalog of State Financial Assistance (CSFA)</strong> is
required by GATA and provides a single,
authoritative, statewide, comprehensive source
of financial assistance program information.</p>

<p><strong>The Grantee Compliance Enforcement System</strong> drives grantee compliance with grant requirements.  This system promotes cross-agency information sharing to improve risk
assessment processes and enhance fiscal management transparency. </p>

`


const title = "IMPORTANT ANNOUNCEMENT TO ALL STATE AGENCIES AND GRANTEE ORGANIZATIONS"
const created ='2017-04-4'
const type  = 'news'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Sample0',
  pageData:  {
    created,
    description,
    title,
    type,
    status
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
  components: {

    PageHeader

  },
  data () {
    return {
      title
    }
  },
}
</script>

<style lang="css">
</style>
