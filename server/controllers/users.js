console.log('users controller is loading')

var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.login = function(req, res){
    User.findOne({userName: req.body.userName}, function(err, user){
      if(!user){
        var user = new User(req.body);
        user.save(function(err, data){
          console.log('NEW USER FOR MODEL', user);
          if(err){
            console.log('ERROR SAVING', err);
            return res.json({status:false});
            // status is returned as false if could not save
          }else{
            req.session.user = user;
            // req.session.save();
            console.log('SESSION USER 1', req.session.user);
            return res.json({status: true, user:user});
            // status returned as true and new user saved
          };
        });
      }else if(err){
        console.log(err);
      }else{
        req.session.user = user;
        // req.session.save();
        console.log('USER EXISTING', user);
        return res.json({status:true, user:user});
        // status returned as true but user already existed
      };
    });
  };
  this.session = function(req, res){
    if(req.session.user){
      res.json({user:req.session.user});
    }else{
      res.json({user:null});
    };
  };
  this.logout = function(req, res){
    req.session.destroy();
    res.redirect('/');
  };
  this.index = function(req,res){
    User.find({}, function(err, results){
      res.json(results);
    });
  };
  this.create = function(req,res){
    User.create(req.body, function(err, result){
      if(err){
        console.log(err);
      }else{
        res.json(result);
      };
    });
  };
  this.update = function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log(err);
      }else{
        user.userName = req.body.userName;
        user.save(function(err, updatedUser){
          if(err){
            console.log(err)
          }else{
            res.json(updatedUser);
          };
        });
      };
    });
  };
  this.delete = function(req,res){
    User.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: 'User deleted!'});
      };
    });
  };
  this.show = function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log(err);
      }else{
        res.json(user);
      };
    });
  };
};
module.exports = new UsersController();
