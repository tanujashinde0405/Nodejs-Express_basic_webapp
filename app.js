var express = require('express'); //install
var bodyparser = require('body-parser'); //install
var path = require('path');
var expressValidator = require('express-validator'); //install

var app = express();

app.set('view engine', 'ejs'); //install ejs
app.set('views', path.join(__dirname, 'views')); //make a view folder

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); //make a public folder

var users = [
    {
        id: 1,
        name: 'Tanya',
        age: 20,
    },
    {
        id: 2,
        name: 'pranay',
        age: 18,
    },
    {
        id: 3,
        name: 'hrishi',
        age: 23,
    }
]

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.post('/adduser', function (req, res) {

    //req.checkBody('name', 'name is required').notEmpty();
    console.log("Form submitted")
    console.log(req.body.name);
    console.log(req.body.address);
    console.log(req.body.age);

    var new_user = {
        fname: req.body.name,
        add: req.body.address,
        agee: req.body.age
    }
    console.log(new_user)


});

app.listen(8080, function () {
    console.log("server started on 8080...");
})