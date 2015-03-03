'use strict';

/**
 * @ngdoc overview
 * @name eLibraryApp
 * @description
 * # eLibraryApp
 *
 * Main module of the application.
 */
angular
  .module('eLibraryApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as ctrl'
      })
      .when('/user', {
        templateUrl: '../views/user.html',
        controller: 'UserCtrl as ctrl'
      })
      .when('/register', {
        templateUrl: '../views/register.html',
        controller: 'RegisterCtrl as ctrl'
      })
      .when('/admin', {
        templateUrl: '../views/admin.html',
        controller: 'AdminCtrl as ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
