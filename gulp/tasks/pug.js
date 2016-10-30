var gulp = require('gulp');
var pug = require('gulp-pug');
var config = require('../config').pug;

gulp.task('pug', function () {
  gulp.src(config.src)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(config.dest));
});
