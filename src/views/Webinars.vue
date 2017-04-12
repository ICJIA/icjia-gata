<template lang="html">
  <section class="page">

      <page-header :header="title" />






<div class="card" style="width: 30%">
  <span class="card-img-top youtube" id="C6-qCnIsNjs" style="height: 300px" alt="Card image cap"></span>
  <div class="card-block">
    <h4 class="card-title">Recording #1: Program Goals, Objectives and Performance Indicators Webinar</h4>
    <p class="card-text">Illinois Criminal Justice Information Authority  (ICJIA) Federal State Grants Unit (FSGU) Grant Accountability and Transparency Act (GATA) Notice of Funding Opportunity (NOFO) Program Goals, Objective and Performance Indicators webinar recording #1  April 2017 (1 of 9 recording series).</p>

  </div>
  <div class="card-footer">
      <small class="text-muted">Added April 2017</small>
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
        $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/mqdefault.jpg)');

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
.card {margin-top: 30px; margin-bottom: 30px}
.card-img-top {border-bottom: 1px solid #ccc;}
.card-footer small {font-weight: 700}
</style>
