const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function style() {
    return gulp
        .src("./scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: { baseDir: "./" },
    });
    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;