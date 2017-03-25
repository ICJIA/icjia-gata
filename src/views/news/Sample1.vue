<template lang="html">
<div class="">
  Sample news item 1
</div>
</template>

<script>
const description = `Description <b>template</b> Sample1`


export default {
  name: 'Sample1',
  data () {
    return {
      created: new Date('03-22-2017'),
      description: description,
      title: 'Title for Sample News Item1',
      type: 'news',
      status: 'live'
    }
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description }
    ]
  }
}
</script>

<style lang="css">
</style>
