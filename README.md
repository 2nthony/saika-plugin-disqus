# saika-plugin-disqus

> Using Disqus in saika

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/saika-plugin-disqus?icon=npm)](https://npmjs.com/package/saika-plugin-disqus)
[![jsDelivr hits](https://badgen.net/jsdelivr/hits/npm/saika-plugin-disqus)](https://npmjs.com/package/saika-plugin-disqus)
[![CircleCI](https://badgen.net/circleci/github/evillt/saika-plugin-disqus?icon=circleci)](https://circleci.com/gh/evillt/saika-plugin-disqus/tree/master)
[![License](https://badgen.net/npm/license/saika-plugin-disqus)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

## Usage

Load this plugin via `<script>` tag:

```html
<!-- Load this plugin after saika.js -->
<script src="https://cdn.jsdelivr.net/npm/saika-plugin-disqus"></script>
```

This plugin is exposed as `window.saikaDisqus`:

```js
new Saika({
  plugins: [
    saikaDisqus({
      shortname: 'your shortname'
    })
  ]
})
```

## Options

### options.shortname

- Type: `string`
- Required: `true`

Disqus shortname.

### options.enablePaths

- Type: `Array<PathLike>`
- Default: `['/posts']` which means is all link starts with `/posts` will enable disqus

Specify your post to enable disqus.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**saika-plugin-disqus** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/saika-plugin-disqus/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
