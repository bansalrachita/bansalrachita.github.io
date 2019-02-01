// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/rachitabansal/WebstormProjects/portfolio/bansalrachita.github.io/my-portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rachitabansal/WebstormProjects/portfolio/bansalrachita.github.io/my-portfolio/.cache/data.json")

