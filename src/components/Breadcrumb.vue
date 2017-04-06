<template lang="html">
  <div>
    <nav class="breadcrumb" style="margin-top: -30px; margin-bottom: 80px">
      <span style="float: right;">
          <router-link class="breadcrumb-item" to="/">Home</router-link>

          <!-- <span v-for="section in url">
            <router-link class="breadcrumb-item" :to="section">{{ section }}</router-link>
          </span> -->
          <router-link class="breadcrumb-item" to="/">Library</router-link>
          <router-link class="breadcrumb-item" to="/">Test</router-link>

</span>
</nav>

</div>
</template>

<script>
export default {
  mounted () {
    let _obj = {}
    console.log(this.$route.fullPath)
  

  },
  data () {
    return {
      url: []
    }
  }
}
</script>

<style lang="css">
</style>
