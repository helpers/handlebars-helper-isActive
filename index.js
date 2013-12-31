/**
 * Handlebars Helpers: {{isActive}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */


// Node.js
var _ = require('lodash');


// Export helpers
module.exports.register = function (Handlebars, options) {

  'use strict';

  var opts = options;

  /**
   * Add `active` class for current page.
   * Customize the class in the options hash.
   * @xample: {{isActive class="current"}}
   *
   * @usage: {{isActive}}
   */
  Handlebars.registerHelper('isActive', function(context) {
    context = _.extend(context, opts.data, this);
    context.hash.class = context.hash.class || 'active';
    var active = '';
    if(context.isCurrentPage === true) {
      active = ' class="' + context.hash.class + '"';
    }
    return new Handlebars.SafeString(active);
  });
};
