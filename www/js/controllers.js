
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, Classrooms) {
  $scope.classrooms = Classrooms.all();
})

.controller('ClassroomDetailCtrl', function($scope, $stateParams, Classrooms) {
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
})

.controller('LessonDetailCtrl', function($scope, $stateParams, Classrooms){
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  function checkLesson(lesson) {
    // $stateParams.lessonId is a string, not a num
    return lesson.id == $stateParams.lessonId;
  }
  $scope.lesson = $scope.classroom.lessons.filter(checkLesson)[0];
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
    console.log(entry);
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
