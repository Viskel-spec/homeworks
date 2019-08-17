const { src, dest } = require('gulp');
var cleanCSS  = require('gulp-clean-css');


exports.default = function () {
  return src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(dest('dist/css/'));
}