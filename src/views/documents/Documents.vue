<template lang="html">
<div>
Documents
</div>
</template>

<script>
const description = `Documents`
const title = "GATA Documents"
const created = new Date('2017,03,24')
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
