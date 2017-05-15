////////////////////////////////////////////////////////////////////////////////////
// Custom Google Analytics injection. Modified from vue-ga
////////////////////////////////////////////////////////////////////////////////////


function appendScript() {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.google-analytics.com/analytics.js'
  document.body.appendChild(script)
}

function stripTrailingSlash(str, min) {
    if(str.substr(-1) === '/' && str.length > min) {
        return str.substr(0, str.length - 1);
    } else {
        return str
    }
}

function init (id) {
if (!window.ga) {
   appendScript()
   window.ga = window.ga || function () {
     (ga.q = ga.q || []).push(arguments)
   }
   ga.l = Number(new Date())
   ga('create', id, 'auto')
 }
 }

function collect (id, prefix, title, path) {
  init(id);
  ga('set', 'page', path)
  ga('set', 'title', prefix + title);
  ga('send', 'pageview')

}

export default function (id, prefix, router) {

 router.afterEach(from  => {
   let routes = router.options.routes
   let title = '(undefined)'
   let path = '(undefined)'

   console.table(routes)
   for (var o = 0; o < routes.length; o++){
     if (routes[o].path === stripTrailingSlash(from.fullPath, 1)) {
      title = routes[o].title
      path = routes[o].path
     }
   }
   
   collect(id, prefix, title, path )

  })
}
