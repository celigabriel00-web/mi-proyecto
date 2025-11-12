import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: { 
      title: "API REST - Proyecto streamingfilm",  // Corregido para que coincida con la convención
      version: "1.0.0", // Versión de la API
      description: "Documentación de API REST con Express, Prisma y Postman.", // Descripción de la API
      contact: {
        author: 'Oscar Celi',  // Cambié 'autor' a 'author' para ajustarse al estándar Swagger
        email: '1641296@senati.pe',
        telephone: '+51 970263300'
      }
    },
    servers: [{
      url: "http://localhost:3000", // URL del servidor de desarrollo
      description: "Servidor de desarrollo"
    }],
  },
  apis: ["./routes/*.js"],  // Ruta para buscar los archivos de las rutas
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
