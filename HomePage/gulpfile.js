const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const { watch, series } = require("gulp");

function buildStyles() {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"));
}

exports.default = function () {
  watch("./sass/**/*.scss", buildStyles);
};
