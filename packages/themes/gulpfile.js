const stylus = require('gulp-stylus')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
function build() {
  return gulp
    .src('./src/index.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(rename('vu.css'))
    .pipe(gulp.dest('../../dist/styles'))
}

function temp() {
  return gulp.src('./postcss.config.js').pipe(gulp.dest('../../dist/styles'))
}
gulp.task('default', build, temp)
