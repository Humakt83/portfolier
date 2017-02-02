const gulp = require('gulp');

module.exports = () => {
    return gulp.src(['src/index.html', 'src/**/*.css', 'src/assets/**/*'])
        .pipe(gulp.dest('dist'));
};
