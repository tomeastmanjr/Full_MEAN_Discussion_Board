console.log("userFactory is loading")
app.factory('userFactory', ['$http', function($http){
  // constructor for our factory
  var users = [];
  var user = {};
  function UserFactory(){
    var _this = this;
    this.create = function(newuser, callback){
      console.log("this is the data from new.html form to newController.js to userFactory.js", newuser);
      $http.post('/users', newuser)
      .then(function(returned_data){
        console.log('this is returned_data.data', returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data.data);
        };
      });
    };
    this.login = function(newUser, callback){
      console.log("this is newUser from userFactory", newUser);
      $http.post('/login', newUser)
      .then(function(returnedData){
        console.log("DATA IN FACTORY from userFactory.login", returnedData);
        callback(returnedData.data);
      });
    };
    this.checkUserStatus = function(callback){
      $http.get('/session')
      .then(function(returnedData){
        console.log("this is returnedData.data from userFactory.checkUserStatus", returnedData.data);
        callback(returnedData.data);
      });
    };
    this.update = function(user, callback){
      //code goes here
    };
    this.index = function(callback){
      //call this method if you want to update or set the users variable
      $http.get('/users')
      .then(function(returned_data){
        console.log('this is returned_data.data', returned_data.data);
        users = returned_data.data;
        callback(users);
      });
    };
    this.delete = function($index, callback){
      //code goes here
    };
    this.show = function(friendToShow, callback){
      //code goes here
    };
    this.getUsers = function(callback){
      callback(users);
    };
    this.getUser = function(callback){
      callback(user);
    };
    this.updateUserTopics = function(data, name, callback){
      var topics = [];
      angular.forEach(data, function(topic){

      })
    };
  };
  console.log('this is new UserFactory()', new UserFactory());
  return new UserFactory();
}]);
