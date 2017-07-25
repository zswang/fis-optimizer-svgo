/**
 * @file fis-optimizer-svgo
 *
 * Optimizing SVG vector graphics files with FIS
 * @author
 *   zswang (http://weibo.com/zswang)
 * @version 0.0.2
 * @date 2017-07-25
 */
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