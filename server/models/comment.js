console.log('comment.js model is loading');
var mongoose = require('mongoose');
//build your schema and add it to the mongoose.models
var CommentSchema = new mongoose.Schema({
  name:     String,
  user_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  topic_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
  post_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  comment:  String
}, {timestamps: true});
mongoose.model('Comment', CommentSchema);
