var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 2525;

var app = express();

var db = require("./models");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/burgers_controller.js')(app);



db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
