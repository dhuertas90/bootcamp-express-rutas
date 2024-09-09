# Proyecto Básico con Express y Rutas

Este proyecto es una aplicación básica de Node.js utilizando el framework Express. La aplicación configura un servidor web simple que sirve archivos estáticos y utiliza un sistema modular de rutas para organizar las solicitudes.

## Requisitos
- Node.js v12 o superior
- Express

## Instalación
1. Clona el repositorio:

git clone https://github.com/usuario/proyecto-express.git

2. Navega al directorio del proyecto:

cd proyecto-express

3. Instala las dependencias:

npm install

## Uso
1. Ejecuta el servidor:

node app.js

2. Abre tu navegador y visita:

http://localhost:3000

## Estructura del Proyecto

```
.
├── app.js          # Archivo principal del servidor
├── routes.js       # Archivo que contiene las rutas
├── public/         # Archivos estáticos (HTML, CSS, JS)
└── package.json    # Dependencias y configuración del proyecto
```

(app.js)
Este archivo configura el servidor Express y lo organiza para utilizar las rutas definidas en un archivo externo (routes.js), manteniendo la lógica del servidor limpia y modularizada.
- Express: Se utiliza para crear el servidor y gestionar las rutas.
- Rutas: Las rutas están importadas desde un archivo externo para mejorar la estructura y legibilidad del código.
- Archivos estáticos: La carpeta public sirve como directorio para los archivos estáticos (HTML, CSS, JS).
- Puerto: El servidor escucha en el puerto 3000.

(routes.js)
Este archivo contiene la lógica de las rutas, separada de la configuración principal del servidor para mayor modularidad y organización. Aquí se definen los distintos endpoints que maneja la aplicación.

## Funcionalidades
- Servidor Express: Configuración de un servidor HTTP con Express.
- Rutas modulares: Las rutas están organizadas en un archivo separado para facilitar la escalabilidad del proyecto.
- Archivos estáticos: El servidor puede servir contenido estático desde la carpeta public.
Licencia

## Licencia
Bootcamp 2024