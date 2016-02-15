var gulp        = require('gulp');
var browserSync = require('browser-sync').create('browSync');
var reload      = browserSync.reload;
var nodemon     = require('gulp-nodemon');
var config      = require('../config');

gulp.task('serve', ['nodemon'], function() {
  browserSync.init({
    open: false,
    proxy: config.serve.express,
    port: config.serve.port,  // Where we should point our browser ;)
    notify: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'dist/server.js',
    ignore: [
      '../../gulpfile.js',
      'node_modules/',
      config.scripts.sources
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});
