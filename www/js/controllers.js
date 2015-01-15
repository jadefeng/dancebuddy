angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, $ionicModal, $ionicListDelegate, Classrooms) {
  $scope.classrooms = Classrooms.all();
  $ionicModal.fromTemplateUrl('templates/classroom-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Classroom', $scope.classrooms, $ionicListDelegate);
    $scope.modal = modal;
  });
})

.controller('ClassroomDetailCtrl', function($scope, $ionicModal, $ionicListDelegate, $stateParams, Classrooms) {
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $ionicModal.fromTemplateUrl('templates/lesson-new.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    enhanceModal(modal, 'Lesson', $scope.classroom.lessons, $ionicListDelegate);
    $scope.modal = modal;
  });
})

.controller('LessonDetailCtrl', function($scope, $ionicModal, $stateParams, $ionicListDelegate, Classrooms){
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
    enhanceModal(modal, 'Video', $scope.lesson.entries, $ionicListDelegate);
    $scope.modal = modal;
  });
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

function enhanceModal(modal, entityName, entities, $ionicListDelegate) {
  var nextId = entities.length;
  modal.close = function close() {
    modal.hide();
    delete modal.target;
    $ionicListDelegate.closeOptionButtons();
  };

  modal.edit = function edit(entity) {
    modal.target = angular.copy(entity);
    modal.original = entity; // need the original later.
    modal.show();
    modal.title = (entity.id ? 'Edit' : 'New') + ' ' + entityName;
  };

  modal.create = function create() {
    modal.edit({});
  };

  modal.submit = function submit() {
    if (modal.target.id) {
      for (key in modal.target) {
        modal.original[key] = modal.target[key];
      }
    } else {
      modal.target.id = nextId++;
      entities.unshift(modal.target);
    }
    modal.close();
  };

  modal.remove = function remove(entity) {
    var deleteIndex = entities.indexOf(entity);
    entities.splice(deleteIndex, 1);
    $ionicListDelegate.closeOptionButtons();
  };
}

