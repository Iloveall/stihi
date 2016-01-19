var gulp = require('gulp'),                        // Gulp
		concatCss = require('gulp-concat-css'),        // Concat css files
		autoprefixer = require('gulp-autoprefixer'),   // Prefix for css (old browser)
		rename = require('gulp-rename'),               // Rename files
		minifyCss = require('gulp-minify-css'),        // Minification css files
  	concat = require("gulp-concat"),               // Concat
  	uglify = require('gulp-uglify'),	             // Min js
		compass = require('gulp-compass'),						 // Compass
		path = require('path');  											 // Path


// Compass
gulp.task('compass', function() {
  gulp.src('scss/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'scss'
    }))
  	.pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
  	.pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('dist/css'));
});

// Angular app
gulp.task('angular', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('app.min.js'))
    // .pipe(uglify())
    // .pipe(rename("app.min.js"))
    .pipe(gulp.dest('dist/js/'));
});

// watch
gulp.task('watch', function(){
    // gulp.watch('js/*.html', ['html']);
    gulp.watch('scss/*.scss', ['compass']);
    gulp.watch('js/**/*', ['angular']);
});

gulp.task('default', ['compass', 'angular', 'watch']);
