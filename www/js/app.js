// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var appContext=angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function( $scope) {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('login', {
      url : '/login',
      cache : false,
      templateUrl : 'template/login.html',
      controller : 'LoginController'
    })

    .state('appMenu', {
      url: "/menu",
      cache : false,
      abstract: true,
      templateUrl: "template/app-menu.html",
      controller : "AppMenuController"
    })

    .state('appMenu.home', {
      url: "/home",
      cache : false,
      views: {
        'menuContent': {
          templateUrl: "template/home.html",
          controller : 'HomeController'
        }
      }
    })

    .state('appMenu.patient', {
      url: "/patient",
      cache : false,
      views: {
        'menuContent': {
          templateUrl: "template/patient.html",
          controller : 'PatientController'
        }
      }
    })
   

    .state('appMenu.setting', {
      url: "/setting",
      cache : false,
      views: {
        'menuContent': {
          templateUrl: "template/setting.html",
          controller : 'SettingController'
        }
      }
    })
    
     .state('appMenu.tabs', {
      url: "/tab",
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: "template/tabs.html"
        }
      }
    })

     .state('appMenu.doctorLocator', {
      url: "/doctorLocator",
      cache : false,
      views: {
        'menuContent': {
          templateUrl: "template/doctorLocator.html",
          controller : 'DoctorLocatorController'
        }
      }
    })




  $urlRouterProvider.otherwise('/menu/home');
})
