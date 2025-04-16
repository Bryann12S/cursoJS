'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Importamos el objeto Schema de Mongoose

var ProjectSchema = Schema({
    name: String,   
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String // Definimos el esquema del proyecto con sus propiedades
}); 


module.exports = mongoose.model('Project', ProjectSchema); // Exportamos el modelo de proyecto

