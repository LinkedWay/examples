var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');

var app = express();

app.use(cookieParser());
app.use(session({secret: '1234567890QWERTY'}));

app.get('/awesome', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/awesome';
    res.write('Your Awesome.');

    res.cookie = cookie.parse('foo=bar; cat=meow; dog=ruff');

    res.end();
});

app.get('/radical', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/radical';
    res.write('What a radical visit!');
    res.end();
});

app.get('/tubular', function(req, res) {
    if(req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/tubular';
    res.write('Are you a surfer?');
    res.end();
});

app.listen(process.env.PORT || 8081);