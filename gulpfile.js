var gulp = require("gulp");
var inlinesource = require('gulp-inline-source');

gulp.task('default', function () {
    gulp.src('index.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./app'));
});