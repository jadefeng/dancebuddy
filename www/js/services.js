angular.module('starter.services', [])

.factory('enhanceModal', function($ionicListDelegate) {
  return function enhanceModal(modal, entityName, entities, newEntity) {
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
      modal.title = ( angular.isDefined(entity.id) ? 'Edit' : 'New') + ' ' + entityName;
    };

    modal.create = function create() {
      modal.edit(angular.copy(newEntity || {}));
    };

    modal.submit = function submit() {
      if (modal.target.id != null) { // Allows for modal.target.id = 0
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
  };
})

// Test Data for classes
.factory('Classrooms', function($rootScope) {
  $rootScope.$watch('classrooms', function saveClassroomData(classrooms) {
    window.localStorage.classroomsJSON = angular.toJson(classrooms);
  }, true);

  var classroomsJSON = window.localStorage.classroomsJSON;

  var classrooms = $rootScope.classrooms = classroomsJSON ?
    JSON.parse(classroomsJSON) : [{
    id: 0,
    name: 'Ballet Class 1',
    secret: 'teapot',
    lessons: [ {
      id: 0, 
      name: 'Intro Lesson',
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
          videoId: '7981936', 
          note: 'Intro and Ranks'
        }, {
          id: 1,
          videoId: '58291553', 
          note: 'Corps de Ballet'
      }]
    }],
  }, {
    id: 1,
    name: 'Ballet Class 2',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson', entries: []},
               {id: 1, name: 'Second Lesson', entries: []}]
  }, {
    id: 2,
    name: 'Ballet Class 3',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson', entries: []},
               {id: 1, name: 'Second Lesson', entries: []}]
  }, {
    id: 3,
    name: 'Ballet Class 4',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson', entries: []},
               {id: 1, name: 'Second Lesson', entries: []}]
  }, {
    id: 4,
    name: 'Ballet Class 5',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson', entries: []},
               {id: 1, name: 'Second Lesson', entries: []}]
  }];
  
  return {
    all: function() {
      return classrooms;
    },
    get: function(classroomID) {
      function filterFn(classroom) {
        return classroom.id == classroomID;    
      }
      var result = classrooms.filter(filterFn);
      return result[0];
    }
  }
});
