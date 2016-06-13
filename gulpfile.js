var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

//region Less

gulp.task('lessc', function () {
    return gulp.src('www/static/shared/css/shared')
        .pipe(less())
        .pipe('www/static/dist/all.css');
});

//endregion

gulp.task('default', ['lessc']);
