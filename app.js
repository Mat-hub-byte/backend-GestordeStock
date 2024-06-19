const express = require("express");
const { dbConection } = require("./db/mongoDB.js");
const stockRouter = require("./routers/stockRouter.js");
const cors = require("cors");
const app = express();


// Llama a la función para establecer la conexión con la base de datos
dbConection();

/**
 * Aplica el middleware `cors` para permitir el acceso a la API desde diferentes orígenes.
 */
app.use(cors());

/**
 * Configura el enrutador de la API.
 * Todas las rutas definidas en `stockRouter` estarán disponibles bajo el prefijo `/api/v1`.
 */
app.use("/api/v1", stockRouter);


/**
 * Inicia el servidor en el puerto especificado en las variables de entorno.
 * Una vez iniciado, imprime un mensaje en la consola indicando que el servidor está en funcionamiento.
 */
app.listen(process.env.PORT, () => {
  console.log( `servidor iniciado en: ${process.env.PORT}` );
});
