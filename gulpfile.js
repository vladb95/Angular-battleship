var gulp                = require('gulp'),
    concatJs            = require('gulp-concat'),
    jade                = require('gulp-jade'),
    concatCss           = require('gulp-concat-css'),
    typeScriptCompiler  = require('gulp-tsc'),
    plumber             = require('gulp-plumber'),
    browserSync         = require('browser-sync'),
    reload              = browserSync.reload;

var requirences = {
  js:  [
    './bower_components/angular/angular.min.js',
    './bower_components/angular-route/angular-route.min.js',
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/angular-socket-io/socket.min.js'
  ],
  css: [
    './bower_components/bootstrap/dist/css/bootstrap.min.css'
  ]
};

var configServer = {
  server: {
        baseDir: '.'
      },
      notify: true
}

gulp.task('build-requirences', function(){
  gulp.src(requirences.js)
      .pipe(concatJs('bundle.requirences.js'))
      .pipe(gulp.dest('bundle'));
  gulp.src(requirences.css)
      .pipe(concatCss('bundle.requirences.css'))
      .pipe(gulp.dest('bundle'))
      .pipe(reload({stream:true}));
})

gulp.task('css-build', function(){
  gulp.src('./css/*.css')
      .pipe(concatCss('bundle.styles.css'))
      .pipe(gulp.dest('bundle'))
      .pipe(reload({stream:true}));
});

gulp.task('jade-templates-build', function(){
  gulp.src(['./templates/jade/*.jade', '!./templates/jade/index.jade'])
      .pipe(plumber())
      .pipe(jade({
        clients: true,
        pretty:  true
      }))
      .pipe(gulp.dest('templates'))
      .pipe(reload({stream:true}));
});

gulp.task('jade-index-build', function(){
  gulp.src('./templates/jade/index.jade')
      .pipe(jade({
        clients: true,
        pretty:  true
      }))
      .pipe(gulp.dest('.'))
      .pipe(reload({stream:true}));
});

gulp.task('typescript-build', function(){
  gulp.src('./app/*.ts')
    .pipe(plumber())
    .pipe(typeScriptCompiler())
    .pipe(concatJs('bundle.application.js'))
    .pipe(gulp.dest('bundle'))
    .pipe(reload({stream:true}));
});

gulp.task('server-typescript-build', function(){
  gulp.src('server/*.ts')
    .pipe(typeScriptCompiler())
    .pipe(gulp.dest('server'));
});

gulp.task('webserver', function () {
    browserSync(configServer);
});

gulp.task('default', ['css-build', 'jade-templates-build', 'jade-index-build', 'build-requirences', 'typescript-build', 'watch', 'webserver']);

gulp.task('watch', function(){
  gulp.watch('./app/*.ts', ['typescript-build']);
  gulp.watch('./templates/jade/*.jade', ['jade-index-build', 'jade-templates-build']);
  gulp.watch('./server/*.ts', ['server-typescript-build']);
});
