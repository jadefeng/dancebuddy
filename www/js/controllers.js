angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, $ionicModal, enhanceModal, Classrooms) {
  $scope.classrooms = Classrooms.all();
  $scope.ui = {};
  $ionicModal.fromTemplateUrl('templates/classroom-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Classroom', $scope.classrooms, { lessons: [] });
    $scope.modal = modal;
  });
})

.controller('ClassroomDetailCtrl', function($scope, $ionicModal, $stateParams, enhanceModal, Classrooms) {
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.ui = {};
  $ionicModal.fromTemplateUrl('templates/lesson-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Lesson', $scope.classroom.lessons, { entries: [] });
    $scope.modal = modal;
  });
})

.controller('LessonDetailCtrl', function($scope, $timeout, $ionicModal, $stateParams, enhanceModal, Classrooms, $cordovaCamera, $cordovaCapture){
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.ui = {};
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];

  $ionicModal.fromTemplateUrl('templates/entry-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {

    enhanceModal(modal, 'Video', $scope.lesson.entries);
    $scope.modal = modal;
    modal.captureVideo = function captureVideo(){
      $cordovaCapture.captureVideo().then(function(mediaFiles) {
        var path = mediaFiles[0].fullPath;
          modal.edit({path: path}); 
      });
    }
  });
})

.controller('EntryDetailCtrl', function($scope, $ionicModal, $stateParams, enhanceModal, Classrooms) {
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  function checkEntries(entry) {
    // $stateParams.lessonId is a string, not a num
    return entry.id == $stateParams.entryId;
  }  
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];
  $scope.entry = $scope.lesson.entries.filter(checkEntries)[0];
  $ionicModal.fromTemplateUrl('templates/entry-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Video', $scope.lesson.entries);
    $scope.modal = modal;
  });
})
