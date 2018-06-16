var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('script', function(callback) {
    webpack(require('../../webpack.config.js'), function() {
        console.log('Horaay, webpack completed !');
        callback();
    });
});

