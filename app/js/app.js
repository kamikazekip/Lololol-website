require('angular/angular');
require('angular-ui-router/build/angular-ui-router');
require('angular-youtube-embed/src/angular-youtube-embed')

// Create your app
var app = angular.module("Lololol", ['ui.router', 'youtube-embed']);

/* factories */
var lolololFactory = require("./factories/lololol");

app.factory("$lololol", lolololFactory);

/* Controllers */
var alternateHomeController = require("./controllers/AlternateHomeController")
var homeController      = require("./controllers/HomeController");
var tourController      = require("./controllers/TourController");

app.controller("HomeController", homeController);
app.controller("TourController", tourController);
app.controller("AlternateHomeController", alternateHomeController);

app.config(function( $sceDelegateProvider, $locationProvider, $stateProvider, $urlRouterProvider ) {

  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "./views/home.html",
      controller: "HomeController as c",
    })
    .state('alternateHome', {
      url: "/",
      templateUrl: "./views/alternatehome.html",
      controller: "AlternateHomeController as c"
    })
    .state('tour', {
      url: "/tour?video",
      templateUrl: "./views/tour.html",
      controller: "TourController as c",
      reloadOnSearch: false
    })
});

app.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout(function(){
            scope.$emit('onRepeatLast', element, attrs);
        }, 1);
    };
});