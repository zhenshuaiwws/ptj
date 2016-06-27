var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var nodemon = require('nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'app.js',
        ext   : 'js',
        watch : "server"
    });
});

gulp.task('less', function () {
    return gulp.src('www/static/shared/css/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('www/static/dist/css'));
});

gulp.task('default', ['start']);
