var express = require('express');
var app = express();


app.get('/howdy', function(req,res) {
    res.end('We made it here. Howdy!  Finally following along well!');
});

app.get('/cheer', function(req, res) {
    res.end('Having a great evening');
})

app.get('jeer', function(req, res) {
    res.end('Looks like somobodys got a case of the Mondays!');
})

app.get('/greeting/:name', function(req, res) {
    res.send("How are you " + req.params.name);
})

var server = app.listen(3000, function() {
    console.log('Doing the damn thang on PORT 3000');
})
