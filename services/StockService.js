// Importa el repositorio de Stock desde ../repository/Stockrepository
const Stockrepository = require("../repository/Stockrepository");

/**
 * Crea un nuevo stock en la base de datos.
 * @param {Object} stock - El objeto de stock a crear.
 * @returns {Object} - Un objeto con un mensaje y el ID del stock creado.
 */
exports.CreateStock = async (stock) => {
  try {
    // Llama al método de creación del repositorio y guarda el resultado
    let isCreate = await Stockrepository.create(stock);
    // Retorna un mensaje de éxito con el ID del stock creado
    return { msg: "Objeto creado", id: isCreate.id };
  } catch (err) {
    // En caso de error, imprime el error en la consola
    console.log(err);
  }
};


/**
 * Obtiene todos los stocks de la base de datos.
 * @returns {Array} - Lista de todos el stock.
 */
exports.GetAllStock = async () => {
  try {
    // Llama al método de obtener todos del repositorio y retorna el resultado
    return Stockrepository.GetAll();
  } catch (err) {
    // En caso de error, imprime el error en la consola
    console.log(err);
  }
};

/**
 * Elimina un stock de la base de datos por ID.
 * @param {string} id - El ID del stock a eliminar.
 * @returns {Object} - Un objeto con un mensaje y un valor indicando si la eliminación fue exitosa.
 */
exports.DeleteStock = async (id) => {
  try {
    // Verifica si el ID tiene una longitud de 24 caracteres (tamaño de un ObjectId en MongoDB)
    if (id.length == 24) {
      // Llama al método de eliminación de repository  y guarda el resultado
      let isDelete = await Stockrepository.Delete(id);

      //Verifica si la eliminación fue reconocida y retorna el mensaje correspondiente
      if (isDelete.acknowledged == true) {
        return { msg: "Registro eliminado exitosamente", value: true };
      } else {
        return { msg: "Error al eliminar un producto", value: false };
      }
    } else {
      // Si el ID no tiene la longitud de 24 caracteres, retorna un mensaje de ID inválido
      return { msg: "ID invalido", value: false };
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Actualiza un stock en la base de datos por ID.
 * @param {string} id - El ID del stock a actualizar.
 * @param {Object} stock - El objeto de stock con los datos actualizados.
 * @returns {Object} - Un objeto con un mensaje y el ID del stock actualizado.
 */
exports.UpdateStock = async (id, stock) => {
  try {
    if (id.length == 24) {
      // Llama al método de actualización del repositorio y guarda el resultado
      let isUpdate = await Stockrepository.Update(id, stock);
      // Retorna un mensaje de éxito con el ID del stock actualizado
      return { msg: "recurso actualizado con exito ", id: isUpdate.id };
    } else {
      return { msg: "id invalido", id: null };
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Obtiene un stock de la base de datos por ID.
 * @param {string} id - El ID del stock a buscar
 * @returns {Object} - El stock encontrado.
 */
exports.GetStockById = async (id) => {
  try {
    return Stockrepository.GetById(id);
  } catch (err) {
    console.log(err);
  }
};