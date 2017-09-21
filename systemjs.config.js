/**
 *  angular 2
 *  this file sets how the modules are going to be process
 */
(function (global) {

  // map tells Systemloader where to look for things - app folder
  var map = {
    'app': 'app', // 'dist',

     //where to find angular node-modules
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  };

  // packages tells System loader how to load when no filename and/or no extension
  var packages = {
    //specify where the original file that this module loader is going to load first
    'app': { main: 'app.boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
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
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);