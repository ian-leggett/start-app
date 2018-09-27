const path = require('path');
const gulp = require('gulp');
const config = require(path.join('..', '..', 'config.js'));

gulp.task('watch', () => {
  gulp.watch(path.join(config.dirs.jsDir, '*.js'), ['scripts']);
  gulp.watch(path.join('.', '**/*.html'), ['reload']);
});