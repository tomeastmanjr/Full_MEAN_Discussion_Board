console.log('dashboardController is loading');
app.controller('dashboardController', ['$scope', 'topicFactory', 'userFactory', '$location', '$cookies', function($scope, topicFactory, userFactory, $location, $cookies){
    $scope.newTopic = {};

    $scope.createTopic = function(newTopic, name){
      newTopic.name = name.name;
      newTopic.user_id = name._id;
      topicFactory.createTopic(newTopic, function(data, info){
        userFactory.updateUserTopics(data, name, function(info){});
        $scope.topics = data.data;
        $scope.newTopic = {};
      });
    };



    // This code is copied and pasted into every controller to make sure a user is logged in before being given access to that page
  userFactory.checkUserStatus(function(returnedData){
    $scope.currentUser = returnedData.user;
    if(!$scope.currentUser){
      $location.url('/')
    };
  });

}])
