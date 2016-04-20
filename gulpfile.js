'use strict';

// Require node modules
var gulp = require('gulp');
var sass = require('gulp-sass');

// Gulp Task: Compile single sass file
gulp.task('styles', function() {
  gulp.src('./source/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

