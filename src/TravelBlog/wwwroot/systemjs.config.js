(function (global) {
    System.config({
        paths: {
            //'npm:': 'https://unpkg.com/' // external path to libraries for CDN.
            'npm:': 'libs/' // custom local path to libraries (I like this better).
        },

        // map tells the System loader where to look for things
        map: {
            // where our application is
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            // specify the main entry point for app: ./main.js
            app: {
                main: './main.js',
                //any module argument in code belonging to the wwwroot\app folder must be postfixed .js to match the filename.
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);