const path = require('path');
const gulp = require('gulp');
const util = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const config = require('../../config.js');

gulp.task('scripts', ['reload'], () => {
  browserify({
    entries: path.join(config.dirs.jsDir, 'application.js'),
    debug: true
  }).transform(babelify)
    .bundle()
    .on('error', err => {
      util.log("Browserify Error", util.colors.red(err.message))
    })
    .pipe(source('application.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.join(config.distDir, 'js')));
});


