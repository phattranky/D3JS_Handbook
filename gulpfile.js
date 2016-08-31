var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8081,
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*')
    .pipe(connect.reload());
});

gulp.task('lib', function () {
  gulp.src('./node_modules/bootstrap/dist/**/*')
  .pipe(gulp.dest('./app/libs/bootstrap'));
  
  gulp.src('./node_modules/d3/build/**/*')
  .pipe(gulp.dest('./app/libs/d3/'));
  
  gulp.src('./node_modules/jquery/dist/**/*')
  .pipe(gulp.dest('./app/libs/jquery'));
  
  gulp.src('./node_modules/topojson/build/**/*')
  .pipe(gulp.dest('./app/libs/topojson'));
})
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);