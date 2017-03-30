<template lang="html">
  <section class="page">
    <page-header :header="title" />
    NOFO Voca Legal Assist info here
  </section>
</section>
</template>

<script>
const description =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur s
  ollicitudin neque non congue ullamcorper.
  Phasellus lobortis volutpat ipsum, vel tempus ligula aliquet quis.`
const title = "NOFO VOCA Legal Assistance"
const created ='2017-01-29'
const expired ='2017-02-29'
const type  = 'grant'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'NOFOVOCALegalAssistance',
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
