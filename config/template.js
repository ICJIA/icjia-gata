let path = require('path')
let moment = require('moment-timezone')
var config = require('./index.js')

let buildInfo = [{
    Build: moment().tz("America/Chicago").format("dddd, MMMM Do YYYY, h:mm:ss a"),
    GitHub: 'https://github.com/icjia/icjia-gata',
    Contact: 'christopher.schweda@illinois.gov'
}]

let links = [
    'https://fonts.googleapis.com/css?family=Lato:400,700,900|Roboto:400,500,700,900',
    'https://fonts.googleapis.com/css?family=Montserrat:400,700',
    'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800',
    'https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.3/outdatedbrowser.min.css'
]

let meta= [
    {
      name: 'google-site-verification',
      content: 'FTf_VAGmkX6nvkYTl9S4vtCK-1Dy3N9kyOteR0poBE8'
    }
  ],

let headscripts = [
  'https://cdnjs.cloudflare.com/ajax/libs/stickyfill/1.1.4/stickyfill.js',
  'https://use.fontawesome.com/0fc34dc4bc.js',
  'https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.3/outdatedbrowser.min.js',
]

let postscripts = [
  '//s7.addthis.com/js/300/addthis_widget.js#pubid=cschweda'
]



let appMountId = 'app'

let inject = false
let template = require('cschweda-webpack-template')
let filename = config.build.index
let minify = {
    removeComments: false,
    collapseWhitespace: true,
    removeAttributeQuotes: true
}

let chunksSortMode = 'dependency'

module.exports = {
    build: {
        filename,
        template,
        inject,
        appMountId,
        links,
        headscripts,
        postscripts,
        buildInfo,
        minify,
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode

    },
    dev: {
        filename,
        template,
        inject,
        appMountId,
        links,
        headscripts,
        postscripts,
        buildInfo
    }
}
