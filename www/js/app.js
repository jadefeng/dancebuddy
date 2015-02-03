angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  // Removing the back description on the back button
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text(''); 
  
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://player.vimeo.com/**',
    'http://static.videogular.com/**',
  ]);

  $stateProvider

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
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
  .state('tab.entry-detail', {
    url: '/classroom-entry/:classroomId/:lessonId/:entryId',
    views: {
      'tab-classrooms': {
        templateUrl: 'templates/entry-detail.html',
        controller: 'EntryDetailCtrl'
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
