angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, $ionicModal, $ionicListDelegate, Classrooms) {
  $scope.classrooms = Classrooms.all();
  $ionicModal.fromTemplateUrl('templates/classroom-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
    delete $scope.classroom;
    $ionicListDelegate.closeOptionButtons();
  };

  $scope.master = {};
  $scope.update = function(classroom) {
    $scope.master = angular.copy(classroom);
  };
  var nextIdCount = $scope.classrooms.length;

  $scope.editClassroom = function(classroom) {
    $scope.classroom = classroom;
    $scope.openModal(classroom);
  };

  $scope.submitClassroom = function(classroom) {
    var classrooms = $scope.classrooms;
    if (classroom.id != null) {
      // Editing a classroom
      debugger;
      classrooms.update = ({
        id: classroom.id, 
        name: classroom.name,
        secret: classroom.secret,
      });
    } else {
      debugger;
      // Creating a new classroom
      classrooms.unshift({
        id: nextIdCount, 
        name: classroom.name,
        secret: classroom.secret,
      }); 
      nextIdCount += 1;
    }
    $scope.closeModal();
  };

  // Delete a classroom
  $scope.removeClassroom = function(classroom) {
    console.log(classroom);
    console.log("going to delete", $scope.classrooms);
    var deleteIndex = $scope.classrooms.indexOf(classroom);
    $scope.classrooms.splice(deleteIndex, deleteIndex + 1);
    console.log("deleted", $scope.classrooms);
    // debugger;
    $scope.closeModal();
  };


})

.controller('ClassroomDetailCtrl', function($scope, $ionicModal, $stateParams, Classrooms) {
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.askPassword = false; //true;
  // Code to check for secret passkey
  $scope.submitCode = function(secret) {
    if (secret == $scope.classroom.secret) {
      $scope.askPassword = false;
      console.log('passed the code');
    }
  };
  $scope.editLesson = function(lesson) {
    // Code to edit the lesson 
  };
  $scope.deleteLesson = function(lesson) {
    // Remove the lesson from the page
  };

  // Create New Lesson
  $ionicModal.fromTemplateUrl('templates/lesson-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})

.controller('LessonDetailCtrl', function($scope, $ionicModal, $stateParams, Classrooms){
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];

  // Create New Entry
  $ionicModal.fromTemplateUrl('templates/entry-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.createNewClassroom = function(className, secretKey) {

  };

})

.controller('EntryDetailCtrl', function($scope, $stateParams, Classrooms) {
  console.log($stateParams);
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];
  function checkEntry(entry) { 
    return entry.id == $stateParams.entryId;
  }
  // debugger;
  $scope.entry = $scope.lesson.entries.filter(checkEntry)[0];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
