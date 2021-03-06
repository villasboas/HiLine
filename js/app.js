// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var Controller = angular.module('Controller',['ionic']);
var Service    = angular.module('Services',['ionic']);


angular.module('starter', ['ionic', 'Controller', 'Services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider ) {

  $ionicConfigProvider.views.maxCache(0);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('Login', {
    url        : '/login',
    controller : "Login", 
    templateUrl: 'templates/login/index.html'
  })

  //view principal
  // setup an abstract state for the tabs directive
  .state('Master', {
    url: '/master',
    abstract: true,
    controller: "Login",
    templateUrl: 'templates/master.html'
  })

  // Each tab has its own nav history stack:

  .state('Master.clientes', {
    url: '/clientes',
    tab : 'tab-clientes',
    views: {
      'tab-clientes': {
        templateUrl: 'templates/clientes/lista.html',
        controller: 'Master'
      }
    }
  })

  .state('Master.clientesadicionar', {
    url: '/clientes/adicionar',
    tab : 'tab-clientes-adicionar',
    views: {
      'tab-clientes': {
        templateUrl: 'templates/clientes/form.html',
        controller: 'Master'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
