// Karma configuration
module.exports = function (config) {

    var libSources = [
        'dist/js/L.DNC.js'
    ];

    var leafletSources = require(__dirname+'/../node_modules/leaflet/build/build.js').getFiles();

    for (var i=0; i < leafletSources.length; i++) {
        leafletSources[i] = __dirname+"/../node_modules/leaflet/" + leafletSources[i];
    }

    var files = [
        "spec/sinon.js",
        "spec/expect.js"
    ].concat(leafletSources, libSources, [
        "node_modules/happen/happen.js",
        "spec/suites/SpecHelper.js",
        "spec/suites/**/*.js",
    ]);

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        plugins: [
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'],

        // frameworks to use
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: files,
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],

        // web server port
        port: 9876,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers for local dev, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
