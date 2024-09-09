// Importa el módulo 'express' y crea un enrutador para definir rutas
const express = require('express');
const router = express.Router();

// Define una ruta GET para la página principal ('/')
// Cuando un usuario accede a '/', se enviará una respuesta con el mensaje '¡Hola, mundo!'
router.get('/', (req, res) => {
    res.send('¡Hola, desde routes.js!');
});

// Define una ruta GET para '/about'
// Cuando un usuario accede a '/about', se enviará una respuesta con el mensaje 'Acerca de nosotros'
router.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});

// Define una ruta GET para '/contact'
// Cuando un usuario accede a '/contact', se enviará una respuesta con el mensaje 'Contacto'
router.get('/contact', (req, res) => {
    res.send('Contacto');
});

// Exporta el enrutador para que pueda ser utilizado en otros archivos, como el archivo principal del servidor
module.exports = router;


/*
Sirve a app.js
*/