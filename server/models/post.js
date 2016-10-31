console.log('post.js model is loading');
var mongoose = require('mongoose');
//build your schema and add it to the mongoose.models
var PostSchema = new mongoose.Schema({
  name:     String,
  user_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  topic_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'COmment'}],
  post:     String,
  like:     Number,
  dislike:  Number,

}, {timestamps: true});
mongoose.model('Post', PostSchema);
