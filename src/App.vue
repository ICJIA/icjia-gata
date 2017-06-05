<template>
  <div id="app">

    <!-- <div class="sticky-container">
    <ul class="sticky">
        <li>
            <img src="/static/icons/facebook.jpg" style="color: #3B5998" width="32" height="32">
            <p><a href="https://www.facebook.com/codexworld" target="_blank">Like Us on<br>Facebook</a></p>
        </li>
        <li>
            <img src="/static/icons/twitter-circle.png" width="32" height="32">
            <p><a href="https://twitter.com/codexworldblog" target="_blank">Follow Us on<br>Twitter</a></p>
        </li>


        <li>
            <img src="/static/icons/youtube-circle.png" width="32" height="32">
            <p><a href="http://www.youtube.com/codexworld" target="_blank">Subscribe on<br>YouYube</a></p>
        </li>

    </ul>
</div> -->

    <div id="outdated"></div>

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
    created: function() {
        //console.log(this.$route.path)
    },

    mounted: function() {
        $(function() {


            // var stickyElements = document.getElementsByClassName('sticky');
            // //console.log(stickyElements)
            // for (var i = stickyElements.length - 1; i >= 0; i--) {
            //   Stickyfill.add(stickyElements[i]);
            // }




            //Outdated browser plugin. Anything less than IE11
            outdatedBrowser({
                bgColor: '#f25648',
                color: '#ffffff',
                lowerThan: 'borderImage',
                languagePath: '/static/outdated-browser/outdatedbrowser/lang/en.html'
            })
          });


        // Google Analytics download auto tracking script
        // Automatically tracks clicked links
        if (typeof jQuery != 'undefined') {
            jQuery(document).ready(function($) {
                var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;
                var baseHref = '';
                if (jQuery('base').attr('href') != undefined)
                    baseHref = jQuery('base').attr('href');
                jQuery('a').each(function() {
                    var href = jQuery(this).attr('href');
                    if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
                        jQuery(this).click(function() {
                            var extLink = href.replace(/^https?\:\/\//i, '');
                            ga('send', 'event', 'External Link', 'click', extLink);
                            if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
                                setTimeout(function() {
                                    location.href = href;
                                }, 200);
                                return false;
                            }
                        });
                    } else if (href && href.match(/^mailto\:/i)) {
                        jQuery(this).click(function() {
                            var mailLink = href.replace(/^mailto\:/i, '');
                            ga('send', 'event', 'Email Link', 'click', mailLink);
                        });
                    } else if (href && href.match(filetypes)) {
                        jQuery(this).click(function() {
                            var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                            var filePath = href;
                            ga('send', 'event', 'Download Link', 'click-' + extension, filePath);
                            if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
                                setTimeout(function() {
                                    location.href = baseHref + href;
                                }, 200);
                                return false;
                            }
                        });
                    }
                });
            });
        }




    },
    components: {
        Navbar,
        MyFooter
    }
}
</script>

<style lang="scss" scoped>

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
/*
.sticky-container{
    padding:0px;
    margin:0px;
    position:fixed;
    right:-130px;
    top:350px;
    width:210px;
    z-index: 1100;
}
.sticky li{
    list-style-type:none;
    background-color:#fff;
    color:#efefef;
    height:43px;
    padding:0px;
    margin:0px 0px 1px 0px;
    -webkit-transition:all 0.25s ease-in-out;
    -moz-transition:all 0.25s ease-in-out;
    -o-transition:all 0.25s ease-in-out;
    transition:all 0.25s ease-in-out;
    cursor:pointer;
}
.sticky li:hover{
    margin-left:-115px;
}
.sticky li img{
    float:left;
    margin:5px 4px;
    margin-right:5px;
}
.sticky li p{
    padding-top:5px;
    margin:0px;
    line-height:16px;
    font-size:11px;
}
.sticky li p a{
    text-decoration:none;
    color:#2C3539;
}
.sticky li p a:hover{
    text-decoration:underline;
}
*/
</style>
