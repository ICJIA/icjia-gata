<template lang="html">
<div class="">
  Sample news item 1
</div>
</template>

<script>

const description = `Description <b>template</b> Sample1`
const title = "Sample 1 title"
const created = new Date('03-22-2017')
const type  = 'news'
const status = 'live'
import utils from '@/utils'

export default {
  name: 'Sample1',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: title,
      meta: [
        { vmid: 'description', name: 'description', content: utils.stripTags(description) }
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
