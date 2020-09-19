export default (options = {}) => ({
  name: 'saika-plugin-disqus',

  when: () => {
    if (!options.shortname) {
      console.error('[saika disqus]: Missing required option `shortname`')
    }

    return options.shortname
  },

  extend: api => {
    api.registerComponent('content:end', {
      render: h => {
        return h('div', {
          attrs: { id: 'disqus_thread' },
          style: { marginTop: '20px' }
        })
      },

      mounted() {
        if (!checkEnable()) return

        if (window.DISQUS) {
          reset()
          return
        }

        init()
      }
    })

    const routePath = api.router.currentRoute.path
    const page = {
      url: window.location.origin + routePath,
      identifier: routePath,
      title: api.store.state.postLinkMeta.title
    }

    function init() {
      window.disqus_config = function() {
        this.page = Object.assign({}, this.page, page)
      }

      const script = document.createElement('script')
      script.src = `https://${options.shortname}.disqus.com/embed.js`
      script.async = true
      script.setAttribute('data-timestamp', Date.now())
      document.body.appendChild(script)
    }

    function reset() {
      window.DISQUS.reset({
        reload: true,
        config() {
          this.page = Object.assign({}, this.page, page)
        }
      })
    }

    function checkEnable() {
      const enablePaths = options.enablePaths || ['/posts']

      for (let i = 0; i < enablePaths.length; i++) {
        if (routePath.indexOf(enablePaths[i]) !== -1) return true
      }

      return false
    }
  }
})
