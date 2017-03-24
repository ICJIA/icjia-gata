<template>
  <div id="app">

<navbar />
<!-- <keep-alive> -->
                      <router-view class="view"></router-view>

                    <!-- </keep-alive> -->


<my-footer />

  </div>
</template>

<script>

import Navbar from './components/Navbar'
import MyFooter from './components/Footer'
import metaInfo from 'meta'

export default {

  name: 'app',
  metaInfo,
  created: function () {
      //console.log(this.$route.path)
    },

  mounted: function () {
    },
  components: {
    Navbar,
    MyFooter,
  }
}
</script>

<style lang="scss">

// @import "./scss/base";

</style>
