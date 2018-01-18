
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css' // agate

export default (Vue, options = {}) => {
  Vue.directive('highlight', {
    bind: (el) => {
      let blocks = el.querySelectorAll('pre code')
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  })
}