console.log('routes is loading');
var path = require('path')
var users = require('../controllers/users.js');

module.exports = function(app){
  // app.get('/users', users.index);
  // app.get('/users/:id', users.show);
  // app.post('/users', users.create);

  // WRITE IT THIS WAY FIRST TO MAKE SURE DATA IS PASSING CORRECTLY - THEN CAN BE USERS.LOGIN INSTEAD OF THE WHOLE FUNCITON
  app.post('/login', function(req, res){
    users.login(req, res);
  });
  app.get('/session', users.session)
	app.get('/logout', users.logout)

  // app.put('users/:id', users.update);
  // app.delete('/users/:id', users.delete);
};
