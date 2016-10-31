console.log('topic.js model is loading');
var mongoose = require('mongoose');
//build your schema and add it to the mongoose.models
var TopicSchema = new mongoose.Schema({
  name:         String,
  user_id:     {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  category:     String,
  title:        String,
  description:  String,
  posts:        Number
}, {timestamps: true});
mongoose.model('Topic', TopicSchema);
//****** still need to add a created at field ******
