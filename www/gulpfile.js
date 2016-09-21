var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    del = require('del');


gulp.task('clean', function() {
    return del.sync(['dist']);
});

gulp.task('build', ['clean'], function() {
    return browserify({
        entries: './js/index.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./js/*.js'], ['build']);
});
