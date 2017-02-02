require('gulp-task-loader')();
const gulp = require('gulp');
const reload = require('browser-sync').reload;

gulp.task('start', ['clean', 'copy', 'serve'], () => {
    gulp.watch(['src/**/*'], ['clean', 'copy', reload]);
});
