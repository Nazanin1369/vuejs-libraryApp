var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gnf = require('gulp-npm-files'),
    del = require('del');

var paths = ['css/*.css', 'src/*.js', '*.html'];
var packageJsonPath = 'package.json';


gulp.task('clean', function () {
  //return del('./build');
});

gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(gulp.dest('./build/src'));
});

gulp.task('styles', function () {
    return gulp.src('css/*.css')
        .pipe(watch('css/*.css'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(watch('*.html'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copyImages', function() {
   gulp.src('imgs/**/*.{jpeg,jpg,png,svg}')
   .pipe(gulp.dest('./build/imgs'));
});

// Copy dependencies to build/node_modules/ by
// value in './path/to/package.json' file
gulp.task('copyNpmDependenciesAtDifferentFolder', function() {
  gulp
    .src(gnf(null, packageJsonPath), {base:'./'})
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['clean', 'copyNpmDependenciesAtDifferentFolder', 'copyImages', 'scripts', 'styles', 'html'])