<template lang="html">
  <section>
    <div  v-if="checkExpire(expired)" class="alert alert-danger text-center" role="alert" style="margin-bottom: 60px">
        <span style="color: red; font-weight: 900">
          THIS FUNDING OPPORTUNITY HAS EXPIRED
        </span>

    </div>
  </section>
</template>

<script>
import moment from 'moment'
import utilities from '@/utilities'
export default {

  data () {
    return {
      now: moment().subtract(1,'days')
    }
  },
  props: {
    expired: {
      type: String,
      require: false
    }
    },
  methods: {
    checkExpire(d) {
      if (moment(d) < this.now) {
        return true
      }
    }
  }
}
</script>

<style lang="css">
</style>
