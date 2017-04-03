<template lang="html">
  <div>

    <div class="hero-heading">
      <div class="text-center">

              <h1 class="h3 section-title"
              style="text-transform: uppercase; padding-left: 15px; padding-right: 15px">{{header}}</h1>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    header: {
      type: String,
      required: true,
      default: 'GATA Heading'
    }
  }
}
</script>

<style lang="css">
</style>
