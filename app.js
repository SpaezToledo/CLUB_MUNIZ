const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.listen(port,()=> console.log('Abriendo el servidor en 2000 port'));  


const public = path.resolve(__dirname, './public');
        
app.use(express.static(path.join(__dirname, "js")))


app.use(express.static(public));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')))  







