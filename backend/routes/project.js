'use strict'

var express = require('express');
var ProjectController = require('../controllers/project'); // Importamos el controlador de proyectos


var router = express.Router(); // Creamos un enrutador de Express

var multipart = require('connect-multiparty'); // Importamos el middleware para manejar multipart/form-data
var multipartMiddleware = multipart({ uploadDir: './uploads' }); // Definimos la carpeta de subida de imágenes

router.get('/home', ProjectController.home); // Definimos la ruta para la home
router.post('/test', ProjectController.test); // Definimos la ruta para el test
router.post('/save-project', ProjectController.saveProject); // Definimos la ruta para guardar un proyecto
router.get('/project/:id', ProjectController.getProject); // Definimos la ruta para obtener
router.get('/projects', ProjectController.getProjects); // Definimos la ruta para obtener todos los proyectos
router.put('/project/:id', ProjectController.updateProject); // Definimos la ruta para actualizar un proyecto
router.delete('/project/:id', ProjectController.deleteProject); // Definimos la ruta para eliminar un proyecto
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage); // Definimos la ruta para subir una imagen
router.get('/get-image/:image', ProjectController.getImageFile); // Definimos la ruta para obtener una imagen


module.exports = router; // Exportamos el enrutador para usarlo en otros archivos   