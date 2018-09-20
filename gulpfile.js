'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
const minify = require('gulp-minify');

gulp.task('sass', function () {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('minify-css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('minify-js', function() {
    return gulp.src(['./public/js/*.js', './public/js/*.mjs'])
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('include-views', function(){
    return gulp.src(['./public/src/**/*.*'])
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('build', gulp.series(['sass']));
gulp.task('prod', gulp.series(['sass','minify-css','minify-js','include-views']));

gulp.task('watch', function(){
    gulp.watch('./public/sass/*.scss', gulp.series('sass'));
    gulp.watch('./public/css/*.css', gulp.series('css'));
});

gulp.task('default', gulp.series(['build']));