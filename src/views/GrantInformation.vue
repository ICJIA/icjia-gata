<template lang="html">

<div>
<section class="page">
<page-header :header="title" />


  <div class="container">

	<div class="col-md-12">

Grant Information


	</div>
</div>





</section>
</div>



</template>

<script>
const description = `Grant Information`
const title = "sGrant Information"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'GrantInformation',
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
</style>
