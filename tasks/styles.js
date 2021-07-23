const plumber = require('gulp-plumber');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

module.exports = function () {
    $.gulp.task('styles:dev', () => {
    return $.gulp.src("./dev/styles/styles.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(scss())
        .pipe(autoprefixer({
        overrideBrowserslist:  ['last 3 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(rename('styles.min.css'))
        .pipe($.debug({
          "title": "Style"
        }))
        .pipe($.gulp.dest("./build/css/"))
        .on('end', $.browserSync.reload);
    });

    $.gulp.task('styles:build', () => {
        return $.gulp.src("./dev/styles/styles.scss")
        .pipe(scss())
        .pipe(autoprefixer({
        overrideBrowserslist:  ['last 3 versions']
        }))
        .pipe(autoprefixer())
        .pipe(rename('styles.min.css'))
        .pipe($.debug({
          "title": "Style"
        }))
        .pipe($.gulp.dest("./build/css/"))
    });
};
