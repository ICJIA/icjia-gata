<template lang="html">
<div class="">
  Sample news item 2
</div>
</template>

<script>

const description = `Description <b>template</b> Sample2`
const title = "Sample 2 title"
const created = new Date('2016,04,24')
const type  = 'news'
const status = 'live'
import utilities from '@/utilities'
export default {
  name: 'Sample2',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description) }
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
