<template lang="html">
  <section class="page">
    <page-header :header="title" />

    <div class="container">
      <div class="row">
  	   <div class="col-md-12">

         <div class="faq-question first"><p>
           I have a program and am in need of
           grant funding. What programs do you administer?
         </p>
       </div>
<div class="faq-response"><p>
  The Authority administers a variety of
  federal and state grant programs.
  <a href="http://www.icjia.state.il.us/grants/overview#tab_grant-programs">View programs</a> to see if your organization
  meets the eligibility requirements of an
  Authority-administered program.
   Then <router-link to="/grants">visit grant opportunities</router-link> to see
    if we are accepting grant applications for the program.</p></div>

 <div class="faq-question"><p>What are the funding cycles?</p>
</div>
<div class="faq-response"><p>Federal programs are funded from
  October 1 to September 30. State programs are funded from July 1 to June 30.</p></div>

 <div class="faq-question"><p>How do I find out about grant opportunities?</p>
</div>
<div class="faq-response"><p>Find out about Authority grant opportunities,
  news, and research by checking the <a href="http://www.icjia.state.il.us">ICJIA website</a>,
  <a href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D">subscribing to the CJ Dispatch</a>,
   and following us on <a href="https://www.facebook.com/ICJIA/">Facebook</a> and <a href="https://twitter.com/icjia_illinois?lang=en">Twitter</a>.</p></div>

 <div class="faq-question"><p>How do I apply for a grant?</p>
</div>
<div class="faq-response"><p>When you see a grant opportunity
  listed on the <router-link to="/">Authority's GATA website</router-link>, check to make sure
   your agency meets the program's specific
   criteria for grant funding.
   If your agency is eligible for funding,
   read the instructions for information on how to submit an application.</p></div>

<div class="faq-question"><p>We tried to apply for a grant but had problems
  with the application process. What should we do?</p>
 </div>
<div class="faq-response"><p>Please use the <a href="http://www.icjia.state.il.us/contact">Authority
  contact information</a> on the request for
  applications for technical assistance at any point in the process.</p></div>

       </div>
     </div>
    </div>


  </section>
</template>

<script>
const description = `FAQs`
const title = "GATA FAQs"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'



export default {
  name: 'FAQs',
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

    PageHeader,



  },
  data () {
    return {
      title
    }
  },
}
</script>

<style lang="css">
.faq-question {font-weight:700; margin-top: 40px;}
.faq-question.first {margin-top: 10px;}
.faq-response p {margin-left: 15px}
</style>
