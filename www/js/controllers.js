
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ClassroomsCtrl', function($scope, Classrooms) {
  $scope.classrooms = Classrooms.all();
})

.controller('ClassroomDetailCtrl', function($scope, $stateParams, Classrooms) {
  $scope.classroom = Classrooms.get($stateParams.classroomId);
  $scope.askPassword = false; //true;
  $scope.submitCode = function(secret) {
    if (secret == $scope.classroom.secret) {
      $scope.askPassword = false;
      console.log('passed the code');
    }
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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
