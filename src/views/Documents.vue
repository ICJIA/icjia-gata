<template lang="html">
<div>
<section class="page">
  <div class="hero-heading">
    <div class="text-center">

            <h1 class="h3 section-title"
            style="text-transform: uppercase">GATA Documents</h1>


    </div>
  </div>
</section>
</div>
</template>

<script>
const description = `Documents`
const title = "GATA Documents"
const created = '2017-03-26'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'


export default {
  name: 'Documents',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
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
