var gulp        = require('gulp');

var browserSync = require('browser-sync').create('browSync');
// Above we have created a Browsersync instance named `browSync`,
// so we can retrieve it later from another file using `.get('browSync')`

var reload      = browserSync.reload;
var nodemon     = require('gulp-nodemon');
var config      = require('../config');

gulp.task('serve', ['nodemon'], function() {
  browserSync.init({
    open: false,
    proxy: config.serve.express,
    port: config.serve.port,  // Where we should point our browser (8080)
    notify: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'dist/express/server.js',
    watch: [
      'dist/express/server.js',
      'dist/express/views/'
    ],
    ext: 'js jade'
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
