const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () =>{
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('reload', (done)=>{
  browserSync.reload();
  done();
});

