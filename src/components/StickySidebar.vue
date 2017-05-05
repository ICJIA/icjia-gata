<template lang="html">

</template>

<script>
export default {
  mounted: function() {
    $( document ).ready(function() {
      var sidebarLinks = document.getElementsByClassName('sidebarLink');
      console.log(sidebarLinks)
      var stickyElements = document.getElementsByClassName('sticky');
      //console.log(stickyElements)
      for (var i = stickyElements.length - 1; i >= 0; i--) {
        Stickyfill.add(stickyElements[i]);
      }
    });
  }
}
</script>

<style lang="css">
</style>
