<template lang="html">
  <div>

<div style="background: #ccc; height: 50px; padding-top: 12px">

<span style="float: right; margin-right: 30px">
  <router-link to="/">Home</router-link>
  &nbsp;/&nbsp;
  <router-link to="/">Home</router-link>
</span>
</div>



</div>
</template>

<script>
export default {
  mounted () {
    let _obj = {}
    //console.log(this.$route.fullPath)
    this.url = this.$route.fullPath.replace(/\/\s*$/,'').split('/');

    this.url.shift();
    console.log(this.url)
    this.breadcrumb = `<li class="breadcrumb-item" >
      <router-link to="/">Home</router-link>
    </li>`
  },
  data () {
    return {
      url: [],
      breadcrumb: ''
    }
  }
}
</script>

<style lang="css">
</style>
