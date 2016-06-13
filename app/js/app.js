require('angular/angular');
require('angular-ui-router/build/angular-ui-router');
require('angular-youtube-embed/src/angular-youtube-embed')

// Create your app
var app = angular.module("Lololol", ['ui.router', 'youtube-embed']);

/* factories */
var lolololFactory = require("./factories/lololol");

app.factory("$lololol", lolololFactory); 

/* Controllers */
var HomeController = require("./controllers/HomeController")
var tourController = require("./controllers/TourController");

app.controller("TourController", tourController);
app.controller("HomeController", HomeController); 
 
app.config(['$sceDelegateProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', function( $sceDelegateProvider, $locationProvider, $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "HomeController as c"
    })
    .state('tour', {
      url: "/tour?video",
      templateUrl: "./views/tour.html",
      controller: "TourController as c",
      reloadOnSearch: false
    })
}]);

app.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    // initialise google analytics
    $window.ga('create', 'UA-79217436-1', 'auto');

    // track pageview on state change
    $rootScope.$on('$stateChangeSuccess', function (event) {
      console.log($location.path());
        $window.ga('send', 'pageview', $location.url());
    });
}]);

app.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout(function(){
            scope.$emit('onRepeatLast', element, attrs);
        }, 1);
    };
});