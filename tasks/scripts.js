const babel = require('gulp-babel');

module.exports = function () {

    $.gulp.task('js:dev', () => {
        return $.gulp.src("./dev/js/*.js")
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe($.debug({
                "title": "JS"
            }))
            .pipe($.gulp.dest("./build/js/"))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src("./dev/js/*.js")
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe($.debug({
                "title": "JS"
            }))
            .pipe($.gulp.dest("./build/js/"))
    });
};
