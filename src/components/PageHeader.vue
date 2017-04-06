<template lang="html">
  <div>

    <div class="hero-heading">
      <div class="text-center">
              <h1 class="h3 section-title"
              style="text-transform: uppercase; padding-left: 15px; padding-right: 15px">{{header}}</h1>
      </div>

    </div>
    <!-- <div v-if="breadcrumb">
      <breadcrumb />
    </div> -->
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  data () {
    return {

    }
  },
  components: {
    Breadcrumb,
  },
  props: {
    header: {
      type: String,
      required: true,
      default: 'GATA Heading'
    },
  breadcrumb: {
    type: Boolean,
    default: true
    }
  }
}
</script>

<style lang="css">
</style>
