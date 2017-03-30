<template lang="html">
  <section class="page">
    <page-header :header="title" />
    Test Grant
  </section>
</section>
</template>

<script>
const description =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur s
  ollicitudin neque non congue ullamcorper.
  Phasellus lobortis volutpat ipsum, vel tempus ligula aliquet quis.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur s
  ollicitudin neque non congue ullamcorper.
  Phasellus lobortis volutpat ipsum, vel tempus ligula aliquet quis.`
const title = "Test Grant"
const created ='2016-05-29'
const expired ='2017-05-05'
const type  = 'grant'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'TestGrant',
  pageData:  {
    created,
    description,
    expired,
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
