<template lang="html">
<div class="">
  Sample news item 0
</div>
</template>

<script>
const description = `Description <b>template</b> Sample0`
const title = "Sample 0 title"
const created = new Date('01-22-2017')
const type  = 'news'
const status = 'live'

export default {
  name: 'Sample0',
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: title,
      meta: [
        { vmid: 'description', name: 'description', content: description }
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
