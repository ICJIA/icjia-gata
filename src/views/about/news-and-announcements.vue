<template lang="html">

<div>
<section class="page">
<page-header :header="title" />


  <div class="container">

	<div class="col-md-12">

<newsfeed />


	</div>
</div>





</section>
</div>



</template>

<script>
const description = `ICJIA GATA News & Announcements`
const title = "ICJIA GATA News & Announcements"
const created = new Date('2017,03,26')
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'
import Newsfeed from 'components/Newsfeed'

export default {
  name: 'NewsAndInformation',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
  components: {

    PageHeader,
  Newsfeed,

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
