var gulp = require('gulp');
var watch = require('gulp-watch');
var webpack = require('webpack-stream');
var config = require('./webpack.config');

gulp.task('build', function() {
  gulp.src('./src/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['build']);
})

gulp.task('build-dev', ['build', 'watch']);
