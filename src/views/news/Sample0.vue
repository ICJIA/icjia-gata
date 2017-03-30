<template lang="html">
<div>
  <section class="page">
    <page-header :header="title" />
    News item sample 0 content
  </section>
</div>
</template>

<script>
const description =
`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin neque non congue ullamcorper.
Phasellus lobortis volutpat ipsum, vel tempus ligula aliquet quis.
`


const title = "News sample 0 title"
const created ='2011-07-24'
const type  = 'news'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Sample0',
  pageData:  {
    created,
    description,
    title,
    type,
    status
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title: title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
  components: {

    PageHeader

  },
  data () {
    return {
      title
    }
  },
}
</script>

<style lang="css">
</style>
