const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/akiff/repos/apremjee8.github.io/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-andy-src-templates-note-js": hot(preferDefault(require("/Users/akiff/repos/apremjee8.github.io/node_modules/gatsby-theme-andy/src/templates/note.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/akiff/repos/apremjee8.github.io/src/pages/404.js")))
}

