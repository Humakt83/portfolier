require('gulp-task-loader')();
const gulp = require('gulp');
const reload = require('browser-sync').reload;

gulp.task('start', ['clean', 'copy', 'compile', 'serve'], () => {
    gulp.watch(['src/**/*'], ['clean', 'copy', 'compile', reload]);
});
