'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gutil       = require('gulp-util');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    entryPoint:   './src/js/main.jsx',
    jsSources:    './src/js/**/*.jsx',
    sassSources:  './src/sass/**/*.scss',
    btstrpFonts:  './node_modules/bootstrap-sass/assets/fonts/bootstrap/**.*',
    public:       './dist/public'
  }
}

gulp.task('serve', function() {
  browserSync.init({
    open: false,
    // logFileChanges: false,
    server: {
      baseDir: config.paths.public,
    }
  });

  gulp.watch(config.paths.sassSources, ['styles']);
  gulp.watch(config.paths.public + '/css/*.css').on('change', browserSync.reload);
  gulp.watch(config.paths.public + '/*.html').on('change', browserSync.reload);
  gulp.watch(config.paths.public + '/images/*').on('change', browserSync.reload);
});


gulp.task('scripts', function () {
  var bundler = browserify({
    entries: [config.paths.entryPoint],
    extensions: ['.jsx'],
    cache: {},
    packageCache: {},
    debug: true
  });

  bundler.transform(babelify, {
    presets: ['es2015', 'react'],
    only: /src\/js/,
    sourceMaps: true
  });

  bundler.plugin(watchify, {
    ignoreWatch: ['**/node_modules/**'],
    poll: false
  });


  function bundle() {
    return bundler
      .bundle()
      .on('error', function (err) {
        gutil.log(gutil.colors.red('Browserify error:'), err.message);
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(config.paths.public + '/js'))
      .pipe(browserSync.stream());
  }

  bundle(); // We have to call bundle() to get `update' events.

  bundler.on('update', function (ids) {
    bundle();

    ids.forEach(function (id) {
      gutil.log(gutil.colors.green('Updated:'), id);
    });
  });
});

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('styles', function () {
 return gulp.src(config.paths.sassSources)
  .pipe(sourcemaps.init())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest(config.paths.public + '/css'));
});

gulp.task('fonts', function() { 
  return gulp.src(config.paths.btstrpFonts)
    .pipe(gulp.dest(config.paths.public + '/fonts/bootstrap')); 
});

gulp.task('default', ['scripts', 'styles', 'fonts', 'serve']);
