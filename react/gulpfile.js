var gulp = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('default', function() {
    // place code for your default task here
});

var scripts = [
    './public/javascripts/app.js'];


gulp.task('js-build', function() {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./client/javascripts/main.js');
    return b.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/javascripts/'))
});

//gulp.task('js-prod', ['browserify'], function() {
//    gulp.src( scripts )
//        .pipe(uglify())
//        .pipe(concat('bundle.js'))
//        .pipe(gulp.dest('./public/javascripts/'))
//})


gulp.task('build', ['js-build']);
gulp.task('prod', ['js-prod']);

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build']);