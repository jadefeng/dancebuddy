
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ClassesCtrl', function($scope, Classes) {
  $scope.classes = Classes.all();
})

.controller('ClassDetailCtrl', function($scope, $stateParams, Classes) {
  $scope.class = Classes.get($stateParams.classId);
  $scope.askPassword = true;
  $scope.submitCode = function(secret) {
    if (secret == $scope.class.secret) {
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
