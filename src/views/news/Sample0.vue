<template lang="html">
<div class="">
  Sample news item 0
</div>
</template>

<script>
const description = `Description <b>template</b> Sample0`


export default {
  name: 'Sample0',
  data () {
    return {
      created: new Date('03-12-2017'),
      description: description,
      title: 'Title for Sample News Item 0',
      type: 'news',
      status: 'live'
    }
  },
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: description }
    ]
    }
}
</script>

<style lang="css">
</style>
