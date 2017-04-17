<template lang="html">
<div>
<section class="page">
  <page-header :header="title" />
<div class="container">
  <div class="row">
    <div class="col-md-12">

      <div class="alert alert-info text-center" role="alert" style="margin-bottom: 65px">
        <!-- <strong><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="padding-top: -8em"></i>&nbsp;&nbsp;</strong> -->
        <span class="fa fa-info-circle fa-2x" style=" vertical-align: middle;"></span>
  &nbsp;&nbsp;<span class="my-text"><strong>The following forms are samples and not for use.</strong></span>
      </div>

<div class="document-header first">GATA Uniform Grant Agreement Template</div>
<div class="document-text">
View an example of a basic ICJIA grant agreement.
 An actual grant agreement also will have program- and grantee-specific information.
 </div>
 <ul><li>
<a href="/static/documents/Agreement_Template/GATA_UNIFORM_GRANT_AGREEMENT_040517.pdf">
  GATA Uniform Grant Agreement&nbsp;&raquo;</a> </li></ul>

<div class="document-header">ICJIA Uniform Budget Template</div>
<div class="document-text">View examples of the ICJIA Uniform Budget Template documents.</div>


<ul>
  <li>

  <a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Budget_Instructions_(General).pdf">Budget Instructions (General).pdf&nbsp;&raquo;</a>

  </li>

  <li>
  <a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Budget_Instructions_(ICJIA).pdf">Budget Instructions (ICJIA).pdf&raquo;</a>

  </li>
  <li>
    <a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_A_ICJIA_Funds.pdf">Section A ICJIA Funds&nbsp;&raquo;</a>
</li>
  <li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_A_Indirect_Cost_Info.pdf">Section A Indirect Cost Info</a>
</li>

<li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_B_Match_Funds.pdf">Section B Match Funds&nbsp;&raquo;</a>
</li>

<li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Applicant_Certification.pdf">Applicant Certification&nbsp;&raquo;</a>
 </li>

<li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_FFATA_Form.pdf">FFATA Form&nbsp;&raquo;</a>
</li>

<li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C1_Personnel.pdf">Section C1 Personnel&nbsp;&raquo;</a>
</li>

<li><a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C2_Fringe_Benefits.pdf">Section C2 Fringe Benefits&nbsp;&raquo;</a>
</li>

<li>
<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C3_Travel.pdf">Section C3 Travel&nbsp;&raquo;</a>
</li>

<li>
<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C4_Equipment.pdf">Section C4 Equipment.pdf&nbsp;&raquo;</a>
</li>

<li>

<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C5_Supplies.pdf">Section C5 Supplies.pdf&nbsp;&raquo;</a>
</li>

<li>

<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C6_Contractual.pdf">Section C6 Contractual.pdf&nbsp;&raquo;</a>

</li>

<li>
<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C7_Indirect_Costs.pdf">Section C7 Indirect Costs.pdf&nbsp;&raquo;</a>

</li>

<li>

<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Section_C_Budget_Summary.pdf">Section C Budget Summary.pdf&nbsp;&raquo;</a>

</li>

<li>

<a href="/static/documents/Budget_Template/ICJIA_Uniform_Budget_Template_032817_Sample_Agency_Approval.pdf">Agency Approval.pdf&nbsp;&raquo;</a>

</li>


</ul>


<div class="document-header">ICJIA Fiscal Reports</div>

<div class="document-text">View a Monthly or a Quarterly Fiscal Report in the required reporting format. Reporting deadlines vary by grant.</div>
<ul><li>
<a href="/static/documents/Fiscal_Reporting/Grantee_Fiscal_Report_1-4_Quarter_with_Close_Out_with_Cents_4_2017_SAMPLE.pdf">Grantee Fiscal Report 1-4 Quarter with Close Out with Cent 04-2017&nbsp;&raquo;</a>
</li></ul>

<div class="document-header">Risk Assessment Form</div>
<div class="document-text">View an example of a programmatic Risk Assessment. The Risk Assessment Form may include additional questions specific to a grant program.</div>
<ul><li>
<a href="/static/documents/Risk_Assessment_Form/Programmatic_Risk_Assessment_Questionnaire_030817.pdf">Programmatic Risk Assessment Questionnaire 03-08-2017.pdf&nbsp;&raquo;</a>
</li></ul>

<div class="document-header">Uniform Application</div>
<div class="document-text">View the ICJIA Uniform Application for Grant Assistance.</div>
<ul><li>
<a href="/static/documents/Uniform_Application/ICJIA_Uniform_Application_for_Grant_Assistance_110216.pdf">Uniform Application for Grant Assistance 11-02-2016&nbsp;&raquo;</a>
</li></ul>

</div>

</div>

</div>
</section>
</div>
</template>

<script>
const description = `Documents`
const title = "Documents"
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
