"use strict";

global.$ = {
    gulp: require('gulp'),
    debug: require('gulp-debug'),
    browserSync: require('browser-sync').create(),
    path: {
        tasks: require('./tasks/path.js')
    }
};

$.path.tasks.forEach(path => {
    require(path)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'img:dev',
        'js:dev',
        'svg'
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:build',
        'img:build',
        'js:build',
        'svg'
    )
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
