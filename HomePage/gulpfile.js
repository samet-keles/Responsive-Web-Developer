const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

function buildStyles() {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
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

exports.default = function () {
  watch("./sass/**/*.scss", buildStyles);
  watch("main.css", autoPrefixer);
};
