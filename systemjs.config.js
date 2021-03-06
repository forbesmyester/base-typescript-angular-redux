/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'dist/app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',

    'redux-logger':               'node_modules/redux-logger',
    'redux':                      'node_modules/redux',
    'ramda':                      'node_modules/ramda',
    'ng2-redux':                  'node_modules/ng2-redux',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { main: 'Rx.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    'redux':                      { main: "dist/redux.js", defaultExtension: 'js' },
    'redux-logger':               { main: "dist/index.js", defaultExtension: 'js' },
    'ramda':                      { main: 'dist/ramda.min.js',
                                    defaultExtension: 'js' },
    'ng2-redux':                  { main: 'lib/index.js',
                                    defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    // paths: { '*': './node_modules/' },
    // packageConfigPaths: ['./node_modules/*/package.json'],
    map: map,
    packages: packages
  };
  System.config(config);
})(this);

