var gulp    = require('gulp');
var config  = require('../config').fonts;

gulp.task('fonts', function() { 
  return gulp.src(config.source)
    .pipe(gulp.dest(config.destination)); 
});
