module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./dev/fonts/**/*.*')
            .pipe($.debug({
                "title": "Fonts"
            }))
            .pipe($.gulp.dest('./build/fonts/'));
    });
};