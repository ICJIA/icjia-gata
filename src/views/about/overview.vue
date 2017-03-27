<template lang="html">

<div>
<section class="page">
<page-header :header="title" />


  <div class="container">

	<div class="col-md-12">

  <!-- <h2 class="page-head" id="overview"> GATA General Overview</h2> -->




<p>The <a href="http://ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3559&ChapterID=7" target="_blank">Grant Accountability and Transparency Act</a>, also known as GATA, was passed by the Illinois Legislature in 2014.</p>

<p>GATA confirms <a href="/">ICJIA&#8217;s</a> commitment to the <a href="http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2cfr200_main_02.tpl">Federal Uniform Guidance 2 CFR 200</a>, which went into effect in December 2014.  The Uniform Guidance already applies to all federal grants and federal pass-through funds.
GATA also requires Illinois&#8217; state grants to follow these federal rules for grants which are state funded.
This landmark legislations will increase accountability and transparency in the use of grant funds.
Once fully implemented, it will unify processes and reduce administrative burdens for state agencies and grantees.</p>

<p>Changes in the grant processes are in development.
If they have not already done this, Grantees should prepare themselves by reading this information:</p>
<ul class="gata-list">
<li>State Law 30 ILCS 708 - Grant Accountability and Transparency Act:<br> <a href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3559&ChapterID=7" target="_blank">http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3559&ChapterID=7</a></li>
<li>Electronic Code of Federal Regulations (e-CFR) - Title 2 Grants and Agreements:<br> <a href="http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2cfr200_main_02.tpl" target="_blank">http://www.ecfr.gov/cgi-bin/text-idx?tpl=/ecfrbrowse/Title02/2cfr200_main_02.tpl</a></li>

</ul>
<p>Reminder:  GATA establishes in Illinois law that state grants follow the federal regulations, thus unifying the process for all grants, whether they contain state, federal, or federal pass-through dollars.</p>

<p>We will have specific information about ICJIA&#8217;s grants in the near future.
Also, as additional information becomes available concerning changes in the grant/contracting process, we will post it to the ICJIA website.</p>
<p>
You may also find the Governor&#8217;s Office of Management and Budget (GOMB) website very helpful by reading further information housed there: <a href="http://www.illinois.gov/gov/budget/Pages/GrantAccountability.aspx" target="_blank">http://www.illinois.gov/gov/budget/Pages/GrantAccountability.aspx</a></p>




	</div>
</div>





</section>
</div>



</template>

<script>
const description = `The Grant Accountability and Transparency Act, also known as GATA, was passed by the Illinois Legislature in 2014.
GATA confirms ICJIA's commitment to the Federal Uniform Guidance 2 CFR 200, which went into effect in December 2014. The Uniform Guidance already applies to all federal grants and federal pass-through funds.
 GATA also requires Illinois’ state grants to follow these federal rules for grants which are state funded.
 This landmark legislations will increase accountability and transparency in the use of grant funds.
 Once fully implemented, it will unify processes and reduce administrative burdens for state agencies and grantees.`
const title = "General Overview"
const created = new Date('2017,03,24')
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Overview',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
  components: {

    PageHeader

  },
  data () {
    return {
      created,
      description,
      title,
      type,
      status
    }
  },
}
</script>

<style lang="css">
</style>
