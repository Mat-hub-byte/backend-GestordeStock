const stock = require("./models/stock");

/**
 * Crea un nuevo registro de stock en la base de datos.
 * @param {Object} stockModel - El modelo de stock a crear.
 * @returns {Object} - El nuevo registro de stock creado.
 */
// crear
exports.create = async (stockModel) => {
  try {
    let newStock = await stock.persistence.create(stockModel);
    return newStock;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Obtiene todos los registros de stock de la base de datos.
 * @returns {Array} - Una lista de todos los registros de stock.
 */
// obtener
exports.GetAll = async () => {
  try {
    let stocks = await stock.persistence.find({});
    return stocks;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Elimina un registro de stock de la base de datos por su ID.
 * @param {string} id - El ID del registro de stock a eliminar.
 * @returns {Object} - El resultado de la operación de eliminación.
 */
// eliminar
exports.Delete = async (id) => {
  try {
    let idObject = stock.stringToObjectId(id);
    let StockDelete = await stock.persistence.deleteOne(idObject);
    return StockDelete;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Actualiza un registro de stock en la base de datos por su ID.
 * @param {string} id - El ID del registro de stock a actualizar.
 * @param {Object} stockUpdate - Los nuevos datos para actualizar el registro de stock.
 * @returns {Object} - El registro de stock actualizado.
 */
// put
exports.Update = async (id, stockUpdate) => {
  try {
    let idObject = stock.stringToObjectId(id);
    let updateStock = await stock.persistence.findOneAndUpdate(
      idObject,
      stockUpdate,
    );
    return updateStock;
  } catch (err) {
    console.log(err);
  }
};
