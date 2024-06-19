const express = require("express");


const stockRouter = express.Router();
const validator = require("./middleware/validator");
const {
  Create,
  Update,
  Delete,
  GetAll,
  GetById
} = require("../controller/stockController.js");

// Middleware para parsear el cuerpo de las solicitudes como JSON
stockRouter.use(express.json());

/**
 * Ruta para crear un nuevo registro de stock.
 * Aplica el middleware `validator` para validar la solicitud antes de llamar a la función `Create`.
 */
stockRouter.post("/", validator, Create);

/**
 * Ruta para obtener todos los registros de stock.
 * Llama a la función `GetAll` para manejar la solicitud.
 */
stockRouter.get("/todos", GetAll);

/**
 * Ruta para eliminar un registro de stock por su ID.
 * Llama a la función `Delete` para manejar la solicitud.
 */
stockRouter.delete("/:id", Delete);

/**
 * Ruta para actualizar un registro de stock por su ID.
 * Aplica el middleware `validator` para validar la solicitud antes de llamar a la función `Update`.
 */
stockRouter.put("/:id", validator, Update);

/**
 * Ruta para obtener un registro de stock por su ID.
 * Llama a la función GetById para manejar la solicitud.
 */
stockRouter.get("/:id", GetById);

module.exports = stockRouter;
