<template lang="html">
  <div class="smoothScroll"></div>

</template>

<script>
export default {
  mounted: function() {
    $( document ).ready(function() {

      $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
    scrollTop: target.offset().top - 20
  }, 1000);
  return false;
  }
  }
  });

    });
  }
}
</script>

<style lang="css">
</style>
