var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Horay !!!')
});

gulp.task('html', function() {
    console.log('Manipuated HTML')
});

gulp.task('styles', function() {
    console.log('Manipuated SASS or CSS')
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});