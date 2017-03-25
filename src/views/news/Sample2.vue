<template lang="html">
<div class="">
  Sample news item 2
</div>
</template>

<script>
const description = `Description <b>template</b> Sample2`


export default {
  name: 'Sample2',
  data () {
    return {
      created: new Date('03-02-2017'),
      description: description,
      title: 'Title for Sample News Item 2',
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
