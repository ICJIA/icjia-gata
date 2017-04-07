<template lang="html">
<div>
<section class="page">
  <page-header :header="title" />
<div class="container">
  <div class="row">
    <div class="col-md-12">



<div class="faq-question first">GATA Uniform Grant Agreement Template</div>
<div class="faq-response">
View an example of a basic ICJIA grant agreement.
 An actual grant agreement also will have program- and grantee-specific information.
 </div>
 <p>
<a href="/static/documents/GATA_UNIFORM_GRANT_AGREEMENT_040517.pdf">Download&raquo;</a> ()</p>

<div class="faq-question">ICJIA Uniform Budget Template</div>
<div class="faq-response">View examples of the ICJIA Uniform Budget Template documents.</div>


<ul>
  <li><a href="/static/documents/">Sample_ Section_A_ICJIA_Funds&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_A_ICJIA_Funds.pdf)</li>
  <li><a href="/static/documents/">Sample_ Section_A_Indirect_Cost_Info</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_A_Indirect_Cost_Info.pdf)</li>

<li><a href="/static/documents/">Sample_ Section_B_Match_Funds&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_B_Match_Funds.pdf)</li>

<li><a href="/static/documents/">Sample_ Applicant_Certification&nbsp;&raquo;</a>
 (ICJIA_Uniform_Budget_Template_032817_Sample_ Applicant_Certification.pdf)</li>

<li><a href="/static/documents/">Sample_ FFATA_Form&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ FFATA_Form.pdf)</li>

<li><a href="/static/documents/">Sample_ Section_C1_Personnel&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C1_Personnel.pdf)</li>

<li><a href="/static/documents/">Sample_ Section_C2_Fringe_Benefits&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C2_Fringe_Benefits.pdf)</li>

<li>
<a href="/static/documents/">Sample_ Section_C3_Travel&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C3_Travel.pdf)</li>

<li>
<a href="/static/documents/">Sample_ Section_C4_Equipment.pdf&nbsp;&raquo;</a>
(ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C4_Equipment.pdf)</li>s

Sample_ Section_C5_Supplies.pdf
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C5_Supplies.pdf)

Sample_ Section_C6_Contractual
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C6_Contractual.pdf)

Sample_ Section_C7_Indirect_Costs
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C7_Indirect_Costs.pdf)

Sample_ Section_C_Budget_Summary
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_ Section_C_Budget_Summary.pdf)

Sample_Agency_Approval
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_Agency_Approval.pdf)

Sample_Budget_Instructions_(General)
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_Budget_Instructions_(General).pdf)

Sample_Budget_Instructions_(ICJIA)
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Budget_Template_032817_Sample_Budget_Instructions_(ICJIA).pdf)

</ul>


ICJIA Fiscal Reports
View a Monthly or a Quarterly Fiscal Report in the required reporting format. Reporting deadlines vary by grant.
<a href="/static/documents/">Download&raquo;</a> (Grantee_Fiscal_Report_1-4_Quarter_with_Close_Out_with_Cents_4_2017_SAMPLE.pdf)

Risk Assessment Form
View an example of a programmatic Risk Assessment. The Risk Assessment Form may include additional questions specific to a grant program.
<a href="/static/documents/">Download&raquo;</a> (Programmatic_Risk_Assessment_Questionnaire_030817.pdf)

Uniform Application
View the ICJIA Uniform Application for Grant Assistance.
<a href="/static/documents/">Download&raquo;</a> (ICJIA_Uniform_Application_for_Grant_Assistance_110216.pdf)
</div>

</div>

</div>
</section>
</div>
</template>

<script>
const description = `GATA Documents and Form Examples`
const title = "GATA Documents and Form Examples"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Documents',
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
.document-title {font-weight: 700}
</style>
