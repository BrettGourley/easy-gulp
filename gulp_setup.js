/*
//check versions
npm -v
gulp -v
mkdir gulp_project
>>npm init
>>npm install --save-dev gulp // or npm install -g gulp for global
//install package
>>npm install --save-dev {plugin name}
>>mkdir build/less/
>>copy NUL {file name}
>> gulp {run command}
*/
 
 
// Requirements
var gulp = require('gulp'),
   less = require('gulp-less'),
   minify = require('gulp-minify-css'),
   rename = require('gulp-rename');
                                  
// defines path to less
var lessRoot = 'build/less/';
var cssRoot = 'public/css';

// gulp task
gulp.task('less-to-css', function(){
	return gulp.src(lessRoot+'main.less')
		.pipe(less({sourcemap: true}))
		.pipe(gulp.dest(cssRoot));
});
 
gulp.task('minify-css',['less-to-css'], function(){
	return gulp.src(cssRoot+'/*.css')
		.pipe(minify())
		.pipe(rename({
						suffix: '.min'
		}))
		.pipe(gulp.dest(cssRoot));
});