const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', () => {
  runSequence(
    'sass',
    'scripts',
    'serve',
    'watch',
  );
});