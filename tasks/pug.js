const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const cached = require('gulp-cached');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./dev/pug/*.pug')
            .pipe(plumber())
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug'))
            .pipe($.debug({
                "title": "Pug"
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
