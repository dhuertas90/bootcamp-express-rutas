// Importa el módulo 'express', que es un framework para crear aplicaciones web con Node.js
const express = require('express');

// Crea una instancia de una aplicación Express
const app = express();

// Define el puerto en el que se ejecutará el servidor
const port = 3000;

// Importa el archivo de rutas desde 'routes.js'
// Este archivo contiene las rutas que se usarán en la aplicación
const routes = require('./routes');

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Usa el middleware de rutas importado para manejar solicitudes a la raíz ('/')
// Esto significa que todas las rutas definidas en 'routes.js' se aplicarán a las solicitudes que lleguen a la raíz
app.use('/', routes);


// Inicia el servidor en el puerto especificado y muestra un mensaje en la consola
// indicando que el servidor está corriendo y en qué dirección se puede acceder
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/*
En particular, este app.js:
configura el servidor y usa un archivo de rutas 
externo (routes.js) para manejar las solicitudes. 
Esto permite mantener el código más organizado y modular, 
separando la lógica de las rutas del archivo principal 
del servidor.
*/


/*
En general, app.js se encarga (podría encargarse) de:

Configurar el servidor Express.
Cargar y configurar middleware.
Importar y usar rutas.
Conexión a Base de Datos
Configuración de Variables de Entorno.
Configurar manejo de errores.
Iniciar el servidor.


*/