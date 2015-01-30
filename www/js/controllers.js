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

.controller('LessonDetailCtrl', function($scope, $ionicModal, $stateParams, enhanceModal, Classrooms, $cordovaCamera, $cordovaCapture){
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.ui = {};
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
    // New function for create video
    modal.captureVideo = function captureVideo(){
      $cordovaCapture.captureVideo().then(function(mediaFiles) {
        // Success! Video data is here
        var path = mediaFiles[0].fullPath;
        modal.edit({path: path}); // Opening a new modal, passing in the saved path
      });
    }
  });
})

.controller('CameraCtrl', function($scope, $cordovaCamera, $cordovaCapture){
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

  ///////////////////////////
  // Using Cordova Media Capture 
  $scope.captureVideo = function() {
    var options = { 
      limit: 2,
      duration: 15, 
    };

    $cordovaCapture.captureVideo(options).then(function(mediaFiles) {
      // Success! Video data is here
      
        $scope.path = mediaFiles[0].fullPath;
        alert(angular.toJson(mediaFiles[0]));
        alert($scope.path);
      
    });
  }

 

})

// Settings controller 
.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    // enableFriends: true // Leave this empty until toggles to be set up later
  };
});
