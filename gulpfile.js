//Setup Gulp task runner
var gulp = require('gulp')
//Sets up static server
var connect = require('gulp-connect')

var browserify = require('browserify')
var source = require('vinyl-source-stream')


gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 8080
    })
})

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./public/js/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})
