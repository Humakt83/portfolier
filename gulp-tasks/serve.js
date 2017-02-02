const browserSync = require('browser-sync');

module.exports = () => {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
};
