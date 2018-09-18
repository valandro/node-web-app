'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
gulp.task('sass', function () {
    return gulp.src('./public/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function () {
    return gulp.src('./public/css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('build', gulp.series(['sass','css']));

gulp.task('watch', function(){
    gulp.watch('./public/sass/*.scss', gulp.series('sass'));
    gulp.watch('./public/css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series(['build']));