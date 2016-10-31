//Standard server setup
var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    session  = require('express-session'),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

    app.set('trust proxy', 1)
    app.use(session({
    	secret: 'supersecret',
    	resave: false,
    	saveUninitialized:true,
    	cookie: {secure:false}
    }))

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
