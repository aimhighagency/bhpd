var gulp	= require('gulp'),
	gutil   = require('gulp-util'),
	uglify  = require('gulp-uglify'),
	sass  	= require('gulp-sass'),
	rename  = require('gulp-rename'),
  data = require('gulp-data'),
  fs = require('fs'),
	jade  	= require('gulp-jade'),
	autoprefixer	= require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	livereload	= require('gulp-livereload'),
	jshint	= require('gulp-jshint'),
	concat  = require('gulp-concat'),
	connect = require('gulp-connect');


gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
	.pipe(minifyCSS())
	.pipe(rename('style.css'))
    .pipe(gulp.dest('./build/styles'))
    .pipe(connect.reload())
});

gulp.task('html', function() {
  gulp.src([
      './app/**/*.jade',
      '!./app/views/layouts/**',
      '!./app/views/modules/**',
      '!./app/views/sections/**'
    ])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src([
    // 'app/bower_components/jquery/dist/jquery.js',
    // 'app/bower_components/easing/easing.js',
    // 'app/bower_components/masonry/masonry.js',
    // 'app/bower_components/ScrollIt/scrollIt.js',
    // 'app/bower_components/instafeed.js/instafeed.js',
    // 'app/bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
    // 'app/bower_components/imagesloaded/imagesloaded.js',
     './app/bower_components/modernizr/modernizr.js',
    // 'app/js/init.js'
  ])
    .pipe( concat('output.min.js') ) // concat pulls all our files together before minifying them
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload())
});

gulp.task('watch', function () {
   gulp.watch('./app/sass/**/*.scss', ['sass']);
   gulp.watch('./app/**/*.jade', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    open: true
  });
});

gulp.task('default', ['sass', 'html', 'js']);

gulp.task('start', ['connect', 'watch']);




