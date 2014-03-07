require('angular')
require('angular-route')

//require('se7en-bootstrap-3/build/stylesheets/bootstrap.min.css')




angular.module('app', [
  'ngRoute',
  require('./device-list').name,
  require('./device-control').name
])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .otherwise({
          redirectTo: '/devices'
        })
    }
  ])
