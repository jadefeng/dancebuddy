// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from external domains
    'http://player.vimeo.com/**',
  ]);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // TODO - remove all the tabs so the bottom tabs may be removed from the app
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

 
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  // This is where the classes tabs comes in
    .state('tab.classroom-detail', {
      url: '/classroom/:classroomId',
      views: {
        'tab-classrooms': {
          templateUrl: 'templates/classroom-detail.html',
          controller: 'ClassroomDetailCtrl'
        }
      }
    })
    .state('tab.classrooms', {
      url: '/classrooms',
      views: {
        'tab-classrooms': {
          templateUrl: 'templates/tab-classrooms.html',
          controller: 'ClassroomsCtrl'
        }
      }
    })
    .state('tab.lesson-detail', {
      url: '/classroom-lesson/:classroomId/:lessonId',
      views: {
        'tab-classrooms': {
          templateUrl: 'templates/lesson-detail.html',
          controller: 'LessonDetailCtrl'
        }
      }
    })

    .state('tab.camera', {
      url: '/camera',
      views: {
        'tab-camera': {
          templateUrl: 'templates/camera.html',
          controller: 'CameraCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/classrooms');

});
