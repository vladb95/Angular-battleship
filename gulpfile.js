var gulp      = require('gulp'),
    concatJs  = require('gulp-concat'),
    jade      = require('gulp-jade'),
    concatCss = require('gulp-concat-css');


gulp.task('css-build', function(){
  gulp.src('/css/*.css')
      .pipe(concatCss('bundle.styles.css'))
      .pipe(gulp.dest('bundle'));
});

gulp.task('jade-templates-build', function(){
  gulp.src(['./templates/jade/*.jade', '!/templates/jade/index.jade'])
      .pipe(jade({
        clients: true,
        pretty:  true
      }))
      .pipe(gulp.dest('templates'));
});

gulp.task('jade-index-build', function(){
  gulp.src('./templates/jade/index.jade')
      .pipe(jade({
        clients: true,
        pretty:  true
      }))
      .pipe(gulp.dest('.'));
});

gulp.task('default', ['css-build', 'jade-templates-build', 'jade-index-build']);
