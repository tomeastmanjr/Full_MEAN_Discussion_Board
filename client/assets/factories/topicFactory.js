console.log('topicFactory is loading');
app.factory('topicFactory', ['$http', function(http){
  //constructor for our factory
  var topics = [];
  var topic = {};
  function TopicFactory(){
    var _this = this;
    this.createTopic = function(newTopic, callback){
      console.log('this is the data from dashboard.html form to dashboardController.js to topicFactory', newTopic);
      $http.post('/topics', newTopic)
      .then(function(returned_data){
        console.log('this is returned_data.data from topicFactory.create', returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data.data);
        };
      });
    };
  };


  console.log('this is new TopicFactory()', new TopicFactory());
  return new TopicFactory();
}]);
