require('gulp-task-loader')();
const gulp = require('gulp');
const reload = require('browser-sync').reload;
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('copy:libs', function() {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/es6-promise/dist/es6-promise.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'system.config.js',
        ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('start', () => {
    runSequence('clean', ['copy', 'compile'], 'copy:libs', 'bundle', 'serve');
    gulp.watch(['src/**/*'], runSequence('clean', ['copy', 'compile'], 'bundle'), reload);
});
