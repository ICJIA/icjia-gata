<template>
  <div id="app">

<navbar />
<!-- <keep-alive> -->
<transition name="fade">
                      <router-view class="view"></router-view>
                      </transition>

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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
