var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('browserify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function() {
  var bundler = browserify('./app/js/app.js', {debug: true});
  bundler.transform(reactify);
  bundler.bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
  gulp.src('app/styles/less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});