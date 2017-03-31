<template lang="html">

<div>
<section class="page">
<page-header :header="title" />


  <div class="container">

	<div class="col-md-12">

<grantfeed
  showExpired="true"
  sortBy="title"
  sortDirection="asc"/>

<!-- added -->

	</div>
</div>





</section>
</div>



</template>

<script>
const description = `ICJIA GATA Grant Archive`
const title = "ICJIA GATA Grant Archive"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'
import Grantfeed from 'components/Grantfeed'

export default {
  name: 'Grants',
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
  Grantfeed,

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
