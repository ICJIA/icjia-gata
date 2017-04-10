<template lang="html">
  <section class="page">

      <page-header :header="title" />

    <div class="text-center" style="margin-top: 30px">
<div class="video-embed">
<div class="youtube"
     id="nFVMlof28nU"
     style="width: 340px; height: 220px;">


</div>
<div class="caption text-center">Video webinar title 1</div>
</div>



</div>

  </section>
</template>

<script>

const description = `Webinars`
const title = "Webinars"
const created = '2017-03-24'
const type  = 'page'
const status = 'live'
import utilities from '@/utilities'
import PageHeader from '@/components/PageHeader'

export default {
  name: 'Webinars',
  pageData:  {
    created,
    description,
    title,
    type,
    status
  },
  metaInfo: {
      // title will be injected into parent titleTemplate
      title,
      meta: [
        { vmid: 'description', name: 'description', content: utilities.stripTags(description)}
    ]
  },
  data () {
    return {
      title
    }
  },
  components: {

    PageHeader

  },

  mounted () {
      $( document ).ready(function() {
        "use strict";
$(function() {
    $(".youtube").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
 });

      });
  }
}
</script>

<style lang="css" scoped>

</style>
