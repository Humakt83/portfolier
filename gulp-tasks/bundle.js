'use strict';

const sysBuilder = require('systemjs-builder');
const gulp = require('gulp');
const del = require('del');

module.exports = () => {
    return new sysBuilder('', './system.config.js').buildStatic('app', 'dist/app.min.js', { minify: true })
    .then(function () {
        return del(['dist/**/*.js', '!dist/*.min.js']);
    })
    .catch(function(err) {
        console.error('>>> [systemjs-builder] Bundling failed', err);
    });
};