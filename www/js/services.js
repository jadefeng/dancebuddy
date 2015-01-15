angular.module('starter.services', [])


// Test Data for classes
.factory('Classrooms', function() {
  var classrooms = [{
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
    lessons: [ {id: 0, name: 'Intro Lesson'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 2,
    name: 'Ballet Class 3',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 3,
    name: 'Ballet Class 4',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson'}, {id: 1, name: 'Second Lesson'}],
  }, {
    id: 4,
    name: 'Ballet Class 5',
    secret: 'teapot',
    lessons: [ {id: 0, name: 'Intro Lesson'}, {id: 1, name: 'Second Lesson'}],
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
