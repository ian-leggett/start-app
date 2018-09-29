const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const config = require('../../config.js');

gulp.task('sass', () => {
  return gulp.src(path.join(config.dirs.scssDir, 'application.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [path.join('node_modules', 'bootstrap', 'scss')]
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(path.join(config.distDir, 'css')));
});