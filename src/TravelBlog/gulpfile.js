/// <binding AfterBuild='copyApp' />

// Load all libraries that we need into local variables (in this QuickStart we only want 2).
var gulp = require('gulp'); // we of course need gulp itself.
var del = require('del'); // del enable us to delete files (del replaces the old rimraf).

// Defining some handy paths
var paths = {
    npmInstall: "./node_modules/",
    npmClient: "./wwwroot/libs/",
    appDevelopment: ['./Scripts/**/*.html', './Scripts/**/*.css'],
    appClient: "./wwwroot/app/",
};

// To make all the Angular application relevant packages accessible to the browser, we need to copy
// -- the packages from node_modules to somewhere inside of wwwroot, here wwwroot\libs.
// ('**' means all folders and their subfolder trees)
gulp.task('copyLibs', ['clean'], function () {
    gulp.src(paths.npmInstall + '@angular/**/*.js').pipe(gulp.dest(paths.npmClient + '@angular'));
    gulp.src(paths.npmInstall + 'core-js/**/*.js').pipe(gulp.dest(paths.npmClient + 'core-js'));
    gulp.src(paths.npmInstall + 'zone.js/**/*.js').pipe(gulp.dest(paths.npmClient + 'zone.js'));
    gulp.src(paths.npmInstall + 'systemjs/**/*.js').pipe(gulp.dest(paths.npmClient + 'systemjs'));
    gulp.src(paths.npmInstall + 'reflect-metadata/**/*.js').pipe(gulp.dest(paths.npmClient + 'reflect-metadata'));
    gulp.src(paths.npmInstall + 'rxjs/**/*.js').pipe(gulp.dest(paths.npmClient + 'rxjs'));
    gulp.src(paths.npmInstall + 'angular-in-memory-web-api//**/*.js').pipe(gulp.dest(paths.npmClient + 'angular-in-memory-web-api'));

    //Eg. for the systemjs packages :
    // -- 1) gulp.src() :  in ./node_modules/systemjs/ from all directories and their subtrees (**) select all Javascript files (*.js).
    // -- 2) gulp.pipe() : send that file collection to something - in our case send the file collection to gulp.dest().
    // -- 3) gulp.dest() : take the incoming file collection and write it to ./wwwroot/libs/systemjs folder.

});

// While of no relevance in this QuickStart tutorial, a real Angular application will have many .html templates and related .css files
// -- these files are not automatically copied by the Typescript compiler and
// -- therefore needs to be separately copied to the wwwroot\app folder.
gulp.task('copyApp', function () {
    gulp.src(paths.appDevelopment).pipe(gulp.dest(paths.appClient));
});

// It will happen that we want to start on a fresh in the wwwroot folder or areas of the wwwroot folder
// -- here we make a task so it is easy to delete all the Angular application relevant packages.
gulp.task('clean', function () {
    return del([paths.npmClient]);

    // 'clean' is a dependency task (of copyLibs), it is a good habit to return from dependency tasks
    // -- not because it is necessary as a signal to Gulp that the task have finished
    // -- but because that is the only way to transfer a stream to the next task.
});

// We don't need this 'default' task especially then using Visual Studio, however it is common to
// start off the main task chain using a task called 'default', so I include a 'default' task here just for shows.
// (if you write gulp at the command prompt, the gulp command will look for a task named 'default' and start it if it finds it).
gulp.task('default', ['copyLibs'], function () {
    // we could place some code here as well.
});