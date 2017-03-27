<template lang="html">
  <section class="page">
    <div class="hero-heading">
      <div class="text-center">

              <h1 class="h3 section-title"
              style="text-transform: uppercase">GATA FAQs</h1>


      </div>
    </div>
  </section>
</template>

<script>
const description = `FAQs`
const title = "GATA FAQs"
const created = new Date('2017,03,24')
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'


export default {
  name: 'FAQs',
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
