const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nick/dev/lunas-creative-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nick/dev/lunas-creative-website/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/nick/dev/lunas-creative-website/src/pages/Elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/nick/dev/lunas-creative-website/src/pages/Generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nick/dev/lunas-creative-website/src/pages/index.js")))
}

