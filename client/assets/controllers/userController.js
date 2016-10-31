console.log('userController is loading')
app.controller('userController', ['$scope','userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies) {

    //login information
  $scope.login = function(){
    // store a user in session
    // create user
    console.log("this is $scope.userName from userController", $scope.userName);

    if(!$scope.userName || $scope.userName.length < 3){
      alert("Name must be at least 3 characters")
      // possibly turn this into a message????
    }else{
      // NEW USER HAS TO BE AN OBJECT!!!
      var newUser = {userName: $scope.userName};
      console.log("this is userName from userController", newUser);
      userFactory.login(newUser, function(returnedData){
        $scope.userName = returnedData.user.userName;
        console.log("this is $scope.userName from userController", $scope.userName);
        if(returnedData.status){
          // status is a special check for if a user is logged in
          console.log("this is $scope.userName22 from userController", $scope.userName);
          $location.url('/dashboard');
        }else{
          alert("Not successfully logged in");
          // possibly turn this into a message???
        };
      });
    };
  };
    // This code is copied and pasted into every controller to make sure a user is logged in before being given access to that page
  userFactory.checkUserStatus(function(returnedData){
    $scope.currentUser = returnedData.user;
    if(!$scope.currentUser){
      $location.url('/')
    };
  });


  $scope.create = function(user){
    console.log("creating", user);
    userFactory.create(user);
  };
}]);
