'use strict'
var Project = require('../models/project'); // Importamos el modelo de proyectos
var fs = require('fs'); // Importamos el módulo fs para manejar archivos
var path = require('path'); // Importamos el módulo path para manejar rutas de archivos

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home de mi API REST'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo test de mi controlador de proyectos'
        });
    },
    // Guardar un proyecto
    saveProject: async function(req, res) {
        var project = new Project(); // Creamos una nueva instancia del modelo Project

        // Recogemos los parámetros de la petición
        var params = req.body; // Obtenemos los parámetros de la petición
        project.name = params.name; // Asignamos el nombre del proyecto
        project.description = params.description; // Asignamos la descripción del proyecto
        project.category = params.category; // Asignamos la categoría del proyecto
        project.year = params.year; // Asignamos el año del proyecto
        project.langs = params.langs; // Asignamos los lenguajes del proyecto
        project.image = null; // Asignamos la imagen del proyecto como null

        try {
            const projectStored = await project.save(); // Guardamos el proyecto en la base de datos
            return res.status(200).send({
                project: projectStored // Enviamos el proyecto guardado como respuesta
            });
        } catch (err) {
            return res.status(500).send({ message: 'Error al guardar el proyecto' }); // Si hay un error, enviamos un mensaje de error
        }
    },
    /*
    getProject: function(req, res) {
        var projectId = req.params.id; // Obtenemos el id del proyecto de la URL
        
        if (projectId==null) return res.status(400).send({ message: 'El ID del proyecto es requerido' }); // Si no hay id, enviamos un mensaje de error
        
        Project.findById(projectId, (err, project) => { // Buscamos el proyecto por su id
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' }); // Si hay un error, enviamos un mensaje de error
            if (!project) return res.status(404).send({ message: 'El proyecto no existe' }); // Si no se encuentra el proyecto, enviamos un mensaje de error
            return res.status(200).send({ 
                project 
            }); // Enviamos el proyecto encontrado como respuesta
        });
    }*/
    // Obtener un proyecto por su ID
    getProject: async function(req, res) {
        try {
            const projectId = req.params.id; // Obtenemos el id del proyecto de la URL
    
            if (!projectId) {
                return res.status(400).send({ message: 'El ID del proyecto es requerido' });
            }
    
            const project = await Project.findById(projectId); // Buscamos el proyecto por su id
    
            if (project==null) {
                return res.status(404).send({ message: 'El proyecto no existe' });
            }
    
            return res.status(200).send({ project });
    
        } catch (err) {
            return res.status(500).send({ message: 'Error al devolver los datos', error: err.message });
        }
    },
    // Obtener todos los proyectos
    getProjects: async function(req, res) {
        try {
            const projects = await Project.find({}).sort('-year'); // Buscamos todos los proyectos
            return res.status(200).send({ projects }); // Enviamos la lista de proyectos como respuesta
        } catch (err) {
            return res.status(500).send({ message: 'Error al devolver los datos', error: err.message }); // Si hay un error, enviamos un mensaje de error
        }
    },
    // Actualizar un proyecto
    updateProject: async function(req, res) {
        try {
            const projectId = req.params.id; // Obtenemos el id del proyecto de la URL
            const update = req.body; // Obtenemos los datos a actualizar
    
            if (!projectId) {
                return res.status(400).send({ message: 'El ID del proyecto es requerido' });
            }
    
            const projectUpdated = await Project.findByIdAndUpdate(projectId, update, { new: true }); // Actualizamos el proyecto
    
            if (!projectUpdated) {
                return res.status(404).send({ message: 'El proyecto no existe' });
            }
    
            return res.status(200).send({ project: projectUpdated });
    
        } catch (err) {
            return res.status(500).send({ message: 'Error al actualizar el proyecto', error: err.message });
        }
    },
    // Eliminar un proyecto
    deleteProject: async function(req, res) {
        try {
            const projectId = req.params.id; // Obtenemos el id del proyecto de la URL
    
            if (!projectId) {
                return res.status(400).send({ message: 'El ID del proyecto es requerido' });
            }
    
            const projectDeleted = await Project.findByIdAndDelete(projectId); // Eliminamos el proyecto
    
            if (!projectDeleted) {
                return res.status(404).send({ message: 'El proyecto no existe' });
            }
    
            return res.status(200).send({ project: projectDeleted });
    
        } catch (err) {
            return res.status(500).send({ message: 'Error al eliminar el proyecto', error: err.message });
        }
    },
    // Subir una imagen

    uploadImage: async function (req, res) {
        try {
            const projectId = req.params.id; // Obtenemos el id del proyecto de la URL

            if (!req.files || !req.files.image) {
                return res.status(400).send({ message: 'No se ha subido ninguna imagen' });
            }

            const filePath = req.files.image.path; // Obtenemos la ruta del archivo subido
            const fileName = path.basename(filePath); // Obtenemos el nombre del archivo
            const fileExt = path.extname(fileName).toLowerCase().substring(1); // Obtenemos la extensión del archivo

            // Validamos la extensión del archivo
            const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];
            if (!validExtensions.includes(fileExt)) {
                // Eliminamos el archivo si la extensión no es válida
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo:', err);
                    }
                    return res.status(400).send({ message: 'La extensión no es válida' });
                });
                return;
            }

            // Actualizamos el proyecto con la imagen
            const projectUpdated = await Project.findByIdAndUpdate(
                projectId,
                { image: fileName },
                { new: true }
            );

            if (!projectUpdated) {
                return res.status(404).send({ message: 'El proyecto no existe' });
            }

            return res.status(200).send({ project: projectUpdated });
        } catch (err) {
            return res.status(500).send({ message: 'Error al subir la imagen', error: err.message });
        }
    },

    // Devolver una imagen
    getImageFile: function(req, res) {
        var file = req.params.image; // Obtenemos el nombre de la imagen de los parámetros de la URL
        var path_file = './uploads/' + file; // Construimos la ruta del archivo

        fs.exists(path_file, function(exists) { // Verificamos si el archivo existe
            if (exists) {
                return res.sendFile(path.resolve(path_file)); // Si existe, lo enviamos
            }else{
                return res.status(200).send({ message: 'No existe la imagen' }); // Si no existe, enviamos un mensaje de error
            }
        });
    }

};

module.exports = controller; // Exportamos el controlador
