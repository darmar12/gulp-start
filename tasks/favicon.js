const favicon = require('gulp-favicons');

module.exports = function () {
    $.gulp.task('favicon', function () {
        return $.gulp.src('./dev/images/favicon/*.{jpg,jpeg,png,gif,tiff}')
        .pipe(favicon({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe($.debug({
            "title": "FAvicon"
        }))
        .pipe($.gulp.dest('./build/images/favicon/'))
    })
};