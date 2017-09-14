const express = require('express');

const redirect = require('express-redirect');
const path = require('path');
const bodyParser = require('body-parser');

const { jsonResponse } = require('./utils'); //use the exported function

const app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser())
redirect(app);

var users = [
	{'id': 1, 'email' : 'me@gmail.com', 'pass' : '123456', 'money' : 50000, 'name' : 'Aren'},
	{'id': 2, 'email' : 'ako@gmail.com', 'pass' : '000000', 'money' : 8000, 'name' : 'Clarence'},
  {'id': 3, 'email' : 'io@gmail.com', 'pass' : '111111', 'money' : 240000, 'name' : 'Clang'},
	];

function myHTML(url) {
	return path.join(__dirname+'/views/'+url+'.html');
}

app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res, next){
		var cookie = req.cookies.logged;
		console.log(cookie);
		res.sendFile(myHTML('home'));
  		console.log('Home Page');
});

app.post('/login', function (req, res) {
  var user = req.body.email;
  var pass = req.body.password;
  console.log(`Username: ${user}, Password: ${pass}`);
  users.map(function(u){
  	for (var i=0; i<users.length; i++) {
  		if (users[i].email == user && users[i].pass == pass) {
  			'Login Success'
            res.cookie('logged',users[i].email);
            console.log('cookie has been created successfully');
            res.cookie('money',users[i].money);
            console.log('cookie has been created successfully');
            cookie = req.cookies.logged;
  			res.redirect('/myaccount');
  			break;
  		}
  	}
  });
});

app.post('/withdraw', function (req, res) {
  var amount = parseInt(req.body.amount);
  var cur_money = parseInt(req.cookies.money);
  var new_money = cur_money - amount;
  res.cookie('money',new_money);
  res.redirect('/myaccount');
});

app.post('/deposit', function (req, res) {
  var amount2 = parseInt(req.body.amount2);
  var cur_money = parseInt(req.cookies.money);
  var new_money = cur_money + amount2;
  res.cookie('money',new_money);
  res.redirect('/myaccount');
});

app.post('/logout', function (req, res) {
  res.clearCookie("money");
  res.clearCookie("logged");
  res.redirect('/');
});

app.get('/myaccount', function(req, res, next){
	cookie = req.cookies.logged;
	money = req.cookies.money;
	if (cookie === undefined) {
		console.log('Not logged in... Redirecting');
		res.redirect('/')
	}
	else {
		console.log('Money: ' + money);
		console.log('Logged in as'+cookie);
		res.sendFile(myHTML('myaccount'));
  		console.log('My Account Page');
	}
});

app.get('/aren.json', function(req, res, next){
   jsonResponse(res, { //JSON response
            owner: 'Aren Cariaga',
            date_completed: '04 Sept 2017',
      });
});

app.listen(80, function() {
  console.log('Listening on port 80!');
});
