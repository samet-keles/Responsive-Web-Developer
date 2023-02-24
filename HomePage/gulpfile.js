const gulp = require("gulp");
var browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const { watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const reload = browserSync.reload;

gulp.task("browser-sync", function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./sass/**/*.scss", buildStyles);
  gulp.watch("main.css", autoPrefixer);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
});

function buildStyles() {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
}

function autoPrefixer() {
  return gulp
    .src("main.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist"));
}

exports.default = series("browser-sync", buildStyles, autoPrefixer);
