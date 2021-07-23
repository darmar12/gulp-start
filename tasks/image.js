const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const compress  = require('imagemin-jpeg-recompress');

module.exports = function () {
    $.gulp.task('img:dev', () => {
        return $.gulp.src(["./dev/static/images/**/*.{png,jpg,gif,svg}",
        '!./dev/static/images/svg/*'])
            .pipe($.gulp.dest("./build/static/images/"));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src(["./dev/images/**/*.{png,jpg,gif,svg}",
        '!./dev/images/svg/*'])
            .pipe(cache(imagemin([
                compress({
                    loops: 4,
                    min: 70,
                    max: 80,
                    quality: 'high'
                }),
                imagemin.gifsicle(),
                imagemin.optipng(),
                imagemin.svgo()
            ])))
            .pipe($.debug({
                "title": "Images"
            }))
            .pipe($.gulp.dest("./build/images/"));
    });
};

