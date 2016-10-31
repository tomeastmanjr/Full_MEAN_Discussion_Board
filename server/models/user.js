console.log('user.js model is loading')
var mongoose = require('mongoose');
//build your schema and add it to the mongoose.models
var UserSchema = new mongoose.Schema({
  userName: String,
  topics:   [{type: mongoose.Schema.Types.Mixed, ref: 'Topic'}],
  posts:    [{type: mongoose.Schema.Types.Mixed, ref: 'Post'}],
  comments: [{type: mongoose.Schema.Types.Mixed, ref: 'Comment'}]
}, {timestamps: true});
mongoose.model('User', UserSchema);
