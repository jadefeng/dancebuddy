angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

// Test Data for classes
.factory('Classrooms', function() {
  var classrooms = [{
    id: 0,
    name: 'Ballet Class 1',
    secret: 'teapot',
    face: 'http://kaskcreativity.com/wordpress/wp-content/uploads/2013/11/shoedetail-01.png',
    lessons: [ {
      id: 0, 
      name: 'Intro Class',
      entries: [{
        id: 0,
        title: 'Intro and Ranks',
        videoId: '7981936', 
        note: 'About Intro and Ranks of ballet',
      }, {
        id: 1,
        title: 'Corps',
        videoId: '58291553', 
        note: 'About the Corps de Ballet',
      }],
    }, {
      id: 1, 
      name: 'First Lesson',
      entries: [{
          id: 0,
          videoId: 'https://vimeo.com/7981936', 
          note: 'Intro and Ranks'
        }, {
          id: 1,
          videoId: 'https://vimeo.com/58291553', 
          note: 'Corps'
      }]
    }],
  }, {
    id: 1,
    name: 'Ballet Class 2',
    secret: 'teapot',
    face: 'http://kaskcreativity.com/wordpress/wp-content/uploads/2013/11/shoedetail-01.png',
    lessons: [ {id: 0, name: 'Intro Class'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 2,
    name: 'Ballet Class 3',
    secret: 'teapot',
    face: 'http://kaskcreativity.com/wordpress/wp-content/uploads/2013/11/shoedetail-01.png'    ,
    lessons: [ {id: 0, name: 'Intro Class'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 3,
    name: 'Ballet Class 4',
    secret: 'teapot',
    face: 'http://kaskcreativity.com/wordpress/wp-content/uploads/2013/11/shoedetail-01.png',
    lessons: [ {id: 0, name: 'Intro Class'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 4,
    name: 'Ballet Class 5',
    secret: 'teapot',
    face: 'http://kaskcreativity.com/wordpress/wp-content/uploads/2013/11/shoedetail-01.png'    ,
    lessons: [ {id: 0, name: 'Intro Class'}, {id: 1, name: 'Second Lesson'}],
  }];

  return {
    all: function() {
      return classrooms;
    },
    get: function(classroomID) {
      return classrooms[classroomID];
    }
  }
});
