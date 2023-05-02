const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const ejs = require('ejs');

app.listen(port,()=> console.log('Abriendo el servidor en 2000 port'));  


const public = path.resolve(__dirname, './public');
        
app.use(express.static(path.join(__dirname, "js")))


app.use(express.static(public));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res) {
    res.render('home');
  });




