var gulp                = require('gulp'),
    concatJs            = require('gulp-concat'),
    jade                = require('gulp-jade'),
    concatCss           = require('gulp-concat-css'),
    typeScriptCompiler  = require('gulp-tsc');

var requirences = {
  js:  [
    './bower_components/angular/angular.min.js',
    './bower_components/jquery/dist/jquery.min.js'
  ],
  css: [
    './bower_components/bootstrap/dist/css/bootstrap.min.css'
  ]
};

gulp.task('build-requirences', function(){
  gulp.src(requirences.js)
      .pipe(concatJs('bundle.requirences.js'))
      .pipe(gulp.dest('bundle'));
  gulp.src(requirences.css)
      .pipe(concatCss('bundle.requirences.css'))
      .pipe(gulp.dest('bundle'));
})

gulp.task('css-build', function(){
  gulp.src('./css/*.css')
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

gulp.task('typescript-build', function(){
  gulp.src('./app/*.ts')
    .pipe(typeScriptCompiler())
    .pipe(concatJs('bundle.application.js'))
    .pipe(gulp.dest('bundle'));
});

gulp.task('default', ['css-build', 'jade-templates-build', 'jade-index-build', 'build-requirences', 'typescript-build']);

gulp.task('watch', function(){
  gulp.watch('./app/*.ts', ['typescript-build']);
  gulp.watch('./templates/jade/*.jade', ['jade-index-build', 'jade-templates-build']);
});
