# {{isActive}} [![NPM version](https://badge.fury.io/js/handlebars-helper-isActive.png)](http://badge.fury.io/js/handlebars-helper-isActive)

> Generate relative links from the "current page" to other dest pages.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-isActive`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-isActive` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-isActive' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-isActive', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```
Alternatively, you can avoid defining the helper in the [Assemble](https://github.com/assemble/assemble) task options by adding module to both the `devDependencies` and `keywords` in your project's package.json.

```json
{
  "name": "foo",
  "version": "0.1.0",
  "devDependencies": {
    "handlebars-helper-isActive": "*"
  },
  "keywords": [
    "handlebars-helper-isActive"
  ]
}
```

## Usage

With the helper registered, you may now begin using it in your templates.

_Examples also shows the [{{autolink}} helper](https://github.com/helpers/handlebars-helper-autolink)_.

**In a "page"**

```html
{{#each pages}}
  <a href="{{autolink}}" {{isActive}}>{{data.title}}</a>
{{/each}}
```

**In a "layout"**

```html
{{#each pages}}
  <a href="{{autolink}}" {{isActive}}>{{../title}}</a>
{{/each}}
```

Renders to:

```html
<a href="foo.html" class="active">Foo</a>
<a href="bar.html">Bar</a>
<a href="baz.html">Baz</a>
```


## Author

**Jon Schlinkert**

+ [github/jonschlinkert](http://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.