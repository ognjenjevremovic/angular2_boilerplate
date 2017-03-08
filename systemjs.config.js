(function(global) {
    'use strict';

    System.config({
        paths: {
            'vendor:'   : 'app/vendor/',
            '@angular:' : 'vendor:@angular/'
        },
        map: {
            //  Application
            app: 'app',

            //  Angular 2
            '@angular/core'     :   '@angular:core/bundles/core.umd.min.js',
            '@angular/common'   :   '@angular:common/bundles/common.umd.min.js',
            '@angular/compiler' :   '@angular:compiler/bundles/compiler.umd.min.js',
            '@angular/http'     :   '@angular:http/bundles/http.umd.min.js',
            '@angular/forms'    :   '@angular:forms/bundles/forms.umd.min.js',
            '@angular/router'   :   '@angular:router/bundles/router.umd.min.js',
            '@angular/platform-browser' :   '@angular:platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic' :   '@angular:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            
            //  Rxjs
            'rxjs'  : 'vendor:rxjs'
        },
        packages: {
            app: {
                main : './main.js',
                defaultExtension : 'js'
            },
            rxjs : {
                defaultExtension : 'js'
            }
        }
    });
})(this);