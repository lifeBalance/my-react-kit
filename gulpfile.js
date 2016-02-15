'use strict';

var gulp        = require('gulp');
var requireDir  = require('require-dir');
var tasks       = requireDir('./gulp/tasks');
var config      = require('./gulp/config');

gulp.task('default', ['scripts', 'styles', 'fonts', 'serve'], function () {
  gulp.watch(config.styles.sources, ['styles']);
  gulp.watch(config.scripts.sources, ['scripts']);
});
