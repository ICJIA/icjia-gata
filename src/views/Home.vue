<template>
<div>
<navbar />

<section>
  Homepage content here
</section>

<my-footer />

</div>









</template>

<script>
    import Navbar from '@/components/Navbar'
    import MyFooter from '@/components/Footer'

    export default {
        name: 'Home',
        mounted () {

        },
        metaInfo() {
        return {
          title: this.title

        }
      },
        components: {

            Navbar,
            MyFooter
        },
        data() {
            return {
              title: 'Home'
            }
        }
    }
</script>

<style scoped>
#section-0 {background-color: #3a3a87; color: #fff}
#section-0 .text-muted {color: #fff !important}
#section-0 .lead {color: #fff !important}
#section-1 {background-color: #fff; padding-top: 60px; padding-bottom: 60px;}
#section-2 {background-color: #eee; padding-top: 60px; padding-bottom: 50px;}

</style>
