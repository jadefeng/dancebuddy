angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, $ionicModal, enhanceModal, Classrooms) {
  $scope.classrooms = Classrooms.all();
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
  $ionicModal.fromTemplateUrl('templates/lesson-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Lesson', $scope.classroom.lessons, { entries: [] });
    $scope.modal = modal;
  });
})

.controller('LessonDetailCtrl', function($scope, $ionicModal, $stateParams, enhanceModal, Classrooms){
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];

  // CRUD for Video entries
  $ionicModal.fromTemplateUrl('templates/entry-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Video', $scope.lesson.entries);
    $scope.modal = modal;
  });
})

.controller('CameraCtrl', function($scope, $cordovaCamera){
  $scope.takePicture = function() {
        var options = { 
            quality : 50, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
  }
  $scope.takeVideo = function() {
        var options = { 
            quality : 50, 
            destinationType : Camera.DestinationType.FILE_URI, 
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            mediaType: Camera.MediaType.VIDEO,
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = imageData; //"data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
  }  
})

// Settings controller 
.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    // enableFriends: true // Leave this empty until toggles to be set up later
  };
});
