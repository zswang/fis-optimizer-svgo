/*<jdists encoding="ejs" data="../package.json">*/
/**
 * @file <%- name %>
 *
 * <%- description %>
 * @author
     <% (author instanceof Array ? author : [author]).forEach(function (item) { %>
 *   <%- item.name %> (<%- item.url %>)
     <% }); %>
 * @version <%- version %>
     <% var now = new Date() %>
 * @date <%- [
      now.getFullYear(),
      now.getMonth() + 101,
      now.getDate() + 100
    ].join('-').replace(/-1/g, '-') %>
 */
/*</jdists>*/

/*<remove>*/
/*jslint node: true */
'use strict';
/*</remove>*/

var path = require('path');
var SVGO = require('svgo');
var deasync = require('deasync');

module.exports = function (content, file, conf) {
  var svgo = new SVGO(conf || {});
  var optimize = deasync(function (content, callback) {
    svgo.optimize(content, function (result) {
      callback(null, result.data);
    });
  });
  return optimize(content);
};