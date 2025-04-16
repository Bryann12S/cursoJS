'use strict'    

var express = require('express');
var bodyParser = require('body-parser');


var app = express();

// cargar el archivo de rutas

var projectRoutes = require('./routes/project'); // Importamos las rutas de proyectos 


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas

app.use('/api', projectRoutes); // Usamos las rutas de proyectos con el prefijo /api


//exprtar 
module.exports = app; // Exportamos la variable app para poder usarla en otros archivos